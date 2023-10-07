import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpStatusCode,
} from '@angular/common/http';
import { EMPTY, Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { ErrorHandlerService } from '../services/error-handler.service';
import { Store } from '@ngrx/store';
import { AuthState, refresh_request } from 'src/app/auth/store';
import { AuthService } from 'src/app/auth/services/auth.service';
import { LocalStorageService } from 'src/app/auth/services/local-storage.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(
    private errorHandlerService: ErrorHandlerService,
    private store: Store<AuthState>,
    private _authService: AuthService,
    private _localStorageService: LocalStorageService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status) {
          switch (error.status) {
            case HttpStatusCode.BadRequest: {
              this.errorHandlerService.badRequestError(error);
              break;
            }
            case HttpStatusCode.Unauthorized: {
              this.store.dispatch(refresh_request());
              this.errorHandlerService.badRequestError(error);
              break;
            }
            default: {
              this.errorHandlerService.handleValidationError(error);
              break;
            }
          }
        } else {
          this.errorHandlerService.handleError(error);
        }
        return throwError(() => error);
      })
    );
  }

  handleRefreshToken(request: HttpRequest<unknown>, next: HttpHandler) {
    const authResponse = this._localStorageService.getItem();
    return this._authService
      .refreshToken(authResponse?.refresh_token || '')
      .pipe(
        switchMap((authResponse) => {
          // Update the Authorization header with the new token
          const clonedRequest = request.clone({
            setHeaders: {
              Authorization: `Bearer ${authResponse.access_token}`,
            },
          });

          // Retry the request with the updated token
          return next.handle(clonedRequest);
        }),
        catchError((error) => {
          this.errorHandlerService.handleError(error);
          return EMPTY;
        })
      );
  }
}
