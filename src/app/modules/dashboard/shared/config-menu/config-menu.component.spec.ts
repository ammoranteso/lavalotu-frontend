import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfigMenuComponent } from '@modules/dashboard';
import { By } from '@angular/platform-browser';

fdescribe('ConfigMenuComponent', () => {
  let component: ConfigMenuComponent;
  let fixture: ComponentFixture<ConfigMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConfigMenuComponent],
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Expects component should be hidden by default
  it('Should be hidden by default', () => {
    expect(component.visible).toBeFalse();
    expect(fixture.debugElement.query(By.css('.menu__container'))).toBeNull();
  });
});
