import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor( private router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {

            if (!request.url.endsWith('doLogin')) {
                if (err.status === 401) {
                    ///debugger
                    // auto logout if 401 response returned from api
                    if (!request.url.endsWith('dologout')) {
                       // this.loginService.logout();
                        this.router.navigate(['login']);
                    }
                    else {
                        this.router.navigate(['login']);
                    }


                }
                else if (err.status === 400) {
                    this.router.navigate(['login']);
                }
                else if (err.status === 500) {
                    this.router.navigate(['login']);
                }
                else if (err.status === 504) {

                    this.router.navigate(['login']);
                }
                const error = err.error.message || err.statusText;
                return throwError(error);

            }
            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }
}