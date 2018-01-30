import {Component, ElementRef, HostListener} from '@angular/core';
import {CompanyRole} from './company-role';
import {ElementFinderService} from '../element-finder.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  expSection = 0;
  frontEnd = 1;
  backEnd = 2;
  userExperience = 3;
  allExperience = 0;
  focusedElement = 'experience-default';

  constructor(private el: ElementRef, private elementFinderService: ElementFinderService) {
  }

  switchSectionView(expSection) {
    this.expSection = expSection;
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    const elements: Element[] = this.el.nativeElement.querySelectorAll('.service_box');

    this.focusedElement = this.elementFinderService.findlargestElementinView(elements);
  }
}
