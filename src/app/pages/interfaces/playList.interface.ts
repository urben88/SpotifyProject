// To parse this data:
//
//   import { Convert, PlayList } from "./file";
//
//   const playList = Convert.toPlayList(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface PlayList {
    collaborative: boolean;
    description:   string;
    external_urls: ExternalUrls;
    followers:     Followers;
    href:          string;
    id:            string;
    images:        Image[];
    name:          string;
    owner:         Owner;
    primary_color: null;
    public:        boolean;
    snapshot_id:   string;
    tracks:        Tracks;
    type:          string;
    uri:           string;
}

export interface ExternalUrls {
    spotify: string;
}

export interface Followers {
    href:  null;
    total: number;
}

export interface Image {
    height: number;
    url:    string;
    width:  number;
}

export interface Owner {
    display_name?: string;
    external_urls: ExternalUrls;
    href:          string;
    id:            string;
    type:          OwnerType;
    uri:           string;
    name?:         string;
}

export enum OwnerType {
    Artist = "artist",
    User = "user",
}

export interface Tracks {
    href:     string;
    items:    Item[];
    limit:    number;
    next:     string;
    offset:   number;
    previous: null;
    total:    number;
}

export interface Item {
    added_at:        Date;
    added_by:        Owner;
    is_local:        boolean;
    primary_color:   null;
    track:           Track;
    video_thumbnail: VideoThumbnail;
}

export interface Track {
    album:             Album;
    artists:           Owner[];
    available_markets: string[];
    disc_number:       number;
    duration_ms:       number;
    episode:           boolean;
    explicit:          boolean;
    external_ids:      ExternalIDS;
    external_urls:     ExternalUrls;
    href:              string;
    id:                string;
    is_local:          boolean;
    name:              string;
    popularity:        number;
    preview_url:       null | string;
    track:             boolean;
    track_number:      number;
    type:              TrackType;
    uri:               string;
}

export interface Album {
    album_type:             AlbumTypeEnum;
    artists:                Owner[];
    available_markets:      string[];
    external_urls:          ExternalUrls;
    href:                   string;
    id:                     string;
    images:                 Image[];
    name:                   string;
    release_date:           Date;
    release_date_precision: ReleaseDatePrecision;
    total_tracks:           number;
    type:                   AlbumTypeEnum;
    uri:                    string;
}

export enum AlbumTypeEnum {
    Album = "album",
    Compilation = "compilation",
    Single = "single",
}

export enum ReleaseDatePrecision {
    Day = "day",
}

export interface ExternalIDS {
    isrc: string;
}

export enum TrackType {
    Track = "track",
}

export interface VideoThumbnail {
    url: null;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toPlayList(json: string): PlayList {
        return cast(JSON.parse(json), r("PlayList"));
    }

