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
    tempF: '55',
    tempC: '120'
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

}
