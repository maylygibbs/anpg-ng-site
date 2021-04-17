import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { MenuItem } from 'src/app/core/models/menu-item';
import { MenuService } from '../../../../core/services/menu.service';
import { menu as hmenu } from '../../utils/home-menu';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public items: Array<MenuItem>;
  private $items: Subscription;

  constructor(private menuService: MenuService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.$items = this.menuService.getHomeMenu().subscribe((items) => {
      this.items = items;
      this.spinner.hide();
    })
  }

  ngOnDestroy() {
    if (this.$items) {
      this.$items.unsubscribe();
    }
  }

}
