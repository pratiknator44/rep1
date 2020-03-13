import { Component, ViewChild, ElementRef } from '@angular/core';
import { SpeechShareService } from '../speech-share.service';

@Component({
  selector: 'newspeech',
  templateUrl: './newspeech.component.html',
  styleUrls: ['./newspeech.component.scss']
})
export class NewspeechComponent {

  error = {
    title: false,
    date: false,
    body: false,
    author: false
  }

  validatorSuccess= false;


  @ViewChild('title', {static: false}) title: ElementRef;
  @ViewChild('body', {static: false}) body: ElementRef;
  @ViewChild('author', {static: false}) author:ElementRef;
  @ViewChild('year', {static: false}) year: ElementRef;
  @ViewChild('month', {static: false}) month: ElementRef;
  @ViewChild('day', {static: false}) day: ElementRef;
  
  months: string[];
  years: number[] = [];
  days: number[] = [];
  constructor( private _store: SpeechShareService) { 
    this.months = [
      'January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ]
    for(let x=2010; x>=1900; x--) {
      this.years.push(x);
    }
    for( let x=1; x<=31; x++) {
      this.days.push(x);
    }
  }

  validateTitle(title) {
    return (!/[^a-zA-Z0-9]/.test(title)) && title.length>0;
  }

  validator() {
    this.validatorSuccess = true;
    //title
    if(this.title.nativeElement.value.length === 0) 
    { 
      this.error.title = true;
      this.validatorSuccess = false;
    }
    else {
      this.error.title = false;
    //author
    if(/[^a-zA-Z0-9]/.test(this.author.nativeElement.value) || this.author.nativeElement.value.length === 0){
      this.error.author = true;
      this.validatorSuccess = false;
    } else {
      this.error.author = false;
    }

    // date
    let month = this.month.nativeElement.value;
    let year = this.year.nativeElement.value;
    let day = this.day.nativeElement.value;

    if(!(day >= 29 && month !== 'February')  && year > 2020) {
      this.error.date = true;
      this.validatorSuccess = false;
    } else {
      this.error.date = false;
    }
  }
}

  submitForm() {
    this.validator();
    this.validatorSuccess? this.storeSpeech(): '';
  }

  storeSpeech() {
    this._store.add({
      title: this.title.nativeElement.value,
      body: this.body.nativeElement.value,
      author: this.author.nativeElement.value,
      date: this.month.nativeElement.value+' '+this.day.nativeElement.value+', '+this.year.nativeElement.value
    });
  }
}
