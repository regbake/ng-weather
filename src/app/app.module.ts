import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


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
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
