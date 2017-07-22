import {Directive, ElementRef, HostListener, OnInit} from '@angular/core';
import {PhonePipe} from './phonePipe';

@Directive({
  selector: '[appPhoneFormatter]'
})
export class PhoneFormatterDirective implements OnInit{

  private el: HTMLInputElement;

  constructor(
    private elementRef: ElementRef,
    private phonePipe: PhonePipe
  ) {
    this.el = this.elementRef.nativeElement;
  }

  ngOnInit() {
    this.el.value = this.phonePipe.transform(this.el.value);
  }

  @HostListener('focus', ['$event.target.value'])
  onFocus(value) {
    this.el.value = this.phonePipe.parse(value);
  }

  @HostListener('blur', ['$event.target.value'])
  onBlur(value) {
    this.el.value = this.phonePipe.transform(value);
  }
}
