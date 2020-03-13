import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewspeechComponent } from './newspeech.component';

describe('NewspeechComponent', () => {
  let component: NewspeechComponent;
  let fixture: ComponentFixture<NewspeechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewspeechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewspeechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
