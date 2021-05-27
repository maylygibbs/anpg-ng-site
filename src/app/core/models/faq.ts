import { Model } from "./model";
/**
 * Fac model
 */
export class Faq extends Model {


    public ambito: string;
    public duvidas: string;
    public respostas:string;
    public dataCriacao:Date;
    
    constructor(
        public idFaq?: number
    ) {
        super()
    }
}