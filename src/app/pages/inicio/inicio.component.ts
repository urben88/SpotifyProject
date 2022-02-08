import { Component, Input, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Playlists } from '../interfaces/playlists.interface';
import { User } from '../interfaces/user.interface';
import { FollowingArtists } from '../interfaces/followingArtists.interface';
import { TopArtists } from '../interfaces/topArtists.interface';
import { TopTracks } from '../interfaces/topTracks.interface';
import { DomSanitizer } from '@angular/platform-browser';
import { map } from 'rxjs';
import { Router } from '@angular/router';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  user!:User;
  playlists!:Playlists;
  followingArtists!:FollowingArtists;
  topArtists!:TopArtists;
  topTracks!:TopTracks;
  topTracksUrls!:string[];
  cuenta:number = 0;
  track = "https://open.spotify.com/embed/track/39JlamO6oYz8nRIYCfq8Bl"

  constructor(private _SpotifyService: SpotifyService, public sanitizer: DomSanitizer, private _router:Router) { }


  ngOnInit(): void {
    if(!this._SpotifyService.checkTokenSpo()){
      this._SpotifyService.saveAccessToken();
    }
    console.log(sessionStorage.getItem('token'))
    this._SpotifyService.getQuery<User>("me").subscribe( (data)=>{
      this.user = data;
      console.log(this.user)
    })
    this._SpotifyService.getQuery<Playlists>("me/playlists").subscribe( (data)=>{
      this.playlists = data;
      console.log(this.playlists)
    })
    this._SpotifyService.getQuery<FollowingArtists>("me/following?type=artist").subscribe( (data)=>{
      this.followingArtists = data;
      console.log(data)
    })
    this._SpotifyService.getQuery<TopArtists>("me/top/artists?limit=4").subscribe( (data)=>{
      this.topArtists = data;
      console.log(data)
    })
  
    this._SpotifyService.getQuery<TopTracks>("me/top/tracks?limit=4").subscribe( (data)=>{
      console.log('AQUIII')
      this.topTracks = data;
      console.log(data)
    })
  
    console.log(sessionStorage.getItem('token'))
  }
  generarUrl(id:string):string{
    return "https://open.spotify.com/embed/track/"+id;
  }
  getToken(){
    console.log(this._SpotifyService.getAccessToken())
  }

  sumarCuenta(){
    return ((this.cuenta++) - 4);
  }

  irPlayList( id:string){
    this._router.navigate(['/mostar',id]);
  }
}
