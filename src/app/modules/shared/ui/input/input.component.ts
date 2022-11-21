import { Component, Input } from '@angular/core';
import { FormControl, AbstractControl } from '@angular/forms';

/**
 * Modular app input
 */
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  /**
   * Set input style class
   */
  @Input() color?: string;
  /**
   * Placeholder
   */
  @Input() placeholder: string = '';

  /**
   * Set input type (default: text)
   */
  @Input() type: string = 'text';

  /**
   * Set input autocomplete (default: true)
   */
  @Input() autocomplete: boolean = true;

  /**
   * Set label text content
   */
  @Input() label!: string;

  /**
   * The global control
   */
  fControl: FormControl = new FormControl();

  /**
   * Executed when `fControl` is changed
   * @param fControl The form control
   */
  @Input('fControl')
  set onFormControlChange(fControl: AbstractControl) {
    if (fControl) {
      this.fControl = fControl as FormControl;
    }
  }

  /**
   * Tells if the control has an error
   */
  get controlHasError(): boolean {
    return this.fControl?.errors ? true : false;
  }

  /**
   * Defines the message for an existing error
   */
  get controlErrorMessage(): string | null {
    const control = this.fControl;
    const errors = control?.errors;

    if (errors?.required && control?.touched) {
      return 'Este campo es obligatorio';
    }
    if (errors?.maxlength) {
      return `Máximo ${errors?.maxlength.requiredLength} caracteres`;
    }
    if (errors?.minlength) {
      return `Mínimo ${errors?.minlength.requiredLength} caracteres`;
    }
    if (errors?.max) {
      return `Máximo ${errors.max.max}`;
    }
    if (errors?.min) {
      return `Mínimo ${errors.min.min}`;
    }
    if (errors?.email) {
      return `Correo inválido`;
    }

    return null;
  }
}
