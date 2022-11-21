import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LaundryServicesComponent } from './laundry-services.component';

fdescribe('LaundryServicesComponent', () => {
  let component: LaundryServicesComponent;
  let fixture: ComponentFixture<LaundryServicesComponent>;

  // const clothesMock = [
  //   {
  //     id: '12312321',
  //     description: 'asdasda',
  //     gender: 'asdasd',
  //     logoUrl: 'asdasd',
  //     name: 'Camisa',
  //     section: 'asdasd',
  //   },
  //   {
  //     id: '12312321',
  //     description: 'asdasda',
  //     gender: 'asdasd',
  //     logoUrl: 'asdasd',
  //     name: 'Chaqueta',
  //     section: 'asdasd',
  //   },
  // ];

  // const servicesMock = [
  //   {
  //     id: 'wq3123',
  //     name: 'Lavado',
  //   },
  //   {
  //     id: 'wq31232',
  //     name: 'Secado',
  //   },
  // ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LaundryServicesComponent],
      imports: [HttpClientTestingModule],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaundryServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
