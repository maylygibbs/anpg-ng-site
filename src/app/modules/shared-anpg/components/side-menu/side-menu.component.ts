import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import { MenuService } from '../../../../core/services/menu.service';
import { MenuItem } from '../../../../core/models/menu-item';
import { menu as smenu} from '../../../site-anpg/utils/side-menu';


@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  public items = new Array<MenuItem>();
  private $items: Subscription;

  constructor(private menuService: MenuService) { 
  }

  ngOnInit(): void {
    this.$items = this.menuService.getSideMenu().subscribe((items)=>{
      this.items = items;
    });
  }

  ngOnDestroy() {
    if (this.$items) {
      this.$items.unsubscribe();
    }
  }

}
