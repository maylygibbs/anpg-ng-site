import { BaseComponent } from './../base.component';
import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import { MenuService } from '../../../../core/services/menu.service';
import { MenuItem } from '../../../../core/models/menu-item';
import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent extends BaseComponent implements OnInit {

  public items = new Array<MenuItem>();
  private $items: Subscription;

  constructor(protected menuService: MenuService,
    protected translateService: TranslateService) { 
      super(menuService,translateService)
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
