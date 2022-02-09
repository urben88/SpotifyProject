// To parse this data:
//
//   import { Convert, TopTracksArtist } from "./file";
//
//   const topTracksArtist = Convert.toTopTracksArtist(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface TopTracksArtist {
    tracks: Track[];
}

export interface Track {
    album:             TrackAlbum;
    artists:           TrackArtist[];
    available_markets: Href[];
    disc_number:       number;
    duration_ms:       number;
    explicit:          boolean;
    external_ids:      ExternalIDS;
    external_urls:     TrackExternalUrls;
    href:              Href;
    id:                Href;
    is_playable:       boolean;
    linked_from:       TrackLinkedFrom;
    restrictions:      Restrictions;
    name:              Href;
    popularity:        number;
    preview_url:       Href;
    track_number:      number;
    type:              Href;
    uri:               Href;
    is_local:          boolean;
}

export interface TrackAlbum {
    album_type:             string;
    total_tracks:           number;
    available_markets:      AvailableMarket[];
    external_urls:          TrackExternalUrls;
    href:                   Href;
    id:                     string;
    images:                 Image[];
    name:                   Href;
    release_date:           string;
    release_date_precision: string;
    restrictions:           Restrictions;
    type:                   string;
    uri:                    string;
    album_group:            string;
    artists:                PurpleArtist[];
}

export interface PurpleArtist {
    external_urls: TrackExternalUrls;
    href:          Href;
    id:            Href;
    name:          Href;
    type:          string;
    uri:           Href;
}

export interface TrackExternalUrls {
    spotify: Href;
}

export enum Href {
    Market = "market",
    String = "string",
}

export enum AvailableMarket {
    Br = "BR",
    CA = "CA",
    It = "IT",
}

export interface Image {
    url:    string;
    height: number;
    width:  number;
}

export interface Restrictions {
    reason: Href;
}

export interface TrackArtist {
    external_urls: TrackExternalUrls;
    followers:     Followers;
    genres:        Genre[];
    href:          Href;
    id:            Href;
    images:        Image[];
    name:          Href;
    popularity:    number;
    type:          string;
    uri:           Href;
}

export interface Followers {
    href:  Href;
    total: number;
}

export enum Genre {
    Grunge = "Grunge",
    ProgRock = "Prog rock",
}

export interface ExternalIDS {
    isrc: Href;
    ean:  Href;
    upc:  Href;
}

export interface TrackLinkedFrom {
    album:             TrackAlbum;
    artists:           TrackArtist[];
    available_markets: Href[];
    disc_number:       number;
    duration_ms:       number;
    explicit:          boolean;
    external_ids:      ExternalIDS;
    external_urls:     TrackExternalUrls;
    href:              Href;
    id:                Href;
    is_playable:       boolean;
    linked_from:       PurpleLinkedFrom;
    restrictions:      Restrictions;
    name:              Href;
    popularity:        number;
    preview_url:       Href;
    track_number:      number;
    type:              Href;
    uri:               Href;
    is_local:          boolean;
}

export interface PurpleLinkedFrom {
    album:             TrackAlbum;
    artists:           TrackArtist[];
    available_markets: Href[];
    disc_number:       number;
    duration_ms:       number;
    explicit:          boolean;
    external_ids:      ExternalIDS;
    external_urls:     TrackExternalUrls;
    href:              Href;
    id:                Href;
    is_playable:       boolean;
    linked_from:       FluffyLinkedFrom;
    restrictions:      Restrictions;
    name:              Href;
    popularity:        number;
    preview_url:       Href;
    track_number:      number;
    type:              Href;
    uri:               Href;
    is_local:          boolean;
}

export interface FluffyLinkedFrom {
    album:             TrackAlbum;
    artists:           TrackArtist[];
    available_markets: Href[];
    disc_number:       number;
    duration_ms:       number;
    explicit:          boolean;
    external_ids:      ExternalIDS;
    external_urls:     TrackExternalUrls;
    href:              Href;
    id:                Href;
    is_playable:       boolean;
    linked_from:       TentacledLinkedFrom;
    restrictions:      Restrictions;
    name:              Href;
    popularity:        number;
    preview_url:       Href;
    track_number:      number;
    type:              Href;
    uri:               Href;
    is_local:          boolean;
}

export interface TentacledLinkedFrom {
    album:             TrackAlbum;
    artists:           TrackArtist[];
    available_markets: Href[];
    disc_number:       number;
    duration_ms:       number;
    explicit:          boolean;
    external_ids:      ExternalIDS;
    external_urls:     TrackExternalUrls;
    href:              Href;
    id:                Href;
    is_playable:       boolean;
    linked_from:       StickyLinkedFrom;
    restrictions:      Restrictions;
    name:              Href;
    popularity:        number;
    preview_url:       Href;
    track_number:      number;
    type:              Href;
    uri:               Href;
    is_local:          boolean;
}

