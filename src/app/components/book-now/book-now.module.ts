import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookNowRoutingModule } from './book-now-routing.module';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { OwlModule } from 'ngx-owl-carousel';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
  HomeComponent,

],
  imports: [
    CommonModule,
    BookNowRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    OwlModule,
    HttpClientModule,
  
  ],
  providers:[],
  exports: [],
})
export class BookNowModule { }
