import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
} from '@angular/core/testing';
import { ModalsModule } from '@modules/modals/modals.module';
import { ModalsService } from '@services/modals/modals.service';

import { ClotheRowComponent } from './clothe-row.component';

fdescribe('ClotheRowComponent', () => {
  let component: ClotheRowComponent;
  let fixture: ComponentFixture<ClotheRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClotheRowComponent],
      imports: [ModalsModule],
      providers: [ModalsService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClotheRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Modal should be closed at begining', fakeAsync(() => {
    spyOn(component, 'showMaterials');
    expect(component.showMaterials).not.toHaveBeenCalled();
  }));

  it('Modal should open at button click', fakeAsync(() => {
    spyOn(component, 'showMaterials');
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    expect(component.showMaterials).toHaveBeenCalled();
  }));
});