export interface StickyLinkedFrom {
    album:             TrackAlbum;
    artists:           TrackArtist[];
    available_markets: Href[];
    disc_number:       number;
    duration_ms:       number;
    explicit:          boolean;
    external_ids:      ExternalIDS;
    external_urls:     TrackExternalUrls;
    href:              Href;
    id:                Href;
    is_playable:       boolean;
    linked_from:       IndigoLinkedFrom;
    restrictions:      Restrictions;
    name:              Href;
    popularity:        number;
    preview_url:       Href;
    track_number:      number;
    type:              Href;
    uri:               Href;
    is_local:          boolean;
}

export interface IndigoLinkedFrom {
    album:             TrackAlbum;
    artists:           TrackArtist[];
    available_markets: Href[];
    disc_number:       number;
    duration_ms:       number;
    explicit:          boolean;
    external_ids:      ExternalIDS;
    external_urls:     TrackExternalUrls;
    href:              Href;
    id:                Href;
    is_playable:       boolean;
    linked_from:       IndecentLinkedFrom;
    restrictions:      Restrictions;
    name:              Href;
    popularity:        number;
    preview_url:       Href;
    track_number:      number;
    type:              Href;
    uri:               Href;
    is_local:          boolean;
}

export interface IndecentLinkedFrom {
    album:             TrackAlbum;
    artists:           TrackArtist[];
    available_markets: Href[];
    disc_number:       number;
    duration_ms:       number;
    explicit:          boolean;
    external_ids:      ExternalIDS;
    external_urls:     TrackExternalUrls;
    href:              Href;
    id:                Href;
    is_playable:       boolean;
    linked_from:       HilariousLinkedFrom;
    restrictions:      Restrictions;
    name:              Href;
    popularity:        number;
    preview_url:       Href;
    track_number:      number;
    type:              Href;
    uri:               Href;
    is_local:          boolean;
}

export interface HilariousLinkedFrom {
    album:             PurpleAlbum;
    artists:           TentacledArtist[];
    available_markets: Href[];
    disc_number:       number;
    duration_ms:       number;
    explicit:          boolean;
    external_ids:      ExternalIDS;
    external_urls:     TrackExternalUrls;
    href:              Href;
    id:                Href;
    is_playable:       boolean;
    linked_from:       AmbitiousLinkedFrom;
    restrictions:      Restrictions;
    name:              Href;
    popularity:        number;
    preview_url:       Href;
    track_number:      number;
    type:              Href;
    uri:               Href;
    is_local:          boolean;
}

export interface PurpleAlbum {
    album_type:             string;
    total_tracks:           number;
    available_markets:      AvailableMarket[];
    external_urls:          TrackExternalUrls;
    href:                   Href;
    id:                     string;
    images:                 Image[];
    name:                   Href;
    release_date:           string;
    release_date_precision: string;
    restrictions:           Restrictions;
    type:                   string;
    uri:                    string;
    album_group:            string;
    artists:                FluffyArtist[];
}

export interface FluffyArtist {
    external_urls: ExternalUrlsElement;
    href:          Href;
    id:            Href;
    name:          Href;
    type:          string;
    uri:           Href;
}

export interface ExternalUrlsElement {
}

export interface TentacledArtist {
    external_urls: TrackExternalUrls;
    followers:     Followers;
    genres:        Genre[];
    href:          Href;
    id:            Href;
    images:        ExternalUrlsElement[];
    name:          Href;
    popularity:    number;
    type:          string;
    uri:           Href;
}

export interface AmbitiousLinkedFrom {
    album:             FluffyAlbum;
    artists:           StickyArtist[];
    available_markets: Href[];
    disc_number:       number;
    duration_ms:       number;
    explicit:          boolean;
    external_ids:      ExternalIDS;
    external_urls:     TrackExternalUrls;
    href:              Href;
    id:                Href;
    is_playable:       boolean;
    linked_from:       CunningLinkedFrom;
    restrictions:      Restrictions;
    name:              Href;
    popularity:        number;
    preview_url:       Href;
    track_number:      number;
    type:              Href;
    uri:               Href;
    is_local:          boolean;
}

export interface FluffyAlbum {
    album_type:             string;
    total_tracks:           number;
    available_markets:      AvailableMarket[];
    external_urls:          TrackExternalUrls;
    href:                   Href;
    id:                     string;
    images:                 ExternalUrlsElement[];
    name:                   Href;
    release_date:           string;
    release_date_precision: string;
    restrictions:           Restrictions;
    type:                   string;
    uri:                    string;
    album_group:            string;
    artists:                ExternalUrlsElement[];
}

