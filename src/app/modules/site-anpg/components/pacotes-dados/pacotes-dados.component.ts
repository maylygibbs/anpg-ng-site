import { Component, OnInit } from '@angular/core';
import { PacoteDados } from 'src/app/core/models/pacote-dados';
import { PacotedadosService } from '../../../../core/services/pacotedados.service';

@Component({
  selector: 'app-pacote-dados',
  templateUrl: './pacotes-dados.component.html',
  styleUrls: ['./pacotes-dados.component.scss']
})
export class PacotesDadosComponent implements OnInit {

  public pacotes: Array<PacoteDados>;

  constructor(private pacotesDadosService: PacotedadosService) { }

  ngOnInit(): void {

    this.pacotesDadosService.getAllPacotes().then(
      (resp: Array<PacoteDados>) => {
        this.pacotes = resp;
        console.log(resp);
      }
    ).catch(
      (error) => {
        console.log(error);
      }
    )

  }

}
