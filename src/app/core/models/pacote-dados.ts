import { Bacia } from "./bacia";
import { Bloco } from "./bloco";
import { Documento } from "./documento";
import { Model } from "./model";
import { Utilizador } from "./utilizador";

export class PacoteDados extends Model {


    constructor(
        public IdPacote: number,
        public NomePacote: string,
        public DescricaoPacote: string,
        public imagemPacote: string,
        public onshore: boolean,
        public mapa: string,
        public observacoes: string,
        public dataCriacao: Date,
        public criadoPor: Utilizador,
        public dataAlteracao: Date,
        public alteradoPor: Utilizador,
        public avatar:string,
        public bacia: Bacia,
        public dadosAdicionais: Array<Bloco>,
        public dadosGeoFisico: Array<Documento>,
        public estudios: Array<Documento>,
        public infoJuridica: Array<Documento>, 
        public relatoriosAbandono: Array<Documento>, 


    ) {
        super();

    }

}