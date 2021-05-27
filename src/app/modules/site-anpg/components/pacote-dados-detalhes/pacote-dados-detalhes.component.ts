import { environment } from './../../../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { Bloco } from '../../../../core/models/bloco';
import { GrupoDocumento } from '../../../../core/models/grupo-documento';
import { TipoDocumento } from '../../../../core/models/tipo-documento';
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
  public env: any;

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
    this.env = environment;
    this.spinner.show();
    this.item$ = this.documentTypeService.getDocumentTypes().subscribe(
      (items:Array<TipoDocumento>)=>{
        this.documentTypes = items;
      }
    );
      //TODO: cambiar por this.pacoteId
    this.pacotesDadosService.getPacoteById(1).then(
      (resp:any) => {
        this.pacote = resp;
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

  /**
   * show section document by id
   * @param sectionIndex 
   */
  showSectionDocuments(sectionIndex:number){
    this.sectionIndex = sectionIndex;
    if(sectionIndex>0){
      let groupsArray = this.pacote.groupDocuments.filter((group,index)=> index == sectionIndex-1 );
      this.groupDocumentsSelected = groupsArray[0];
    }
  }

  thisBlocoHasDocuments(bloco: Bloco):boolean{
    let hasDocuments = false;
    if(bloco.pocos && bloco.pocos.length > 0){
      bloco.pocos.forEach(element => {
        if (element.documentos){
          hasDocuments = true;
        }
      });
    }
    


    return hasDocuments;

  }

}
