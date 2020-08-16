import { Component, OnInit, Input } from '@angular/core';
import { commodityNode } from './commodityNode';

@Component({
  selector: 'app-commodity-tree',
  templateUrl: './commodity-tree.component.html',
  styleUrls: ['./commodity-tree.component.css']
})
export class CommodityTreeComponent implements OnInit {
   @Input() parentId:number=0;


   commoditiesCollection=new Array<commodityNode>();
   selectedCommodityNode: commodityNode;
   tempSelectedCommodityNode: commodityNode;

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

   let commodityNodeItem201=new commodityNode();
   commodityNodeItem201.id=201;
   commodityNodeItem201.name="برنج";
   commodityNodeItem201.parentId=2;
   this.commoditiesCollection.push(commodityNodeItem201);

   let commodityNodeItem202=new commodityNode();
   commodityNodeItem202.id=202;
   commodityNodeItem202.name="پسته";
   commodityNodeItem202.parentId=2;
   this.commoditiesCollection.push(commodityNodeItem202);

   let commodityNodeItem2001=new commodityNode();
   commodityNodeItem2001.id=2001;
   commodityNodeItem2001.name="پنبه محلوج";
   commodityNodeItem2001.parentId=2;
   this.commoditiesCollection.push(commodityNodeItem2001);


   let commodityNodeItem2321=new commodityNode();
   commodityNodeItem2321.id=2321;
   commodityNodeItem2321.name="تخم مرغ";
   commodityNodeItem2321.parentId=2;
   this.commoditiesCollection.push(commodityNodeItem2321);


   let commodityNodeItem2221=new commodityNode();
   commodityNodeItem2221.id=2221;
   commodityNodeItem2221.name="جو";
   commodityNodeItem2221.parentId=2;
   this.commoditiesCollection.push(commodityNodeItem2221);


   let commodityNodeItem2771=new commodityNode();
   commodityNodeItem2771.id=2771;
   commodityNodeItem2771.name="چای";
   commodityNodeItem2771.parentId=2;
   this.commoditiesCollection.push(commodityNodeItem2771);


   let commodityNodeItem213=new commodityNode();
   commodityNodeItem213.id=213;
   commodityNodeItem213.name="خرما";
   commodityNodeItem213.parentId=2;
   this.commoditiesCollection.push(commodityNodeItem213);


   let commodityNodeItem251=new commodityNode();
   commodityNodeItem251.id=251;
   commodityNodeItem251.name="دانه های روغنی";
   commodityNodeItem251.parentId=2;
   this.commoditiesCollection.push(commodityNodeItem251);



   let commodityNodeItem281=new commodityNode();
   commodityNodeItem281.id=281;
   commodityNodeItem281.name="ذرت";
   commodityNodeItem281.parentId=2;
   this.commoditiesCollection.push(commodityNodeItem281);


   let commodityNodeItem291=new commodityNode();
   commodityNodeItem291.id=291;
   commodityNodeItem291.name="روغن خام";
   commodityNodeItem291.parentId=2;
   this.commoditiesCollection.push(commodityNodeItem291);

   let commodityNodeItem26610=new commodityNode();
   commodityNodeItem26610.id=26610;
   commodityNodeItem26610.name="زیره";
   commodityNodeItem26610.parentId=2;
   this.commoditiesCollection.push(commodityNodeItem26610);

   let commodityNodeItem26612=new commodityNode();
   commodityNodeItem26612.id=26612;
   commodityNodeItem26612.name="شکر";
   commodityNodeItem26612.parentId=2;
   this.commoditiesCollection.push(commodityNodeItem26612);


   let commodityNodeItem26613=new commodityNode();
   commodityNodeItem26613.id=26613;
   commodityNodeItem26613.name="عدس";
   commodityNodeItem26613.parentId=2;
   this.commoditiesCollection.push(commodityNodeItem26613);


   let commodityNodeItem26614=new commodityNode();
   commodityNodeItem26614.id=26614;
   commodityNodeItem26614.name="گندم";
   commodityNodeItem26614.parentId=2;
   this.commoditiesCollection.push(commodityNodeItem26614);



   let commodityNodeItem26615=new commodityNode();
   commodityNodeItem26615.id=26615;
   commodityNodeItem26615.name="مرغ منجمد";
   commodityNodeItem26615.parentId=2;
   this.commoditiesCollection.push(commodityNodeItem26615);

   let commodityNodeItem26616=new commodityNode();
   commodityNodeItem26616.id=26616;
   commodityNodeItem26616.name="مرغ و جوجه";
   commodityNodeItem26616.parentId=2;
   this.commoditiesCollection.push(commodityNodeItem26616);


   let commodityNodeItem26617=new commodityNode();
   commodityNodeItem26617.id=26617;
   commodityNodeItem26617.name="نخود";
   commodityNodeItem26617.parentId=2;
   this.commoditiesCollection.push(commodityNodeItem26617);


   let commodityNodeItem26618=new commodityNode();
   commodityNodeItem26618.id=26618;
   commodityNodeItem26618.name="کشمش";
   commodityNodeItem26618.parentId=2;
   this.commoditiesCollection.push(commodityNodeItem26618);

