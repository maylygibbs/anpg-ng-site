import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SiteAnpgModule } from './modules/site-anpg/site-anpg.module';

/** Config Lazy Loading */
const routes: Routes = [
  {
    path: 'anpg',
    loadChildren: ()=> import('./modules/site-anpg/site-anpg.module').then(m => SiteAnpgModule)
  },
  {
    path:'',
    redirectTo:'/anpg/home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
