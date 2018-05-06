import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contain',
  templateUrl: './contain.component.html',
  styleUrls: ['./contain.component.css']
})
export class ContainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  temp = 75;
  description = 'Clear Skies';
  humidity = 52;
  searchVal = "Seattle"

  forecastData: Array<any> = [{
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
    console.log('you submitted', this.searchVal);
  };

  handleInput(event){
    this.searchVal = event.target.value;
  };

}
