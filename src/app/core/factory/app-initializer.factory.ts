import { MenuService } from "../services/menu.service";

export function homeMenuProviderFactory(
    menuService:MenuService){
    return () => menuService.getHomeItemMenu(20);
}

export function sideMenuProviderFactory(
    menuService:MenuService){
    return () => menuService.getSideItemMenu(20);
}