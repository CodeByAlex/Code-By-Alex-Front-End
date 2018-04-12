import {Component, ElementRef, HostListener, Input, OnInit, QueryList, ViewChildren} from '@angular/core';
import {SmoothScrollService} from '../smooth-scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @ViewChildren('link') links: QueryList<ElementRef>;
  @Input() focusedSection;
  isIn = false;
  prevPosition = 0;
  isScrollDown = false;


  constructor(private ss: SmoothScrollService) { }

  toggleState() {
    this.isIn = this.isIn === false ? true : false;
  }

  closeNav() {
    this.isIn = false;
  }

  scrollToSection(sectionId, event) {
    event.preventDefault();
    this.ss.smoothScroll(sectionId);
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    this.isScrollDown = this.prevPosition < this.ss.getCurrentYPosition();
    this.prevPosition = this.ss.getCurrentYPosition();
    this.links.forEach(link => {
      if (link.nativeElement.id.includes(this.focusedSection)) {
        link.nativeElement.focus();
      }
    });
  }
}
