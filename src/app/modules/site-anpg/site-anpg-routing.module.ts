import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiSiteAnpgLayoutComponent } from '../shared-anpg/layouts/ui-site-anpg-layout/ui-site-anpg-layout.component';
import { AboutComponent } from './components/about/about.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { PacoteDadosDetalhesComponent } from './components/pacote-dados-detalhes/pacote-dados-detalhes.component';
import { PacotesDadosComponent } from './components/pacotes-dados/pacotes-dados.component';

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
        path: 'about',
        component: AboutComponent,
        data: {state: 'about'}
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
