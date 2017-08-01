import {Component, ElementRef, HostListener, Input, OnInit, QueryList, ViewChildren} from '@angular/core';
import {SmoothScrollService} from '../smooth-scroll.service';
import {WindowService} from '../window.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  @Input() focusedSection;
  isIn = false;
  vertPosition = 0;
  prevVertPosition = 0;

  constructor(private ss: SmoothScrollService, private windowService: WindowService, private _elementRef: ElementRef) { }

  toggleState() {
    this.isIn = this.isIn === false ? true : false;
  }

  closeNav() {
    this.isIn = false;
  }

  scroll(eid, event) {
    event.preventDefault();
    this.ss.smoothScroll(eid);
  }

  isScrollDown() {
    return this.prevVertPosition < this.vertPosition;
  }

  isSectionInView(id: string) {
    return id === this.focusedSection;
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    this.prevVertPosition = this.vertPosition;
    this.vertPosition = this.windowService.getCurrentYPosition();
  }
}
