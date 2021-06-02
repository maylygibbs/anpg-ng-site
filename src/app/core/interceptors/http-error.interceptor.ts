import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('HttpErrorInterceptor','interceptado');
    return next.handle(request).pipe(catchError( (error:HttpErrorResponse)=>{  
      console.log('error',error)
      if (error.status === 401 || error.status === 401 || error.status === 404 /*|| error.status === 500*/) {
        this.router.navigate(['/anpg/error', {errorCode:error.status, errorMessage:error.statusText}]);
      }
      if (error.status === 0) {
        this.router.navigate(['/anpg/error', {errorCode:error.status, errorMessage:'Ocorreu um erro.'} ]);
      }
      return throwError(error);


    }));
  }
}
