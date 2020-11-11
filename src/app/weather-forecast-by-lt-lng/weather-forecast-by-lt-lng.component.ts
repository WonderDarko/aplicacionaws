import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Coordinate } from '../coordinate';
import { Forecast } from '../forecast';
import { WeatherWithFormsService } from '../weather-with-forms.service';

@Component({
  selector: 'app-weather-forecast-by-lt-lng',
  templateUrl: './weather-forecast-by-lt-lng.component.html',
  styleUrls: ['./weather-forecast-by-lt-lng.component.css']
})
export class WeatherForecastByLtLngComponent implements OnInit {
  private map;
  weatherByLatLng: Forecast[] = [];
  constructor(private weatherWithFormsService: WeatherWithFormsService) { }
  locationObj = new Coordinate(19.0413, -98.2062);
  ngOnInit(): void {
    this.initMap();
    this.getWeatherWithForms();
  }

  private initMap() {
    this.map = L.map('mapid').setView([19.0413, -98.2062], 13);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoid29uZGVyLWRhcmtvIiwiYSI6ImNrZ3NmZWk3YjA1Y28ycm81aDZqejMzaXYifQ.PQNI3Hyp9dqYDBjFOtXiSQ', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1Ijoid29uZGVyLWRhcmtvIiwiYSI6ImNrZ3NmZWk3YjA1Y28ycm81aDZqejMzaXYifQ.PQNI3Hyp9dqYDBjFOtXiSQ'
    }).addTo(this.map);

    var marker = L.marker([19.0413, -98.2062], {
      icon: L.icon({
        iconUrl: 'leaflet/marker-icon.png',
        shadowUrl: 'leaflet/marker-shadow.png'
      })
    }).addTo(this.map);

    marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

    this.map.on('click', (e) => {
      console.log(e.latlng)
      var marker = L.marker([e.latlng.lat, e.latlng.lng], {
        icon: L.icon({
          iconUrl: 'leaflet/marker-icon.png',
          shadowUrl: 'leaflet/marker-shadow.png'
        })
      }).addTo(this.map);
      marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
      this.locationObj = new Coordinate(e.latlng.lat, e.latlng.lng);
    })

  }

  getWeatherWithForms(){
    this.weatherWithFormsService.getWeatherwithForms(this.locationObj.latitud, this.locationObj.longitud).subscribe((response: any) => {
      this.weatherByLatLng = response.weather;
      console.log(this.weatherByLatLng);
    })
  }

  submit(){
    this.getWeatherWithForms();
  }

}