export interface StickyArtist {
    external_urls: ExternalUrlsElement;
    followers:     ExternalUrlsElement;
    genres:        Genre[];
    href:          Href;
    id:            Href;
    images:        ExternalUrlsElement[];
    name:          Href;
    popularity:    number;
    type:          string;
    uri:           Href;
}

export interface CunningLinkedFrom {
    album:             TentacledAlbum;
    artists:           IndigoArtist[];
    available_markets: Href[];
    disc_number:       number;
    duration_ms:       number;
    explicit:          boolean;
    external_ids:      ExternalIDS;
    external_urls:     TrackExternalUrls;
    href:              Href;
    id:                Href;
    is_playable:       boolean;
    linked_from:       MagentaLinkedFrom;
    restrictions:      Restrictions;
    name:              Href;
    popularity:        number;
    preview_url:       Href;
    track_number:      number;
    type:              Href;
    uri:               Href;
    is_local:          boolean;
}

export interface TentacledAlbum {
    album_type:             string;
    total_tracks:           number;
    available_markets:      AvailableMarket[];
    external_urls:          ExternalUrlsElement;
    href:                   Href;
    id:                     string;
    images:                 ExternalUrlsElement[];
    name:                   Href;
    release_date:           string;
    release_date_precision: string;
    restrictions:           ExternalUrlsElement;
    type:                   string;
    uri:                    string;
    album_group:            string;
    artists:                ExternalUrlsElement[];
}

export interface IndigoArtist {
    genres: any[];
    images: any[];
}

export interface MagentaLinkedFrom {
    album:             StickyAlbum;
    artists:           ExternalUrlsElement[];
    available_markets: null[];
    disc_number:       number;
    duration_ms:       number;
    explicit:          boolean;
    external_ids:      ExternalUrlsElement;
    external_urls:     ExternalUrlsElement;
    href:              Href;
    id:                Href;
    is_playable:       boolean;
    linked_from:       FriskyLinkedFrom;
    restrictions:      ExternalUrlsElement;
    name:              Href;
    popularity:        number;
    preview_url:       Href;
    track_number:      number;
    type:              Href;
    uri:               Href;
    is_local:          boolean;
}

export interface StickyAlbum {
    available_markets: any[];
    images:            any[];
    artists:           any[];
}

export interface FriskyLinkedFrom {
    artists:           any[];
    available_markets: any[];
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toTopTracksArtist(json: string): TopTracksArtist {
        return cast(JSON.parse(json), r("TopTracksArtist"));
    }

