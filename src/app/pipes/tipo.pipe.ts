// import { Pipe, PipeTransform } from '@angular/core';
// import { Plantilla } from '../pages/interfaces/plantilla.interface';
// import { PlayList } from '../pages/interfaces/playList.interface';

// @Pipe({
//   name: 'tipo'
// })
// export class TipoPipe implements PipeTransform {

//   transform(value:PlayList, args: string): unknown {
//     var data:Plantilla;
//      if(args == "playlist"){
//       data.type = value.type;
//       data.name = value.name;
//       data.descripcion = value.description;
//       data.owner = value.owner.display_name;
//       data.followers = value.followers.total.toLocaleString(),
//       data.totalTracks = value.tracks.total.toLocaleString(),
//       data.tracks = value.tracks.items
//      }
//   }

//   toMinutos(millisec:any) {
//     var seconds:any = (millisec / 1000).toFixed(0);
//     var minutes:any = Math.floor(seconds / 60);
//     var hours:any = "";
//     if (minutes > 59) {
//         hours = Math.floor(minutes / 60);
//         hours = (hours >= 10) ? hours : "0" + hours;
//         minutes = minutes - (hours * 60);
//         minutes = (minutes >= 10) ? minutes : "0" + minutes;
//     }

//     seconds = Math.floor(seconds % 60);
//     seconds = (seconds >= 10) ? seconds : "0" + seconds;
//     if (hours != "") {
//         return hours + ":" + minutes + ":" + seconds;
//     }
//     return minutes + ":" + seconds;
// }

// }
