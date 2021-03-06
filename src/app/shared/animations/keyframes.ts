import { keyframes, style } from '@angular/animations';

export const swing = [
    style({transform: 'rotate3d(0, 0, 1, 15deg)', offset: .2}),
    style({transform: 'rotate3d(0, 0, 1, -10deg)', offset: .4}),
    style({transform: 'rotate3d(0, 0, 1, 5deg)', offset: .6}),
    style({transform: 'rotate3d(0, 0, 1, -5deg)', offset: .8}),
    style({transform: 'none', offset: 1})
];

export const slideOutLeft = [
    style({transform: 'translate3d(0,0,0)'}),
    style([{transform: 'translate3d(-100%,0,0)'}, {visibility: 'hidden'}, ])
];

export const fadeOutLeft = [
    style({opacity: '1'}),
    style([{opacity: '0'}, {transform: 'translate3d(-100%, 0, 0)'}]),
];

export const fadeOutRight = [
    style({opacity: '1'}),
    style([{opacity: '0'}, {transform: 'translate3d(100%, 0, 0)'}]),
];

export const fadeInLeft = [
    style([{opacity: '0'}, {transform: 'translate3d(-100%, 0, 0)'}]),
    style([{opacity: '1'}, {transform: 'translate3d(0, 0, 0)'}]),
];

export const fadeInRight = [
    style([{opacity: '0'}, {transform: 'translate3d(100%, 0, 0)'}]),
    style([{opacity: '1'}, {transform: 'translate3d(0, 0, 0)'}]),
];

export const spin = [
    style({transform: 'rotate(0deg)', offset: 0}),
    style({transform: 'rotate(180deg)', offset: 1}),
];
