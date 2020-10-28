import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { GetServiceComponent } from './get-service/get-service.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { FormsModule } from '@angular/forms';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { WeatherWithFormsComponent } from './weather-with-forms/weather-with-forms.component';
import { LeafletMapsComponent } from './leaflet-maps/leaflet-maps.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PageOneComponent,
    PageTwoComponent,
    GetServiceComponent,
    QuoteDetailComponent,
    WeatherForecastComponent,
    HeroFormComponent,
    WeatherWithFormsComponent,
    LeafletMapsComponent
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
