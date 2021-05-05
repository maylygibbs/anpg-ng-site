import { DocumentTypeService } from "../services/document-type.service";
import { MenuService } from "../services/menu.service";

export function homeMenuProviderFactory(
    menuService:MenuService){
    return () => menuService.getHomeItemMenu('pt');
}

export function sideMenuProviderFactory(
    menuService:MenuService){
    return () => menuService.getSideItemMenu('pt');
}

export function documentTypeProviderFactory(
    socumentTypeService:DocumentTypeService){
    return () => socumentTypeService.getAllDocumentTypes('pt');
}