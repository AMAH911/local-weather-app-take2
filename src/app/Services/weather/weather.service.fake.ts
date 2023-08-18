import { Observable, of } from "rxjs";
import { IWeatherService, WeatherService} from "./weather.service";
import {IcurrentWeather} from "../../interfaces/icurrent-weather";


export const fakeWeather: IcurrentWeather = {
  city: "Miami",
  country:"USA",
  date: 1485789600,
  image: '',
  tempurature: 280.32,
  description: 'light intensity drizzle'
}

export class WeatherServiceFake implements IWeatherService {
  public getCurrentWeather(city: string, country: string): Observable<IcurrentWeather> {
      return of(fakeWeather)
  }
}
