import { PacoteDados } from 'src/app/core/models/pacote-dados';
import { PacotedadosService } from './../../../../core/services/pacotedados.service';
import { HttpHeaderInterceptor } from './../../../../core/interceptors/http-header.interceptor';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MenuService } from './../../../../core/services/menu.service';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacotesDadosComponent } from './pacotes-dados.component';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { SiteAnpgModule } from '../../../../modules/site-anpg/site-anpg.module';

describe('PacotesDadosComponent', () => {
  let component: PacotesDadosComponent;
  let fixture: ComponentFixture<PacotesDadosComponent>;
  let httpClient: HttpClient;
  let pacotedadosService: PacotedadosService;
  let translateService: TranslateService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacotesDadosComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule.withRoutes([
          { path: '', redirectTo: '/anpg/home', pathMatch:'full' },
          {
            path: 'anpg',
            loadChildren: ()=> import('../../../../modules/site-anpg/site-anpg.module').then(m => SiteAnpgModule)
          },
         ]),
        TranslateModule.forRoot()],
      providers: [
        { provide: HTTP_INTERCEPTORS, useClass: HttpHeaderInterceptor, multi: true },
      ]
    })
    .compileComponents();
    httpClient = TestBed.inject(HttpClient);
    pacotedadosService = TestBed.inject(PacotedadosService);
    translateService = TestBed.inject(TranslateService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacotesDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve ser criado.', () => {
    expect(component).toBeTruthy();
  });


  it('Deve carregar os pacotes de dados.', (done: DoneFn) => {
     
    return pacotedadosService.getAllPacotes().then((items:Array<PacoteDados>) => {

      component.pacotes =items;      
      fixture.detectChanges();
      let listOption = fixture.debugElement.nativeElement.querySelectorAll('li');
      listOption.forEach(element => {
        console.log('element',element)
      });
      expect(listOption.length).toBeGreaterThan(0);
    }).finally(done);    
  });
});
