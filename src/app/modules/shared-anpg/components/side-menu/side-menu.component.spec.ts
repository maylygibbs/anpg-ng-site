import { MenuItem } from 'src/app/core/models/menu-item';
import { MenuService } from './../../../../core/services/menu.service';
import { HttpHeaderInterceptor } from './../../../../core/interceptors/http-header.interceptor';
import { HttpClient, HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { SideMenuComponent } from './side-menu.component';

import { TranslateModule } from '@ngx-translate/core';

import { RouterTestingModule } from '@angular/router/testing';
import { SiteAnpgModule } from '../../../../modules/site-anpg/site-anpg.module';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


describe('SideMenuComponent', () => {
  let component: SideMenuComponent;
  let fixture: ComponentFixture<SideMenuComponent>;
  let httpClient: HttpClient;
  let menuService: MenuService;
  let menu:any[];


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SideMenuComponent],
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
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve ser criado.', () => {
    expect(component).toBeTruthy();
  });

   it('Deve por padrão carregar as opções do menu lateral em português.', (done: DoneFn) => {
     
     return menuService.getSideItemMenu('pt').then((items:Array<MenuItem>) => {
       component.items =items;      
       fixture.detectChanges();
       let listOption = fixture.debugElement.nativeElement.querySelectorAll('li');
       expect(listOption.length).toBeGreaterThan(0);
     }).finally(done);    
   });


  it('Deve alterar o idioma ao clicar no idioma inglês', fakeAsync(() => {
    spyOn(component, 'languageChange');
  
    let button = fixture.debugElement.nativeElement.querySelector('#buttonUs');
    button.click();
  
    fixture.whenStable().then(() => {
      console.log('component.items',component.items);
      expect(component.languageChange).toHaveBeenCalled();
    });
  }));

  it('Deve alterar o idioma ao clicar no idioma português', fakeAsync(() => {
    spyOn(component, 'languageChange');
  
    let button = fixture.debugElement.nativeElement.querySelector('#buttonPt');
    button.click();
  
    fixture.whenStable().then(() => {
      console.log('component.items',component.items);
      expect(component.languageChange).toHaveBeenCalled();
    });
  }));

  function diagnoseState(msg) {
    console.log(`value: ${component.items}, isStable: ${fixture.isStable()} # ${msg}`);
  }

  function fillFakeOptions(){
   menu =  [
      {
          "label": "Site da ANPG",
          "href": "/",
          "color": "#7F1F18",
          "background": "#FFFFFF",
          "className": "icon-home-solid"
      },
      {
          "label": "Localização",
          "href": "/",
          "color": "#7F1F18",
          "background": "#FFFFFF",
          "className": "icon-hand-paper-solid"
      },
      {
          "label": "Login",
          "href": "/",
          "color": "#7F1F18",
          "background": "#FFFFFF",
          "className": "icon-user-solid"
      },
      {
          "label": "Color Swap",
          "href": "/",
          "color": "#7F1F18",
          "background": "#FFFFFF",
          "className": "icon-swatchbook-solid"
      }
  ]
  
  }


});