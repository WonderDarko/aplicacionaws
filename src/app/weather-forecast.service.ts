import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastService {

  constructor(private http: HttpClient) { }

  getWeatherForecast(){
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=tehuacan&appid=b3c18bed97c1a57c95534f595fee9ce5')
  }
}
