import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { BackGroundComponent } from './back-ground/back-ground.component';


import { FormsModule } from '@angular/forms';
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
import { CommodityNodeItemComponent } from './commodity-node-item/commodity-node-item.component';
import { CommodityTreeNewComponent } from './commodity-tree-new/commodity-tree-new.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    BackGroundComponent,
    TextDecorationComponent,
    FontStyleComponent,
    HoverStyleComponent,
    ListStyleComponent,
    MarginAndPadingComponent,
    BorderComponent,
    MinAndMaxWidthAndHeightComponent,
    DisplayComponent,
    FixDisplayComponent,
    FloatComponent,
    MouseEventComponent,
    PseudoElementComponent,
    CssSelectorComponent,
    CommodityTreeComponent,
    CommodityNodeItemComponent,
    CommodityTreeNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
