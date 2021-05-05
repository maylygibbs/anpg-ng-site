import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { MenuItem } from '../models/menu-item';
import { HttpService } from './http.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MenuService extends HttpService {

  private sideMenu: BehaviorSubject<Array<MenuItem>> = new BehaviorSubject<Array<MenuItem>>([]);
  private homeMenu: BehaviorSubject<Array<MenuItem>> = new BehaviorSubject<Array<MenuItem>>([]);

  constructor(protected http: HttpClient) {
    super(http);
  }

  /**
   * Initialize and add the items to the menu service.
   * @param items 
   */
  setSideMenu(items: Array<MenuItem>) {
    this.sideMenu.next(items);
  }

  /**
   * get side menu items as observable
   */
  getSideMenu() {
    return this.sideMenu.asObservable();
  }

  /**
   * Initialize and add the items to the home menu service.
   * @param items 
   */
  setHomeMenu(items: Array<MenuItem>) {
    this.homeMenu.next(items);
  }

  /**
   * get home menu items as observable
  */
  getHomeMenu(): Observable<Array<MenuItem>> {
    return this.homeMenu.asObservable();
  }

  /**
   * get home menu items from services
   * @param lenguage 
   * @param location 
   */
  getHomeItemMenu(lenguage:string):Promise<Array<MenuItem>>{
    let options:Array<MenuItem>;
    return this.get(environment.api_pacotesdados.url,`/shared/menu/${environment.appId}/${lenguage}/center`).toPromise().then(
      (resp:any)=>{ 
        
        if(resp && resp.length>0){
          options = new Array<MenuItem>();
          options = resp[0].data.Menus.map((item:any)=>{
            const menu = new MenuItem();
            menu.label = item.Rotulo;
            menu.href = item.Href;
            const colorArray = item.Color.split("|");
            menu.color = colorArray[1]; 
            menu.background = colorArray[0];
            return menu;
          });
        }
        this.setHomeMenu(options);
       return options; 
    });
  }

    /**
   * get home menu items from services
   * @param lenguage 
   * @param location 
   */
  getSideItemMenu(lenguage:string):Promise<Array<MenuItem>>{
    let options:Array<MenuItem>;
    return this.get(environment.api_pacotesdados.url,`/shared/menu/${environment.appId}/${lenguage}/side`).toPromise().then(
      (resp:any)=>{ 
        
        if(resp && resp.length>0){
          options = new Array<MenuItem>();
          options = resp[0].data.Menus.map((item:any)=>{
            const menu = new MenuItem();
            menu.label = item.Rotulo;
            menu.href = item.Href;
            const colorArray = item.Color.split("|");
            menu.color = colorArray[1]; 
            menu.background = colorArray[0];
            menu.className = item.Class;
            return menu;
          });
        }
        this.setSideMenu(options);
       return options; 
    });
  }




}
