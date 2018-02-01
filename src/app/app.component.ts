import {AfterViewInit, Component, ElementRef, HostListener, QueryList, ViewChildren} from '@angular/core';
import {ElementFinderService} from "./element-finder.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  focusedSection: string;
  sections: Element[] = [];
  constructor(private el: ElementRef, private elementFinderService: ElementFinderService ) {}

  ngAfterViewInit() {
    this.sections = this.el.nativeElement.querySelectorAll('.section');
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    this.focusedSection = this.elementFinderService.findSectionInView(this.sections);
  }

}
