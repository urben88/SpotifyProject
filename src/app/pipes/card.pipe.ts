import { Pipe, PipeTransform } from '@angular/core';
import { Card } from '../pages/interfaces/card.interface';
import { PlayList } from '../pages/interfaces/playList.interface';
import { Artist } from '../pages/interfaces/topArtists.interface';

@Pipe({
  name: 'card'
})
export class CardPipe implements PipeTransform {

  transform(value:any, args:any): Card {
     var card:Card={
      imgsrc:'jij',
      id:'min',
      type:'njk',
      name:'jmkinj'
     };

    if(args== "playlist"){
       card.imgsrc = value.images[0].url;
       card.id = value.id;
       card.name = value.name;
       card.type = value.type;
    }
    if(args=='artist'){
      card.imgsrc = value.images[0].url;
      card.id = value.id;
      card.name = value.name;
      card.type = 'artist';
    }
    if(args == 'album'){
      card.imgsrc = value.images[0].url;
      card.id = value.id;
      card.name = value.name;
      card.type = 'album';
    }

    return card;

  }

}
