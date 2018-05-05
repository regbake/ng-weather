import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ContainComponent } from './contain/contain.component';
import { FooterDisplayComponent } from './footer-display/footer-display.component';


@NgModule({
  declarations: [
    AppComponent,
    ContainComponent,
    FooterDisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
