import { Bacia } from "./bacia";
import { Bloco } from "./bloco";
import { Documento } from "./documento";
import { Model } from "./model";
import { Poco } from "./poco";
import { TipoDocumento } from "./tipo-documento";



/**
 * Documento model
 */
export class GrupoDocumento extends Model {

    public tipoDocumento: TipoDocumento;
    //Documentos pacote
    public documentos: Array<Documento>;
    public hasPacoteDocuments: boolean;
    //Documentos Bacias
    public pacoteBacias: Array<Bacia>;
    public hasBaciasDocuments: boolean;
    //Documentos blocos
    public pacoteBlocos: Array<Bloco>;
    public hasBlocosDocuments: boolean;
    //Documentos pocos
    public pacotePocos: Array<Bloco>;
    public hasPocosDocuments: boolean;

    constructor() {
        super();
    }


}