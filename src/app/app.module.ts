import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherHomeComponent } from './modules/wheater/page/weather-home/weather-home.component';
import { WeatherCardComponent } from './modules/wheater/components/weather-card/weather-card.component'
import { FullCalendarModule } from '@fullcalendar/angular';

@NgModule({
  declarations: [
    AppComponent,
    WeatherHomeComponent,
    WeatherCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // biblioteca de animações
    HttpClientModule, // requisições qualquer do backend precisa dele
    FormsModule, // formularios simples
    FontAwesomeModule, // icones
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
