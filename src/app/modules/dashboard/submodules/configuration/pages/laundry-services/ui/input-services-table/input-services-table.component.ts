import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MaterialsFacade } from '@domain/application/facade';
import { IClothe } from '@domain/model/interfaces/clothe.interface';
import { IMaterial } from '@domain/model/interfaces/material.interface';
import { IPriceUpload } from '@domain/model/interfaces/priceupload.interface';
import { ILaundryService } from '@domain/model/interfaces/service.interface';
import { IFacadeApiMap } from '@utils/interfaces/auxiliary';
import { Observable } from 'rxjs';

/**
 * SMART: Table for input services
 */
@Component({
  selector: 'app-input-services-table',
  templateUrl: './input-services-table.component.html',
  styleUrls: ['./input-services-table.component.scss'],
})
export class InputServicesTableComponent implements OnInit {
  constructor(private readonly materialsFacade: MaterialsFacade) {}
  /**
   * All columns to display
   */
  @Input()
  selectedServices: ILaundryService[] = [];

  /**
   * All clothes to display
   */
  @Input()
  selectedClothes: IClothe[] = [];

  /**
   * Materials to display
   */
  allMaterials$!: Observable<IFacadeApiMap<IMaterial[]>>;

  /**
   * Mats lenght
   */
  clotheLength: number[] = [];

  /**
   * Output with the prices
   */
  @Output()
  pricesMiniArray = new EventEmitter();

  /**
   * Flag to show materials
   */
  showMaterials: boolean[] = [];

  /**
   * Obtain all the materials
   */
  rehydrateMaterials() {
    this.allMaterials$ = this.materialsFacade.allMaterials$;
  }

  /**
   * Propagates output to parent
   */
  outputData(e: IPriceUpload) {
    this.pricesMiniArray.emit(e);
  }

  /**
   * Index and lenght in given position
   * @param param0 Object with lenght and index
   */
  receiveMaterialsLenght({ length, index }: { length: number; index: number }) {
    this.clotheLength[index] = length;
    // console.log(this.clotheLength);
  }

  /**
   * Triggers the flag for the modal
   * @param index Position
   */
  toggleMaterials(index: number): void {
    this.showMaterials[index] = !this.showMaterials[index];
  }

  // tslint:disable-next-line: completed-docs
  ngOnInit() {
    this.rehydrateMaterials();
    this.selectedClothes.forEach(() => {
      this.clotheLength.push(0);
      this.showMaterials.push(true);
    });
  }
}
