import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { PlayList } from '../../pages/interfaces/playList.interface';
import { AlbumIndividual } from '../../pages/interfaces/albumIndividual.interface';
import { Router } from '@angular/router';



@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
  styleUrls: ['./plantilla.component.scss']
})
export class PlantillaComponent implements OnInit {

  @Input() type!:string;
  @Input() id!:any;

  @ViewChild('expandir') infoExpandir!:ElementRef<HTMLInputElement>;

  limit:number = 25;
  PlayList!:PlayList;
  Album!:AlbumIndividual;
  total!:number;


  constructor(private _SpotifyService: SpotifyService, private _router:Router) { }

  ngOnInit(): void {
    console.log(this.type)
    if(this.type == 'playlist'){
       this._SpotifyService.getQuery<PlayList>("playlists/"+this.id).subscribe( (data)=>{
       console.log('AQUIII')
       console.log(data)
       this.total = data.tracks.items.length
       this.PlayList = data;
     })
    }

    if(this.type == 'album'){
      this._SpotifyService.getQuery<AlbumIndividual>("albums/"+this.id).subscribe( (data)=>{
        console.log('AQUIII Album dentrooo')
        console.log(data)
        this.total = data.tracks.items.length
        this.Album = data;
      })
    }

  }

  ponerMas(){
    if(this.limit == 25){
      this.limit = 100;
      this.infoExpandir.nativeElement.innerHTML = "Reducir";
     
    }else{
      this.limit = 25;
      this.infoExpandir.nativeElement.innerHTML = "Mostrar todo";
    }
     console.log(this.limit)
  }

  ir(){
    switch (this.type) {
      case 'playlist':
        this._router.navigate(['artista',this.PlayList.owner.id])
        break;
      case 'album':
        this._router.navigate(['artista',this.Album.artists[0].id])
        break;
    
      default:
        break;
    }
  }





 
  toMinutos(millisec:any) {
    var seconds:any = (millisec / 1000).toFixed(0);
    var minutes:any = Math.floor(seconds / 60);
    var hours:any = "";
    if (minutes > 59) {
        hours = Math.floor(minutes / 60);
        hours = (hours >= 10) ? hours : "0" + hours;
        minutes = minutes - (hours * 60);
        minutes = (minutes >= 10) ? minutes : "0" + minutes;
    }

    seconds = Math.floor(seconds % 60);
    seconds = (seconds >= 10) ? seconds : "0" + seconds;
    if (hours != "") {
        return hours + ":" + minutes + ":" + seconds;
    }
    return minutes + ":" + seconds;
}
 

}
