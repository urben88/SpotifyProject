import { Track } from './topTracksArtist.interface';
import { Item } from './album.interface';
export interface Plantilla{
    type:String,
    name:String,
    descripcion:String|null,
    owner: String,
    followers: Number|null,
    totalTracks:Number|null
    tracks:{
       track:Track|Item[]
    }
}
