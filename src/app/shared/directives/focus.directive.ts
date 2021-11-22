/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFocus]',
})
export class FocusDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseover') onMouseOver(): void {
    this.focus('#6495ed', '0.3s ease-in');
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.focus('', '0.3s ease-out');
  }

  private focus(color: string, transition: string) {
    this.el.nativeElement.style.color = color;
    this.el.nativeElement.style.transition = transition;
  }
}
