import { Component, Input } from '@angular/core';
import { FormControl, AbstractControl } from '@angular/forms';

/**
 * `Presentational Component` for handling input
 * fields
 */
@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss'],
})
export class FormControlComponent {
  /**
   * The input label
   */
  @Input() label!: string;

  /**
   * The input type
   */
  @Input() type: string = 'text';

  /**
   * Define this when you need
   * to specify a different pattern message
   */
  @Input() patternMsg?: string;

  /**
   * Defines some custom style to be applied
   * to the input
   */
  @Input()
  inputStyle!: { [key: string]: string };

  /**
   * Defines the custom style for the label
   */
  @Input()
  labelStyle!: { [key: string]: string };
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
    if (errors?.pattern) {
      return this.patternMsg || `Campo inválido`;
    }
    if (errors?.email) {
      return `Correo inválido`;
    }
    if (errors?.customError) {
      return errors.customError.msg;
    }

    return null;
  }
}
