import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-font-style',
  templateUrl: './font-style.component.html',
  styleUrls: ['./font-style.component.css']
})
export class FontStyleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  fntVariant="normal";
  onChange(val){
    this.fntVariant=val;
  }

}
