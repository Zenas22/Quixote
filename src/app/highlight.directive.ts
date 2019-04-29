import { Directive, ElementRef, Input, HostListener } from '@angular/core';
import { Quote } from './quote';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() quote:Quote;

  constructor(private elem: ElementRef) {
    this.elem.nativeElement.style.backgroundColor = 'Red';
  }

  @HostListener('click') onClicks() {
    this.highlight('None');
  }

  @HostListener('dblclick') onDoubleClicks() {
    this.highlight('None');
  }

  private highlight(action: string){
    this.elem.nativeElement.style.backgroundColor = action;
  }

}
