import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-border',
  templateUrl: './border.component.html',
  styleUrls: ['./border.component.css']
})
export class BorderComponent implements OnInit,AfterViewInit  {
  ngAfterViewInit(): void {
    this.borderResult=`${this.Thickness}px ${this.brMode} ${this.color} `;
  }

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
  bordreRadious="";
  Thickness="4";
  borderResult="";
  brMode="solid";
  color="red";
  borderRadious="33";


  onChangeThickness(){
    this.borderResult=`${this.Thickness}px ${this.brMode} ${this.color} `;
  }
  onChangeStyle(val){
    this.brMode=val;
    this.borderResult=`${this.Thickness}px ${this.brMode} ${this.color} `;
  }

 
  onChangeColor(val){
     this.color=val;
    this.borderResult=`${this.Thickness}px ${this.brMode} ${this.color} `;

  }

  onChangeBordreRadious(){
    this.borderResult=`${this.Thickness}px ${this.brMode} ${this.color} `;

  }
}
