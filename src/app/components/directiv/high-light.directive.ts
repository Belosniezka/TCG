import {Directive, ElementRef, inject} from '@angular/core';

@Directive({
  selector: '[appHighLight]',
  host: {
  '(mouseenter)': 'focusIn()',
    '(mouseleave)': 'focusOut()'
  }
})
export class HighLightDirective {
  elementRef = inject(ElementRef)


  focusIn(): void {
    this.elementRef.nativeElement.style.scale='1.03'
    // this.elementRef.nativeElement.style.borderWidth='1px'
  }

  focusOut(): void {
    this.elementRef.nativeElement.style.scale=''
  }
}
