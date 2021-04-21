import { Model } from "./model";


/**
 * MenuItem model
 */
export class MenuItem extends Model {

  public label: string;
  public href: string;
  public childs: Array<MenuItem>;
  public displayed: boolean;
  public isSeparator: boolean;
  public icon: string;
  public param: string;
  public className: string;
  public color: string;
  public target: string;

  /** for imagen slider */
  public image: 'assets/img/flags/ad.png';
  public thumbImage: 'assets/img/flags/ad.png';
  public title: 'Image title';
  public alt: 'Image alt';

  /**
   * Get the url for the routerlink
   */
  get routerLink(): any {
    if (this.hasChilds) {
      return [];
    }

    return this.href;
  }

  /**
   * Has children
   */
  get hasChilds(): boolean {
    return this.childs !== undefined;
  }
}
