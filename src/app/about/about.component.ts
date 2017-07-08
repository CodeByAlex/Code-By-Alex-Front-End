import {Component, HostListener, OnInit} from '@angular/core';
import {ComponentTrackingService} from "../component-tracking.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private componentTracker: ComponentTrackingService) { }

  ngOnInit() {
  }

  @HostListener('mouseover') onMouseOver() {
    this.componentTracker.setNewFocus('about');
  };
}
