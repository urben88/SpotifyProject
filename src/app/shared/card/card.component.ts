import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from '../../pages/interfaces/card.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card!:Card;
  constructor( private _router:Router) { }

  ngOnInit(): void {
    // console.log(this.card)
  }

  ir(){

    switch (this.card.type) {
      case 'playlist': case'album':
        this._router.navigate(['mostrar/',this.card.type,this.card.id])
        break;
    
      case 'artist':
        this._router.navigate(['artista/',this.card.id])
        break;
   
      default:
        this._router.navigate(['/home'])
        break;
    }
   

  }
}
