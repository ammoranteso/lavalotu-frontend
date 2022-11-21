import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClientsFacade } from '@domain/application/facade';
import { IClient } from '@domain/model/interfaces';
import { LocalstorageService } from '@services/localstorage/localstorage.service';
import { SubSink } from 'subsink';
/**
 * Clients detail component
 */
@Component({
  templateUrl: './clients-detail.component.html',
  styleUrls: ['./clients-detail.component.scss'],
})
export class ClientsDetailComponent implements OnDestroy {
  /**
   * The subscription sink object that stores all subscriptions
   */
  subs = new SubSink();

  /**
   * Overrides custom style over some
   * form input fields
   */
  ngStyle = {
    width: '200px',
    cursor: 'pointer',
  };

  constructor(
    private readonly facade: ClientsFacade,
    private readonly localstorageService: LocalstorageService
  ) {}
  /**
   * Establishment creation form validators
   */
  createClientForm = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    documentType: new FormControl('CC'),
    documentNumber: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
    ]),
    address: new FormControl(null, [
      Validators.minLength(6),
      Validators.required,
    ]),
    phoneNumber: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    establishmentId: new FormControl(this.localstorageService.establishmentId),
  });

  /**
   * Calls the create client method from facade
   * @param client Client to create
   */
  createClient(client: IClient): void {
    console.table(client);
    this.subs.sink = this.facade.createClient(client).subscribe();
  }

  // tslint:disable-next-line: completed-docs
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
