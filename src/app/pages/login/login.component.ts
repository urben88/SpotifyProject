import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _SpotifyService: SpotifyService) {
   }

  persona={
    nombre:''
  }
  ngOnInit(): void {
    
  }
  obtenerToken(){
    this._SpotifyService.checkTokenSpoLogin();
  }
  cogerdatos(){
    console.log(this.persona)
  }
  getToken(){
    console.log(this._SpotifyService.getAccessToken());
  }

}
