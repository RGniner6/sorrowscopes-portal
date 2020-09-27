import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes,
} from "@angular/animations";

export const fader =
  trigger('routeAnimations', [
    transition('* <=> *', [
      //Step 1
      query(':enter, :leave', [
        style({
          position: 'absolute',
          left: 0,
          width: '100%',
          opacity: 0,
          transform: 'translateY(100%)',
        }),
      ]),
      //Step 2
      query(':enter', [
        animate('600ms ease',
          style({
            opacity: 1,
            transform: 'translateY(0)'
          }))
      ]),
    ])
  ]);

export const slider =
  trigger('routeAnimations', [
    // transition('* => isLeft', slideTo('right')),
    // transition('* => isRight', slideTo('left')),
    transition('isRight => *', slideTo('left')),
    transition('isLeft => *', slideTo('right')),
  ]);

function slideTo(direction) {
  const optional = { optional: true }
  return [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        [direction]: 0,
        width: '100%'
      })
      ], optional),
    query(':enter', [
      style({[direction]: '-100%'})
    ]),
    group([
      query(':leave', [
        animate('600ms ease', style({ [direction]: '100%'}))
      ], optional),
      query(':enter', [
        animate('600ms ease', style({ [direction]: '0%'}))
      ], optional),

    ]),
  ];
}