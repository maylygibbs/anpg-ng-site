import { Bloco } from "./bloco";
import { Model } from "./model";
import { Utilizador } from "./utilizador";
import { Documento } from './documento'

/**
 * Poco model
 */
export class Poco extends Model {

    constructor(
        public idPoco: number,
        public bloco: Bloco,
        public paisId: number,
        public nomePoco: string,
        public nomeAbrevPoco: string,
        public descricao: string,
        public latitude: number,
        public longitude: number,
        public observacoes: string,
        public dataCriacao: Date,
        public criadoPor: Utilizador,
        public dataAlteracao: Date,
        public alteradoPor: Utilizador,
        public documentos: Array<Documento>

    ) {

        super();
    }
}