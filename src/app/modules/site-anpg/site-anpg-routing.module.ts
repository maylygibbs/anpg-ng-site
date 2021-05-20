import { BiComponent } from './components/bi/bi.component';
import { GestaoComponent } from './components/gestao/gestao.component';
import { PesquisaComponent } from './components/pesquisa/pesquisa.component';
import { DadospublicosComponent } from './components/dadospublicos/dadospublicos.component';
import { RedepComponent } from './components/redep/redep.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiSiteAnpgLayoutComponent } from '../shared-anpg/layouts/ui-site-anpg-layout/ui-site-anpg-layout.component';
import { AboutComponent } from './components/about/about.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { PacoteDadosDetalhesComponent } from './components/pacote-dados-detalhes/pacote-dados-detalhes.component';
import { PacotesDadosComponent } from './components/pacotes-dados/pacotes-dados.component';
import { GestaoDadosComponent } from './components/gestao-dados/gestao-dados.component';
import { VdrComponent } from './components/vdr/vdr.component';
import { SobredadosComponent } from './components/sobredados/sobredados.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { ContactoComponent } from './components/contacto/contacto.component';

/**
 * Rutas para el modulo site publico
 */
const routes: Routes = [
  {
    path: '',
    component: UiSiteAnpgLayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        data: {state: 'home'}
      },
      {
        path: 'sobredados',
        component: SobredadosComponent,
        data: {state: 'sobredados'}
      },
      {
        path: 'pacotes',
        component: PacotesDadosComponent,
        data: {state: 'pacotes'}
      },
      {
        path: 'pacote/:id',
        component: PacoteDadosDetalhesComponent,
        data: {state: 'pacotesdetailhes'}
      },
      {
        path: 'redep',
        component: RedepComponent,
        data: {state: 'redep'}
      },
      {
        path: 'vdr',
        component: VdrComponent,
        data: {state: 'gesvdrtaodados'}
      },
      {
        path: 'gestao-dados',
        component: GestaoDadosComponent,
        data: {state: 'gestaodados'}
      },
      {
        path: 'dadospublicos',
        component: DadospublicosComponent,
        data: {state: 'dadospublicos'}
      },
      {
        path: 'faqs',
        component: FaqsComponent,
        data: {state: 'faqs'}
      },
      {
        path: 'contacto',
        component: ContactoComponent,
        data: {state: 'contacto'}
      },
      {
        path: 'pesquisa',
        component: PesquisaComponent,
        data: {state: 'pesquisa'}
      },
      {
        path: 'gestao',
        component: GestaoComponent,
        data: {state: 'gestao'}
      },
      {
        path: 'bi',
        component: BiComponent,
        data: {state: 'bi'}
      }
    ]
  },
  {
    path: 'error',
    component: ErrorComponent,
    data: {state: 'error'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteAnpgRoutingModule { }
