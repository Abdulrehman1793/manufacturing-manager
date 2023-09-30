import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpStatusCode,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorHandlerService } from '../services/error-handler.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private errorHandlerService: ErrorHandlerService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status) {
          switch (error.status) {
            case HttpStatusCode.BadRequest:
              this.errorHandlerService.badRequestError(error);
              break;
            default:
              this.errorHandlerService.handleValidationError(error);
              break;
          }
        } else {
          this.errorHandlerService.handleError(error);
        }
        return throwError(() => error);
      })
    );
  }
}
