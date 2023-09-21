import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TrailingSlashInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const url = request.url.endsWith('/')
      ? request.url.slice(0, -1)
      : request.url;
    const modifiedRequest = request.clone({ url });
    return next.handle(modifiedRequest);
  }
}
