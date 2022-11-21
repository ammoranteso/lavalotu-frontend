import { Component, OnInit } from '@angular/core';
import { EstablishmentFacade } from '@domain/application/facade';
import { IEstablishment } from '@domain/model/interfaces/establishment.interface';
import { LocalstorageService } from '@services/localstorage/localstorage.service';
import { IFacadeApiMap } from '@utils/interfaces/auxiliary';
import { Observable } from 'rxjs';

/**
 * Dumb component: Lists all the establishments and let you create more
 */
@Component({
  selector: 'app-all-establishments',
  templateUrl: './all-establishments.component.html',
  styleUrls: ['./all-establishments.component.scss'],
})
export class AllEstablishmentsComponent implements OnInit {
  constructor(
    private readonly establishmentFacade: EstablishmentFacade,
    private readonly localStorageService: LocalstorageService
  ) {}

  /**
   * All establishments obtained from the service
   */
  allEstablishments$!: Observable<IFacadeApiMap<IEstablishment[]>>;

  // tslint:disable-next-line: completed-docs
  ngOnInit() {
    this.getAllEstablishment();
  }

  /**
   * Allows to get all the establishment
   */
  getAllEstablishment(): void {
    this.allEstablishments$ = this.establishmentFacade.getAllEstablishments();
  }

  /**
   * Saves the selected establishment id
   */
  selectEstablishmentId(id: any): void {
    this.localStorageService.setEstablishmentId(id);
  }
}
