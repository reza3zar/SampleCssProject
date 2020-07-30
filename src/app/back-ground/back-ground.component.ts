import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-back-ground',
  templateUrl: './back-ground.component.html',
  styleUrls: ['./back-ground.component.css']
})
export class BackGroundComponent implements OnInit {
  selectedColor="red"
  constructor( private renderer: Renderer2) { }
  @ViewChild('form', { static: false}) myForm: ElementRef;
  ngOnInit() {
  }

    onChange(color) {
      this.selectedColor=color;
  }
  repeatMode="repeat";
  onChangeBGMode(mode){
    this.repeatMode=mode;
    console.log(this.repeatMode);
    this.renderer.setStyle(this.myForm.nativeElement, 'background-repeat', this.repeatMode );
  }

  filter = false;

  onFilterChange(eve: any) {
    this.filter = eve;
  }
 

}
