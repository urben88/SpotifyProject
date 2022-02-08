import { Component, OnInit, Input } from '@angular/core';
import { PlayList } from '../../pages/interfaces/playList.interface';


@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
  styleUrls: ['./plantilla.component.scss']
})
export class PlantillaComponent implements OnInit {

  @Input() PlayList!:PlayList;

  constructor() { }

  ngOnInit(): void {
    console.log(this.PlayList)
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
