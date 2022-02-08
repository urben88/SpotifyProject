import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';
import { TopTracks } from '../interfaces/topTracks.interface';
import { PlayList, Tracks } from '../interfaces/playList.interface';


@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.scss']
})
export class MostrarComponent implements OnInit {

  ejem:string ='7hS6MRWu7pYbMQ0e8yIKF3?si=6842378617584cfb';
  id!:string|null;
  playList!:PlayList;
  playListTracks!:Tracks;
  constructor(private _SpotifyService: SpotifyService, public _route:ActivatedRoute ) {
  }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    console.log(this.id)
    this._SpotifyService.ponerToken();
    console.log(this._SpotifyService.getAccessToken())
    
    this._SpotifyService.getQuery<PlayList>("playlists/"+this.id).subscribe( (data)=>{
      console.log('AQUIII')
      console.log(data)
      this.playList = data;

    })
  }


  // obtenerId(){
  //   const valores = window.location.search;
  //   const urlParams = new URLSearchParams(valores);
  //   var id = urlParams.get('id');
  //   return id;
  // }

}
