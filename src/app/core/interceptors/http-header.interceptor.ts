import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LanguageService } from '../services/language.service';

@Injectable()
export class HttpHeaderInterceptor implements HttpInterceptor {

  constructor(private languageService:LanguageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('HttpHeaderInterceptor','interceptado');
    request = request.clone({
      setHeaders: {
        'Ocp-Apim-Subscription-Key': '068d5be69cda47bdba0268ab32becf33',
        'AcceptLanguage': this.languageService.currentLanguage
      }
    });
    return next.handle(request);
  }
}
