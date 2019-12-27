import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MyFirstComponent} from './myFirst.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
