import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpService } from './http.service';
import { environment } from '../../../environments/environment';
import { TipoDocumento } from '../models/tipo-documento';

@Injectable({
  providedIn: 'root'
})
export class DocumentTypeService extends HttpService {


  private documentType: BehaviorSubject<Array<TipoDocumento>> = new BehaviorSubject<Array<TipoDocumento>>([]);

  constructor(protected http: HttpClient) {
    super(http);
  }


  /**
   * Initialize and add the items to the home menu service.
   * @param items 
   */
  setDocumentTypes(items: Array<TipoDocumento>) {
    this.documentType.next(items);
  }

  /**
   * get home menu items as observable
  */
  getDocumentTypes(): Observable<Array<TipoDocumento>> {
    return this.documentType.asObservable();
  }

  /**
   * get all document types from services
   * @param lenguage 
   */
  getAllDocumentTypes(lenguage:string):Promise<Array<TipoDocumento>>{
    let options:Array<TipoDocumento>;
    return this.get(environment.api_pacotesdados.url,`/shared/DocumentType/${lenguage}`).toPromise().then(
      (resp:any)=>{ 
        
        if(resp && resp.length>0){
          options = new Array<TipoDocumento>();
          options = resp[0].data.TiposDocumentos.map((item:any)=>{
            const type = new TipoDocumento();
            type.image = item.Imagen;
            type.thumbImage = 'assets/img/flags/ad.png';
            type.title = item.RotuloTipoDocumento;
            type.orderPosition = item.PosicaoOrdem;
            return type;
          });
        }
        this.setDocumentTypes(options);
       return options; 
    }).catch((error:HttpErrorResponse)=>{
      return null;
    });
  }


}
