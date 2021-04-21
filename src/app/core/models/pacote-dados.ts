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
    public bacia: Bacia;
    public dadosAdicionais: Array<Bloco>;
    public dadosGeoFisico: Array<Documento>;
    public estudos: Array<Documento>;
    public infoJuridica: Array<Documento>; 
    public relatoriosAbandono: Array<Documento>;
    public groupDocuments: Array<GrupoDocumento>;


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

    get allGroupDocuments(): Array<any>{
        const arrayTemp = new Array<GrupoDocumento>();
        const grupoDocumento = new GrupoDocumento();
        grupoDocumento.tipoDocumento = new TipoDocumento('0','Informação básica');
        grupoDocumento.tipoDocumento.title = 'Informação básica';
        grupoDocumento.tipoDocumento.image = 'assets/images/0.png';
        arrayTemp.push(grupoDocumento);
        return arrayTemp.concat(this.groupDocuments) ; //Array.prototype.push.apply(arrayTemp, this.groupDocuments);
        
    }

}