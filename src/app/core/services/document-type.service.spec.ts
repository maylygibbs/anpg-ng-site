import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpHeaderInterceptor } from '../interceptors/http-header.interceptor';

import { DocumentTypeService } from './document-type.service';

describe('DocumentTypeService', () => {
  let service: DocumentTypeService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpHeaderInterceptor, multi: true },]
    });
    service = TestBed.inject(DocumentTypeService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('Deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  it('Service #getAllDocumentTypes deve retornar nulo, quando eu passo um idioma não configurado. Exemplo espanhol, es.',
  (done: DoneFn) => {
    return service.getAllDocumentTypes('es').then(value => {
      expect(value).toEqual(null);
    }).finally(done);
  });

  it('Service #getAllDocumentTypes deve ser uma lista nao vazia, quando eu passo um idioma configurado, portugues pt',
  (done: DoneFn) => {
    return service.getAllDocumentTypes('pt').then(value => {
      expect(value.length).toBeGreaterThan(0);
    }).finally(done);
  });

it('Service #getAllDocumentTypes deve ser uma lista nao vazia, quando eu passo um idioma configurado, ingles en',
  (done: DoneFn) => {
    return service.getAllDocumentTypes('en').then(value => {
      expect(value.length).toBeGreaterThan(0);
    }).finally(done);
  });



});
