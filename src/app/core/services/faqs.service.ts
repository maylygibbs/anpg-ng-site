import { environment } from './../../../environments/environment.prod';
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Faq } from '../models/faq';

@Injectable({
  providedIn: 'root'
})
export class FaqsService extends HttpService {

  constructor(protected http: HttpClient) { 
    super(http);
  }

/**
 * Retorna todas as perguntas e respostas
 * @param lenguage 
 * @returns 
 */
  getAllFaqs():Promise<Array<Faq>>{
    let faqs:Array<Faq>;
    return this.get(environment.api_pacotesdados.url,`/shared/faq/all`).toPromise().then((resp:any)=>{
      faqs = resp[0].data.Faq.map((item:any)=>{
        let faq = new Faq(item.IdFaq);
        faq.ambito = item.Ambito;
        faq.duvidas = item.Duvidas;
        faq.respostas = item.Respostas
        faq.dataCriacao = item.DataCriacao;
        return faq;
      });
      return faqs;
    }).catch((error)=>{
      return faqs;
    })
  }
  
}
