import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { MenuItem } from '../models/menu-item';
import { HttpService } from './http.service';

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
   * get side menu items as observable
  */
  getHomeMenu(): Observable<Array<MenuItem>> {
    return this.homeMenu.asObservable();
  }


}