import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-min-and-max-width-and-height',
  templateUrl: './min-and-max-width-and-height.component.html',
  styleUrls: ['./min-and-max-width-and-height.component.css']
})
export class MinAndMaxWidthAndHeightComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  widthPercent=70;
  onChangeWidth(val){
    this.widthPercent=val;
  }
  // heightPercent=70;
  // onChangeHeight(val) 
  // {
  //   this.heightPercent=val;
    
  // }  

}
