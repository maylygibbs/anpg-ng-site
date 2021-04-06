import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiSiteAnpgLayoutComponent } from '../commons-anpg/layouts/ui-site-anpg-layout/ui-site-anpg-layout.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: UiSiteAnpgLayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'about',
        component: AboutComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteAnpgRoutingModule { }
