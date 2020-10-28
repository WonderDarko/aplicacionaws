import { Component, OnInit } from '@angular/core';
import { WeatherForecastService } from '../weather-forecast.service';
import { Forecast } from '../forecast';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent implements OnInit {
  weatherForecast: Forecast[] = [];
  constructor(private weatherForcastService: WeatherForecastService) { }

  ngOnInit(): void {
    this.getWeatherForecast();
  }

  getWeatherForecast() {
    this.weatherForcastService.getWeatherForecast().subscribe((response: any)=>{
      this.weatherForecast = response.weather;
      console.log(this.weatherForecast);
    })
  }

}
