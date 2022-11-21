import { Injectable } from '@angular/core';
import { ClothesApiService } from '@domain/infrastructure/api/clothes/clothes-api.service';
import { Observable, of } from 'rxjs';
import { map, catchError, shareReplay } from 'rxjs/operators';
import { IClothe } from '@domain/model/interfaces/clothe.interface';
import { IClothesApiController } from '@utils/interfaces/controller';
import { IFacadeApiMap } from '@utils/interfaces/auxiliary';
import { ClotheSection } from '@domain/model/enums/clothe-section.enum';

/**
 * Facade between clothing laundry-laundry-services service and config components
 */
@Injectable({
  providedIn: 'root',
})
export class ClothesFacade implements IClothesApiController {
  constructor(private readonly api: ClothesApiService) {}

  /**
   * All clothes obtained from API
   */
  allClothes$!: Observable<IFacadeApiMap<IClothe[]>>;

  /**
   * Retrieve clothes from the existing array filtered by
   * @param: type
   */
  filterClothes(type: ClotheSection): Observable<IFacadeApiMap<IClothe[]>> {
    return this.allClothes$.pipe(
      map((res) => ({
        payload: res.payload?.filter((clothe) => clothe.section === type),
        err: res.err,
      }))
    );
  }

  /**
   * Return all clothes observable
   */
  getAllClothes(): void {
    this.allClothes$ = this.api.getAllClothes().pipe(
      shareReplay(1),
      map((res) => ({
        payload: res.data,
      })),
      catchError((err) => of({ err }))
    );
  }
}
