import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteAnpgRoutingModule } from './site-anpg-routing.module';
import { CommonsAnpgModule } from '../commons-anpg/commons-anpg.module';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PacoteDadosComponent } from './components/pacote-dados/pacote-dados.component';


@NgModule({
  declarations: [HomeComponent, AboutComponent, PacoteDadosComponent],
  imports: [
    CommonModule,
    CommonsAnpgModule,
    SiteAnpgRoutingModule
  ]
})
export class SiteAnpgModule { }
