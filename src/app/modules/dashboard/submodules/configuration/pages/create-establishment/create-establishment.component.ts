import { Component, OnInit } from '@angular/core';
import { EstablishmentFacade } from '@domain/application/facade';
import { IEstablishment } from '@domain/model/interfaces/establishment.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  CONFIGURATION_BASE,
  CONFIGURATION_SERVICES,
  DASHBOARD_BASE,
} from '@utils/constants';
import { LocalstorageService } from '@services/localstorage/localstorage.service';
import { SessionService } from '@services/session/session.service';
import { OrganizationFacade } from '@domain/application/facade/organization/organization.facade';
import { map } from 'rxjs/operators';

/**
 * DUMB: Component used to create an establishment
 */
@Component({
  selector: 'app-create-establishment',
  templateUrl: './create-establishment.component.html',
  styleUrls: ['./create-establishment.component.scss'],
})
export class CreateEstablishmentComponent implements OnInit {
  constructor(
    private readonly establishmentFacade: EstablishmentFacade,
    private readonly organizationFacade: OrganizationFacade,
    private readonly localStorageService: LocalstorageService,
    private readonly sessionService: SessionService,
    private readonly router: Router
  ) {}

  /**
   * Organization NIT value
   */
  organizationNit: string = '1';

  /**
   * Establishment creation form validators
   */
  createEstablishmentForm = new FormGroup({
    organizationNit: new FormControl(this.organizationNit),
    establishmentName: new FormControl(null, [Validators.required]),
    address: new FormControl(null, [Validators.required]),
    phoneNumber: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
    ]),
    optionalPhoneNumber: new FormControl(null, [Validators.minLength(6)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    neighborhood: new FormControl(null, [Validators.required]),
    isPlant: new FormControl(true),
    // city: new FormControl(null, Validators.required),
  });

  /**
   * Establishment creation function
   * @param establishment Establishment to create
   */
  createEstablishment(establishment: IEstablishment) {
    this.establishmentFacade
      .createEstablishment(establishment)
      .subscribe((res) => {
        if (res) {
          console.log(res);
          this.router.navigateByUrl(
            `/${DASHBOARD_BASE}/${CONFIGURATION_BASE}/${CONFIGURATION_SERVICES}`
          );
        } else {
          console.log('F');
        }
      });
  }

  /**
   * Does something
   */
  getOrganization(id: string): string {
    let establishmentId: string = '';
    this.organizationFacade
      .organizationById(id)
      .pipe(
        map((data) => {
          if (data.payload) {
            console.log(data.payload);
          } else {
            establishmentId = '';
          }
        })
      )
      .subscribe();
    return establishmentId;
  }

  // tslint:disable-next-line: completed-docs
  ngOnInit(): void {
    this.organizationNit = this.getOrganization(
      this.sessionService.getEstablishmentID(this.localStorageService.token)
    );
    console.log(this.organizationNit);
  }
}
