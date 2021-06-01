import { environment } from './../../../environments/environment';
import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private language: string = environment.language.pt;

  constructor(private translateService: TranslateService) { }

  /**
   * Definir leguange no aplicativo
   * @param languageFile 
   * @param language 
   */
  setLanguage(languageFile: string, language: string) {
    this.translateService.use(languageFile);
    this.language = language

  }

  /**
   * Retornar o idioma atual
   */
  get currentLanguage(): string {
    return this.language
  }


}
