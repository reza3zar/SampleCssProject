import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { BackGroundComponent } from './back-ground/back-ground.component';
import { TextDecorationComponent } from './text-decoration/text-decoration.component';
import { FontStyleComponent } from './font-style/font-style.component';
import { HoverStyleComponent } from './hover-style/hover-style.component';
import { ListStyleComponent } from './list-style/list-style.component';
import { MarginAndPadingComponent } from './margin-and-pading/margin-and-pading.component';


const routes: Routes = [  
  { path: '', component: MainPageComponent },
  { path: 'BG', component: BackGroundComponent },
  {path:'txtDecoration',component:TextDecorationComponent},
  {path:'font',component:FontStyleComponent},
  {path:'Hover',component:HoverStyleComponent},
  {path:'liType',component:ListStyleComponent},
  {path:'mapaStyle',component:MarginAndPadingComponent},


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
