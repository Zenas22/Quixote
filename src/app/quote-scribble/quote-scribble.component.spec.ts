import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteScribbleComponent } from './quote-scribble.component';

describe('QuoteScribbleComponent', () => {
  let component: QuoteScribbleComponent;
  let fixture: ComponentFixture<QuoteScribbleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteScribbleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteScribbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
