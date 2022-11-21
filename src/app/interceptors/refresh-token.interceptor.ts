import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, filter, take, switchMap } from 'rxjs/operators';
import { ApiController } from '@utils/enums/auxiliary';
import { LocalstorageService } from '@services/localstorage/localstorage.service';
import { AuthFacade } from '@domain/application/facade';

/**
 * Interceptor: Intercepts all the requests and check the refresh token
 * !! Still in development, not implemented yet
 */
@Injectable()
export class RefreshTokenInterceptor implements HttpInterceptor {
    constructor(private readonly localStorageService: LocalstorageService, private readonly auth: AuthFacade) { }
    /**
     * Variable used to know if the refresh token method is in progress
     */
    private refreshTokenInProgress = false;

    // tslint:disable-next-line: completed-docs
    private readonly refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
        null
    );

    // tslint:disable-next-line: completed-docs
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError((errorRes: HttpErrorResponse) => {
                // Don't refresh token for requests like login
                if (req.url.includes(ApiController.SIGN_IN) || req.url.includes('refreshToken')) {
                    // If the refresh token method fails, then logout the user
                    // TODO: Add refresh token methods
                    if (req.url.includes('refreshToken')) {
                        // TODO: Logout method
                    }
                    return throwError(errorRes);
                }
                // If the error isn't unauthorized, we let it go
                if (errorRes.status !== 401) {
                    return throwError(errorRes);
                }
                if (this.refreshTokenInProgress) {
                    return this.refreshTokenSubject.pipe(
                        filter(result => result !== null),
                        take(1),
                        switchMap(() => next.handle(this.addAuthenticationToken(req)))
                    );
                } else {
                    this.refreshTokenInProgress = true;

                    this.refreshTokenSubject.next(null);

                    return this.auth.refreshToken('some token maybe').pipe(
                        switchMap((token: any) => {
                            this.refreshTokenInProgress = false;
                            this.refreshTokenSubject.next(token);
                            return next.handle(this.addAuthenticationToken(req));
                        }),
                        catchError((err: any) => {
                            this.refreshTokenInProgress = false;
                            // TODO: Logout method
                            return throwError(err);
                        })
                    );
                }
            })
        );
    }

    /**
     * Method to add the refresh token to a http request
     * @param req Request to clone
     */
    addAuthenticationToken(req: HttpRequest<any>) {
        // Get access token from Local Storage
        const accessToken = this.localStorageService.refreshToken;

        // If access token is null this means that user is not logged in
        // And we return the original request
        if (!accessToken) {
            return req;
        }

        // We clone the request, because the original request is immutable
        return req.clone({
            setHeaders: {
                Authorization: 'bearer coming soon :v'
            }
        });
    }
}
