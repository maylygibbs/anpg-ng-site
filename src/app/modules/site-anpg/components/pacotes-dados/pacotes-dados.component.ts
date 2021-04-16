import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { PacoteDados } from 'src/app/core/models/pacote-dados';
import { PacotedadosService } from '../../../../core/services/pacotedados.service';

@Component({
  selector: 'app-pacote-dados',
  templateUrl: './pacotes-dados.component.html',
  styleUrls: ['./pacotes-dados.component.scss']
})
export class PacotesDadosComponent implements OnInit {

  public pacotes: Array<PacoteDados>;

  constructor(private pacotesDadosService: PacotedadosService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.pacotesDadosService.getAllPacotes().then(
      (resp: Array<PacoteDados>) => {
        this.pacotes = resp;
        console.log(resp);
        this.spinner.hide();
      }
    ).catch(
      (error) => {
        console.log(error);
        this.spinner.hide();
      }
    )

  }

}
