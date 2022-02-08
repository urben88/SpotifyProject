// To parse this data:
//
//   import { Convert, Playlists } from "./file";
//
//   const playlists = Convert.toPlaylists(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Playlists {
    href:     string;
    items:    Item[];
    limit:    number;
    next:     string;
    offset:   number;
    previous: null;
    total:    number;
}

export interface Item {
    collaborative: boolean;
    description:   string;
    external_urls: ExternalUrls;
    href:          string;
    id:            string;
    images:        Image[];
    name:          string;
    owner:         Owner;
    primary_color: null;
    public:        boolean;
    snapshot_id:   string;
    tracks:        Tracks;
    type:          ItemType;
    uri:           string;
}

export interface ExternalUrls {
    spotify: string;
}

export interface Image {
    height: number | null;
    url:    string;
    width:  number | null;
}

export interface Owner {
    display_name:  string;
    external_urls: ExternalUrls;
    href:          string;
    id:            string;
    type:          OwnerType;
    uri:           string;
}

export enum OwnerType {
    User = "user",
}

export interface Tracks {
    href:  string;
    total: number;
}

export enum ItemType {
    Playlist = "playlist",
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toPlaylists(json: string): Playlists {
        return cast(JSON.parse(json), r("Playlists"));
    }

    public static playlistsToJson(value: Playlists): string {
        return JSON.stringify(uncast(value, r("Playlists")), null, 2);
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
    "Playlists": o([
        { json: "href", js: "href", typ: "" },
        { json: "items", js: "items", typ: a(r("Item")) },
        { json: "limit", js: "limit", typ: 0 },
        { json: "next", js: "next", typ: "" },
        { json: "offset", js: "offset", typ: 0 },
        { json: "previous", js: "previous", typ: null },
        { json: "total", js: "total", typ: 0 },
    ], false),
    "Item": o([
        { json: "collaborative", js: "collaborative", typ: true },
        { json: "description", js: "description", typ: "" },
        { json: "external_urls", js: "external_urls", typ: r("ExternalUrls") },
        { json: "href", js: "href", typ: "" },
        { json: "id", js: "id", typ: "" },
        { json: "images", js: "images", typ: a(r("Image")) },
        { json: "name", js: "name", typ: "" },
        { json: "owner", js: "owner", typ: r("Owner") },
        { json: "primary_color", js: "primary_color", typ: null },
        { json: "public", js: "public", typ: true },
        { json: "snapshot_id", js: "snapshot_id", typ: "" },
        { json: "tracks", js: "tracks", typ: r("Tracks") },
        { json: "type", js: "type", typ: r("ItemType") },
        { json: "uri", js: "uri", typ: "" },
    ], false),
    "ExternalUrls": o([
        { json: "spotify", js: "spotify", typ: "" },
    ], false),
    "Image": o([
        { json: "height", js: "height", typ: u(0, null) },
        { json: "url", js: "url", typ: "" },
        { json: "width", js: "width", typ: u(0, null) },
    ], false),
    "Owner": o([
        { json: "display_name", js: "display_name", typ: "" },
        { json: "external_urls", js: "external_urls", typ: r("ExternalUrls") },
        { json: "href", js: "href", typ: "" },
        { json: "id", js: "id", typ: "" },
        { json: "type", js: "type", typ: r("OwnerType") },
        { json: "uri", js: "uri", typ: "" },
    ], false),
    "Tracks": o([
        { json: "href", js: "href", typ: "" },
        { json: "total", js: "total", typ: 0 },
    ], false),
    "OwnerType": [
        "user",
    ],
    "ItemType": [
        "playlist",
    ],
};