    public static topTracksArtistToJson(value: TopTracksArtist): string {
        return JSON.stringify(uncast(value, r("TopTracksArtist")), null, 2);
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
    "TopTracksArtist": o([
        { json: "tracks", js: "tracks", typ: a(r("Track")) },
    ], false),
    "Track": o([
        { json: "album", js: "album", typ: r("TrackAlbum") },
        { json: "artists", js: "artists", typ: a(r("TrackArtist")) },
        { json: "available_markets", js: "available_markets", typ: a(r("Href")) },
        { json: "disc_number", js: "disc_number", typ: 0 },
        { json: "duration_ms", js: "duration_ms", typ: 0 },
        { json: "explicit", js: "explicit", typ: true },
        { json: "external_ids", js: "external_ids", typ: r("ExternalIDS") },
        { json: "external_urls", js: "external_urls", typ: r("TrackExternalUrls") },
        { json: "href", js: "href", typ: r("Href") },
        { json: "id", js: "id", typ: r("Href") },
        { json: "is_playable", js: "is_playable", typ: true },
        { json: "linked_from", js: "linked_from", typ: r("TrackLinkedFrom") },
        { json: "restrictions", js: "restrictions", typ: r("Restrictions") },
        { json: "name", js: "name", typ: r("Href") },
        { json: "popularity", js: "popularity", typ: 0 },
        { json: "preview_url", js: "preview_url", typ: r("Href") },
        { json: "track_number", js: "track_number", typ: 0 },
        { json: "type", js: "type", typ: r("Href") },
        { json: "uri", js: "uri", typ: r("Href") },
        { json: "is_local", js: "is_local", typ: true },
    ], false),
    "TrackAlbum": o([
        { json: "album_type", js: "album_type", typ: "" },
        { json: "total_tracks", js: "total_tracks", typ: 0 },
        { json: "available_markets", js: "available_markets", typ: a(r("AvailableMarket")) },
        { json: "external_urls", js: "external_urls", typ: r("TrackExternalUrls") },
        { json: "href", js: "href", typ: r("Href") },
        { json: "id", js: "id", typ: "" },
        { json: "images", js: "images", typ: a(r("Image")) },
        { json: "name", js: "name", typ: r("Href") },
        { json: "release_date", js: "release_date", typ: "" },
        { json: "release_date_precision", js: "release_date_precision", typ: "" },
        { json: "restrictions", js: "restrictions", typ: r("Restrictions") },
        { json: "type", js: "type", typ: "" },
        { json: "uri", js: "uri", typ: "" },
        { json: "album_group", js: "album_group", typ: "" },
        { json: "artists", js: "artists", typ: a(r("PurpleArtist")) },
    ], false),
    "PurpleArtist": o([
        { json: "external_urls", js: "external_urls", typ: r("TrackExternalUrls") },
        { json: "href", js: "href", typ: r("Href") },
        { json: "id", js: "id", typ: r("Href") },
        { json: "name", js: "name", typ: r("Href") },
        { json: "type", js: "type", typ: "" },
        { json: "uri", js: "uri", typ: r("Href") },
    ], false),
    "TrackExternalUrls": o([
        { json: "spotify", js: "spotify", typ: r("Href") },
    ], false),
    "Image": o([
        { json: "url", js: "url", typ: "" },
        { json: "height", js: "height", typ: 0 },
        { json: "width", js: "width", typ: 0 },
    ], false),
    "Restrictions": o([
        { json: "reason", js: "reason", typ: r("Href") },
    ], false),
    "TrackArtist": o([
        { json: "external_urls", js: "external_urls", typ: r("TrackExternalUrls") },
        { json: "followers", js: "followers", typ: r("Followers") },
        { json: "genres", js: "genres", typ: a(r("Genre")) },
        { json: "href", js: "href", typ: r("Href") },
        { json: "id", js: "id", typ: r("Href") },
        { json: "images", js: "images", typ: a(r("Image")) },
        { json: "name", js: "name", typ: r("Href") },
        { json: "popularity", js: "popularity", typ: 0 },
        { json: "type", js: "type", typ: "" },
        { json: "uri", js: "uri", typ: r("Href") },
    ], false),
    "Followers": o([
        { json: "href", js: "href", typ: r("Href") },
        { json: "total", js: "total", typ: 0 },
    ], false),
    "ExternalIDS": o([
        { json: "isrc", js: "isrc", typ: r("Href") },
        { json: "ean", js: "ean", typ: r("Href") },
        { json: "upc", js: "upc", typ: r("Href") },
    ], false),
    "TrackLinkedFrom": o([
        { json: "album", js: "album", typ: r("TrackAlbum") },
        { json: "artists", js: "artists", typ: a(r("TrackArtist")) },
        { json: "available_markets", js: "available_markets", typ: a(r("Href")) },
        { json: "disc_number", js: "disc_number", typ: 0 },
        { json: "duration_ms", js: "duration_ms", typ: 0 },
        { json: "explicit", js: "explicit", typ: true },
        { json: "external_ids", js: "external_ids", typ: r("ExternalIDS") },
        { json: "external_urls", js: "external_urls", typ: r("TrackExternalUrls") },
        { json: "href", js: "href", typ: r("Href") },
        { json: "id", js: "id", typ: r("Href") },
        { json: "is_playable", js: "is_playable", typ: true },
        { json: "linked_from", js: "linked_from", typ: r("PurpleLinkedFrom") },
        { json: "restrictions", js: "restrictions", typ: r("Restrictions") },
        { json: "name", js: "name", typ: r("Href") },
        { json: "popularity", js: "popularity", typ: 0 },
        { json: "preview_url", js: "preview_url", typ: r("Href") },
        { json: "track_number", js: "track_number", typ: 0 },
        { json: "type", js: "type", typ: r("Href") },
        { json: "uri", js: "uri", typ: r("Href") },
        { json: "is_local", js: "is_local", typ: true },
    ], false),
    "PurpleLinkedFrom": o([
        { json: "album", js: "album", typ: r("TrackAlbum") },
        { json: "artists", js: "artists", typ: a(r("TrackArtist")) },
        { json: "available_markets", js: "available_markets", typ: a(r("Href")) },
        { json: "disc_number", js: "disc_number", typ: 0 },
        { json: "duration_ms", js: "duration_ms", typ: 0 },
        { json: "explicit", js: "explicit", typ: true },
        { json: "external_ids", js: "external_ids", typ: r("ExternalIDS") },
        { json: "external_urls", js: "external_urls", typ: r("TrackExternalUrls") },
        { json: "href", js: "href", typ: r("Href") },
        { json: "id", js: "id", typ: r("Href") },
        { json: "is_playable", js: "is_playable", typ: true },
        { json: "linked_from", js: "linked_from", typ: r("FluffyLinkedFrom") },
        { json: "restrictions", js: "restrictions", typ: r("Restrictions") },
        { json: "name", js: "name", typ: r("Href") },
        { json: "popularity", js: "popularity", typ: 0 },
        { json: "preview_url", js: "preview_url", typ: r("Href") },
        { json: "track_number", js: "track_number", typ: 0 },
        { json: "type", js: "type", typ: r("Href") },
        { json: "uri", js: "uri", typ: r("Href") },
        { json: "is_local", js: "is_local", typ: true },
    ], false),
    "FluffyLinkedFrom": o([
        { json: "album", js: "album", typ: r("TrackAlbum") },
        { json: "artists", js: "artists", typ: a(r("TrackArtist")) },
        { json: "available_markets", js: "available_markets", typ: a(r("Href")) },
        { json: "disc_number", js: "disc_number", typ: 0 },
        { json: "duration_ms", js: "duration_ms", typ: 0 },
        { json: "explicit", js: "explicit", typ: true },
        { json: "external_ids", js: "external_ids", typ: r("ExternalIDS") },
        { json: "external_urls", js: "external_urls", typ: r("TrackExternalUrls") },
        { json: "href", js: "href", typ: r("Href") },
        { json: "id", js: "id", typ: r("Href") },
        { json: "is_playable", js: "is_playable", typ: true },
        { json: "linked_from", js: "linked_from", typ: r("TentacledLinkedFrom") },
        { json: "restrictions", js: "restrictions", typ: r("Restrictions") },
        { json: "name", js: "name", typ: r("Href") },
        { json: "popularity", js: "popularity", typ: 0 },
        { json: "preview_url", js: "preview_url", typ: r("Href") },
        { json: "track_number", js: "track_number", typ: 0 },
        { json: "type", js: "type", typ: r("Href") },
        { json: "uri", js: "uri", typ: r("Href") },
        { json: "is_local", js: "is_local", typ: true },
    ], false),
    "TentacledLinkedFrom": o([
        { json: "album", js: "album", typ: r("TrackAlbum") },
        { json: "artists", js: "artists", typ: a(r("TrackArtist")) },
        { json: "available_markets", js: "available_markets", typ: a(r("Href")) },
        { json: "disc_number", js: "disc_number", typ: 0 },
        { json: "duration_ms", js: "duration_ms", typ: 0 },
        { json: "explicit", js: "explicit", typ: true },
        { json: "external_ids", js: "external_ids", typ: r("ExternalIDS") },
        { json: "external_urls", js: "external_urls", typ: r("TrackExternalUrls") },
        { json: "href", js: "href", typ: r("Href") },
        { json: "id", js: "id", typ: r("Href") },
        { json: "is_playable", js: "is_playable", typ: true },
        { json: "linked_from", js: "linked_from", typ: r("StickyLinkedFrom") },
        { json: "restrictions", js: "restrictions", typ: r("Restrictions") },
        { json: "name", js: "name", typ: r("Href") },
        { json: "popularity", js: "popularity", typ: 0 },
        { json: "preview_url", js: "preview_url", typ: r("Href") },
        { json: "track_number", js: "track_number", typ: 0 },
        { json: "type", js: "type", typ: r("Href") },
        { json: "uri", js: "uri", typ: r("Href") },
        { json: "is_local", js: "is_local", typ: true },
    ], false),
    "StickyLinkedFrom": o([
        { json: "album", js: "album", typ: r("TrackAlbum") },
        { json: "artists", js: "artists", typ: a(r("TrackArtist")) },
        { json: "available_markets", js: "available_markets", typ: a(r("Href")) },
        { json: "disc_number", js: "disc_number", typ: 0 },
        { json: "duration_ms", js: "duration_ms", typ: 0 },
        { json: "explicit", js: "explicit", typ: true },
        { json: "external_ids", js: "external_ids", typ: r("ExternalIDS") },
        { json: "external_urls", js: "external_urls", typ: r("TrackExternalUrls") },
        { json: "href", js: "href", typ: r("Href") },
        { json: "id", js: "id", typ: r("Href") },
        { json: "is_playable", js: "is_playable", typ: true },
        { json: "linked_from", js: "linked_from", typ: r("IndigoLinkedFrom") },
        { json: "restrictions", js: "restrictions", typ: r("Restrictions") },
        { json: "name", js: "name", typ: r("Href") },
        { json: "popularity", js: "popularity", typ: 0 },
        { json: "preview_url", js: "preview_url", typ: r("Href") },
        { json: "track_number", js: "track_number", typ: 0 },
        { json: "type", js: "type", typ: r("Href") },
        { json: "uri", js: "uri", typ: r("Href") },
        { json: "is_local", js: "is_local", typ: true },
    ], false),
    "IndigoLinkedFrom": o([
        { json: "album", js: "album", typ: r("TrackAlbum") },
        { json: "artists", js: "artists", typ: a(r("TrackArtist")) },
        { json: "available_markets", js: "available_markets", typ: a(r("Href")) },
        { json: "disc_number", js: "disc_number", typ: 0 },
        { json: "duration_ms", js: "duration_ms", typ: 0 },
        { json: "explicit", js: "explicit", typ: true },
        { json: "external_ids", js: "external_ids", typ: r("ExternalIDS") },
        { json: "external_urls", js: "external_urls", typ: r("TrackExternalUrls") },
        { json: "href", js: "href", typ: r("Href") },
        { json: "id", js: "id", typ: r("Href") },
        { json: "is_playable", js: "is_playable", typ: true },
        { json: "linked_from", js: "linked_from", typ: r("IndecentLinkedFrom") },
        { json: "restrictions", js: "restrictions", typ: r("Restrictions") },
        { json: "name", js: "name", typ: r("Href") },
        { json: "popularity", js: "popularity", typ: 0 },
        { json: "preview_url", js: "preview_url", typ: r("Href") },
        { json: "track_number", js: "track_number", typ: 0 },
        { json: "type", js: "type", typ: r("Href") },
        { json: "uri", js: "uri", typ: r("Href") },
        { json: "is_local", js: "is_local", typ: true },
    ], false),
    "IndecentLinkedFrom": o([
        { json: "album", js: "album", typ: r("TrackAlbum") },
        { json: "artists", js: "artists", typ: a(r("TrackArtist")) },
        { json: "available_markets", js: "available_markets", typ: a(r("Href")) },
        { json: "disc_number", js: "disc_number", typ: 0 },
        { json: "duration_ms", js: "duration_ms", typ: 0 },
        { json: "explicit", js: "explicit", typ: true },
        { json: "external_ids", js: "external_ids", typ: r("ExternalIDS") },
        { json: "external_urls", js: "external_urls", typ: r("TrackExternalUrls") },
        { json: "href", js: "href", typ: r("Href") },
        { json: "id", js: "id", typ: r("Href") },
        { json: "is_playable", js: "is_playable", typ: true },
        { json: "linked_from", js: "linked_from", typ: r("HilariousLinkedFrom") },
        { json: "restrictions", js: "restrictions", typ: r("Restrictions") },
        { json: "name", js: "name", typ: r("Href") },
        { json: "popularity", js: "popularity", typ: 0 },
        { json: "preview_url", js: "preview_url", typ: r("Href") },
        { json: "track_number", js: "track_number", typ: 0 },
        { json: "type", js: "type", typ: r("Href") },
        { json: "uri", js: "uri", typ: r("Href") },
        { json: "is_local", js: "is_local", typ: true },
    ], false),
    "HilariousLinkedFrom": o([
        { json: "album", js: "album", typ: r("PurpleAlbum") },
        { json: "artists", js: "artists", typ: a(r("TentacledArtist")) },
        { json: "available_markets", js: "available_markets", typ: a(r("Href")) },
        { json: "disc_number", js: "disc_number", typ: 0 },
        { json: "duration_ms", js: "duration_ms", typ: 0 },
        { json: "explicit", js: "explicit", typ: true },
        { json: "external_ids", js: "external_ids", typ: r("ExternalIDS") },
        { json: "external_urls", js: "external_urls", typ: r("TrackExternalUrls") },
        { json: "href", js: "href", typ: r("Href") },
        { json: "id", js: "id", typ: r("Href") },
        { json: "is_playable", js: "is_playable", typ: true },
        { json: "linked_from", js: "linked_from", typ: r("AmbitiousLinkedFrom") },
        { json: "restrictions", js: "restrictions", typ: r("Restrictions") },
        { json: "name", js: "name", typ: r("Href") },
        { json: "popularity", js: "popularity", typ: 0 },
        { json: "preview_url", js: "preview_url", typ: r("Href") },
        { json: "track_number", js: "track_number", typ: 0 },
        { json: "type", js: "type", typ: r("Href") },
        { json: "uri", js: "uri", typ: r("Href") },
        { json: "is_local", js: "is_local", typ: true },
    ], false),
    "PurpleAlbum": o([
        { json: "album_type", js: "album_type", typ: "" },
        { json: "total_tracks", js: "total_tracks", typ: 0 },
        { json: "available_markets", js: "available_markets", typ: a(r("AvailableMarket")) },
        { json: "external_urls", js: "external_urls", typ: r("TrackExternalUrls") },
        { json: "href", js: "href", typ: r("Href") },
        { json: "id", js: "id", typ: "" },
        { json: "images", js: "images", typ: a(r("Image")) },
        { json: "name", js: "name", typ: r("Href") },
        { json: "release_date", js: "release_date", typ: "" },
        { json: "release_date_precision", js: "release_date_precision", typ: "" },
        { json: "restrictions", js: "restrictions", typ: r("Restrictions") },
        { json: "type", js: "type", typ: "" },
        { json: "uri", js: "uri", typ: "" },
        { json: "album_group", js: "album_group", typ: "" },
        { json: "artists", js: "artists", typ: a(r("FluffyArtist")) },
    ], false),
    "FluffyArtist": o([
        { json: "external_urls", js: "external_urls", typ: r("ExternalUrlsElement") },
        { json: "href", js: "href", typ: r("Href") },
        { json: "id", js: "id", typ: r("Href") },
        { json: "name", js: "name", typ: r("Href") },
        { json: "type", js: "type", typ: "" },
        { json: "uri", js: "uri", typ: r("Href") },
    ], false),
    "ExternalUrlsElement": o([
    ], false),
    "TentacledArtist": o([
        { json: "external_urls", js: "external_urls", typ: r("TrackExternalUrls") },
        { json: "followers", js: "followers", typ: r("Followers") },
        { json: "genres", js: "genres", typ: a(r("Genre")) },
        { json: "href", js: "href", typ: r("Href") },
        { json: "id", js: "id", typ: r("Href") },
        { json: "images", js: "images", typ: a(r("ExternalUrlsElement")) },
        { json: "name", js: "name", typ: r("Href") },
        { json: "popularity", js: "popularity", typ: 0 },
        { json: "type", js: "type", typ: "" },
        { json: "uri", js: "uri", typ: r("Href") },
    ], false),
    "AmbitiousLinkedFrom": o([
        { json: "album", js: "album", typ: r("FluffyAlbum") },
        { json: "artists", js: "artists", typ: a(r("StickyArtist")) },
        { json: "available_markets", js: "available_markets", typ: a(r("Href")) },
        { json: "disc_number", js: "disc_number", typ: 0 },
        { json: "duration_ms", js: "duration_ms", typ: 0 },
        { json: "explicit", js: "explicit", typ: true },
        { json: "external_ids", js: "external_ids", typ: r("ExternalIDS") },
        { json: "external_urls", js: "external_urls", typ: r("TrackExternalUrls") },
        { json: "href", js: "href", typ: r("Href") },
        { json: "id", js: "id", typ: r("Href") },
        { json: "is_playable", js: "is_playable", typ: true },
        { json: "linked_from", js: "linked_from", typ: r("CunningLinkedFrom") },
        { json: "restrictions", js: "restrictions", typ: r("Restrictions") },
        { json: "name", js: "name", typ: r("Href") },
        { json: "popularity", js: "popularity", typ: 0 },
        { json: "preview_url", js: "preview_url", typ: r("Href") },
        { json: "track_number", js: "track_number", typ: 0 },
        { json: "type", js: "type", typ: r("Href") },
        { json: "uri", js: "uri", typ: r("Href") },
        { json: "is_local", js: "is_local", typ: true },
    ], false),
    "FluffyAlbum": o([
        { json: "album_type", js: "album_type", typ: "" },
        { json: "total_tracks", js: "total_tracks", typ: 0 },
        { json: "available_markets", js: "available_markets", typ: a(r("AvailableMarket")) },
        { json: "external_urls", js: "external_urls", typ: r("TrackExternalUrls") },
        { json: "href", js: "href", typ: r("Href") },
        { json: "id", js: "id", typ: "" },
        { json: "images", js: "images", typ: a(r("ExternalUrlsElement")) },
        { json: "name", js: "name", typ: r("Href") },
        { json: "release_date", js: "release_date", typ: "" },
        { json: "release_date_precision", js: "release_date_precision", typ: "" },
        { json: "restrictions", js: "restrictions", typ: r("Restrictions") },
        { json: "type", js: "type", typ: "" },
        { json: "uri", js: "uri", typ: "" },
        { json: "album_group", js: "album_group", typ: "" },
        { json: "artists", js: "artists", typ: a(r("ExternalUrlsElement")) },
    ], false),
    "StickyArtist": o([
        { json: "external_urls", js: "external_urls", typ: r("ExternalUrlsElement") },
        { json: "followers", js: "followers", typ: r("ExternalUrlsElement") },
        { json: "genres", js: "genres", typ: a(r("Genre")) },
        { json: "href", js: "href", typ: r("Href") },
        { json: "id", js: "id", typ: r("Href") },
        { json: "images", js: "images", typ: a(r("ExternalUrlsElement")) },
        { json: "name", js: "name", typ: r("Href") },
        { json: "popularity", js: "popularity", typ: 0 },
        { json: "type", js: "type", typ: "" },
        { json: "uri", js: "uri", typ: r("Href") },
    ], false),
    "CunningLinkedFrom": o([
        { json: "album", js: "album", typ: r("TentacledAlbum") },
        { json: "artists", js: "artists", typ: a(r("IndigoArtist")) },
        { json: "available_markets", js: "available_markets", typ: a(r("Href")) },
        { json: "disc_number", js: "disc_number", typ: 0 },
        { json: "duration_ms", js: "duration_ms", typ: 0 },
        { json: "explicit", js: "explicit", typ: true },
        { json: "external_ids", js: "external_ids", typ: r("ExternalIDS") },
        { json: "external_urls", js: "external_urls", typ: r("TrackExternalUrls") },
        { json: "href", js: "href", typ: r("Href") },
        { json: "id", js: "id", typ: r("Href") },
        { json: "is_playable", js: "is_playable", typ: true },
        { json: "linked_from", js: "linked_from", typ: r("MagentaLinkedFrom") },
        { json: "restrictions", js: "restrictions", typ: r("Restrictions") },
        { json: "name", js: "name", typ: r("Href") },
        { json: "popularity", js: "popularity", typ: 0 },
        { json: "preview_url", js: "preview_url", typ: r("Href") },
        { json: "track_number", js: "track_number", typ: 0 },
        { json: "type", js: "type", typ: r("Href") },
        { json: "uri", js: "uri", typ: r("Href") },
        { json: "is_local", js: "is_local", typ: true },
    ], false),
    "TentacledAlbum": o([
        { json: "album_type", js: "album_type", typ: "" },
        { json: "total_tracks", js: "total_tracks", typ: 0 },
        { json: "available_markets", js: "available_markets", typ: a(r("AvailableMarket")) },
        { json: "external_urls", js: "external_urls", typ: r("ExternalUrlsElement") },
        { json: "href", js: "href", typ: r("Href") },
        { json: "id", js: "id", typ: "" },
        { json: "images", js: "images", typ: a(r("ExternalUrlsElement")) },
        { json: "name", js: "name", typ: r("Href") },
        { json: "release_date", js: "release_date", typ: "" },
        { json: "release_date_precision", js: "release_date_precision", typ: "" },
        { json: "restrictions", js: "restrictions", typ: r("ExternalUrlsElement") },
        { json: "type", js: "type", typ: "" },
        { json: "uri", js: "uri", typ: "" },
        { json: "album_group", js: "album_group", typ: "" },
        { json: "artists", js: "artists", typ: a(r("ExternalUrlsElement")) },
    ], false),
    "IndigoArtist": o([
        { json: "genres", js: "genres", typ: a("any") },
        { json: "images", js: "images", typ: a("any") },
    ], false),
    "MagentaLinkedFrom": o([
        { json: "album", js: "album", typ: r("StickyAlbum") },
        { json: "artists", js: "artists", typ: a(r("ExternalUrlsElement")) },
        { json: "available_markets", js: "available_markets", typ: a(null) },
        { json: "disc_number", js: "disc_number", typ: 0 },
        { json: "duration_ms", js: "duration_ms", typ: 0 },
        { json: "explicit", js: "explicit", typ: true },
        { json: "external_ids", js: "external_ids", typ: r("ExternalUrlsElement") },
        { json: "external_urls", js: "external_urls", typ: r("ExternalUrlsElement") },
        { json: "href", js: "href", typ: r("Href") },
        { json: "id", js: "id", typ: r("Href") },
        { json: "is_playable", js: "is_playable", typ: true },
        { json: "linked_from", js: "linked_from", typ: r("FriskyLinkedFrom") },
        { json: "restrictions", js: "restrictions", typ: r("ExternalUrlsElement") },
        { json: "name", js: "name", typ: r("Href") },
        { json: "popularity", js: "popularity", typ: 0 },
        { json: "preview_url", js: "preview_url", typ: r("Href") },
        { json: "track_number", js: "track_number", typ: 0 },
        { json: "type", js: "type", typ: r("Href") },
        { json: "uri", js: "uri", typ: r("Href") },
        { json: "is_local", js: "is_local", typ: true },
    ], false),
    "StickyAlbum": o([
        { json: "available_markets", js: "available_markets", typ: a("any") },
        { json: "images", js: "images", typ: a("any") },
        { json: "artists", js: "artists", typ: a("any") },
    ], false),
    "FriskyLinkedFrom": o([
        { json: "artists", js: "artists", typ: a("any") },
        { json: "available_markets", js: "available_markets", typ: a("any") },
    ], false),
    "Href": [
        "market",
        "string",
    ],
    "AvailableMarket": [
        "BR",
        "CA",
        "IT",
    ],
    "Genre": [
        "Grunge",
        "Prog rock",
    ],
};
