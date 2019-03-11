import {Component, HostListener, OnInit} from '@angular/core';
import { Ability } from '../models/ability';

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.css']
})
export class AbilitiesComponent {
  languages: Ability [];
  frameworks: Ability [];
  testTools: Ability [];
  databases: Ability [];
  operatingSys: Ability [];
  devOps: Ability [];
  abilitySection: Ability [][];
  starNumber: number;

  constructor() {
    this.starNumber = 5;
    this.setUpData();
    this.abilitySection = [this.languages, this.frameworks, this.testTools, this.databases, this.operatingSys, this.devOps];
  }

  setUpData(): void {
    this.languages = [
      new Ability('Java', 4),
      new Ability('HTML5', 4),
      new Ability('Typescript', 4),
      new Ability('Javacript', 3),
      new Ability('CSS3', 3),
      new Ability('SQL', 3),
      new Ability('Python', 1),
    ];
    this.frameworks = [
      new Ability('Angular', 5),
      new Ability('JQuery', 3),
      new Ability('React', 2),
    ];
    this.testTools = [
      new Ability('Junit', 5),
      new Ability('Jasmine', 4),
      new Ability('Postman', 3)
    ];
    this.databases = [
      new Ability('Oracle', 4),
      new Ability('Postgresql', 3),
      new Ability('H2', 2),
      new Ability('Dynamo', 1)
    ];
    this.operatingSys = [
      new Ability('Windows', 5),
      new Ability('OSX', 5),
      new Ability('Linux', 3)
    ];
    this.devOps = [
      new Ability('AWS S3', 3),
      new Ability('Travis CI', 3),
      new Ability('AWS Route 53', 2),
      new Ability('AWS EC2', 2),
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
