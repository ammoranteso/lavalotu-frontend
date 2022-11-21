import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalstorageService } from '@services/localstorage/localstorage.service';

/**
 * Interceptor: Intercepts all the requests and add the specified headers
 */
@Injectable({
  providedIn: 'root',
})
export class HeadersInterceptor implements HttpInterceptor {
  constructor(private readonly localstorageService: LocalstorageService) {}

  // tslint:disable-next-line: completed-docs
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!req.headers.has('Content-Type')) {
      req = req.clone({
        headers: req.headers.append('Content-Type', 'application/json'),
      });
    }
    if (!req.headers.has('Accept')) {
      req = req.clone({
        headers: req.headers.append('Accept', 'application/json'),
      });
    }
    if (!req.headers.has('Authorization')) {
      req = req.clone({
        headers: req.headers.append(
          'Authorization',
          `Bearer ${this.localstorageService.token}`
        ),
      });
    }
    return next.handle(req);
  }
}
