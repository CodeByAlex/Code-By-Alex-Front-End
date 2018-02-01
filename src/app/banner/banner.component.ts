import {Component, HostListener, OnInit} from '@angular/core';
import {SmoothScrollService} from "../smooth-scroll.service";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {

  constructor(private ss: SmoothScrollService) { }

  scrollToSection(sectionId, event) {
    event.preventDefault();
    this.ss.smoothScroll(sectionId);
  }
}
