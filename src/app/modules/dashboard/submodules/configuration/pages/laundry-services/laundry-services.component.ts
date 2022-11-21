import { Component, OnInit } from '@angular/core';
import {
  LaundryServicesFacade,
  ClothesFacade,
  EstablishmentFacade,
} from '@domain/application/facade';
import { ILaundryService } from '@domain/model/interfaces/service.interface';
import { IClothe } from '@domain/model/interfaces/clothe.interface';
import { Observable } from 'rxjs';
import { ClotheSection } from '@domain/model/enums/clothe-section.enum';
import { IFacadeApiMap } from '@utils/interfaces/auxiliary';
import { addItemArray } from '@utils/functions/add-item-array.function';
import { IPrices } from '@domain/model/interfaces/prices.interface';
import { LocalstorageService } from '@services/localstorage/localstorage.service';
import { IPriceUpload } from '@domain/model/interfaces/priceupload.interface';

/**
 * Services module wrapper
 */
@Component({
  templateUrl: './laundry-services.component.html',
  styleUrls: ['./laundry-services.component.scss'],
})
export class LaundryServicesComponent implements OnInit {
  constructor(
    private readonly servicesFacade: LaundryServicesFacade,
    private readonly establishmentFacade: EstablishmentFacade,
    private readonly clothesFacade: ClothesFacade,
    private readonly localStorageService: LocalstorageService
  ) {}

  /**
   * All items aviable with filter "otros"
   */
  others$!: Observable<IFacadeApiMap<IClothe[]>>;

  /**
   * All items aviable with filter "ropa"
   */
  clothes$!: Observable<IFacadeApiMap<IClothe[]>>;

  /**
   * All items aviable with filter "calzado"
   */
  shoes$!: Observable<IFacadeApiMap<IClothe[]>>;

  /**
   * All items aviable with filter "hogar"
   */
  home$!: Observable<IFacadeApiMap<IClothe[]>>;

  /**
   * Services to display
   */
  allServices$!: Observable<IFacadeApiMap<ILaundryService[]>>;

  /**
   * Selected services
   */
  selectedServices: ILaundryService[] = [];

  /**
   * Selected clothes
   */
  selectedClothes: IClothe[] = [];

  /**
   * Flag used to switch sections
   */
  completedSection1: boolean = false;

  /**
   * All the prices data
   */
  pricesData: IPrices[] = [];

  /**
   * Obtain all the fields
   */
  rehydrateAll() {
    this.others$ = this.clothesFacade.filterClothes(ClotheSection.OTHERS);
    this.clothes$ = this.clothesFacade.filterClothes(ClotheSection.CLOTHES);
    this.shoes$ = this.clothesFacade.filterClothes(ClotheSection.SHOES);
    this.home$ = this.clothesFacade.filterClothes(ClotheSection.HOME);
    this.allServices$ = this.servicesFacade.allServices$;
  }

  /**
   * Adds a clothe to the list of checked ones
   * @param Clothe to add
   */
  addItemToArray(
    e: IClothe | ILaundryService,
    array: Array<IClothe | ILaundryService>
  ): void {
    addItemArray(e, array);
  }

  /**
   * Sets the flag to true xd
   */
  setCompletedSection1(): void {
    if (this.selectedServices.length > 0 && this.selectedClothes.length > 0) {
      this.completedSection1 = !this.completedSection1;
    }
  }

  /**
   * Data
   * @param e Treats the data from the child
   */
  outputData(e: IPrices) {
    const index = this.pricesData.findIndex(
      (item) =>
        item.materialId === e.materialId &&
        item.serviceId === e.serviceId &&
        item.clotheId === e.clotheId
    );
    if (index === -1) {
      this.pricesData.push(e);
    } else {
      if (!e.price && e.price === '0') {
        this.pricesData[index] = e;
      } else if (e.price !== '0') {
        this.pricesData[index] = e;
      } else {
        this.pricesData.splice(index, 1);
      }
    }
    console.log(this.pricesData);
  }

  /**
   * Post the prices info to facade, for service treatment
   */
  postData(auxPrices: IPrices[]): void {
    const establishmentId: string | null = this.localStorageService
      .establishmentId;
    const toUpload: IPriceUpload = {
      prices: auxPrices,
    };
    if (establishmentId) {
      console.log('xD');
      this.establishmentFacade
        .postAllPrices(toUpload, establishmentId)
        .subscribe();
    } else {
      // TODO: Do something if no establishmentId selected
    }
    console.log(toUpload);
  }

  // tslint:disable-next-line: completed-docs
  ngOnInit() {
    this.rehydrateAll();
  }
}
