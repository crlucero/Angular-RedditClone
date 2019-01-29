import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { routing } from './app.routing';
import { HotComponent } from './hot/hot.component';
import { NewComponent } from './new/new.component';
import { ControversialComponent } from './controversial/controversial.component';
import { TopComponent } from './top/top.component';
import { HotdetailComponent } from './hotdetail/hotdetail.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    HotComponent,
    NewComponent,
    ControversialComponent,
    TopComponent,
    HotdetailComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
