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


@NgModule({
  declarations: [UiSiteAnpgLayoutComponent, SideMenuComponent, FooterComponent, SpinnerComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgxSpinnerModule,
    NgImageSliderModule,
    NgbModule
  ],
  exports:[UiSiteAnpgLayoutComponent, NgxSpinnerModule, SpinnerComponent, NgImageSliderModule, NgbModule]
})
export class SharedAnpgModule { }
