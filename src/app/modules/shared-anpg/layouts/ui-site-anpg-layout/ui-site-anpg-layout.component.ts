import { animate, group, keyframes, query, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { rotateFlipToRight } from '../../animations/router-animations';


@Component({
  selector: 'app-ui-site-anpg-layout',
  templateUrl: './ui-site-anpg-layout.component.html',
  styleUrls: ['./ui-site-anpg-layout.component.scss'],
  animations: [rotateFlipToRight]

})
export class UiSiteAnpgLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

}

