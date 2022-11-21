import { Component, OnInit, Input } from '@angular/core';
import { KeyValue } from '@angular/common';

/**
 * `Dumb component` for presenting
 * key value data
 */
@Component({
  selector: 'app-row-info',
  templateUrl: './row-info.component.html',
  styleUrls: ['./row-info.component.scss']
})
export class RowInfoComponent implements OnInit {

  /**
   * The row title
   */
  @Input()
  title!: string;

  /**
   * Input to hide keys
   */
  @Input()
  hideKeys: boolean = false;

  /**
   * The properties to be shown
   */
  @Input()
  info!: { [key: string]: string };

  // tslint:disable-next-line: completed-docs
  ngOnInit(): void {
  }

  /**
   * Define the object keys properties
   * @param a Key value pair
   * @param b Key value pair
   */
  originalOrder(a: KeyValue<string, string>, b: KeyValue<string, string>): number {
    return 0;
  }

}
