import { Model } from "./model";
/**
 * Utilizador model
 */
export class Utilizador extends Model {


    constructor(
        public idUtilizador: number,
        public nomeUtilizador: string
    ) {
        super()
    }
}