    public static playListToJson(value: PlayList): string {
        return JSON.stringify(uncast(value, r("PlayList")), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any = ''): never {
    if (key) {
        throw Error(`Invalid value for key "${key}". Expected type ${JSON.stringify(typ)} but got ${JSON.stringify(val)}`);
    }
    throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`, );
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases, val);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue("array", val);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue("Date", val);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue("object", val);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, prop.key);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val);
    }
    if (typ === false) return invalidValue(typ, val);
    while (typeof typ === "object" && typ.ref !== undefined) {
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "PlayList": o([
        { json: "collaborative", js: "collaborative", typ: true },
        { json: "description", js: "description", typ: "" },
        { json: "external_urls", js: "external_urls", typ: r("ExternalUrls") },
        { json: "followers", js: "followers", typ: r("Followers") },
        { json: "href", js: "href", typ: "" },
        { json: "id", js: "id", typ: "" },
        { json: "images", js: "images", typ: a(r("Image")) },
        { json: "name", js: "name", typ: "" },
        { json: "owner", js: "owner", typ: r("Owner") },
        { json: "primary_color", js: "primary_color", typ: null },
        { json: "public", js: "public", typ: true },
        { json: "snapshot_id", js: "snapshot_id", typ: "" },
        { json: "tracks", js: "tracks", typ: r("Tracks") },
        { json: "type", js: "type", typ: "" },
        { json: "uri", js: "uri", typ: "" },
    ], false),
    "ExternalUrls": o([
        { json: "spotify", js: "spotify", typ: "" },
    ], false),
    "Followers": o([
        { json: "href", js: "href", typ: null },
        { json: "total", js: "total", typ: 0 },
    ], false),
    "Image": o([
        { json: "height", js: "height", typ: 0 },
        { json: "url", js: "url", typ: "" },
        { json: "width", js: "width", typ: 0 },
    ], false),
    "Owner": o([
        { json: "display_name", js: "display_name", typ: u(undefined, "") },
        { json: "external_urls", js: "external_urls", typ: r("ExternalUrls") },
        { json: "href", js: "href", typ: "" },
        { json: "id", js: "id", typ: "" },
        { json: "type", js: "type", typ: r("OwnerType") },
        { json: "uri", js: "uri", typ: "" },
        { json: "name", js: "name", typ: u(undefined, "") },
    ], false),
    "Tracks": o([
        { json: "href", js: "href", typ: "" },
        { json: "items", js: "items", typ: a(r("Item")) },
        { json: "limit", js: "limit", typ: 0 },
        { json: "next", js: "next", typ: "" },
        { json: "offset", js: "offset", typ: 0 },
        { json: "previous", js: "previous", typ: null },
        { json: "total", js: "total", typ: 0 },
    ], false),
    "Item": o([
        { json: "added_at", js: "added_at", typ: Date },
        { json: "added_by", js: "added_by", typ: r("Owner") },
        { json: "is_local", js: "is_local", typ: true },
        { json: "primary_color", js: "primary_color", typ: null },
        { json: "track", js: "track", typ: r("Track") },
        { json: "video_thumbnail", js: "video_thumbnail", typ: r("VideoThumbnail") },
    ], false),
    "Track": o([
        { json: "album", js: "album", typ: r("Album") },
        { json: "artists", js: "artists", typ: a(r("Owner")) },
        { json: "available_markets", js: "available_markets", typ: a("") },
        { json: "disc_number", js: "disc_number", typ: 0 },
        { json: "duration_ms", js: "duration_ms", typ: 0 },
        { json: "episode", js: "episode", typ: true },
        { json: "explicit", js: "explicit", typ: true },
        { json: "external_ids", js: "external_ids", typ: r("ExternalIDS") },
        { json: "external_urls", js: "external_urls", typ: r("ExternalUrls") },
        { json: "href", js: "href", typ: "" },
        { json: "id", js: "id", typ: "" },
        { json: "is_local", js: "is_local", typ: true },
        { json: "name", js: "name", typ: "" },
        { json: "popularity", js: "popularity", typ: 0 },
        { json: "preview_url", js: "preview_url", typ: u(null, "") },
        { json: "track", js: "track", typ: true },
        { json: "track_number", js: "track_number", typ: 0 },
        { json: "type", js: "type", typ: r("TrackType") },
        { json: "uri", js: "uri", typ: "" },
    ], false),
    "Album": o([
        { json: "album_type", js: "album_type", typ: r("AlbumTypeEnum") },
        { json: "artists", js: "artists", typ: a(r("Owner")) },
        { json: "available_markets", js: "available_markets", typ: a("") },
        { json: "external_urls", js: "external_urls", typ: r("ExternalUrls") },
        { json: "href", js: "href", typ: "" },
        { json: "id", js: "id", typ: "" },
        { json: "images", js: "images", typ: a(r("Image")) },
        { json: "name", js: "name", typ: "" },
        { json: "release_date", js: "release_date", typ: Date },
        { json: "release_date_precision", js: "release_date_precision", typ: r("ReleaseDatePrecision") },
        { json: "total_tracks", js: "total_tracks", typ: 0 },
        { json: "type", js: "type", typ: r("AlbumTypeEnum") },
        { json: "uri", js: "uri", typ: "" },
    ], false),
    "ExternalIDS": o([
        { json: "isrc", js: "isrc", typ: "" },
    ], false),
    "VideoThumbnail": o([
        { json: "url", js: "url", typ: null },
    ], false),
    "OwnerType": [
        "artist",
        "user",
    ],
    "AlbumTypeEnum": [
        "album",
        "compilation",
        "single",
    ],
    "ReleaseDatePrecision": [
        "day",
    ],
    "TrackType": [
        "track",
    ],
};
