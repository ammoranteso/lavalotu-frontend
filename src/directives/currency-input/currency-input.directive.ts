import {
  AfterViewInit,
  Directive,
  HostListener,
  OnDestroy,
  Self,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// tslint:disable-next-line: max-line-length
// https://medium.com/javascript-in-plain-english/a-step-by-step-guide-to-build-a-currency-formatter-directive-for-angular-reactive-form-controls-d7e2c230d05b

// !! Still not implemented (but works), has 2 bugs, help.
/**
 * DIRECTIVE: Formats the input values, sets currency
 */
@Directive({
  selector: '[appCurrencyInput]',
})
export class CurrencyInputDirective implements OnDestroy, AfterViewInit {
  /**
   * Formatter to use
   */
  private readonly formatter: Intl.NumberFormat;

  /**
   * TODO: Document
   */
  private readonly destroy$ = new Subject();

  constructor(@Self() private readonly ngControl: NgControl) {
    this.formatter = new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    });
  }

  /**
   * Unformats on focus
   */
  @HostListener('focus') onFocus() {
    this.setValue(this.unformatValue(this.ngControl.value));
  }

  /**
   * Formats on blur
   */
  @HostListener('blur') onBlur() {
    const value = this.ngControl.value || '';
    !!value && this.setValue(this.formatPrice(value));
  }

  // tslint:disable-next-line: completed-docs
  ngAfterViewInit() {
    this.setValue(this.formatPrice(this.ngControl.value));
    this.ngControl.control?.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(this.updateValue.bind(this));
  }

  /**
   * Update the value on change of input
   */
  updateValue(value: string): void {
    const inputVal = value || '';
    this.setValue(
      !!inputVal
        ? this.validateDecimalValue(inputVal.replace(/[^0-9.]/g, ''))
        : ''
    );
  }

  /**
   * Check if the input is decimal
   */
  validateDecimalValue(v: string): string {
    if (Number.isNaN(Number(v))) {
      const stripedValue = v.slice(0, v.length - 1);
      return Number.isNaN(Number(stripedValue)) ? '' : stripedValue;
    }
    return v;
  }

  /**
   * Formats the input using the given params in constructor
   */
  formatPrice(v: string): string {
    const aux: number = Number(v);
    return this.formatter.format(aux);
  }

  /**
   * Undo the formatting of value
   * @param v Value to unformat
   */
  unformatValue(v: string): string {
    return v.replace(/,/g, '');
  }

  /**
   * Sets the value
   */
  setValue(v: string): void {
    this.ngControl.control?.setValue(v, { emitEvent: false });
  }

  // tslint:disable-next-line: completed-docs
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}
