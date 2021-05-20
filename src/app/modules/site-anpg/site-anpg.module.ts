import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteAnpgRoutingModule } from './site-anpg-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PacotesDadosComponent } from './components/pacotes-dados/pacotes-dados.component';
import { SharedAnpgModule } from '../shared-anpg/shared-anpg.module';
import { PacoteDadosDetalhesComponent } from './components/pacote-dados-detalhes/pacote-dados-detalhes.component';
import { ErrorComponent } from './components/error/error.component';
import { RedepComponent } from './components/redep/redep.component';
import { GestaoDadosComponent } from './components/gestao-dados/gestao-dados.component';
import { VdrComponent } from './components/vdr/vdr.component';
import { SobredadosComponent } from './components/sobredados/sobredados.component';
import { DadospublicosComponent } from './components/dadospublicos/dadospublicos.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { PesquisaComponent } from './components/pesquisa/pesquisa.component';
import { GestaoComponent } from './components/gestao/gestao.component';
import { BiComponent } from './components/bi/bi.component';

/** Module site publico Plataforma Dados E&P */
@NgModule({
  declarations: [
    HomeComponent, 
    AboutComponent, 
    PacotesDadosComponent, 
    PacoteDadosDetalhesComponent, ErrorComponent, RedepComponent, GestaoDadosComponent, VdrComponent, SobredadosComponent, DadospublicosComponent, FaqsComponent, ContactoComponent, PesquisaComponent, GestaoComponent, BiComponent],
  imports: [
    CommonModule,
    SharedAnpgModule,
    SiteAnpgRoutingModule,
    
  ]
})
export class SiteAnpgModule { }
