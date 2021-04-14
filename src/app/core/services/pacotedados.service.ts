import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PacoteDados } from '../models/pacote-dados';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class PacotedadosService extends HttpService {

  constructor(protected http:HttpClient,
    private sanitizer: DomSanitizer) {
    super(http);
   }

   getAllPacotes():Promise<Array<PacoteDados>>{
     
    let pacotes = new Array<PacoteDados>();
    return this.get('/Api/PacoteDado').toPromise().then(
      (resp)=>{
        pacotes = resp.PacotesdeDadosExistentes.map((item)=>{
          const pacote = new PacoteDados(
            item.IdPacote, 
            item.NomePacote, 
            item.DescricaoPacote, 
            this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${item.ImagemPacote}`),
            item.Observacoes, 
            item.Onshore);
          return pacote;
        })
        return pacotes;
      }
    ).catch((error)=>{
      return pacotes;
    });

   }


   getPacoteByID(id: number):Promise<any>{
     return this.get(`/Api/PacoteDado/${id}`).toPromise();
   }
}
