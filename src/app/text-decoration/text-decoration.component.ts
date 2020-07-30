import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-decoration',
  templateUrl: './text-decoration.component.html',
  styleUrls: ['./text-decoration.component.css']
})
export class TextDecorationComponent implements OnInit {

  constructor() { }

   
  ngOnInit() {
  }

  txtDecoration="none";
  onChange(val){
    this.txtDecoration=val;
  }
  txtTransform="none";
  onChangetxtTransform(val){
    this.txtTransform=val;
  }

  txtDecStyle="";
  onChangeTextDecorationStyle(val){
    this.txtDecStyle=val;
  }

  txtAlign="none"
  onChangeTxtAlign(val){
    this.txtAlign=val;
  }

  valIndent="0";
  lastState="px";
  valResult="";
  onChangeTxtIndent(val){
    if(val!==null)
    this.lastState=val;
    this.valResult=  this.valIndent +this.lastState;
  }

  txtShadow="";
  horizontalShadow="0";
  blurEffect="0";
  verticalShadow="0";
  onChangeTxtShadow(){
    this.txtShadow=`${this.horizontalShadow}px  ${this.verticalShadow}px  ${this.blurEffect}px  ${this.colorOftxtShadow}`;
    console.log(this.txtShadow)
  }
  valLetterSpace="-1";
  valWordSpace="-1";

  colorOftxtShadow="black";
  onChangeColor(val){
    this.colorOftxtShadow=val;
    this.onChangeTxtShadow();
  }

}
