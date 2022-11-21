import { Component, OnInit, Input } from '@angular/core';

/**
 * Component for an unitary item of billing, like clothes.
 */
@Component({
  selector: 'app-billing-item',
  templateUrl: './billing-item.component.html',
  styleUrls: ['./billing-item.component.scss'],
})
export class BillingItemComponent implements OnInit {
  /**
   * Item to display.
   */
  @Input() item!: any;

  // tslint:disable-next-line: completed-docs
  ngOnInit(): void {}
}
