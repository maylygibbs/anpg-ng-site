import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-emconstrucao',
  templateUrl: './emconstrucao.component.html',
  styleUrls: ['./emconstrucao.component.scss']
})
export class EmconstrucaoComponent implements OnInit {

  @Input() 
  public componentName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
