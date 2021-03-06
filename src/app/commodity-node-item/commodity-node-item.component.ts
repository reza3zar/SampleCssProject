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
    this.selectedCommodityNode=new commodityNode(); //this.collection[0];
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
<<<<<<< HEAD
=======
    if(this.selectedCommodityNode.id==node.id){
      this.isOpenNode=!this.isOpenNode;
      console.log('YES')
    }
    
>>>>>>> 0701ae6408c42755369d1ce4a80ea54181db0f8b
    this.selectedCommodityNode=node;

    if(node.id==this.selectedCommodityNode.id)
       this.selectedCommodityNode.isOpen=!this.selectedCommodityNode.isOpen;

    this.isCleckied=true;
<<<<<<< HEAD

  
    // this.helperCollection=this.commoditiesCollection.filter(x=>x.parentId==node.id);
  }

  validToOpenCollection(){
    return this.commoditiesCollection.filter(x=>x.isOpen==true);
   }
 
   fillHelperCollection(id){
    return  this.commoditiesCollection.filter(x=>x.parentId==id);
   }

  nodeShouldBeOpen(nodeId){
    let result=this.commoditiesCollection.find(x=>x.id==nodeId);
    if(result)
      return result.isOpen;
    return false;

=======
    if(!this.isOpenNode) 
      console.log(  node);
    this.helperCollection=this.commoditiesCollection.filter(x=>x.parentId==node.id);
>>>>>>> 0701ae6408c42755369d1ce4a80ea54181db0f8b
  }

}
