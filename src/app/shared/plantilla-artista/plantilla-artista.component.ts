import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Artist } from '../../pages/interfaces/topArtists.interface';
import { Album, Item } from '../../pages/interfaces/album.interface';
import { TopTracksArtist } from '../../pages/interfaces/topTracksArtist.interface';


@Component({
  selector: 'app-plantilla-artista',
  templateUrl: './plantilla-artista.component.html',
  styleUrls: ['./plantilla-artista.component.scss']
})
export class PlantillaArtistaComponent implements OnInit {

  @Input() Artista!:Artist;
  @Input() Album!:Album;
  @Input() Tracks!:TopTracksArtist;
  
  @ViewChild('expandir') infoExpandir!:ElementRef<HTMLInputElement>;
  limit:number = 5;
  constructor() { 

  }
  
 
  
  ngOnInit(): void {
  }
  ponerMas(){
    if(this.limit == 10){
      this.limit = 5;
      this.infoExpandir.nativeElement.innerHTML = "Mostrar mas";
     
    }else{
      this.limit = 10;
      this.infoExpandir.nativeElement.innerHTML = "Mostrar menos";
    }
     console.log(this.limit)
  }

}
