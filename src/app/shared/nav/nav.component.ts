import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor( private _router:Router) { }

  ngOnInit(): void {
  }
  irHome(){
    this._router.navigate(['/home']);
  }
  irBuscar(){
    this._router.navigate(['/buscar']);
  }

}
