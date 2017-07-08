import {Component, HostListener, OnInit} from '@angular/core';
import {SmoothScrollService} from "../smooth-scroll.service";
import {ComponentTrackingService} from "../component-tracking.service";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {

  constructor(private ss: SmoothScrollService, private componentTracker: ComponentTrackingService) { }

  scroll(eid, event) {
    event.preventDefault();
    this.ss.smoothScroll(eid);
  }

  @HostListener('mouseover') onMouseOver() {
    this.componentTracker.setNewFocus('home');
  };
}
