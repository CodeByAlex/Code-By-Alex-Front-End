import {Component, HostListener, OnInit} from '@angular/core';
import {SmoothScrollService} from "../smooth-scroll.service";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {

  constructor(private ss: SmoothScrollService) { }

  scroll(eid, event) {
    event.preventDefault();
    this.ss.smoothScroll(eid);
  }
}
