import { Injectable } from '@angular/core';
import { DataService } from '@domain/application/observable-services';
import { Observable } from 'rxjs';

/**
 * Facade that manages all data laundry-laundry-services of the application.
 */
@Injectable({
  providedIn: 'root',
})
export class DataFacade {
  constructor(private readonly dataService: DataService) {}

  /**
   * Call setSpinnerState$ method of DataService
   * to update spinnerState$ value.
   * @param newState New value to update.
   */
  setSpinnerState$(newState: boolean) {
    this.dataService.setSpinnerState$(newState);
  }

  /**
   * Call getSpinnerState$ method of DataService
   * to get an observable with spinnerState$ value.
   */
  getSpinnerState$(): Observable<boolean> {
    return this.dataService.getSpinnerState$();
  }
}
