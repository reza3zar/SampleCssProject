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
  }

  left="none";
  onChangeLeft(val){
    this.left=val;
    this.mixParse=`${this.top} ${this.left} ${this.bottom} ${this.right}`

  }

  bottom="none";
  onChangeBottom(val){
    this.bottom=val;
    this.mixParse=`${this.top} ${this.left} ${this.bottom} ${this.right}`

  }

  right="none";
  onChangeRight(val){
    this.right=val;
    this.mixParse=`${this.top} ${this.left} ${this.bottom} ${this.right}`

  }

 
  onChangeColor(val){
     
    this.mixParse=`${this.top} ${this.left} ${this.bottom} ${this.right} ${val}`
  }
}
