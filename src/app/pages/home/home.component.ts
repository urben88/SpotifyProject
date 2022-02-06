import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { User } from '../interfaces/user.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user:any;
  constructor(private _SpotifyService: SpotifyService) { }

  ngOnInit(): void {
    this._SpotifyService.saveAccessToken();
    this._SpotifyService.fetchProfileInformation().subscribe( (data)=>{
       this.user = data;
       console.log(data)
    })
  }
  getToken(){
    console.log(this._SpotifyService.getAccessToken())
  }

}
