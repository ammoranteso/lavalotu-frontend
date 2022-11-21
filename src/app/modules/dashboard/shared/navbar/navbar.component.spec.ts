import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';

fdescribe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Modify variable value', () => {
    spyOn(component, 'toggleMenu');
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    expect(component.toggleMenu).toHaveBeenCalled();
  });

  it('Correct value of show variable', () => {
    expect(component.showMenu).toBeFalse();
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    expect(component.showMenu).not.toBeFalse();
    button.click();
    expect(component.showMenu).toBeFalse();
  });
});
