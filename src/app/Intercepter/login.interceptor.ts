import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class LoginInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // return next.handle(request);

    let token = localStorage.getItem(`token`);
    let req = request.clone({
            setHeaders :{
              Authorization: `Bearer ${token} `
            }
    });
    return next.handle(req)
  }
}
