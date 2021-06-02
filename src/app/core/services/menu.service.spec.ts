import { TestBed } from '@angular/core/testing';
import { MenuItem } from '../models/menu-item';
import { MenuService } from './menu.service';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpHeaderInterceptor } from '../interceptors/http-header.interceptor';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LanguageService } from './language.service';

describe('MenuService', () => {
  let service: MenuService;
  let serviceLanguage: LanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        TranslateModule.forRoot({
          loader:{
            provide: TranslateLoader,
            useFactory: (http: HttpClient)=>{
              return new TranslateHttpLoader(http, './assets/i18n/', '.json');
            },
            deps: [ HttpClient ]
          }
        })
      ],
      providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpHeaderInterceptor, multi: true }, LanguageService]
    });
    service = TestBed.inject(MenuService);
    serviceLanguage = TestBed.inject(LanguageService);

  });

  it('Deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  it('Service #getHomeItemMenu deve retornar nulo, quando eu passo um idioma não configurado. Exemplo espanhol, es.',
    (done: DoneFn) => {
      serviceLanguage.setLanguage('pt_PT','es');
      return service.getHomeItemMenu().then(value => {
        expect(value).toEqual(null);
      }).finally(done);
    });

  it('Service #getHomeItemMenu deve ser uma lista nao vazia, quando eu passo um idioma configurado, portugues pt',
    (done: DoneFn) => {
      serviceLanguage.setLanguage('pt_PT','pt');
      return service.getHomeItemMenu().then(value => {
        expect(value.length).toBeGreaterThan(0);
      }).finally(done);
    });

  it('Service #getHomeItemMenu deve ser uma lista nao vazia, quando eu passo um idioma configurado, ingles en',
    (done: DoneFn) => {
      serviceLanguage.setLanguage('en_US','en');
      return service.getHomeItemMenu().then(value => {
        expect(value.length).toBeGreaterThan(0);
      }).finally(done);
    });


  it('Service #getSideItemMenu deve retornar nulo, quando eu passo um idioma não configurado. Exemplo espanhol, es.',
    (done: DoneFn) => {
      serviceLanguage.setLanguage('pt_PT','es');
      return service.getSideItemMenu().then(value => {
        expect(value).toEqual(null);
      }).finally(done);
    });

  it('Service #getSideItemMenu deve ser uma lista nao vazia, quando eu passo um idioma configurado, portugues pt',
    (done: DoneFn) => {
      serviceLanguage.setLanguage('pt_PT','pt');
      return service.getSideItemMenu().then(value => {
        expect(value.length).toBeGreaterThan(0);
      }).finally(done);
    });

  it('Service #getSideItemMenu deve ser uma lista nao vazia, quando eu passo um idioma configurado, ingles en',
    (done: DoneFn) => {
      serviceLanguage.setLanguage('en_US','en');
      return service.getSideItemMenu().then(value => {
        expect(value.length).toBeGreaterThan(0);
      }).finally(done);
    });


});


