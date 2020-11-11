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
import { WeatherForecastByLtLngComponent } from './weather-forecast-by-lt-lng/weather-forecast-by-lt-lng.component';
import { FirebaseCRUDComponent } from './firebase-crud/firebase-crud.component';
import { AngularFireModule} from '@angular/fire'; 
import { AngularFireDatabaseModule} from '@angular/fire/database'

const firebaseConfig = {
  apiKey: "AIzaSyBgLnDGqcsVoBGxxXc7baKvw5dBWwfBq3Q",
  authDomain: "proyectoawos-2020-e5276.firebaseapp.com",
  databaseURL: "https://proyectoawos-2020-e5276.firebaseio.com",
  projectId: "proyectoawos-2020-e5276",
  storageBucket: "proyectoawos-2020-e5276.appspot.com",
  messagingSenderId: "262369369992",
  appId: "1:262369369992:web:cb6e6c412eca2fd706a43d",
  measurementId: "G-1Y5132YEL8"
};

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
    LeafletMapsComponent,
    WeatherForecastByLtLngComponent,
    FirebaseCRUDComponent
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
