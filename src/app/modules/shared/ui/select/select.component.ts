import { Component, Input } from '@angular/core';
import { FormControl, AbstractControl } from '@angular/forms';

/**
 * Modular select component.
 */
@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent {
  /**
   * Set select options (default: [])
   * TODO: Change type
   */
  @Input() options: any[] = [];

  /**
   * Set label text content
   */
  @Input() label!: string;

  /**
   * The global control
   */
  public fControl: FormControl = new FormControl();

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
}
