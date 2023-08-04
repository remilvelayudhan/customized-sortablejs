import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { ArrangeComponent } from './arrange/arrange.component';
import { AbstractArrangeDirective } from './arrange/abstract-arrange.directive';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, CommonModule, ArrangeComponent],
  declarations: [AppComponent, AbstractArrangeDirective],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
