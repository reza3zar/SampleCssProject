import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { BackGroundComponent } from './back-ground/back-ground.component';
import { TextDecorationComponent } from './text-decoration/text-decoration.component';
import { FontStyleComponent } from './font-style/font-style.component';
import { HoverStyleComponent } from './hover-style/hover-style.component';
import { ListStyleComponent } from './list-style/list-style.component';
import { MarginAndPadingComponent } from './margin-and-pading/margin-and-pading.component';
import { BorderComponent } from './border/border.component';
import { MinAndMaxWidthAndHeightComponent } from './min-and-max-width-and-height/min-and-max-width-and-height.component';
import { DisplayComponent } from './display/display.component';
import { FixDisplayComponent } from './fix-display/fix-display.component';
import { FloatComponent } from './float/float.component';
import { MouseEventComponent } from './mouse-event/mouse-event.component';
import { PseudoElementComponent } from './pseudo-element/pseudo-element.component';
import { CssSelectorComponent } from './css-selector/css-selector.component';
import { CommodityTreeComponent } from './commodity-tree/commodity-tree.component';
import { CommodityTreeNewComponent } from './commodity-tree-new/commodity-tree-new.component';


const routes: Routes = [  
  { path: '', component: MainPageComponent },
  { path: 'BG', component: BackGroundComponent },
  {path:'txtDecoration',component:TextDecorationComponent},
  {path:'font',component:FontStyleComponent},
  {path:'Hover',component:HoverStyleComponent},
  {path:'liType',component:ListStyleComponent},
  {path:'mapaStyle',component:MarginAndPadingComponent},
  {path:'border',component:BorderComponent},
  {path:'minAndMaxWidthHeight',component:MinAndMaxWidthAndHeightComponent},
  {path:'display',component:DisplayComponent},
  {path:'fix',component:FixDisplayComponent},
  {path:'float',component:FloatComponent},
  {path:'mouseEvent',component:MouseEventComponent},
  {path:'PseudoElement',component:PseudoElementComponent},
  {path:'cssSelectore',component:CssSelectorComponent},
  {path:'commodityTree',component:CommodityTreeComponent},
  {path:'commodityTreeNew',component:CommodityTreeNewComponent},


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
