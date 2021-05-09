import { TestBed } from '@angular/core/testing';
import { PacotedadosService } from './pacotedados.service';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpHeaderInterceptor } from '../interceptors/http-header.interceptor';

describe('PacotedadosService', () => {
  let service: PacotedadosService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpHeaderInterceptor, multi: true },]
    });
    service = TestBed.inject(PacotedadosService);
  });

  it('Deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  it('Service #getAllPacotes tem de voltar uma lista nao vazia.',
  (done: DoneFn) => {
    return service.getAllPacotes().then(value => {
      expect(value.length).toBeGreaterThan(0);
    }).finally(done);
  });

  it('Cada pacote de la lista debe tener su imagen de avatar.',
  (done: DoneFn) => {
    return service.getAllPacotes().then(value => {
      
      value.forEach(pacote => {
        expect(pacote.imagemPacote).not.toBeNull();
      });
    }).finally(done);
  });

  it('Service #getPacoteById tem de voltar um valor nulo, quando um id de pacote é passado que não existe.',
  (done: DoneFn) => {
    return service.getPacoteById(0).then(value => {
      expect(value).toBeNull();
    }).finally(done);
  });


});
