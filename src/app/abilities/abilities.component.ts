import {Component, HostListener, OnInit} from '@angular/core';
import {Ability} from './ability';

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.css']
})
export class AbilitiesComponent {
  languages: Array<Ability>;
  frameworks: Array<Ability>;
  testTools: Array<Ability>;
  databases: Array<Ability>;
  operatingSys: Array<Ability>;
  devTools: Array<Ability>;
  abilitySection: Array<Array<Ability>>;
  starNumber: number;

  constructor() {
    this.starNumber = 5;

    this.abilitySection = [this.languages, this.frameworks, this.testTools, this.databases, this.operatingSys, this.devTools];

    this.languages = [
      new Ability('Languages', 'Java', 4),
      new Ability('Languages', 'HTML', 4),
      new Ability('Languages', 'CSS', 4),
      new Ability('Languages', 'Typescript', 4),
      new Ability('Languages', 'SQL', 3),
      new Ability('Languages', 'Python', 1),
      new Ability('Languages', 'NodeJs', 1)
    ];
    this.frameworks = [
      new Ability('Frameworks', 'Angular', 5),
      new Ability('Languages', 'JQuery', 3),
      new Ability('Frameworks', 'React', 1),
    ];
    this.testTools = [
      new Ability('Test Tools', 'Junit', 5),
      new Ability('Test Tools', 'Fitnesse', 5),
      new Ability('Test Tools', 'Jasmine', 4),
      new Ability('Test Tools', 'Postman', 3)
    ];
    this.databases = [
      new Ability('Databases', 'Oracle', 4),
      new Ability('Databases', 'Postgresql', 3),
      new Ability('Databases', 'H2', 2),
      new Ability('Databases', 'Mongo', 1)
    ];
    this.operatingSys = [
      new Ability('Operating Systems', 'Windows', 5),
      new Ability('Operating Systems', 'OSX', 5),
      new Ability('Operating Systems', 'Linux', 3)
    ];
    this.devTools = [
      new Ability('Development Tools', 'Visual Studio', 5),
      new Ability('Development Tools', 'Webstorm', 5),
      new Ability('Development Tools', 'Eclipse', 5),
      new Ability('Development Tools', 'GitHub', 5),
      new Ability('Development Tools', 'GitLab', 4),
      new Ability('Development Tools', 'SourceTree', 4),
      new Ability('Development Tools', 'Maven', 3),
      new Ability('Development Tools', 'Latex', 3)
    ];
  }

  getArray(num: number) {
    const array = new Array(num);
    for (let i = 0; i < num; i++) {
      array[i] = i + 1;
    }
    return array;
  }
}
