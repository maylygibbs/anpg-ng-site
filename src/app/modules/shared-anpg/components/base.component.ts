import { TranslateService } from "@ngx-translate/core";
import { MenuService } from "src/app/core/services/menu.service";

export class BaseComponent{

    constructor(protected menuService: MenuService,
      protected translateService: TranslateService){ }

    encryptParam(param:any):string{
        return btoa(param);
    }

      /**
   * 
   * @param language 
   */
   languageChange(languageFile:string, language: string) {
     this.menuService.getHomeItemMenu(language);
     this.menuService.getSideItemMenu(language);
     this.translateService.use(languageFile);
  }

}