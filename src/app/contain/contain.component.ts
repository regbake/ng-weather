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
        this.temp = Math.floor((data.main.temp-273)*(9/5)+32);
        this.description = data.weather[0].description;
        this.humidity = data.main.humidity;
      })

    //call forecast data
    this.callForecast(this.searchVal)
      .subscribe(data => {
        const list = data.list;

        //iterate over forecast days
        for (let i=0; i<this.forecastDays.length; i++){
          //to find the first matching forecast day
          let matchFlag = false;

          for (let k=0; k<list.length; k++){
            //get the date in a usable form
            const dayString = list[k].dt_txt[8] + list[k].dt_txt[9];

            if (!matchFlag){
              if (this.forecastDays[i] == dayString[1] || this.forecastDays[i] == dayString){
                matchFlag = true;
                //get the weather data from the first matching date
                this.forecastData[i].date = dayString;
                this.forecastData[i].tempF = Math.floor((list[k].main.temp-273)*(9/5)+32);
                console.log('there was a match')
              }
            }


            //console.log(dayString)

          }
        }

        //todo: list is the forecast response, i must parse this
        //and put it into forecastData format
        console.log(list)
      })
  }

  temp = 75;
  description = 'Clear Skies';
  humidity = 52;
  searchVal = "Seattle"
  futureData = [];
  today = new Date();
  forecastDays = [this.today.getDate()+1, this.today.getDate()+2, this.today.getDate()+3, this.today.getDate()+4, this.today.getDate()+5]


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

    //call for current data
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
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q='+ city +'&APPID=7034220ad174adad926edf83b429bdd5');
  };

  callForecast(city){
    return this.http.get('http://api.openweathermap.org/data/2.5/forecast?q='+ city +'&APPID=7034220ad174adad926edf83b429bdd5');
  };

  // FutureDayFunction(month, day, icon, temp){
  //   this.month = month;
  //   this.day = day;
  //   this.icon = icon;
  //   this.temp = temp;
  // };
}
