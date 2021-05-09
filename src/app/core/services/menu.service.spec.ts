import { TestBed } from '@angular/core/testing';
import { MenuItem } from '../models/menu-item';
import { MenuService } from './menu.service';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpHeaderInterceptor } from '../interceptors/http-header.interceptor';

describe('MenuService', () => {
  let service: MenuService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpHeaderInterceptor, multi: true },]
    });
    service = TestBed.inject(MenuService);
    httpClient = TestBed.inject(HttpClient);

  });

  it('Deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  it('Service #getHomeItemMenu deve retornar nulo, quando eu passo um idioma não configurado. Exemplo espanhol, es.',
    (done: DoneFn) => {
      return service.getHomeItemMenu('es').then(value => {
        expect(value).toEqual(null);
      }).finally(done);
    });

  it('Service #getHomeItemMenu deve ser uma lista nao vazia, quando eu passo um idioma configurado, portugues pt',
    (done: DoneFn) => {
      return service.getHomeItemMenu('pt').then(value => {
        expect(value.length).toBeGreaterThan(0);
      }).finally(done);
    });

  it('Service #getHomeItemMenu deve ser uma lista nao vazia, quando eu passo um idioma configurado, ingles en',
    (done: DoneFn) => {
      return service.getHomeItemMenu('en').then(value => {
        expect(value.length).toBeGreaterThan(0);
      }).finally(done);
    });


  it('Service #getSideItemMenu deve retornar nulo, quando eu passo um idioma não configurado. Exemplo espanhol, es.',
    (done: DoneFn) => {
      return service.getSideItemMenu('es').then(value => {
        expect(value).toEqual(null);
      }).finally(done);
    });

  it('Service #getSideItemMenu deve ser uma lista nao vazia, quando eu passo um idioma configurado, portugues pt',
    (done: DoneFn) => {
      return service.getSideItemMenu('pt').then(value => {
        expect(value.length).toBeGreaterThan(0);
      }).finally(done);
    });

  it('Service #getSideItemMenu deve ser uma lista nao vazia, quando eu passo um idioma configurado, ingles en',
    (done: DoneFn) => {
      return service.getSideItemMenu('en').then(value => {
        expect(value.length).toBeGreaterThan(0);
      }).finally(done);
    });


});


