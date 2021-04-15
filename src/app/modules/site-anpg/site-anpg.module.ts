import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteAnpgRoutingModule } from './site-anpg-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PacotesDadosComponent } from './components/pacotes-dados/pacotes-dados.component';
import { SharedAnpgModule } from '../shared-anpg/shared-anpg.module';
import { PacoteDadosDetalhesComponent } from './components/pacote-dados-detalhes/pacote-dados-detalhes.component';


@NgModule({
  declarations: [HomeComponent, AboutComponent, PacotesDadosComponent, PacoteDadosDetalhesComponent],
  imports: [
    CommonModule,
    SharedAnpgModule,
    SiteAnpgRoutingModule
  ]
})
export class SiteAnpgModule { }
