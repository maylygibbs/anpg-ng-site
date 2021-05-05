import { TranslateService } from "@ngx-translate/core";

export class BaseComponent{

    constructor(protected translateService: TranslateService){ }

    encryptParam(param:any):string{
        return btoa(param);
    }

      /**
   * 
   * @param language 
   */
   languageChange(language:string) {
    this.translateService.use(language);
  }

}