import { Component, OnInit } from '@angular/core';
import { PacoteDados } from 'src/app/core/models/pacote-dados';
import { PacotedadosService } from 'src/app/core/services/pacotedados.service';

@Component({
  selector: 'app-pacote-dados-detalhes',
  templateUrl: './pacote-dados-detalhes.component.html',
  styleUrls: ['./pacote-dados-detalhes.component.scss']
})
export class PacoteDadosDetalhesComponent implements OnInit {

  public pacote: PacoteDados;
  public section: string = 'dadosGeo';

  constructor(private pacotesDadosService: PacotedadosService) { }

  ngOnInit(): void {
    this.pacotesDadosService.getPacoteById(1).then(
      (resp:any) => {
        this.pacote = resp[0];
        console.log(resp);
      }
    ).catch(
      (error) => {
        console.log(error);
      }
    )
    
  }

}
