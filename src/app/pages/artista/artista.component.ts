import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Artist } from '../interfaces/topArtists.interface';
import { TopTracksArtist } from '../interfaces/topTracksArtist.interface';
import { Album } from '../interfaces/album.interface';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.scss']
})
export class ArtistaComponent implements OnInit {
 
  artista!:Artist;
  id!:any;
  topTracks!:TopTracksArtist;
  album!:Album;


  constructor(private _SpotifyService: SpotifyService, public _route:ActivatedRoute) { }

 
  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    console.log(this.id)
    this._SpotifyService.ponerToken();
    console.log(this._SpotifyService.getAccessToken())
    
    //TODO Peticiones API
    this._SpotifyService.getQuery<Artist>("artists/"+this.id).subscribe( (data)=>{
      console.log('AQUIII')
      console.log(data)
      this.artista = data;

    })

    this._SpotifyService.getQuery<TopTracksArtist>("artists/"+this.id+"/top-tracks?market=ES").subscribe( (data)=>{
      console.log('AQUIII Canciones')
      console.log(data)
      this.topTracks = data;

    })
    this._SpotifyService.getQuery<Album>("artists/"+this.id+"/albums?include_groups=album").subscribe( (data)=>{
      console.log('AQUIII album')
      console.log(data)
      this.album = data;

    })


  }

}
