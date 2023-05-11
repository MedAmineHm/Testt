import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VedioComponent } from './vedio/vedio.component';
import { AddvedioComponent } from './addvedio/addvedio.component';
import { ListvedioComponent } from './listvedio/listvedio.component';

@NgModule({
  declarations: [
    AppComponent,
    VedioComponent,
    AddvedioComponent,
    ListvedioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
