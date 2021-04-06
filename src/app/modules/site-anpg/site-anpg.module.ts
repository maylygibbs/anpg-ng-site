import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteAnpgRoutingModule } from './site-anpg-routing.module';
import { CommonsAnpgModule } from '../commons-anpg/commons-anpg.module';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';


@NgModule({
  declarations: [HomeComponent, AboutComponent],
  imports: [
    CommonModule,
    CommonsAnpgModule,
    SiteAnpgRoutingModule
  ]
})
export class SiteAnpgModule { }
