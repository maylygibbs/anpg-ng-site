import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PacoteDados } from '../models/pacote-dados';
import { HttpService } from './http.service';
import { environment } from '../../../environments/environment';
import { Bacia } from '../models/bacia';
import { Bloco } from '../models/bloco';
import { Poco } from '../models/poco';
import { Documento } from '../models/documento';
import { TipoDocumento } from '../models/tipo-documento';

@Injectable({
  providedIn: 'root'
})
export class PacotedadosService extends HttpService {

  constructor(protected http: HttpClient,
    private sanitizer: DomSanitizer) {
    super(http);
  }

  /**
   * Servicio que devuelve lista de pacotes registrados
   */
  getAllPacotes(): Promise<Array<PacoteDados>> {

    let pacotes = new Array<PacoteDados>();
    return this.get(environment.api_pacotesdados.url, '/pacotes').toPromise().then(
      (resp) => {
        pacotes = resp.PacotesdeDados.map((item) => {
          const pacote = new PacoteDados(
            item.IdPacote,
            item.NomePacote,
            item.DescricaoPacote,
            this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${item.ImagemPacote}`),
            item.Observacoes,
            item.Onshore);
          return pacote;
        })
        return pacotes;
      }
    ).catch((error) => {
      return pacotes;
    });

  }

  /**
   * Servicio que permite devolver detalle de un pacote de dados dado id
   * @param id 
   */
  getPacoteById(id: number): Promise<Array<PacoteDados>> {
    let pacotes = new Array<PacoteDados>();
    return this.get(environment.api_pacotesdados.url, `/pacotes/${id}`).toPromise().then(
      (resp) => {
        pacotes = resp.PacotesdeDados.map((item) => {
          const pacote = new PacoteDados(
            item.IdPacote,
            item.NomePacote,
            item.DescricaoPacote,
            this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${item.ImagemPacote}`),
            item.Observacoes,
            item.Onshore);
          pacote.mapa = item.MapaURL;
          let bTemp: Array<Bacia>;

          bTemp = item.Bacia.map((itemBacia:any) => {
            const bacia = new Bacia(itemBacia.IdBacia);
            bacia.nomeBacia = itemBacia.NomeBacia;
            bacia.descricaoBacia = itemBacia.DescricaoBacia;
            bacia.observacoes = itemBacia.Observacoes;
            bacia.areatotalK2 = itemBacia.AreatotalK2;
            bacia.anoAtlasAcessibilidade = itemBacia.AnoAtlasAcessibilidade;
            bacia.blocos = itemBacia.Blocos.map((itemBloco:any) => {
              const bloco = new Bloco(itemBloco.IdBloco);
              bloco.nomeBloco = itemBloco.NomeBloco;
              bloco.descripBloco = itemBloco.DescripBloco;
              bloco.observacoes = itemBloco.Observacoes;
              bloco.onshore = itemBloco.Onshore;
              bloco.pocos = itemBloco.Pocos.map((itemPoco) => {
                const poco = new Poco(itemPoco.IdPoco);
                poco.nomePoco = itemPoco.NomePoco;
                poco.nomeAbrevPoco = itemPoco.NomeAbrevPoco;
                poco.descricao = itemPoco.DescricaoPoco;
                poco.documentos = itemPoco.DocumentosPoco.map((itemDoc:any) => {
                  const documento = new Documento(itemDoc.DocumentoIDPocos);
                  documento.nomeDoc = itemDoc.NomeDocPocos;
                  documento.nomeCurto = itemDoc.NomeCurto;
                  documento.tipoDocumento = new TipoDocumento(itemDoc.IdTipoDocumentoPocos, itemDoc.TipoDocumentoPocos);
                  return documento;
                })
                return poco;
              });
              bloco.dadosGeoFisicos = itemBloco.DadosGeoFisBloco.map((itemDoc:any)=>{
                const documento = new Documento(itemDoc.DocumentoIDGeoFis);
                documento.nomeDoc = itemDoc.NomeDocGeoFis;
                documento.nomeCurto = itemDoc.NomeCurto;
                documento.tipoDocumento = new TipoDocumento(itemDoc.IdTipoDocumentoGeoFis, itemDoc.TipoDocumentoGeoFis);
                return documento;
              });
              bloco.documentos = itemBloco.DocumentosBloco.map((itemDoc:any)=>{
                const documento = new Documento(itemDoc.DocumentoIDBlocos);
                documento.nomeDoc = itemDoc.NomeDocMapaBlocos;
                documento.nomeCurto = itemDoc.NomeCurto;
                documento.tipoDocumento = new TipoDocumento(itemDoc.IdTipoDocumentoBlocos, itemDoc.TipoDocumentoBlocos);
                return documento;
              });
              return bloco;
            });
            bacia.documentos = itemBacia.DocumentosBacia.map((itemDoc:any)=>{
              const documento = new Documento(itemDoc.DocumentoIDBacia);
              documento.nomeDoc = itemDoc.NomeDocBacia;
              //documento.nomeCurto = itemDoc.NomeCurto;
              documento.tipoDocumento = new TipoDocumento(itemDoc.IdTipoDocumentoBacia, itemDoc.TipoDocumentoBacia);
              return documento;
            });
            return bacia;
          });
          pacote.bacia = bTemp[0];

          pacote.dadosAdicionais = item.Dadosdiconal.map((itemAdicional:any)=>{
            const bloco = new Bloco(itemAdicional.IdBloco);
            bloco.nomeBloco = itemAdicional.NomeBloco;
            return bloco;
          });

          pacote.estudos = item.Estudo.map((itemEstudo:any)=>{
            const documento = new Documento(itemEstudo.DocumentoIDEstudio);
            documento.nomeDoc = itemEstudo.NomeDocEstudio;
            documento.nomeCurto = itemEstudo.NomeCurto;
            documento.tipoDocumento = new TipoDocumento(itemEstudo.IdTipoDocumentoEstudio, itemEstudo.TipoDocumentoEstudio);
            return documento;
          });

          pacote.relatoriosAbandono = item.RelatorioAbandono.map((itemDoc:any)=>{
            const documento = new Documento(itemDoc.DocumentoIDAbandono);
            documento.nomeDoc = itemDoc.NomeDocAbandono;
            documento.nomeCurto = itemDoc.NomeCurto;
            documento.tipoDocumento = new TipoDocumento(itemDoc.IdTipoDocumentoBacia, itemDoc.TipoDocumentoBacia);
            return documento;
          });
          return pacote;
        })
        return pacotes;
      }
    ).catch((error) => {
      return pacotes;
    });
  }
}
