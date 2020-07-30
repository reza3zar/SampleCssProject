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

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    BackGroundComponent,
    TextDecorationComponent,
    FontStyleComponent,
    HoverStyleComponent,
    ListStyleComponent,
    MarginAndPadingComponent
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
