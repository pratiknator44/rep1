import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSpeechComponent } from './view-speech.component';

describe('ViewSpeechComponent', () => {
  let component: ViewSpeechComponent;
  let fixture: ComponentFixture<ViewSpeechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSpeechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSpeechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
