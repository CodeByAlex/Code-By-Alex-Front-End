import {Component, ElementRef, HostListener} from '@angular/core';
import {ElementFinderService} from '../element-finder.service';
import { Experience } from '../models/experience';

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

  designExperiences: Experience [];
  frontEndExperiences: Experience [];
  backEndExperiences: Experience [];

  currentIndex = 0;
  focusedElement = 'experience-default';

  constructor(private el: ElementRef, private elementFinderService: ElementFinderService) {
    this.setUpData();
  }

  setUpData() {
    this.designExperiences = [
      new Experience(
        'Global Investment Services, Institutional Site',
        'T. Rowe Price',
        ['Zeplin', 'ASLint', 'Storybook'],
        ['Advocated for and received approval to incorporate accessibility into our development process',
         'Acted as the accessibility point of contact in our effort to meet WCAG AA standards for both development and design teams',
         'Identified testing tools to help raise accessibility issues',
        ]
      ),
      new Experience(
        'ESRD Quality Reporting System for CMS, Facilities Release',
        'Bellese Technologies',
        ['HTML', 'SCSS', 'Codepen IDE'],
        ['Collaborated with the UX and development teams to develop new user-facing features',
        'Worked as a member of the UX/UI design team to bridge the gap between UX and technical implementation taking' +
        'an active role on both sides and defining how the application looks as well as how it works',
        'Recommended and enforced policies for the source-code control system (GIT) and the team’s use thereof',
        'Ensured that front end code met accessibility requirements',
        'Provided software expertise in responsive UI design']
      ),
    ];

    this.frontEndExperiences = [
      new Experience(
        'Global Investment Services, Institutional Site',
        'T. Rowe Price',
        ['Angular Framework', 'SCSS', 'Storybook', 'Adobe Experience Manager', 'JQuery'],
        ['Created and documented a front-end architecture design that supported the needs of the GIS project',
         'Developed a cross-browser and Angular version agnostic Dynamic Component Loader library used to add the capability of dragging ' +
         'and droping Angular components within an authorable environment',
         'Designed and developed flexible components for use in and and outside of a content management system'
         ,
        ]
      ),
      new Experience(
        'ESRD Quality Reporting System for CMS, Facilities Release',
        'Bellese Technologies',
        ['Angular Framework', 'HTML', 'SCSS', 'Apache'],
        ['Designed and developed reusable code components and libraries using the angular framework',
        'Implemented a clean code methodology through CSS best practices' +
        'Designed and developed form components that kept styling consistent across all releases,' +
        'reduced lines of code, and generated the typescript form upon rendering',
        'Developed many pages that included form handling and complex conditional routing']
      ),
      new Experience(
        'Bellese Business Development Proposal',
        'Bellese Technologies',
        ['HTML', 'CSS'],
        ['Worked on front end for proposal exercises and assisted in the writing effort',
        'Utilized the Bootstrap library for the grid layout and basic styling',
        'Designed the web page with inspiration from the styles created by the United States Web Design Standards']
      )
    ];

    this.backEndExperiences = [
      new Experience(
        'ESRD Quality Reporting System for CMS, Facilities Release',
        'Bellese Technologies',
        ['Java', 'Spring Cloud', 'SQL', 'Liquibase'],
        ['Developed the microservice layer made up of an application zone and a data zone',
        'Developed fault-tolerant, scalable REST APIs',
        'Created liquibase scripts for a transition from using an Oracle Database to a Postgresql Database']
      ),
      new Experience(
        'ESRD Quality Incentive Program for CMS',
        'Edaptive Systems/ Bellese Technologies',
        ['Java', 'Spring Hibernate', 'SQL'],
        ['Developed complex algorithms used to measure the quality of facilities treating patients with end stage renal disease',
        'Introduced the use of an H2 database to the development team for the database agnostic testing of sql queries',
        'Worked with Arbor Research alongside business analysts to design the software based on given criteria',
        'Tested and analyzed code using various score validation efforts including ' +
        'discrepancy detection between two versions of calculated results',
        'Redesigned project elements to use utility classes for common calculations ' +
        'which reduced code complexity and increased accuracy, readability, and performance'
        ]
      ),
      new Experience(
        'Scheduling and Path Planning for Computational Ferrying Research Project',
        'G2 Inc.',
        ['Python', 'Latex'],
        ['Developed scheduling and planning algorithms to create optimal task completion order for mobile high performance computers',
        'Created a computer simulation using Python UI libraries',
        'Collected data from the simulation to prove our research hypothesis on the innovative usage of path-finding and automation',
        'Co-authored workshop paper describing our findings that was ' +
        'accepted for the 2016 IEEE Military Communications Conference and published in IEEE']
      ),
    ];
  }

  switchSectionView(expSection) {
    this.currentIndex = expSection;
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    const elements: Element[] = this.el.nativeElement.querySelectorAll('.service_box');

    this.focusedElement = this.elementFinderService.findlargestElementInView(elements);
  }
}
