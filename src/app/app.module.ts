import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpErrorInterceptor } from './core/interceptors/http-error.interceptor';
import { HttpHeaderInterceptor } from './core/interceptors/http-header.interceptor';
import { MenuService } from './core/services/menu.service';
import { homeMenuProviderFactory, sideMenuProviderFactory } from './core/factory/app-initializer.factory';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpHeaderInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true},
    { provide: APP_INITIALIZER, useFactory: homeMenuProviderFactory, deps: [MenuService], multi: true},
    { provide: APP_INITIALIZER, useFactory: sideMenuProviderFactory, deps: [MenuService], multi: true}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
