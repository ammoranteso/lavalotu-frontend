import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { FormArray } from '@angular/forms';
import { IClothe } from '@domain/model/interfaces/clothe.interface';
import { IMaterial } from '@domain/model/interfaces/material.interface';
import { IPriceUpload } from '@domain/model/interfaces/priceupload.interface';
import { ILaundryService } from '@domain/model/interfaces/service.interface';
import { ModalsService } from '@services/modals/modals.service';
import { IFacadeApiMap } from '@utils/interfaces/auxiliary';
import { Observable } from 'rxjs';
import { SubSink } from 'subsink';

/**
 * DUMB: Row for input services
 */
@Component({
  selector: 'app-clothes-row',
  templateUrl: './clothe-row.component.html',
  styleUrls: ['./clothe-row.component.scss'],
})
export class ClotheRowComponent implements OnDestroy {
  constructor(private readonly modalsService: ModalsService) {}

  /**
   * The subscription sink object that stores all subscriptions
   */
  subs = new SubSink();

  /**
   * Index of the component
   */
  @Input()
  index!: number;

  /**
   * All columns to display
   */
  @Input()
  selectedServices!: ILaundryService[];

  /**
   * Clothe to display
   */
  @Input()
  clothe!: IClothe;

  /**
   * Materials to display
   */
  @Input()
  allMaterials$!: Observable<IFacadeApiMap<IMaterial[]>>;

  /**
   * Selected materials
   */
  selectedMaterials: IMaterial[] = [];

  /**
   * Info with prices
   */
  clothePricesArray = new FormArray([]);

  /**
   * Output with the prices
   */
  @Output()
  pricesMiniArray = new EventEmitter();

  /**
   * Output lenght of selected array
   */
  @Output()
  materialsArrayLenght = new EventEmitter();

  /**
   * Flag used to collapse or not the component
   */
  @Input()
  toggleMaterials!: boolean;

  /**
   * Opens modal, with the materials selected, and the aviable materials from back.
   */
  showMaterials(): void {
    this.subs.sink = this.modalsService
      .showMaterialsModal(this.allMaterials$, this.selectedMaterials)
      .afterClosed()
      .subscribe((selected) => {
        this.selectedMaterials = selected;
        this.materialsArrayLenght.emit({
          length: selected.length,
          index: this.index,
        });
      });
  }

  /**
   * Propagates output to parent
   */
  outputData(e: IPriceUpload) {
    this.pricesMiniArray.emit(e);
    // console.log(e);
  }

  // tslint:disable-next-line: completed-docs
  ngOnDestroy(): void {
    // Unsubsribes from all observables
    this.subs.unsubscribe();
  }
}
