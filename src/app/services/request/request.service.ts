import { Injectable } from '@angular/core';
import { HttpParams, HttpHeaders } from '@angular/common/http';
/**
 * Request service used for handling headers and params in HTTP requests
 */
@Injectable({
  providedIn: 'root',
})
export class RequestService {
  /**
   * TODO => Document
   */
  headers = new HttpHeaders();

  /**
   * TODO => Document
   */
  params = new HttpParams();

  constructor() {
    this.headers = this.headers
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');
  }

  /**
   * TODO => Document
   */
  removeParams() {
    Object.keys(this.params).map((key) => {});
  }
}
