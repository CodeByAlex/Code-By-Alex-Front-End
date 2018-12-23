import {Component, ElementRef, HostListener, Input, OnInit, QueryList, ViewChildren, AfterViewInit} from '@angular/core';
import {SmoothScrollService} from '../smooth-scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {
  @ViewChildren('link') links: QueryList<ElementRef>;
  @Input() focusedSection;
  isIn = false;
  prevPosition = 0;
  isScrollDown = false;
  pagePercent = 0;

  circle = null;
  radius = null;
  circumference = null;
  constructor(private ss: SmoothScrollService) {
  }

  ngAfterViewInit() {
    this.circle = document.querySelector('circle');
    this.radius = this.circle.r.baseVal.value;
    this.circumference = this.radius * 2 * Math.PI;
    this.circle.style.strokeDasharray = `${this.circumference} ${this.circumference}`;
    this.circle.style.strokeDashoffset = `${this.circumference}`;
  }

  setProgress(percent) {
    const offset = this.circumference - percent * this.circumference;
    this.circle.style.strokeDashoffset = offset;
  }

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
    const currentPosition = this.ss.getCurrentYPosition();
    this.isScrollDown = this.prevPosition < currentPosition;
    this.prevPosition = currentPosition;
    this.pagePercent = currentPosition / document.getElementById('contact').offsetTop;
    if (this.pagePercent <= 1) {
      this.setProgress(this.pagePercent);
    }

    this.links.forEach(link => {
      if (link.nativeElement.id.includes(this.focusedSection)) {
        link.nativeElement.focus();
      }
    });
  }
}
