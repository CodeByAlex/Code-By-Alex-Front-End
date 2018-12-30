import {Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-error-messages',
  templateUrl: './error-messages.component.html',
  styleUrls: ['./error-messages.component.css']
})
export class ErrorMessagesComponent {
  @Input() control: FormControl;
  config: any;
  constructor() {
    this.config = {
      'required': 'Required',
      'email': 'Invalid email address'
    };
  }

  get errorMessage() {
    if (this.control && this.control.errors) {
      for (const propertyName in this.control.errors) {
        if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
          return this.getValidatorErrorMessage(propertyName);
        }
      }
    }
    return null;
  }

  getValidatorErrorMessage(validatorName: string) {
    return this.config[validatorName];
  }

}
