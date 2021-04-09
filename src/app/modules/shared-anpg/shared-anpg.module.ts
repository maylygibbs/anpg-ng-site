import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { UiSiteAnpgLayoutComponent } from './layouts/ui-site-anpg-layout/ui-site-anpg-layout.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [UiSiteAnpgLayoutComponent, SideMenuComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[UiSiteAnpgLayoutComponent]
})
export class SharedAnpgModule { }
