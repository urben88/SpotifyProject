import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
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

  @ViewChild('expandir') infoExpandir!:ElementRef<HTMLInputElement>;
  @ViewChild('expandir2') infoExpandir2!:ElementRef<HTMLInputElement>;

  user!:User;
  playlists!:Playlists;
  followingArtists!:FollowingArtists;
  topArtists!:TopArtists;
  topTracks!:TopTracks;
  topTracksUrls!:string[];
  cuenta:number = 0;
  track = "https://open.spotify.com/embed/track/39JlamO6oYz8nRIYCfq8Bl"
  limitArtist:number = 4;
  limitTrack:number = 5;
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
    this._SpotifyService.getQuery<TopArtists>("me/top/artists").subscribe( (data)=>{
      this.topArtists = data;
      console.log(data)
    })
  
    this._SpotifyService.getQuery<TopTracks>("me/top/tracks").subscribe( (data)=>{
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

  ponerMasArtist(){
    if(this.limitArtist == 4){
      this.limitArtist = this.topArtists.items.length;
      this.infoExpandir.nativeElement.innerHTML = "Reducir";
     
    }else{
      this.limitArtist = 4;
      this.infoExpandir.nativeElement.innerHTML = "Mostrar todo";
    }
    
  }

  ponerMasTrack(){
    if(this.limitTrack == 5){
      this.limitTrack = this.topTracks.items.length;
      this.infoExpandir2.nativeElement.innerHTML = "Reducir";
     
    }else{
      this.limitTrack = 5;
      this.infoExpandir2.nativeElement.innerHTML = "Mostrar todo";
    }
   
  }
}
