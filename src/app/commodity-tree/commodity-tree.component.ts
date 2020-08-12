import { Component, OnInit } from '@angular/core';
import { commodityNode } from './commodityNode';

@Component({
  selector: 'app-commodity-tree',
  templateUrl: './commodity-tree.component.html',
  styleUrls: ['./commodity-tree.component.css']
})
export class CommodityTreeComponent implements OnInit {
   commoditiesCollection=new Array<commodityNode>();
   selectedCommodityNode: commodityNode;

   parentCollection=new Array<commodityNode>();
   helperCollection=new Array<commodityNode>();

  constructor() { }

  ngOnInit() {

  this.selectedCommodityNode=new commodityNode();
  this.selectedCommodityNode.id=1;
   let commodityNodeItem1=new commodityNode();
   commodityNodeItem1.id=1;
   commodityNodeItem1.name="صنعتی";
   commodityNodeItem1.parentId=0;

   this.commoditiesCollection.push(commodityNodeItem1);

   let commodityNodeItem2=new commodityNode();
   commodityNodeItem2.id=2;
   commodityNodeItem2.name="کشاورزی";
   commodityNodeItem2.parentId=0;

   this.commoditiesCollection.push(commodityNodeItem2);


   let commodityNodeItem3=new commodityNode();
   commodityNodeItem3.id=3;
   commodityNodeItem3.name="پتروشیمی و فرآورده‌های نفتی";
   commodityNodeItem3.parentId=0;

   this.commoditiesCollection.push(commodityNodeItem3);

   let commodityNodeItem4=new commodityNode();
   commodityNodeItem4.id=4;
   commodityNodeItem4.name="معدنی";
   commodityNodeItem4.parentId=0;

   this.commoditiesCollection.push(commodityNodeItem4);


   let commodityNodeItem5=new commodityNode();
   commodityNodeItem5.id=5;
   commodityNodeItem5.name="اموال غیرمنقول";
   commodityNodeItem5.parentId=0;

   this.commoditiesCollection.push(commodityNodeItem5);

   let commodityNodeItem6=new commodityNode();
   commodityNodeItem6.id=6;
   commodityNodeItem6.name="بازار فرعی";
   commodityNodeItem6.parentId=0;

   this.commoditiesCollection.push(commodityNodeItem6);

   let commodityNodeItem11=new commodityNode();
   commodityNodeItem11.id=11;
   commodityNodeItem11.name="آلومنیوم";
   commodityNodeItem11.parentId=1;

   this.commoditiesCollection.push(commodityNodeItem11);

   let commodityNodeItem12=new commodityNode();
   commodityNodeItem12.id=12;
   commodityNodeItem12.name="آهن اسفنجی";
   commodityNodeItem12.parentId=1;

   this.commoditiesCollection.push(commodityNodeItem12);

   let commodityNodeItem111=new commodityNode();
   commodityNodeItem111.id=111;
   commodityNodeItem111.name="اکسید آلومنیوم";
   commodityNodeItem111.parentId=11;

   this.commoditiesCollection.push(commodityNodeItem111);
    
   this.parentCollection=this.commoditiesCollection.filter(x=>x.parentId==0) ;
  }
  isOpenNode=false;
  isCleckied=false
  toggleMe(node:commodityNode){
    this.isOpenNode=!this.isOpenNode;
    this.selectedCommodityNode=node;
    this.isCleckied=true;

    this.helperCollection=this.commoditiesCollection.filter(x=>x.parentId==node.id);
  }

}
