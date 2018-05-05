import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-display',
  templateUrl: './footer-display.component.html',
  styleUrls: ['./footer-display.component.css']
})
export class FooterDisplayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  date = 'June 20'
  tempF = '75'
  tempC = '20'

}
