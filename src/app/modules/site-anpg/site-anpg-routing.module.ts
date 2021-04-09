import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiSiteAnpgLayoutComponent } from '../shared-anpg/layouts/ui-site-anpg-layout/ui-site-anpg-layout.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { PacoteDadosComponent } from './components/pacote-dados/pacote-dados.component';


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
        component: PacoteDadosComponent,
        data: {state: 'pacotes'}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteAnpgRoutingModule { }
