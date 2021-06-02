import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  public errorCode: string;
  public errorMessage: string;

  constructor(private activatedRoute:ActivatedRoute) { 
    this.activatedRoute.params.subscribe((params)=>{
      this.errorCode = params.errorCode;
      this.errorMessage = params.errorMessage
    });
  }

  ngOnInit(): void {
  }

}
