import { LanguageService } from './language.service';
import { TestBed } from '@angular/core/testing';
import { PacotedadosService } from './pacotedados.service';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpHeaderInterceptor } from '../interceptors/http-header.interceptor';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

describe('PacotedadosService', () => {
  let service: PacotedadosService;
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

      providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpHeaderInterceptor, multi: true },LanguageService]
    });
    service = TestBed.inject(PacotedadosService);
    serviceLanguage = TestBed.inject(LanguageService);
    
  });

  it('Deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  it('Service #getAllPacotes tem de voltar uma lista nao vazia.',
  (done: DoneFn) => {
    serviceLanguage.setLanguage('pt_PT','pt');
    return service.getAllPacotes().then(value => {
      expect(value.length).toBeGreaterThan(0);
    }).finally(done);
  });

  it('Cada pacote de la lista debe tener su imagen de avatar.',
  (done: DoneFn) => {
    serviceLanguage.setLanguage('pt_PT','pt');
    return service.getAllPacotes().then(value => {
      
      value.forEach(pacote => {
        expect(pacote.imagemPacote).not.toBeNull();
      });
    }).finally(done);
  });

  it('Service #getPacoteById tem de voltar um valor nulo, quando um id de pacote é passado que não existe.',
  (done: DoneFn) => {
    serviceLanguage.setLanguage('pt_PT','pt');
    return service.getPacoteById(0).then(value => {
      expect(value).toBeNull();
    }).finally(done);
  });


});
