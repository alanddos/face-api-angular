import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebcamDetectComponent } from './webcam-detect.component';

describe('WebcamDetectComponent', () => {
  let component: WebcamDetectComponent;
  let fixture: ComponentFixture<WebcamDetectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebcamDetectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebcamDetectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
