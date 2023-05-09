import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface ICurrentWeatherData {
  weather: [{
    decription: string,
    icon: string
  }],

  main: {
    temp: number
  },
  sys: {
    country: string
  },

  dt: number,

  name:string
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) {

   }
}
