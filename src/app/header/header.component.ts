import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
import {SmoothScrollService} from "../smooth-scroll.service";
import {WindowService} from "../window.service";
import {ComponentTrackingService} from "../component-tracking.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  isIn = false;
  vertPosition = 0;
  prevVertPosition = 0;
  compTrackSub: Subscription;
  focusedTab: String;
  constructor(private ss: SmoothScrollService, private windowService: WindowService,
              private componentTracker: ComponentTrackingService, private _elementRef: ElementRef) { }

  ngOnInit() {
    this.compTrackSub = this.componentTracker.focusedComponentObservable
      .subscribe(focused => {
        this.focusedTab = focused;
        const tabId = focused + '-link';
        const elementId = focused + '';
        if (document.getElementById(tabId) != null) {
          const w =  window.screen.height;
          const s1 = this.vertPosition;
          const s2 = s1 + w;
          const e1 = this.ss.getYPosition(focused);
          const e2 = e1 + document.getElementById(elementId).offsetHeight;
          // console.log("W: " + w + " S1: " + s1 + " S2: " + s2 + " E1: " + e1 + " E2: " + e2 + " %C3: "+ + ((s2 - e1) / w) + " %C4: " + ((e2 - s1) / w));
          if ((s1 <= e1 && s2 >= e2) ||
            (s1 >= e1 && s2 <= e2) ||
            (s1 <= e1 && s2 <= e2 && (((s2 - e1) / w) >= .51)) ||
            (s1 >= e1 && s2 >= e2 && (((e2 - s1) / w) >= .51))) {
            document.getElementById(tabId).focus();
          }
        }
      });
  }

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

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    this.prevVertPosition = this.vertPosition;
    this.vertPosition = this.windowService.getCurrentYPosition();
  }
}
