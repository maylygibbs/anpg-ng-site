import { TestBed } from '@angular/core/testing';
import { MenuItem } from '../models/menu-item';
import { MenuService } from './menu.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('MenuService', () => {
  let originalTimeout: number;
  let service: MenuService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ]
    });
    service = TestBed.inject(MenuService);
    httpClient = TestBed.inject(HttpClient);
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
  });

  afterEach(function() {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });

  it('deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  it('#getHomeItemMenu deve ser uma lista não vazia',
    (done: DoneFn) => {
    return service.getHomeItemMenu(20).then(value => {
      expect(value.length).toBeGreaterThan(0);

    }).catch(error =>{
      expect(error.statusText).toContain('Access Denied');

    }).finally(done);
  });


 /* it('#getHomeItemMenu should return Array<MenuItem>',
    (done: DoneFn) => {
      service.getHomeItemMenu(20).then(value => {
        expect(value).toBe(Array<MenuItem>());
        done();
      });
    }); */
});
