import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

/**
 * Service used to manage the state of the loading spinner via observables.
 */
@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly spinnerState: boolean = false;

  private readonly spinnerState$ = new BehaviorSubject<boolean>(
    this.spinnerState
  );

  /**
   * Set new state to spinnerState variable
   * @param newState New value to spinnerState.
   */
  setSpinnerState$(newState: boolean): void {
    this.spinnerState$.next(newState);
  }

  /**
   * Return an observable with current state
   * of spinnerState variable.
   */
  getSpinnerState$(): Observable<boolean> {
    return this.spinnerState$.asObservable();
  }
}
