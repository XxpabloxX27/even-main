import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import * as kf from '../../../shared/animations/keyframes';
import { trigger, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-us-detail',
  templateUrl: './us-detail.component.html',
  styleUrls: ['./us-detail.component.css'],
  animations: [
    trigger('cardAnimator', [
      transition('* => swing', animate(1000, keyframes(kf.swing))),
      transition('* => slideOutLeft', animate(200, keyframes(kf.slideOutLeft))),
      transition('* => fadeOutLeft', animate(200, keyframes(kf.fadeOutLeft))),
      transition('* => fadeOutRight', animate(200, keyframes(kf.fadeOutRight))),
      transition('* => fadeInLeft', animate(200, keyframes(kf.fadeInLeft))),
      transition('* => fadeInRight', animate(200, keyframes(kf.fadeInRight))),
    ])
  ]
})
export class UsDetailComponent implements OnInit, AfterViewInit {
  animationState1: string;
  animationState2: string;
  animationState3: string;
  animationState4: string;
  animationState5: string;
  animationState6: string;
  animationState7: string;
  animationState8: string;
  screenHeight = 0;
  screenWidth = 0;
  @ViewChild('item1') item1: ElementRef;
  @ViewChild('item2') item2: ElementRef;
  @ViewChild('item3') item3: ElementRef;
  @ViewChild('item4') item4: ElementRef;
  @ViewChild('item5') item5: ElementRef;
  @ViewChild('item6') item6: ElementRef;
  @ViewChild('item7') item7: ElementRef;
  @ViewChild('item8') item8: ElementRef;
  @ViewChild('dot1') dot1: ElementRef;
  @ViewChild('dot2') dot2: ElementRef;
  @ViewChild('dot3') dot3: ElementRef;
  @ViewChild('dot4') dot4: ElementRef;
  @ViewChild('dot5') dot5: ElementRef;
  @ViewChild('dot6') dot6: ElementRef;
  @ViewChild('dot7') dot7: ElementRef;
  @ViewChild('dot8') dot8: ElementRef;
  constructor() { }
  ngAfterViewInit(): void {
    this.onResize();
  }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    if (window.innerWidth <= 480 && window.innerWidth !== this.screenWidth) {
      this.item2.nativeElement.style.display = 'none';
      this.item3.nativeElement.style.display = 'none';
      this.item4.nativeElement.style.display = 'none';
      this.item6.nativeElement.style.display = 'none';
      this.item7.nativeElement.style.display = 'none';
      this.item8.nativeElement.style.display = 'none';
      // this.dot1.nativeElement.style.backgroundColor = '#36b2bb';
      // this.dot2.nativeElement.style.backgroundColor = 'lightgray';
      // this.dot3.nativeElement.style.backgroundColor = 'lightgray';
      // this.dot4.nativeElement.style.backgroundColor = 'lightgray';
      // this.dot5.nativeElement.style.backgroundColor = 'lightgray';
      // this.dot6.nativeElement.style.backgroundColor = 'lightgray';
    } else if (window.innerWidth > 480) {
      this.item1.nativeElement.style.display = 'block';
      this.item2.nativeElement.style.display = 'block';
      this.item3.nativeElement.style.display = 'block';
      this.item4.nativeElement.style.display = 'block';
      this.item5.nativeElement.style.display = 'block';
      this.item6.nativeElement.style.display = 'block';
      this.item7.nativeElement.style.display = 'block';
      this.item8.nativeElement.style.display = 'block';
    }
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
  }

  startAnimation(state, num) {
    if (window.innerWidth <= 480) {
      switch (num) {
        case 1:
          if (!this.animationState1 && state === 'fadeOutLeft') {
            this.animationState1 = state;
            this.item1.nativeElement.style.display = 'none';
            this.item2.nativeElement.style.display = 'block';
            this.animationState2 = 'fadeInRight';
            // this.dot1.nativeElement.style.backgroundColor = 'lightgray';
            // this.dot2.nativeElement.style.backgroundColor = '#36b2bb';
          }
          break;
        case 2:
          if (!this.animationState2 && state === 'fadeOutLeft') {
            this.animationState2 = state;
            this.item2.nativeElement.style.display = 'none';
            this.item3.nativeElement.style.display = 'block';
            this.animationState3 = 'fadeInRight';
            // this.dot2.nativeElement.style.backgroundColor = 'lightgray';
            // this.dot3.nativeElement.style.backgroundColor = '#36b2bb';
          } else if (!this.animationState2 && state === 'fadeOutRight') {
            this.animationState2 = state;
            this.item2.nativeElement.style.display = 'none';
            this.item1.nativeElement.style.display = 'block';
            this.animationState1 = 'fadeInLeft';
            // this.dot2.nativeElement.style.backgroundColor = 'lightgray';
            // this.dot1.nativeElement.style.backgroundColor = '#36b2bb';
          }
          break;
        case 3:
          if (!this.animationState3 && state === 'fadeOutLeft') {
            this.animationState3 = state;
            this.item3.nativeElement.style.display = 'none';
            this.item4.nativeElement.style.display = 'block';
            this.animationState4 = 'fadeInRight';
            // this.dot3.nativeElement.style.backgroundColor = 'lightgray';
            // this.dot4.nativeElement.style.backgroundColor = '#36b2bb';
          } else if (!this.animationState3 && state === 'fadeOutRight') {
            this.animationState3 = state;
            this.item3.nativeElement.style.display = 'none';
            this.item2.nativeElement.style.display = 'block';
            this.animationState2 = 'fadeInLeft';
            // this.dot3.nativeElement.style.backgroundColor = 'lightgray';
            // this.dot2.nativeElement.style.backgroundColor = '#36b2bb';
          }
          break;
        case 4:
          if (!this.animationState4 && state === 'fadeOutRight') {
            this.animationState4 = state;
            this.item4.nativeElement.style.display = 'none';
            this.item3.nativeElement.style.display = 'block';
            this.animationState3 = 'fadeInLeft';
            // this.dot4.nativeElement.style.backgroundColor = 'lightgray';
            // this.dot3.nativeElement.style.backgroundColor = '#36b2bb';
          }
          break;
        case 5:
          if (!this.animationState5 && state === 'fadeOutLeft') {
            this.animationState5 = state;
            this.item5.nativeElement.style.display = 'none';
            this.item6.nativeElement.style.display = 'block';
            this.animationState6 = 'fadeOutLeft';
            // this.dot5.nativeElement.style.backgroundColor = 'lightgray';
            // this.dot6.nativeElement.style.backgroundColor = '#36b2bb';
          }
          break;
        case 6:
          if (!this.animationState6 && state === 'fadeOutLeft') {
            this.animationState6 = state;
            this.item6.nativeElement.style.display = 'none';
            this.item7.nativeElement.style.display = 'block';
            this.animationState7 = 'fadeOutLeft';
            // this.dot6.nativeElement.style.backgroundColor = 'lightgray';
            // this.dot7.nativeElement.style.backgroundColor = '#36b2bb';
          } else if (!this.animationState6 && state === 'fadeOutRight') {
            this.animationState6 = state;
            this.item6.nativeElement.style.display = 'none';
            this.item5.nativeElement.style.display = 'block';
            this.animationState5 = 'fadeOutRight';
            // this.dot6.nativeElement.style.backgroundColor = 'lightgray';
            // this.dot5.nativeElement.style.backgroundColor = '#36b2bb';
          }
          break;
        case 7:
          if (!this.animationState7 && state === 'fadeOutLeft') {
            this.animationState7 = state;
            this.item7.nativeElement.style.display = 'none';
            this.item8.nativeElement.style.display = 'block';
            this.animationState8 = 'fadeOutLeft';
            // this.dot7.nativeElement.style.backgroundColor = 'lightgray';
            // this.dot8.nativeElement.style.backgroundColor = '#36b2bb';
          } else if (!this.animationState7 && state === 'fadeOutRight') {
            this.animationState7 = state;
            this.item7.nativeElement.style.display = 'none';
            this.item6.nativeElement.style.display = 'block';
            this.animationState6 = 'fadeOutRight';
            // this.dot7.nativeElement.style.backgroundColor = 'lightgray';
            // this.dot6.nativeElement.style.backgroundColor = '#36b2bb';
          }
          break;
        case 8:
          if (!this.animationState8 && state === 'fadeOutRight') {
            this.animationState8 = state;
            this.item8.nativeElement.style.display = 'none';
            this.item7.nativeElement.style.display = 'block';
            this.animationState7 = 'fadeOutRight';
            // this.dot8.nativeElement.style.backgroundColor = 'lightgray';
            // this.dot7.nativeElement.style.backgroundColor = '#36b2bb';
          }
          break;
      }
    }
  }



  resetAnimationState() {
    this.animationState1 = '';
    this.animationState2 = '';
    this.animationState3 = '';
    this.animationState4 = '';
    this.animationState5 = '';
    this.animationState6 = '';
    this.animationState7 = '';
    this.animationState8 = '';
  }

}
