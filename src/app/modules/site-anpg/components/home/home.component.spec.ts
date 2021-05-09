import { MenuItem } from 'src/app/core/models/menu-item';
import { MenuService } from './../../../../core/services/menu.service';
import { HttpHeaderInterceptor } from './../../../../core/interceptors/http-header.interceptor';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SiteAnpgModule } from '../../../../modules/site-anpg/site-anpg.module';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let httpClient: HttpClient;
  let menuService: MenuService;
  let translateService: TranslateService

  let menu:any[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
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
    menuService = TestBed.inject(MenuService);
    translateService = TestBed.inject(TranslateService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve ser criado.', () => {
    expect(component).toBeTruthy();
  });

  it('Deve por padrão carregar as opções do home em português.', (done: DoneFn) => {
     
    return menuService.getHomeItemMenu('pt').then((items:Array<MenuItem>) => {

      component.items =items;      
      fixture.detectChanges();
      let listOption = fixture.debugElement.nativeElement.querySelectorAll('.box-title');
      listOption.forEach(element => {
        console.log('element',element)
      });
      expect(listOption.length).toBeGreaterThan(0);
    }).finally(done);    
  });

  it('Deve por padrão carregar as opções do home em inglês.', (done: DoneFn) => {
     
    return menuService.getHomeItemMenu('en').then((items:Array<MenuItem>) => {

      component.items =items;      
      fixture.detectChanges();
      let listOption = fixture.debugElement.nativeElement.querySelectorAll('.box-title');
      listOption.forEach(element => {
        console.log('element',element)
      });
      expect(listOption.length).toBeGreaterThan(0);
    }).finally(done);    
  });




});
