import { Component, OnInit, ViewChild, ElementRef, OnChanges } from '@angular/core';
import { SpeechShareService } from '../speech-share.service';

@Component({
  selector: 'app-speech',
  templateUrl: './speech.component.html',
  styleUrls: ['./speech.component.scss']
})
export class SpeechComponent implements OnChanges {

  matches = [];
  searchedBy: 'author' | 'date' | 'speech' | 'title';
  beingSeached = false;

  @ViewChild('searchedWord', {static: false}) searchword: ElementRef;

  constructor(private _store:SpeechShareService) {
    this.matches = this._store.speeches;
  }

  ngOnChanges() {
    this.matches = [];
    this.matches = this._store.speeches;
  }

  searchIt() {
    if(this.searchword.nativeElement.value || this.searchword.nativeElement.value.length > 0) this.beingSeached = true;
    else {
      this.beingSeached = false;
      this.matches = this._store.speeches;
      return;
    }
    this.beingSeached = true;
    this.matches = this._store.search(this.searchword.nativeElement.value);
    console.log(this.matches);
  }
}