   let commodityNodeItem26619=new commodityNode();
   commodityNodeItem26619.id=26619;
   commodityNodeItem26619.name="کنجاله ها";
   commodityNodeItem26619.parentId=2;
   this.commoditiesCollection.push(commodityNodeItem26619);


   let commodityNodeItem26620=new commodityNode();
   commodityNodeItem26620.id=2661;
   commodityNodeItem26620.name="کنستانتره و تفاله ها";
   commodityNodeItem26620.parentId=2;
   this.commoditiesCollection.push(commodityNodeItem26620);

  

   let commodityNodeItem211=new commodityNode();
   commodityNodeItem211.id=211;
   commodityNodeItem211.name="گندم دانه درشت";
   commodityNodeItem211.parentId=21;

   this.commoditiesCollection.push(commodityNodeItem211);

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


   let commodityNodeItem13=new commodityNode();
   commodityNodeItem13.id=13;
   commodityNodeItem13.name="خودرو";
   commodityNodeItem13.parentId=1;

   this.commoditiesCollection.push(commodityNodeItem13);

   let commodityNodeItem14=new commodityNode();
   commodityNodeItem14.id=14;
   commodityNodeItem14.name="روی";
   commodityNodeItem14.parentId=1;

   this.commoditiesCollection.push(commodityNodeItem14);


   let commodityNodeItem15=new commodityNode();
   commodityNodeItem15.id=15;
   commodityNodeItem15.name="سرب";
   commodityNodeItem15.parentId=1;

   this.commoditiesCollection.push(commodityNodeItem15);


   let commodityNodeItem16=new commodityNode();
   commodityNodeItem16.id=16;
   commodityNodeItem16.name="سنگ آهن";
   commodityNodeItem16.parentId=1;

   this.commoditiesCollection.push(commodityNodeItem16);


   let commodityNodeItem17=new commodityNode();
   commodityNodeItem17.id=17;
   commodityNodeItem17.name="سیمان";
   commodityNodeItem17.parentId=1;

   this.commoditiesCollection.push(commodityNodeItem17);


   let commodityNodeItem18=new commodityNode();
   commodityNodeItem18.id=18;
   commodityNodeItem18.name="فولاد";
   commodityNodeItem18.parentId=1;

   this.commoditiesCollection.push(commodityNodeItem18);


   let commodityNodeItem19=new commodityNode();
   commodityNodeItem19.id=19;
   commodityNodeItem19.name="طلا";
   commodityNodeItem19.parentId=1;

   this.commoditiesCollection.push(commodityNodeItem19);


   let commodityNodeItem20=new commodityNode();
   commodityNodeItem20.id=20;
   commodityNodeItem20.name="مس";
   commodityNodeItem20.parentId=1;

   this.commoditiesCollection.push(commodityNodeItem20);

   let commodityNodeItem210=new commodityNode();
   commodityNodeItem210.id=210;
   commodityNodeItem210.name="نیکل";
   commodityNodeItem210.parentId=1;

   this.commoditiesCollection.push(commodityNodeItem210);

   let commodityNodeItem2100=new commodityNode();
   commodityNodeItem2100.id=2100;
   commodityNodeItem2100.name="کنسانتره";
   commodityNodeItem2100.parentId=1;

   this.commoditiesCollection.push(commodityNodeItem2100);

   let commodityNodeItem2101=new commodityNode();
   commodityNodeItem2101.id=2101;
   commodityNodeItem2101.name="کنسانتره مولییدن";
   commodityNodeItem2101.parentId=1;

   this.commoditiesCollection.push(commodityNodeItem2101);

   let commodityNodeItem2102=new commodityNode();
   commodityNodeItem2102.id=2102;
   commodityNodeItem2102.name="کک";
   commodityNodeItem2102.parentId=1;

   this.commoditiesCollection.push(commodityNodeItem2102);
 
   let commodityNodeItem111=new commodityNode();
   commodityNodeItem111.id=111;
   commodityNodeItem111.name="اکسید آلومنیوم";
   commodityNodeItem111.parentId=11;

   this.commoditiesCollection.push(commodityNodeItem111);


   let commodityNodeItem121=new commodityNode();
   commodityNodeItem121.id=121;
   commodityNodeItem121.name="آهن اسفنجی سبک";
   commodityNodeItem121.parentId=12;

   this.commoditiesCollection.push(commodityNodeItem121);

   let commodityNodeItem122=new commodityNode();
   commodityNodeItem122.id=122;
   commodityNodeItem122.name="آهن اسفنجی سبک خطی";
   commodityNodeItem122.parentId=121;
   commodityNodeItem122.isChecked=true;
   this.commoditiesCollection.push(commodityNodeItem122);

   let commodityNodeItem123=new commodityNode();
   commodityNodeItem123.id=123;
   commodityNodeItem123.name="نماد DRI";
   commodityNodeItem123.parentId=122;
   commodityNodeItem123.isChecked=true;
   this.commoditiesCollection.push(commodityNodeItem123);

    
   this.parentCollection=this.commoditiesCollection.filter(x=>x.parentId==this.parentId) ;
  }
  isOpenNode=false;
  isCleckied=false
  toggleMe(node:commodityNode){
    this.selectedCommodityNode=node;

    if(node.id==this.selectedCommodityNode.id)
       this.selectedCommodityNode.isOpen=!this.selectedCommodityNode.isOpen;

 
    this.isCleckied=true;

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

  }

}
