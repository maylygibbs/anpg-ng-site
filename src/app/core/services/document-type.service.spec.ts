import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpHeaderInterceptor } from '../interceptors/http-header.interceptor';
import { DocumentTypeService } from './document-type.service';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LanguageService } from './language.service';

describe('DocumentTypeService', () => {
  let service: DocumentTypeService;
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
    service = TestBed.inject(DocumentTypeService);
    serviceLanguage = TestBed.inject(LanguageService);
  });

  it('Deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  it('Service #getAllDocumentTypes deve retornar nulo, quando eu passo um idioma não configurado. Exemplo espanhol, es.',
  (done: DoneFn) => {
    serviceLanguage.setLanguage('pt_PT','es');
    return service.getAllDocumentTypes().then(value => {
      expect(value).toEqual(null);
    }).finally(done);
  });

  it('Service #getAllDocumentTypes deve ser uma lista nao vazia, quando eu passo um idioma configurado, portugues pt',
  (done: DoneFn) => {
    serviceLanguage.setLanguage('pt_PT','pt');
    return service.getAllDocumentTypes().then(value => {
      expect(value.length).toBeGreaterThan(0);
    }).finally(done);
  });

it('Service #getAllDocumentTypes deve ser uma lista nao vazia, quando eu passo um idioma configurado, ingles en',
  (done: DoneFn) => {
    serviceLanguage.setLanguage('en_US','en');
    return service.getAllDocumentTypes().then(value => {
      expect(value.length).toBeGreaterThan(0);
    }).finally(done);
  });



});
