import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ILaundryService } from '@domain/model/interfaces/service.interface';
/**
 * DUMB: Prices
 */
@Component({
  selector: 'app-material-service-price',
  templateUrl: './material-service-price.component.html',
  styleUrls: ['./material-service-price.component.scss'],
})
export class MaterialServicePriceComponent implements OnInit {
  /**
   * Returns the correct type for the template
   */
  get clothePrices() {
    return this.clotheSpecificPrices.get('clothePrice') as FormGroup;
  }
  /**
   * Clothe selected
   */
  @Input()
  idClothe!: string;

  /**
   * Material selected
   */
  @Input()
  idMaterial!: string;

  /**
   * Aviable services
   */
  @Input()
  services: ILaundryService[] = [];

  /**
   * Material name
   */
  @Input()
  materialName!: string;

  /**
   * Array for uploading the prices
   */
  clotheSpecificPrices = new FormArray([]);

  /**
   * Output with the prices
   */
  @Output()
  pricesMiniArray = new EventEmitter();

  /**
   * Pushes the controls into the form array
   */
  poblateArray(): void {
    this.services.forEach((service) => {
      const clothePrice = new FormGroup({
        serviceId: new FormControl(service.id, Validators.required),
        materialId: new FormControl(this.idMaterial, Validators.required),
        clotheId: new FormControl(this.idClothe, Validators.required),
        price: new FormControl(0),
      });
      this.clotheSpecificPrices.push(clothePrice);
    });
  }

  /**
   * Return the controls at the given index
   * @param index Position in the FormArray
   */
  getControlsAtIndex(index: number): FormGroup {
    return this.clotheSpecificPrices.at(index) as FormGroup;
  }

  /**
   * Emits values from input
   * @param index Position in the FormArray
   */
  getValueAtIndex(index: number): void {
    this.pricesMiniArray.emit(this.clotheSpecificPrices.at(index).value);
  }

  // tslint:disable-next-line: completed-docs
  ngOnInit(): void {
    this.poblateArray();
  }
}
