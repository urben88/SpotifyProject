import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Href } from '../../pages/interfaces/topTracksArtist.interface';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor( private _router:Router) { }

  ngOnInit(): void {
  }
  irHome(){
    this._router.navigate(['/home']);
  }
  irBuscar(){
    this._router.navigate(['/buscar']);
  }
  logout(){
    const url = 'https://www.spotify.com/logout/'                                                                                                                                                                                                                                                                               
    const spotifyLogoutWindow = window.open(url, 'Spotify Logout', 'width=700,height=500,top=40,left=40') || false;                                                                                       
    setTimeout( ()=>{
      if(spotifyLogoutWindow){
         spotifyLogoutWindow.close() 
      }
      this._router.navigate(['/']);
    }

    , 2000)

  }
  irSpotify(){
    const url = "https://open.spotify.com";
    const spotifyLogoutWindow = window.open(url, 'Spotify Logout', 'width=700,height=500,top=40,left=40') || false;                                                                                       
  }
}
