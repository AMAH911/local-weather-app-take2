import { Component, OnInit } from '@angular/core';
import { IcurrentWeather } from '../../icurrent-weather';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {

current: IcurrentWeather

constructor(){
  this.current = {
    city: 'Bethesda',
    country: 'Us',
    date: new Date(),
    image:'assets/img/sunny.svg',
    description:'sunny',
    tempurature:72
  } as IcurrentWeather
}

ngOnInit(): void {

}
}
