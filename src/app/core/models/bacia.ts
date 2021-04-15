import { Bloco } from "./bloco";
import { Documento } from "./documento";
import { Model } from "./model";
import { PacoteDados } from "./pacote-dados";
import { Utilizador } from "./utilizador";
/**
 * Bacia model
 */
export class Bacia extends Model {

    public pacoteDados: PacoteDados;
    public nomeBacia: string;
    public descricaoBacia: string;
    public areatotalK2: number;
    public observacoes: string;
    public anoAtlasAcessibilidade: number;
    public dataCriacao: Date;
    public criadoPor: Utilizador;
    public dataAlteracao: Date;
    public alteradoPor: Utilizador;
    public blocos: Array<Bloco>;
    public atlasAcessibilidad:Array<Documento>;
    public documentos: Array<Documento>;
    public mapas:Array<Documento>

    constructor(
        public idBacia?: number
    ) {
        super();
    }
}