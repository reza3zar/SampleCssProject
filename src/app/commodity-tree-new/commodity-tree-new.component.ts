import { Component, OnInit } from '@angular/core';
import { commodityNode } from '../commodity-tree/commodityNode';

@Component({
  selector: 'app-commodity-tree-new',
  templateUrl: './commodity-tree-new.component.html',
  styleUrls: ['./commodity-tree-new.component.css']
})
export class CommodityTreeNewComponent implements OnInit {
  commoditiesCollection=new Array<commodityNode>();
  selectedCommodityNode: commodityNode;
  tempSelectedCommodityNode: commodityNode;

  parentCollection=new Array<commodityNode>();
  helperCollection=new Array<commodityNode>();

  
  constructor() { }

  ngOnInit() {
    }

  activeCommodity="choose";
  changeCommodity(item){
    this.activeCommodity=item;
  }
}
