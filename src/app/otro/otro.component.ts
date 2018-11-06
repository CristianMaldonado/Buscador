import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-otro',
  templateUrl: './otro.component.html',
  styleUrls: ['./otro.component.css']
})
export class OtroComponent implements OnInit {


  constructor(private location: Location) { }

  ngOnInit() {
  }

  volver() {
    this.location.back();
  }

}
