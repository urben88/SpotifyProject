import { Pipe, PipeTransform } from '@angular/core';
import { Card } from '../pages/interfaces/card.interface';
import { PlayList } from '../pages/interfaces/playList.interface';

@Pipe({
  name: 'card'
})
export class CardPipe implements PipeTransform {

  transform(value:any): Card {
     var card:Card={
      imgsrc:'jij',
      id:'min',
      type:'njk',
      name:'jmkinj'
     };

    if(value.type == "playlist"){
       card.imgsrc = value.images[0].url;
       card.id = value.id;
       card.name = value.name;
       card.type = value.type;
    }
    return card;

  }

}
