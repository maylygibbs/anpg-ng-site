import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService extends BaseService {

  constructor(protected http:HttpClient){
    super();
  }
  /**
   * Execute the GET request to the PeyGold API.
   * @param url Url context.
   * @param options Request options.
   */
  get(url: string, options?: any): Observable<any> {
    url = environment.api.url + url;
    return this.http.get(url, options);
  }

  /**
   * Execute the POST request to the PeyGold API.
   * @param url Url context.
   * @param data payload.
   * @param options Request options.
   */
  post(url: string, data?: any, options?: any): Observable<any> {
    url = environment.api.url + url;
    return this.http.post(url, data, options);
  }

  /**
   * Execute the PUT request to the PeyGold API.
   * @param url Url context.
   * @param data payload.
   * @param options Request options.
   */
  put(url: string, data?: any, options?: any): Observable<any> {
    url = environment.api.url + url;
    return this.http.put(url, data, options);
  }

  delete(url: string, data?: any):Observable<any>{
    url = environment.api.url + url;
    return this.http.delete(url, data);
  }

    /**
   * Execute the GET request to the PeyGold API.
   * @param url Url context.
   * @param options Request options.
   */
  getResource(url: string): Observable<Blob> {
    url = environment.api.avatarUrl + url;
    return this.http.get(url, { responseType: 'blob' });
  }

}
