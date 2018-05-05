import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer-display',
  templateUrl: './footer-display.component.html',
  styleUrls: ['./footer-display.component.css']
})
export class FooterDisplayComponent implements OnInit {

  constructor() { }

  @Input('forecast') forecast: any;

  ngOnInit() {
  }

}
