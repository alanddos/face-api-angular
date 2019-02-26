import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WebCamModule } from 'ack-angular-webcam';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebcamDetectComponent } from './webcam-detect/webcam-detect.component';


@NgModule({
  declarations: [
    AppComponent,
    WebcamDetectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WebCamModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
