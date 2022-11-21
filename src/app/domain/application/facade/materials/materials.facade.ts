import { Injectable } from '@angular/core';
import { IMaterialsController } from '@utils/interfaces/controller';
import { MaterialsApiService } from '@domain/infrastructure/api';
import { IMaterial } from '@domain/model/interfaces/material.interface';
import { IFacadeApiMap } from '@utils/interfaces/auxiliary';
import { Observable, of } from 'rxjs';
import { map, catchError, shareReplay } from 'rxjs/operators';

/**
 * FACADE: Provides
 */
@Injectable({
  providedIn: 'root',
})
export class MaterialsFacade implements IMaterialsController {
  constructor(private readonly api: MaterialsApiService) {}

  /**
   * All materials obtained from API
   */
  allMaterials$!: Observable<IFacadeApiMap<IMaterial[]>>;

  /**
   * Treats all the data gotten from the api service
   */
  getAllMaterials(): void {
    this.allMaterials$ = this.api.getAllMaterials().pipe(
      shareReplay(1),
      map((res) => ({ payload: res.data })),
      catchError((err) => of({ err }))
    );
  }
}
