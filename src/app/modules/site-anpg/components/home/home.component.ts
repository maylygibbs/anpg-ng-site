import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MenuItem } from 'src/app/core/models/menu-item';
import { MenuService } from '../../../../core/services/menu.service';
import {menu as hmenu} from '../../utils/home-menu';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public items: Array<MenuItem>;
  private $items:Subscription;

  constructor(private menuService: MenuService) { 
    this.menuService.setHomeMenu(hmenu);
  }

  ngOnInit(): void {
    this.$items = this.menuService.getHomeMenu().subscribe((items)=>{
      this.items = items;
    })
    this.menuService.getHomeItemMenu(20,'center').then((item)=>{
      console.log(item);
    })

  }

}
