import { Component } from '@angular/core';

/**
 * Component used for the create bill flux
 */
@Component({
  templateUrl: './create-bill.component.html',
  styleUrls: ['./create-bill.component.scss'],
})
export class CreateBillComponent {
  /**
   * Array of items, billing-item called.
   */
  aux: any[] = [1, 2, 3, 4, 5];
}
