import { Model } from "./model";
/**
 * Utilizador model
 */
export class Utilizador extends Model {


    public nomeUtilizador: string;
    
    constructor(
        public idUtilizador?: number
    ) {
        super()
    }
}