import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpeechComponent } from './speech/speech.component';
import { NewspeechComponent } from './newspeech/newspeech.component';
import { NgModule } from '@angular/core';
import { TrimPipe } from './trim.pipe';
import { ViewSpeechComponent } from './view-speech/view-speech.component';
@NgModule({
  declarations: [
    AppComponent,
    SpeechComponent,
    NewspeechComponent,
    TrimPipe,
    ViewSpeechComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
