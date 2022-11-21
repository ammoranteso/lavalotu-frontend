import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { DataFacade } from '@domain/application/facade';

/**
 * Manage HttpRequest from the application.
 */
@Injectable({
  providedIn: 'root',
})
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private readonly dataFacade: DataFacade) {}

  /**
   * Intercepts all requests to set the state of the loading spinner
   */
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.dataFacade.setSpinnerState$(true);
    return next.handle(request).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          this.dataFacade.setSpinnerState$(false);
        }
      }),
      catchError((error: HttpErrorResponse) => {
        this.dataFacade.setSpinnerState$(false);
        return throwError(error);
      })
    );
  }
}
