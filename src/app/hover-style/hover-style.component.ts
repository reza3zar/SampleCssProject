import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hover-style',
  templateUrl: './hover-style.component.html',
  styleUrls: ['./hover-style.component.css']
})
export class HoverStyleComponent implements OnInit {

  constructor() { }
  hover=false;
  ngOnInit() {
  }
  hoverColor="red";
  onChange(val){
    this.hoverColor=val;
  }
}
