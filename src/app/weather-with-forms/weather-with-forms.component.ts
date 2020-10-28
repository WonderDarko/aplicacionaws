import { Component, OnInit } from '@angular/core';
import { Coordinate } from '../coordinate';
import { Forecast } from '../forecast';
import { WeatherWithFormsService } from '../weather-with-forms.service';

@Component({
  selector: 'app-weather-with-forms',
  templateUrl: './weather-with-forms.component.html',
  styleUrls: ['./weather-with-forms.component.css']
})
export class WeatherWithFormsComponent implements OnInit {
  weatherForms: Forecast[] = [];
  constructor(private weatherWithFormsService: WeatherWithFormsService) { }
  locationObj= new Coordinate(0, 0);
  ngOnInit(): void {
    this.getWeatherWithForms();
  }

  getWeatherWithForms(){
    this.weatherWithFormsService.getWeatherwithForms(this.locationObj.latitud, this.locationObj.longitud).subscribe((response: any) => {
      this.weatherForms = response.weather;
      console.log(this.weatherForms);
    })
  }

  submit(){
    this.getWeatherWithForms();
  }
}

