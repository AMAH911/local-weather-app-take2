import { Component, OnInit } from '@angular/core';
import { IcurrentWeather } from '../../icurrent-weather';
import { WeatherService } from 'src/app/Services/weather/weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
current!: IcurrentWeather


constructor(private weatherService: WeatherService){

}

ngOnInit(): void {
 this.weatherService.getCurrentWeather("Bethesda", 'US')
 .subscribe((data)=> this.current = data)
}
}
