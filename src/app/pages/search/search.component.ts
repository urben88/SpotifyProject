import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Search } from '../interfaces/search.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {

  
  @ViewChild('search') input!:ElementRef<HTMLInputElement>;
  // @ViewChild('infoa') infoa!:ElementRef<HTMLInputElement>;
  query!:string;
  resul!:Search;
  opcion:string = 'all';
  last:string = localStorage.getItem('busqueda') || '';

  constructor(private _SpotifyService: SpotifyService, public _route:ActivatedRoute ) {
    console.log(localStorage.getItem('busqueda'))
    this._SpotifyService.getQuery<Search>("search?type=artist,playlist,track,album&q="+localStorage.getItem('busqueda') || '').subscribe( (data)=>{
      this.resul = data;
      console.log('aaaaaaaaaa '+localStorage.getItem('busquedatype'))
      if(localStorage.getItem('busquedatype') != '' || null){
        this.opcion = localStorage.getItem('busquedatype') || 'all';
      }
     
    })
   
   }


  ngOnInit(): void {

    
  }
  cambiarOpcion(){
    localStorage.setItem('busquedatype',this.opcion);

  }
  buscar(){
    console.log(this.query)
    // console.log(this.input.nativeElement.value);
    this._SpotifyService.getQuery<Search>("search?type=artist,playlist,track,album&q="+this.query).subscribe( (data)=>{
      console.log('AQUIII Album dentrooo')
      console.log(data)
      this.resul = data;
      localStorage.setItem('busqueda',this.query);
      localStorage.setItem('busquedatype',this.opcion);
    
    })
  }

}
