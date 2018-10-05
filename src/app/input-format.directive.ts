import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input('appInputFormat') format: string;
  constructor(private el: ElementRef) { }

  @HostListener('blur') onblur(){
    let val: string = this.el.nativeElement.value;
    if(this.format == 'uppercase')
      this.el.nativeElement.value = val.toUpperCase();
    else
    this.el.nativeElement.value = val.toLowerCase();
  }
}
