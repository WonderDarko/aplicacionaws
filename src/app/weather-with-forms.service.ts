import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherWithFormsService {

  constructor(private http: HttpClient) { }

  getWeatherwithForms(latitud: number, longitud: number){
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?lat='+latitud+'&lon='+longitud+'&appid=b3c18bed97c1a57c95534f595fee9ce5')
  }
}

