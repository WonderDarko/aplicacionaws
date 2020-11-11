import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirebaseCRUDComponent } from './firebase-crud/firebase-crud.component';
import { GetServiceComponent } from './get-service/get-service.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { LeafletMapsComponent } from './leaflet-maps/leaflet-maps.component';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { WeatherForecastByLtLngComponent } from './weather-forecast-by-lt-lng/weather-forecast-by-lt-lng.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { WeatherWithFormsComponent } from './weather-with-forms/weather-with-forms.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'pageone', component: PageOneComponent },
  { path: 'pagetwo', component: PageTwoComponent },
  { path: 'main', component: MainComponent },
  { path: 'getservice', component: GetServiceComponent },
  { path: 'quotedetail/:id', component: QuoteDetailComponent},
  { path: 'weatherforecast', component: WeatherForecastComponent},
  { path: 'heroform', component: HeroFormComponent},
  { path: 'weatherwithforms', component: WeatherWithFormsComponent},
  { path: 'leafletmaps', component: LeafletMapsComponent},
  { path: 'weatherforecastbyltlng', component: WeatherForecastByLtLngComponent},
  { path: 'firebasecrud', component: FirebaseCRUDComponent},
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
