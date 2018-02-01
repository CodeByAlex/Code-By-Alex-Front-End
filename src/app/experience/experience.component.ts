import {Component, ElementRef, HostListener} from '@angular/core';
import {ElementFinderService} from '../element-finder.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  ALL_EXPERIENCE_INDEX = 0;
  FRONT_END_SECTION_INDEX = 1;
  BACK_END_SECTION_INDEX = 2;
  UX_SECTION_INDEX = 3;

  currentIndex = 0;
  focusedElement = 'experience-default';

  constructor(private el: ElementRef, private elementFinderService: ElementFinderService) {}

  switchSectionView(expSection) {
    this.currentIndex = expSection;
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    const elements: Element[] = this.el.nativeElement.querySelectorAll('.service_box');

    this.focusedElement = this.elementFinderService.findlargestElementInView(elements);
  }
}
