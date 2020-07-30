import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-style',
  templateUrl: './list-style.component.html',
  styleUrls: ['./list-style.component.css']
})
export class ListStyleComponent implements OnInit {

  constructor() { }
  listType="none";
  ngOnInit() {
  }

  onChange(val){
    this.listType=val;
  }

}
