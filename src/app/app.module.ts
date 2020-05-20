import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Child1Component } from './components/child1/child1.component';
import { Child2Component } from './components/child2/child2.component';
import { HelloService } from './services/hello.service';


@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HelloService],
  bootstrap: [AppComponent]
})
export class AppModule { }
