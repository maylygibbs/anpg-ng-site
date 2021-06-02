import { LanguageService } from './../../../../core/services/language.service';
import { PacoteDados } from 'src/app/core/models/pacote-dados';
import { PacotedadosService } from './../../../../core/services/pacotedados.service';
import { HttpHeaderInterceptor } from './../../../../core/interceptors/http-header.interceptor';

import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacotesDadosComponent } from './pacotes-dados.component';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { SiteAnpgModule } from '../../../../modules/site-anpg/site-anpg.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

describe('PacotesDadosComponent', () => {
  let component: PacotesDadosComponent;
  let fixture: ComponentFixture<PacotesDadosComponent>;
  let httpClient: HttpClient;
  let pacotedadosService: PacotedadosService;
  let serviceLanguage: LanguageService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacotesDadosComponent ],
      imports: [
        CommonModule,
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
        LanguageService
      ]
    })
    .compileComponents();
    httpClient = TestBed.inject(HttpClient);
    pacotedadosService = TestBed.inject(PacotedadosService);
    serviceLanguage = TestBed.inject(LanguageService);
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
    serviceLanguage.setLanguage('pt_PT','pt');
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
