import { PacoteDados } from 'src/app/core/models/pacote-dados';
import { PacotedadosService } from './../../../../core/services/pacotedados.service';
import { HttpHeaderInterceptor } from './../../../../core/interceptors/http-header.interceptor';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SiteAnpgModule } from '../../../../modules/site-anpg/site-anpg.module';

import { PacoteDadosDetalhesComponent } from './pacote-dados-detalhes.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgImageSliderModule } from 'ng-image-slider';

describe('PacoteDadosDetalhesComponent', () => {
  let component: PacoteDadosDetalhesComponent;
  let fixture: ComponentFixture<PacoteDadosDetalhesComponent>;
  let httpClient: HttpClient;
  let pacotedadosService: PacotedadosService;
  let translateService: TranslateService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacoteDadosDetalhesComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        NgxSpinnerModule,
        NgImageSliderModule,
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
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({id: btoa('1')})
          }
        }  
      ]
    })
    .compileComponents();
    httpClient = TestBed.inject(HttpClient);
    pacotedadosService = TestBed.inject(PacotedadosService);
    translateService = TestBed.inject(TranslateService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacoteDadosDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve ser criado', () => {
    expect(component).toBeTruthy();
  });

  it('Deve carregar um pacote de dados de acordo com seu id.', (done: DoneFn) => {     
    return pacotedadosService.getPacoteById(1).then((pacote:PacoteDados) => {
      component.pacote = pacote;      
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(component.pacote).not.toBeNull();
      });
      
    }).finally(done);    
  });


});
