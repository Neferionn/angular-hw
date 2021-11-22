/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appImgOpacity]',
})
export class ImgOpacityDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseover') onMouseOver(): void {
    this.hover(1, '0.5s ease-in');
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.hover(0.7, '0.5s ease-out');
  }

  private hover(opacity: number, transition: string) {
    this.el.nativeElement.style.opacity = opacity;
    this.el.nativeElement.style.transition = transition;
  }
}
