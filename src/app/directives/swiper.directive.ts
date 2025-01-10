import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';

@Directive({
  selector: '[appSwiper]',
  standalone: true,
})
export class SwiperDirective implements AfterViewInit {
  @Input() config?: SwiperOptions;

  constructor(private el: ElementRef<SwiperContainer>) {}

  ngAfterViewInit() {
    // Apply configuration to the Swiper element
    Object.assign(this.el.nativeElement, this.config);
    this.el.nativeElement.initialize();
  }
}