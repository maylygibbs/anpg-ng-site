import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { GrupoDocumento } from '../../../..//core/models/grupo-documento';
import { TipoDocumento } from '../../../..//core/models/tipo-documento';
import { PacoteDados } from '../../../../core/models/pacote-dados';
import { DocumentTypeService } from '../../../../core/services/document-type.service';
import { PacotedadosService } from '../../../../core/services/pacotedados.service';

@Component({
  selector: 'app-pacote-dados-detalhes',
  templateUrl: './pacote-dados-detalhes.component.html',
  styleUrls: ['./pacote-dados-detalhes.component.scss']
})
export class PacoteDadosDetalhesComponent implements OnInit {

  public pacoteId:number;
  public pacote: PacoteDados;
  public sectionIndex: number = 0;
  public documentTypes: Array<TipoDocumento>;
  public groupDocumentsSelected: GrupoDocumento;
  private item$:Subscription;

  constructor(
    private pacotesDadosService: PacotedadosService,
    private documentTypeService: DocumentTypeService,
    private activatedRoute: ActivatedRoute,
    private spinner: NgxSpinnerService) { 
      this.activatedRoute.params.subscribe((param)=>{
        console.log(param.id);
        this.pacoteId = Number(atob(param.id));
      })
    }

  ngOnInit(): void {
    this.spinner.show();
    this.item$ = this.documentTypeService.getDocumentTypes().subscribe(
      (items:Array<TipoDocumento>)=>{
        this.documentTypes = items;
        console.log('type',this.documentTypes)
      }
    );

    this.pacotesDadosService.getPacoteById(1).then(
      (resp:any) => {
        this.pacote = resp[0];
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

  showSectionDocuments(sectionIndex:number){
    this.sectionIndex = sectionIndex;
    if(sectionIndex>0){
      let groupsArray = this.pacote.groupDocuments.filter((group,index)=> index == sectionIndex-1 );
      this.groupDocumentsSelected = groupsArray[0];
    }
  }

}
