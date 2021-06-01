import { environment } from './../../../environments/environment';
import { DocumentTypeService } from "../services/document-type.service";
import { MenuService } from "../services/menu.service";

export function homeMenuProviderFactory(
    menuService:MenuService){
    return () => menuService.getHomeItemMenu(environment.language.pt);
}

export function sideMenuProviderFactory(
    menuService:MenuService){
    return () => menuService.getSideItemMenu(environment.language.pt);
}

export function documentTypeProviderFactory(
    socumentTypeService:DocumentTypeService){
    return () => socumentTypeService.getAllDocumentTypes(environment.language.pt);
}