import { Component, OnInit, Input } from '@angular/core';
import { commodityNode } from '../commodity-tree/commodityNode';

@Component({
  selector: 'app-commodity-node-item',
  templateUrl: './commodity-node-item.component.html',
  styleUrls: ['./commodity-node-item.component.css']
})
export class CommodityNodeItemComponent implements OnInit {
  @Input() collection :Array<commodityNode>;
  @Input() commoditiesCollection :Array<commodityNode>;
 
  selectedCommodityNode: commodityNode;

  parentCollection=new Array<commodityNode>();
  helperCollection=new Array<commodityNode>();
  

  constructor() { }

  ngOnInit() {
    this.selectedCommodityNode=this.collection[0];
  }

  hasChildren(nodeId){
    if(!nodeId )
     return;
    let result= this.commoditiesCollection.filter(x=>x.parentId==nodeId);
      return result!==null && result.length>0?true:false;
  }

  isOpenNode=false;
  isCleckied=false
  toggleMe(node:commodityNode){
    if(this.selectedCommodityNode.id==node.id){
      this.isOpenNode=!this.isOpenNode;
      console.log('YES')
    }
    
    this.selectedCommodityNode=node;
    this.isCleckied=true;
    if(!this.isOpenNode) 
      console.log(  node);
    this.helperCollection=this.commoditiesCollection.filter(x=>x.parentId==node.id);
  }

}
