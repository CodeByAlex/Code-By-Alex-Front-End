import {Directive, ElementRef, HostListener, OnInit} from '@angular/core';
import {PhonePipe} from './phonePipe';

@Directive({
  selector: '[appPhoneFormatter]'
})
export class PhoneFormatterDirective implements OnInit{

  constructor(private elementRef: ElementRef, private phonePipe: PhonePipe) {
  }

  ngOnInit() {
    this.elementRef.nativeElement.value = this.phonePipe.transform(this.elementRef.nativeElement.value);
  }

  @HostListener('focus', ['$event.target.value'])
  onFocus(value) {
    this.elementRef.nativeElement.value = this.phonePipe.parse(value);
  }

  @HostListener('blur', ['$event.target.value'])
  onBlur(value) {
    this.elementRef.nativeElement.value = this.phonePipe.transform(value);
  }
}
