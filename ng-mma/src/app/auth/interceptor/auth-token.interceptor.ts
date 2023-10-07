import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
  constructor(private _localStorageService: LocalStorageService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const auth = this._localStorageService.getItem();

    // Check if the request is a refreshToken request
    if (this.isRefreshTokenRequest(request)) {
      return next.handle(request);
    }

    if (auth)
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${auth.access_token}`,
        },
      });
    return next.handle(request);
  }

  private isRefreshTokenRequest(request: HttpRequest<any>): boolean {
    return request.url.includes('/refresh-token');
  }
}
