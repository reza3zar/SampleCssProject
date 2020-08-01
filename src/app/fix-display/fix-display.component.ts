import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fix-display',
  templateUrl: './fix-display.component.html',
  styleUrls: ['./fix-display.component.css']
})
export class FixDisplayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  positionMode="relative";
  onChange(val){
    this.positionMode=val;
  }

}
