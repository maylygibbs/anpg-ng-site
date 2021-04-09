import { animate, group, keyframes, query, style, transition, trigger } from '@angular/animations';


export const rotateFlipToRight = trigger('rotateFToLeft', [transition('* => *',

    [
        query(':enter', [style({ backfaceVisibility: 'hidden', transformStyle: 'preserve-3d' })], { optional: true }),
        group([

            query(':enter', [
                style({ opacity: '0', 'transform-origin': '50% 50%' }),
                animate('0.5s 0.5s ease-out', keyframes([
                    style({ opacity: '0.2', transform: 'translateZ(-1000px) rotateY(-90deg)', offset: 0 }),
                    style({ opacity: '1', transform: 'translateZ(0px) rotateY(0deg)', offset: 1 })
                ]))
            ], { optional: true }),
            query(':leave', [
                animate('0.5s 0.5s ease-in', keyframes([
                    style({ opacity: '1', 'transform-origin': '50% 50%', transform: 'translateZ(0px) rotateY(0deg)', offset: 0 }),
                    style({ opacity: '0.2', transform: 'translateZ(-1000px) rotateY(90deg)', offset: 1 })
                ]))
            ], { optional: true }),
        ])
    ]

)

])