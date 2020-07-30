import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-margin-and-pading',
  templateUrl: './margin-and-pading.component.html',
  styleUrls: ['./margin-and-pading.component.css']
})
export class MarginAndPadingComponent implements OnInit {

  constructor() { }
  top="0";
  right="0";
  bottom="0";
  left="0";

  resultPading="";
  resultMargin="";


  ngOnInit() {
  }

  onFilterChange(val){
    this.isMarginMode=val;
  }



  isMarginMode=true;
  onChangeTxtShadow(){
      if(this.isMarginMode)
         this.resultMargin=`${this.top}px ${this.right}px ${this.bottom}px ${this.left}px`;
    else
         this.resultPading=`${this.top}px ${this.right}px ${this.bottom}px ${this.left}px`;

         console.log( this.resultMargin)
         console.log(this.resultPading)


  }

}
