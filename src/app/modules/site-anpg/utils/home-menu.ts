import { MenuItem } from "../../../core/models/menu-item";

export const menu: Array<MenuItem> = [

    Object.assign(new MenuItem(),{ label: 'Sobre nós', href: '/anpg/about', icon : '', class:'fa-home fa' } ),
    Object.assign(new MenuItem(), { label: 'Equipe', href: '/', icon: 'sliders', class:'fa-envelope fa color--117'}),
    Object.assign(new MenuItem(),{ label: 'Testemunhos', href: '/', icon: 'sliders', class:'fa-puzzle-piece fa color--63'} ),
    Object.assign(new MenuItem(),{ label: 'Postagens', href: '/', icon: 'sliders', class:'fa-puzzle-piece fa color--63'} ),

    Object.assign(new MenuItem(), { label: 'Facebook', href:'https://www.facebook.com/', icon: 'sliders', class:'fa-briefcase fa color--57'}),
    Object.assign(new MenuItem(), { label: 'Twitter', href:'https://twitter.com/', icon: 'sliders', class:'fa-comment fa color--60'}),
    Object.assign(new MenuItem(), { label: 'Pacotes de Dados', href: '/anpg/pacotes', icon: 'sliders', class:'fa-comments-o fa color--41'}),
    Object.assign(new MenuItem(), { label: 'Portfólio', href: '/', icon: 'sliders', class:'fa-users fa color--21'}),
    Object.assign(new MenuItem(), { label: 'Contate nos', href: '/', icon: 'sliders', class:'fa-users fa color--21'}),
    Object.assign(new MenuItem(), { label: 'Blog', href: '/', icon: 'sliders', class:'fa-users fa color--21'}),
    Object.assign(new MenuItem(), { label: 'Serviços', href: '/', icon: 'sliders', class:'fa-users fa color--21'})
]