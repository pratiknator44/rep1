import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpeechShareService } from '../speech-share.service';

@Component({
  selector: 'app-view-speech',
  templateUrl: './view-speech.component.html',
  styleUrls: ['./view-speech.component.scss']
})
export class ViewSpeechComponent implements OnInit {
  speech: any;
  index: number;

  @ViewChild('speechDiv',{static: false}) speechBody: ElementRef;
  constructor(
    private route: ActivatedRoute,
    private _store: SpeechShareService) { }

  ngOnInit() {
    let a = this.route
    .queryParams
    .subscribe(params => {
      // Defaults to 0 if no query param provided.
      console.log(params);
      if(params){
      this.speech = this._store.speeches[parseInt(params.index)];
      this.index = parseInt(params.index);
      } else{
        this.speech = this._store.speeches[0];
        this.index = 0;
      }
    });
  }

  deleteSpeech() {
    this._store.deleteByIndex(this.index);
  }
}
