import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IClotheByIdResponse } from '@utils/interfaces/response/clothe-by-id-response.interface';
import { IClothesApiController } from '@utils/interfaces/controller';
import { getApiUrl } from '@utils/functions/api-url.function';
import { ApiController } from '@utils/enums/auxiliary';
import { ClothesApiController } from '@utils/enums/api-controller';
import { IResponseApiWrapper } from '@utils/interfaces/auxiliary';
import { IClothe } from '@domain/model/interfaces/clothe.interface';
/**
 * Service for clothes
 */
@Injectable({
  providedIn: 'root',
})
export class ClothesApiService implements IClothesApiController {
  constructor(private readonly http: HttpClient) {}

  /**
   * Get all laundry clothes
   */
  getAllClothes(): Observable<IResponseApiWrapper<IClothe[]>> {
    return this.http.get<IResponseApiWrapper<IClothe[]>>(
      getApiUrl(ApiController.CLOTHE, ClothesApiController.ALL)
    );
  }

  /**
   * Get clothe by id
   * @param id Id of the searched clothe
   */
  getClotheById(id: string): Observable<IClotheByIdResponse> {
    return this.http.get<IClotheByIdResponse>(
      getApiUrl(ApiController.CLOTHE, encodeURIComponent(id))
    );
  }
}
