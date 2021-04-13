import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class PacotedadosService extends HttpService {

  constructor(protected http:HttpClient) {
    super(http);
   }

   getAllPacotes():Promise<any>{

    return this.get('/PacoteDado').toPromise();

   }


   getPacoteByID(id: number):Promise<any>{
     return this.get(`/PacoteDado/${id}`).toPromise();
   }
}
