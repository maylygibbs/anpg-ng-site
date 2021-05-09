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
import { GrupoDocumento } from "../models/grupo-documento";

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
        pacotes = resp[0].data.PacotesdeDados.map((item: any) => {
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
  getPacoteById(id: number): Promise<PacoteDados> {
    let pacotes = new Array<PacoteDados>();
    return this.get(environment.api_pacotesdados.url, `/pacotes/${id}`).toPromise().then(
      (resp) => {

        pacotes = resp[0].data.PacotesdeDados.map((item: any) => {
          const pacote = new PacoteDados(
            item.IdPacote,
            item.NomePacote,
            item.DescricaoPacote,
            this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${item.ImagemPacote}`),
            item.Observacoes,
            item.Onshore);
          pacote.mapa = item.MapaURL;
          /** Bacia */
          if (item.Bacia) {
            let bTemp: Array<Bacia>;
            pacote.bacias = item.Bacia.map((itemBacia: any) => {
              const bacia = new Bacia(itemBacia.IdBacia);
              bacia.nomeBacia = itemBacia.NomeBacia;
              bacia.descricaoBacia = itemBacia.DescricaoBacia;
              bacia.observacoes = itemBacia.Observacoes;
              bacia.areatotalK2 = itemBacia.AreatotalK2;
              bacia.anoAtlasAcessibilidade = itemBacia.AnoAtlasAcessibilidade;
              /** Blocos */
              if (itemBacia.Blocos) {
                bacia.blocos = itemBacia.Blocos.map((itemBloco: any) => {
                  const bloco = new Bloco(itemBloco.IdBloco);
                  bloco.nomeBloco = itemBloco.NomeBloco;
                  bloco.descripBloco = itemBloco.DescripBloco;
                  bloco.observacoes = itemBloco.Observacoes;
                  bloco.onshore = itemBloco.Onshore;
                  /** Pocos */
                  if (itemBloco.Pocos) {
                    bloco.pocos = itemBloco.Pocos.map((itemPoco) => {
                      const poco = new Poco(itemPoco.IdPoco);
                      poco.nomePoco = itemPoco.NomePoco;
                      poco.nomeAbrevPoco = itemPoco.NomeAbrevPoco;
                      poco.descricao = itemPoco.DescricaoPoco;
                      if (itemPoco.DocumentosPoco) {
                        poco.documentos = itemPoco.DocumentosPoco.map((itemDoc: any) => {
                          const documento = new Documento(itemDoc.DocumentoIDPocos);
                          documento.nomeDoc = itemDoc.NomeDocPocos;
                          documento.nomeCurto = itemDoc.NomeCurto;
                          documento.tipoDocumento = new TipoDocumento(itemDoc.IdTipoDocumentoPocos, itemDoc.TipoDocumentoPocos);
                          return documento;
                        });
                      }

                      return poco;
                    });
                  }
                  if (itemBloco.DadosGeoFisBloco) {
                    bloco.dadosGeoFisicos = itemBloco.DadosGeoFisBloco.map((itemDoc: any) => {
                      const documento = new Documento(itemDoc.DocumentoIDGeoFis);
                      documento.nomeDoc = itemDoc.NomeDocGeoFis;
                      documento.nomeCurto = itemDoc.NomeCurto;
                      documento.tipoDocumento = new TipoDocumento(itemDoc.IdTipoDocumentoGeoFis, itemDoc.TipoDocumentoGeoFis);
                      return documento;
                    });
                  }
                  if (itemBloco.DocumentosBloco) {
                    bloco.documentos = itemBloco.DocumentosBloco.map((itemDoc: any) => {
                      const documento = new Documento(itemDoc.DocumentoIDBlocos);
                      documento.nomeDoc = itemDoc.NomeDocMapaBlocos;
                      documento.nomeCurto = itemDoc.NomeCurto;
                      documento.tipoDocumento = new TipoDocumento(itemDoc.IdTipoDocumentoBlocos, itemDoc.TipoDocumentoBlocos);
                      return documento;
                    });
                  }

                  if (itemBloco.MapaBloco) {
                    bloco.mapas = itemBloco.MapaBloco.map((itemMapa: any) => {
                      const documento = new Documento(itemMapa.DocumentoIDMBloco);
                      documento.nomeDoc = itemMapa.NomeDocMBloco;
                      documento.nomeCurto = itemMapa.NomeCurto;
                      documento.tipoDocumento = new TipoDocumento(itemMapa.IdTipoDocumentoMBloco, itemMapa.TipoDocumentoMBloco);
                      return documento;
                    });
                  }
                  return bloco;
                });
              }
              if (itemBacia.DocumentosBacia) {
                bacia.documentos = itemBacia.DocumentosBacia.map((itemDoc: any) => {
                  const documento = new Documento(itemDoc.DocumentoIDBacia);
                  documento.nomeDoc = itemDoc.NomeDocBacia;
                  documento.nomeCurto = itemDoc.NomeCurtoBacia;
                  documento.tipoDocumento = new TipoDocumento(itemDoc.IdTipoDocumentoBacia, itemDoc.TipoDocumentoBacia);
                  return documento;
                });
              }
              if (itemBacia.AtlasAcessibilidaBacia) {
                bacia.atlasAcessibilidad = itemBacia.AtlasAcessibilidaBacia.map((itemAtlas) => {
                  const documento = new Documento(itemAtlas.DocumentoIDAtlas);
                  documento.nomeDoc = itemAtlas.NomeDocAtlas;
                  documento.nomeCurto = itemAtlas.NomeCurtoAtlas;
                  documento.tipoDocumento = new TipoDocumento(itemAtlas.IdTipoDocumentoAtlas, itemAtlas.TipoDocumentoAtlas);
                  return documento;
                });
              }
              if (itemBacia.MapaBacia) {
                bacia.mapas = itemBacia.MapaBacia.map((itemMapa: any) => {
                  const documento = new Documento(itemMapa.DocumentoIDMapaBacia);
                  documento.nomeDoc = itemMapa.NomeDocMapaBacia;
                  documento.nomeCurto = itemMapa.NomeCurtoBacia;
                  documento.tipoDocumento = new TipoDocumento(itemMapa.IdTipoDocumentoMapaBacia, itemMapa.TipoDocumentoMapaBacia);
                  return documento;
                });
              }

              return bacia;
            });
          }

          if (item.Dadosdiconal) {
            pacote.dadosAdicionais = item.Dadosdiconal.map((itemAdicional: any) => {
              const bloco = new Bloco(itemAdicional.IdBloco);
              bloco.nomeBloco = itemAdicional.NomeBloco;
              return bloco;
            });
          }

          if (item.Estudo) {
            pacote.estudos = item.Estudo.map((itemEstudo: any) => {
              const documento = new Documento(itemEstudo.DocumentoIDEstudio);
              documento.nomeDoc = itemEstudo.NomeDocEstudio;
              documento.nomeCurto = itemEstudo.NomeCurto;
              documento.tipoDocumento = new TipoDocumento(itemEstudo.IdTipoDocumentoEstudio, itemEstudo.TipoDocumentoEstudio);
              return documento;
            });
          }

          if (item.RelatorioAbandono) {
            pacote.relatoriosAbandono = item.RelatorioAbandono.map((itemDoc: any) => {
              const documento = new Documento(itemDoc.DocumentoIDAbandono);
              documento.nomeDoc = itemDoc.NomeDocAbandono;
              documento.nomeCurto = itemDoc.NomeCurto;
              documento.tipoDocumento = new TipoDocumento(itemDoc.IdTipoDocumentoBacia, itemDoc.TipoDocumentoBacia);
              return documento;
            });
          }

          if (item.PacoteGeoFisico) {
            pacote.dadosGeoFisico = item.PacoteGeoFisico.map((itemBloco: any) => {
              const bloco = new Bloco(itemBloco.IdBloco);
              bloco.nomeBloco = itemBloco.NomeBloco;
              return Bloco;
            });
          }

          if (item.InfoJuridica) {
            pacote.infoJuridica = item.InfoJuridica.map((itemInfoJuri: any) => {
              const documento = new Documento(itemInfoJuri.DocumentoIDJuridica);
              documento.nomeDoc = itemInfoJuri.NomeDocJuridica;
              documento.nomeCurto = itemInfoJuri.NomeCurto;
              documento.tipoDocumento = new TipoDocumento(itemInfoJuri.IdTipoDocumentoJuridica, itemInfoJuri.TipoDocumentoJuridica);
              return documento;
            });
          }
          /* MAPPER DOCUMENT BY TYPE DOCUMENT */
          if (item.Documentos) {
            pacote.groupDocuments = item.Documentos.map((itemGroupDoc: any) => {
              const groupDocuments = new GrupoDocumento();
              groupDocuments.tipoDocumento = new TipoDocumento(itemGroupDoc.IdTipoDoc, itemGroupDoc.RotuloTDoc);
              groupDocuments.tipoDocumento.title = itemGroupDoc.RotuloTDoc;
              groupDocuments.tipoDocumento.image = itemGroupDoc.Imagen;
              groupDocuments.tipoDocumento.orderPosition = itemGroupDoc.PosicaoOrdem;

              if (itemGroupDoc.PacoteDocumentos) {
                groupDocuments.hasPacoteDocuments = true;
                groupDocuments.documentos = itemGroupDoc.PacoteDocumentos.map((itemDoc: any) => {
                  const documento = new Documento(itemDoc.DocumentoID);
                  documento.nomeDoc = itemDoc.NomeDoc;
                  documento.nomeCurto = itemDoc.NomeCurto;
                  documento.url = itemDoc.URL;
                  return documento;
                });
              }
              if (itemGroupDoc.PacoteBacias) {
                groupDocuments.pacoteBacias = itemGroupDoc.PacoteBacias.map((itemBacia: any) => {
                  const bacia = new Bacia(itemBacia.BaciaID);
                  bacia.nomeBacia = itemBacia.NomeBacia;
                  if (itemBacia.Documentos) {
                    groupDocuments.hasBaciasDocuments = true;
                    bacia.documentos = itemBacia.Documentos.map((itemDoc: any) => {
                      const documento = new Documento(itemDoc.DocumentoID);
                      documento.nomeDoc = itemDoc.NomeDoc;
                      documento.nomeCurto = itemDoc.NomeCurto;
                      documento.url = itemDoc.URL;
                      return documento;
                    });
                  }
                  return bacia;
                });
              }

              if (itemGroupDoc.PacoteBlocos) {
                groupDocuments.pacoteBlocos = itemGroupDoc.PacoteBlocos.map((itemBloco: any) => {
                  const bloco = new Bloco(itemBloco.IdBloco);
                  bloco.nomeBloco = itemBloco.NomeBloco;
                  bloco.bacia = new Bacia(itemBloco.IdBacia);
                  bloco.bacia.nomeBacia = itemBloco.NomeBacia;

                  if (itemBloco.Documentos) {
                    groupDocuments.hasBlocosDocuments = true;
                    bloco.documentos = itemBloco.Documentos.map((itemDoc: any) => {
                      const documento = new Documento(itemDoc.DocumentoID);
                      documento.nomeDoc = itemDoc.NomeDoc;
                      documento.nomeCurto = itemDoc.NomeCurto;
                      documento.url = itemDoc.URL;
                      return documento;
                    });
                  }
                  return bloco;
                });
              }
              
              if (itemGroupDoc.PacotePocos) {
                groupDocuments.pacotePocos = itemGroupDoc.PacotePocos.map((itemBloco: any) => {
                  const bloco = new Bloco(itemBloco.IdBloco);
                  bloco.nomeBloco = itemBloco.NomeBloco;
                  bloco.bacia = new Bacia(itemBloco.IdBacia);
                  bloco.bacia.nomeBacia = itemBloco.NomeBacia;

                  if (itemBloco.Poco) {
                    bloco.pocos = itemBloco.Poco.map((itemPoco: any) => {
                      const poco = new Poco(itemPoco.IdPoco);
                      poco.nomePoco = itemPoco.NomePoco;
                      if (itemPoco.Documentos) {
                        groupDocuments.hasPocosDocuments = true;
                        poco.documentos = itemPoco.Documentos.map((itemDoc: any) => {
                          const documento = new Documento(itemDoc.DocumentoID);
                          documento.nomeDoc = itemDoc.NomeDoc;
                          documento.nomeCurto = itemDoc.NomeCurto;
                          documento.url = itemDoc.URL;
                          return documento;
                        });
                      }
                      return poco;
                    });
                  }

                  return bloco;
                });
              }

              return groupDocuments;
            });
          }

          if (pacote.groupDocuments) {
            pacote.groupDocumentsTypes = pacote.groupDocuments.map((itemGroupDoc: any) => {

              return {
                image: itemGroupDoc.tipoDocumento.image,
                thumbImage: itemGroupDoc.tipoDocumento.image,
                title: itemGroupDoc.tipoDocumento.title,
                alt: itemGroupDoc.tipoDocumento.title
              }

            });

            pacote.groupDocumentsTypes.unshift(
              {
                image: 'assets/images/0.png',
                thumbImage: 'assets/images/0.png',
                title: 'Informação básica',
                alt: 'Informação básica'
              })
          }

          return pacote;
        })
        return pacotes[0];
      }
    ).catch((error) => {
      console.log(error)
      return null;
    });
  }
}
