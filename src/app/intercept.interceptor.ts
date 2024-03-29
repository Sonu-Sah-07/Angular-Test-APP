import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let modifyRequest = request.clone({
      setHeaders : {
        "User-Agent":"googlebot",
        "Content-Type":"application/json"
      }
    })
    return next.handle(modifyRequest);
  }
}
