import { SelectOption } from "./select-option";
/**
 * TipoDocumento model
 */
export class TipoDocumento extends SelectOption{

  /** for imagen slider */
  public image: string;
  public thumbImage:string;
  public title: string;
  public alt: string;
  public orderPosition:number
}