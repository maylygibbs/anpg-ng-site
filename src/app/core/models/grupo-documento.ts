import { Documento } from "./documento";
import { Model } from "./model";
import { TipoDocumento } from "./tipo-documento";



/**
 * Documento model
 */
export class GrupoDocumento extends Model {

    public tipoDocumento: TipoDocumento;
    public documentos: Array<Documento>;

    constructor() {
        super();
    }


}