import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpErrorInterceptor } from './core/interceptors/http-error.interceptor';
import { HttpHeaderInterceptor } from './core/interceptors/http-header.interceptor';
import { MenuService } from './core/services/menu.service';
import { documentTypeProviderFactory, homeMenuProviderFactory, sideMenuProviderFactory } from './core/factory/app-initializer.factory';
import { DocumentTypeService } from './core/services/document-type.service';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory: (http: HttpClient)=>{
          return new TranslateHttpLoader(http, './assets/i18n/', '.json');
        },
        deps: [ HttpClient ]
      }
    }),
    NgbModule

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpHeaderInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true},
    { provide: APP_INITIALIZER, useFactory: homeMenuProviderFactory, deps: [MenuService], multi: true},
    { provide: APP_INITIALIZER, useFactory: sideMenuProviderFactory, deps: [MenuService], multi: true},
    { provide: APP_INITIALIZER, useFactory: documentTypeProviderFactory, deps: [DocumentTypeService], multi: true}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
