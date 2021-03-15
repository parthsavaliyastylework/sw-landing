
import { BrowserModule } from '@angular/platform-browser';
//impot {NgModule} from '@ng bootstrap/ng bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { NgModule } from '@angular/core';
import { MainComponent } from './layouts/main/main.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar'
import { OwlModule } from 'ngx-owl-carousel';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    OwlModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
