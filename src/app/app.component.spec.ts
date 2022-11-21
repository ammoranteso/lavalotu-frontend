import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({}).compileComponents();
  }));

  beforeEach(() => {
    component = new AppComponent();
  });

  it('Should create the app instance', () => {
    expect(component).toBeTruthy();
  });
});
