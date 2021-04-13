import { Model } from "./model";
import { SubTipoDocumento } from "./subtipo-documento";
import { SubTipoRelatorio } from "./subtipo-relatorio";
import { TipoDocumento } from "./tipo-documento";
import { TipoRelatorio } from "./tipo-relatorio";
import { Utilizador } from "./utilizador";


/**
 * Documento model
 */
export class Documento extends Model {

    constructor(
        public idDocumento: number,
        public tipoDocuemto: TipoDocumento,
        public subTipoDocumento: SubTipoDocumento,
        public tipoRelatorio: TipoRelatorio,
        public subTipoRelatorio: SubTipoRelatorio,
        public nomeDoc: string,
        public nomeCurto: string,
        public descripcao: string,
        public Observacoes: string,
        public url: string,
        public DataCriacao: Date,
        public CriadoPor: Utilizador,
        public DataAlteracao: Date,
        public AlteradoPor: Utilizador

    ) {
        super()
    }


}