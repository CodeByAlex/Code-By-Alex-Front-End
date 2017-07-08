import {Component, HostListener, OnInit} from '@angular/core';
import {CompanyRole} from "./company-role";
import {ComponentTrackingService} from "../component-tracking.service";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  roles: Array<CompanyRole>;

  constructor(private componentTracker: ComponentTrackingService) {
    this.roles =[
      new CompanyRole("Full Stack Developer", "Bellese Technologies", "Sep 2016", "Present",
        ["Worked on front end development for proposal exercises and assisted in the writing effort",
          "Developed measures for the Quality Incentive Program as a part of the End Stage Renal Disease Quality Reporting System team under a CMS contract",
          "Completed a proof of concept for H2 database use with Fitnesse fixtures in QIP and gave trainings to both the test and development teams on how to use H2 alongside Fitnesse"],
        "./../../assets/bellese-logo.jpg"),
      new CompanyRole("Back End Software Engineer", "Edaptive Systems", "Dec 2015", "Sep 2016",
        ["Lead development efforts for a metric used for measuring the quality of care of patients with End Stage Renal Disease as part of a contract for CMS with zero defects",
          "Developed complex portions of the Standardized Readmission Ratio calculation using Java, Hibernate, and SQL. Held code/criteria walkthroughs and provided input on calls with Arbor Research alongside business analysts",
          "Tested and analyzed code using various score validation efforts including discrepancy detection between two versions of calculated results",
          "Redesigned project elements to use utility classes for common calculations which reduced code complexity and increased accuracy, readability, and performance"],
        "./../../assets/edaptive-logo.jpeg"),
      new CompanyRole("Research & Development Software Engineer Intern", "G2 Inc.", "May 2015", "Oct 2015",
        ["Worked on front end development for proposal exercises and assisted in the writing effort",
          "Developed measures for the Quality Incentive Program as a part of the End Stage Renal Disease Quality Reporting System team under a CMS contract",
          "Completed a proof of concept for H2 database use with Fitnesse fixtures in QIP and gave trainings to both the test and development teams on how to use H2 alongside Fitnesse"],
        "./../../assets/g2-logo.png"),
      new CompanyRole("IT Specialist Intern", "Bloomberg Bureau of National Affairs","Jun 2014","Jan 2015",
        ["Project Managed the company implementation of Microsoft yammer to 200+ employees. Developed a proposal and project plan, wrote technical documentation, and lead employee trainings",
          "Completed QA testing on Salesforce Apex Code",
          "Assisted the User Experience department with refacing the Bloomberg Law website and fix accessibility issues"],
        "./../../assets/bbna-logo.png"),

    ];
  }

  ngOnInit() {

  }

  @HostListener('mouseover') onMouseOver() {
    this.componentTracker.setNewFocus('experience');
  };
}
