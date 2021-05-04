import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'anpg-ng-site';
  constructor(
    private translateService: TranslateService
  ) {
    this.initializeApp();
  }


  initializeApp() {

    this.translateService.setDefaultLang('pt_PT');
    //this.translateService.setDefaultLang('en_US');
    //this.translateService.use('pt_PT');

  }
}
