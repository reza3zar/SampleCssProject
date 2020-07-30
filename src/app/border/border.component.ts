import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-border',
  templateUrl: './border.component.html',
  styleUrls: ['./border.component.css']
})
export class BorderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  brStyle="none";
  onChange(val){
    this.brStyle=val;
  }

  mixParse="";

  top="none";
  onChangeTop(val){
    this.top=val;

    this.mixParse=`${this.top} ${this.left} ${this.bottom} ${this.right}`;
    console.log(this.mixParse)
  }

  left="none";
  onChangeLeft(val){
    this.left=val;
    this.mixParse=`${this.top} ${this.left} ${this.bottom} ${this.right}`
    console.log(this.mixParse)

  }

  bottom="none";
  onChangeBottom(val){
    this.bottom=val;
    this.mixParse=`${this.top} ${this.left} ${this.bottom} ${this.right}`
    console.log(this.mixParse)

  }

  right="none";
  onChangeRight(val){
    this.right=val;
    this.mixParse=`${this.top} ${this.left} ${this.bottom} ${this.right}`
    console.log(this.mixParse)

  }
}
