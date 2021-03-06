import { SafeResourceUrl } from "@angular/platform-browser";
import { Bacia } from "./bacia";
import { Bloco } from "./bloco";
import { Documento } from "./documento";
import { GrupoDocumento } from "./grupo-documento";
import { Model } from "./model";
import { TipoDocumento } from "./tipo-documento";
import { Utilizador } from "./utilizador";

export class PacoteDados extends Model {


    public mapa: string;        
    public dataCriacao: Date;
    public criadoPor: Utilizador;
    public dataAlteracao: Date;
    public alteradoPor: Utilizador;
    public avatar:string;
    public bacias: Array<Bacia>;
    public dadosAdicionais: Array<Bloco>;
    public dadosGeoFisico: Array<Documento>;
    public estudos: Array<Documento>;
    public infoJuridica: Array<Documento>; 
    public relatoriosAbandono: Array<Documento>;
    public groupDocuments: Array<GrupoDocumento>;
    public groupDocumentsTypes:Array<Object>;


    constructor(
        public idPacote?: number,
        public nomePacote?: string,
        public descricaoPacote?: string,
        public imagemPacote?: SafeResourceUrl,
        public observacoes?: string,
        public onshore?: boolean
    ) {
        super();

    }

    /** Return id encrypted */
    get encryptIdentity():string{
        return btoa(String(this.idPacote));
    }

}