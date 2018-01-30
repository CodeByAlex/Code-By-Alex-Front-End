import {Component, ElementRef, HostListener, QueryList, ViewChildren} from '@angular/core';
import {ElementFinderService} from "./element-finder.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  link: string;
  focusedSection: string;
  constructor(private el: ElementRef, private elementFinderService: ElementFinderService ) {
    this.link = '-link';
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    const sections: Element[] = this.el.nativeElement.querySelectorAll('.section');
    this.focusedSection = this.elementFinderService.findSectioninView(sections);
    if (this.focusedSection != null) {
      document.getElementById(this.focusedSection + this.link).focus();
    }
  }

}
