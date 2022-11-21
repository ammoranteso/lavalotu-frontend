import { animate, style, transition, trigger } from '@angular/animations';
import { EventEmitter, OnInit, Output } from '@angular/core';
import { Component, Input } from '@angular/core';
import { AuthFacade } from '@domain/application/facade';
/**
 * Side menu component
 */
@Component({
  selector: 'app-config-menu',
  templateUrl: './config-menu.component.html',
  styleUrls: ['./config-menu.component.scss'],
  animations: [
    trigger('hamburgerEffect', [
      transition(':enter', [
        style({ width: 0, opacity: 0 }),
        animate('0.5s', style({ width: '*', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('0.5s', style({
          opacity: 0,
          width: 0
        })
        ),
      ])
    ])
  ]
})
export class ConfigMenuComponent implements OnInit {
  /**
   * Variable to show or not the side menu
   */
  @Input()
  visible: boolean = false;
  /**
   * Allows listen when the father's component changed his status
   */
  @Output()
  setAnimation = new EventEmitter<boolean>();

  constructor(private readonly authFacade: AuthFacade) {
  }

  // tslint:disable-next-line: completed-docs
  ngOnInit(): void {
  }

  /**
   * Allows to close menu items
   */
  closeMenu(): void {
    this.setAnimation.emit();
  }

  /**
   * Call logout method of authFacade.
   */
  logOut() {
    this.authFacade.logout();
  }

}
