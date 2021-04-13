import { Bacia } from "./bacia";
import { Documento } from "./documento";
import { Model } from "./model";
import { Poco } from "./poco";
import { Utilizador } from "./utilizador";

/**
 * Bloco model
 */
export class Bloco extends Model{

    constructor(
        public IdBloco:number,
        public BaciaID:Bacia,
        public NomeBloco: string,
        public descripBloco: string,
        public onshore: boolean,
        public observacoes: string,
        public dataCriacao: Date,
        public criadoPor: Utilizador,
        public dataAlteracao: Date,
        public alteradoPor: Utilizador,
        public pocos: Array<Poco>,
        public documentos: Array<Documento>,
        public dadosGeoFisicos: Array<Documento>

    ){
        super();
    }

}