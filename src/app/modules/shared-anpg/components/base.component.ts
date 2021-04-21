export class BaseComponent{

    encryptParam(param:any):string{
        return btoa(param);
    }

}