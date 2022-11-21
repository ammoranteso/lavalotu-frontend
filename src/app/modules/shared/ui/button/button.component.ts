import { Component, Input } from '@angular/core';

/**
 * Modular button component.
 */
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  /**
   * Set button type action
   */
  @Input() type?: string;

  /**
   * Set button style class
   */
  @Input() color?: string;

  /**
   * Set button text content
   */
  @Input() text!: string;

  /**
   * Set icon class to button
   */
  @Input() icon?: string;

  /**
   * Set button full style if is true
   */
  @Input() full: boolean = false;

  /**
   * Set button disabled if is true
   */
  @Input() disabled: boolean = false;

  /**
   * Show/Hide text button in small devices
   */
  @Input() hideTextMobile?: boolean;
}
