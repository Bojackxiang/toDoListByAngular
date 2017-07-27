import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { ShowComponent } from './show/show.component';

import {FormsModule} from '@angular/forms';  //[(ngModel)] 数据绑定 -- 1


@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule                             //[(ngModel)] 数据绑定 -- 2
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
