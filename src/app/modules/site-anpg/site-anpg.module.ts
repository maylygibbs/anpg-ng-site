import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteAnpgRoutingModule } from './site-anpg-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PacotesDadosComponent } from './components/pacotes-dados/pacotes-dados.component';
import { SharedAnpgModule } from '../shared-anpg/shared-anpg.module';


@NgModule({
  declarations: [HomeComponent, AboutComponent, PacotesDadosComponent],
  imports: [
    CommonModule,
    SharedAnpgModule,
    SiteAnpgRoutingModule
  ]
})
export class SiteAnpgModule { }
