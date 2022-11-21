import { Injectable } from '@angular/core';
import { IMaterialsController } from '@utils/interfaces/controller';
import { HttpClient } from '@angular/common/http';
import { IMaterial } from '@domain/model/interfaces/material.interface';
import { IResponseApiWrapper } from '@utils/interfaces/auxiliary';
import { Observable } from 'rxjs';
import { getApiUrl } from '@utils/functions/api-url.function';
import { ApiController } from '@utils/enums/auxiliary';
import { MaterialApiController } from '@utils/enums/api-controller';

/**
 * API: Materials API
 */
@Injectable({
  providedIn: 'root',
})
export class MaterialsApiService implements IMaterialsController {
  constructor(private readonly http: HttpClient) {}

  /**
   * Retrieves all the aviable materials from the service
   */
  getAllMaterials(): Observable<IResponseApiWrapper<IMaterial[]>> {
    return this.http.get<IResponseApiWrapper<IMaterial[]>>(
      getApiUrl(ApiController.MATERIAL, MaterialApiController.ALL)
    );
  }
}
