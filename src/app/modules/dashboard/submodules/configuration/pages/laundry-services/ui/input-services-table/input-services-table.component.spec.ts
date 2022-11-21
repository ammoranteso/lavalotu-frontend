import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MaterialsFacade } from '@domain/application/facade';

import { InputServicesTableComponent } from './input-services-table.component';

fdescribe('InputServicesTableComponent', () => {
  let component: InputServicesTableComponent;
  let fixture: ComponentFixture<InputServicesTableComponent>;
  const clothesMock = [
    {
      id: '12312321',
      description: 'asdasda',
      gender: 'asdasd',
      logoUrl: 'asdasd',
      name: 'Camisa',
      section: 'asdasd',
    },
    {
      id: '12312321',
      description: 'asdasda',
      gender: 'asdasd',
      logoUrl: 'asdasd',
      name: 'Chaqueta',
      section: 'asdasd',
    },
  ];

  const servicesMock = [
    {
      id: 'wq3123',
      name: 'Lavado',
    },
    {
      id: 'wq31232',
      name: 'Secado',
    },
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputServicesTableComponent],
      imports: [HttpClientTestingModule],
      providers: [MaterialsFacade],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputServicesTableComponent);
    component = fixture.componentInstance;
    component.selectedServices = servicesMock;
    component.selectedClothes = clothesMock;
    fixture.detectChanges();
  });

  it('should create arrays with correct size', () => {
    expect(component.showMaterials.length).toBe(clothesMock.length);
    expect(component.clotheLength.length).toBe(clothesMock.length);
  });

  it('should call the update arrays functions on click', fakeAsync(() => {
    fixture.detectChanges();
    spyOn(component, 'toggleMaterials');
    const el = fixture.debugElement.query(By.css('.content__clothe'));
    el.nativeElement.click();
    expect(component.toggleMaterials).toHaveBeenCalled();
  }));

  it('should update the toggle materials array in the correct position', fakeAsync(() => {
    spyOn(component, 'toggleMaterials');
    component.toggleMaterials(0);
    console.log(component.showMaterials);
    expect(component.showMaterials[1]).toBe(true);
  }));
});
