import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contain',
  templateUrl: './contain.component.html',
  styleUrls: ['./contain.component.css']
})
export class ContainComponent implements OnInit {

  constructor( private http: HttpClient ) {}

  ngOnInit() {
    //get current data on first load
    this.getCurrent(this.searchVal)
      .subscribe(data => {
        this.temp = Math.floor((data.main.temp-273)*(9/5)+32)
        this.description = data.weather[0].description;
        this.humidity = data.main.humidity;
      })
  }

  temp = 75;
  description = 'Clear Skies';
  humidity = 52;
  searchVal = "Seattle"

  forecastData = [{
    date: 'June 20',
    tempF: '75',
    tempC: '23'
  },
  {
    date: 'June 21',
    tempF: '82',
    tempC: '28'
  },
  {
    date: 'June 22',
    tempF: '120',
    tempC: '55'
  },
  {
    date: 'June 23',
    tempF: '100',
    tempC: '38'
  },
  {
    date: 'June 24',
    tempF: '71',
    tempC: '18'
  }];

  handleSubmit(){
    //submit city
    console.log('you submitted', this.searchVal);

    //call for data
    this.getCurrent(this.searchVal)
      .subscribe(data => {
        this.temp = Math.floor((data.main.temp-273)*(9/5)+32)
        this.description = data.weather[0].description;
        this.humidity = data.main.humidity;
      })
  };

  handleInput(event){
    //bind search data
    this.searchVal = event.target.value;
  };

  bombSquad(){
    //clear search
    this.searchVal = '';
  };

  getCurrent(city){
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q='+ city +'&APPID=7034220ad174adad926edf83b429bdd5')
  };

  callForecast(city){
    // return axios.get('http://api.openweathermap.org/data/2.5/forecast?q='+ city +'&APPID=7034220ad174adad926edf83b429bdd5');
  };

  FutureDayFunction(month, day, icon, temp){
    // this.month = month;
    // this.day = day;
    // this.icon = icon;
    // this.temp = temp;
  };
}
