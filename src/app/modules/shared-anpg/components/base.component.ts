import { LanguageService } from './../../../core/services/language.service';
import { TranslateService } from "@ngx-translate/core";
import { MenuService } from "src/app/core/services/menu.service";

export class BaseComponent{

    constructor(protected menuService: MenuService,
      protected languageService:LanguageService){ }

    encryptParam(param:any):string{
        return btoa(param);
    }

      /**
   * 
   * @param language 
   */
   languageChange(languageFile:string, language: string) {
     this.languageService.setLanguage(languageFile,language);
     this.menuService.getHomeItemMenu(language);
     this.menuService.getSideItemMenu(language);
  }

}