import { Faq } from './../../../../core/models/faq';
import { FaqsService } from './../../../../core/services/faqs.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {

  public faqs: Array<Faq>

  constructor(
    private spinner: NgxSpinnerService,
    private faqsService:FaqsService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.faqsService.getAllFaqs('pt').then((resp:Array<Faq>)=>{
      this.faqs = resp;
      this.spinner.hide();
    })
  }

}
