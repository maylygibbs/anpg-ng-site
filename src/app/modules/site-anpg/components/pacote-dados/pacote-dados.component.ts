import { Component, OnInit } from '@angular/core';
import { PacoteDados } from 'src/app/core/models/pacote-dados';
import { PacotedadosService } from 'src/app/core/services/pacotedados.service';

@Component({
  selector: 'app-pacote-dados',
  templateUrl: './pacote-dados.component.html',
  styleUrls: ['./pacote-dados.component.scss']
})
export class PacoteDadosComponent implements OnInit {

  public pacotesDados: PacoteDados;

  constructor(private pacotesDadosService: PacotedadosService) { }

  ngOnInit(): void {
    
    this.pacotesDadosService.getAllPacotes().then(
      (resp)=>{
        console.log(JSON.parse(resp));
      }
    ).catch(
      (error)=>{
        console.log(error);
      }
    )

  }

}
