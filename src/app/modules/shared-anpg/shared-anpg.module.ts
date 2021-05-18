import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { UiSiteAnpgLayoutComponent } from './layouts/ui-site-anpg-layout/ui-site-anpg-layout.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { EmconstrucaoComponent } from './components/emconstrucao/emconstrucao.component';


@NgModule({
  declarations: [UiSiteAnpgLayoutComponent, SideMenuComponent, FooterComponent, SpinnerComponent, EmconstrucaoComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgxSpinnerModule,
    NgImageSliderModule,
    NgbModule,
    TranslateModule.forChild({
      loader:{
        provide: TranslateLoader,
        useFactory: (http: HttpClient)=>{
          return new TranslateHttpLoader(http, './assets/i18n/','.json');
        },
        deps: [ HttpClient ]
      },
      isolate:false
    })
  ],
  exports:[
    UiSiteAnpgLayoutComponent, 
    NgxSpinnerModule, 
    SpinnerComponent, 
    NgImageSliderModule, 
    NgbModule,
    TranslateModule,
    EmconstrucaoComponent
  ]
})
export class SharedAnpgModule { }
