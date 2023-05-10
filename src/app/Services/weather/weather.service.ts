import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IcurrentWeather } from 'src/app/icurrent-weather';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

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

   getCurrentWeather(city: string , country: string): Observable<IcurrentWeather>{

    const uriParams = new HttpParams()
    .set('q', `${city}, ${country}`)
    .set('appId', environment.appId)

    return this.httpClient.get<ICurrentWeatherData>(`${environment.baseUrl}api.openweathermap.org/data/2.5/weather`, {params: uriParams}).pipe(map(data => this.transformToICurrentWeather(data)))


   }

   private transformToICurrentWeather(data: ICurrentWeatherData): IcurrentWeather {
    return {
      city: data.name,
      country: data.sys.country,
      date: data.dt * 1000,
      image:
      `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
      tempurature:this.convertKelvinToFarenheit(data.main.temp),
      description:data.weather[0].decription
    }
   }

   private convertKelvinToFarenheit(kelvin: number): number {
    return kelvin * 9/5 - 459.67
   }
}
