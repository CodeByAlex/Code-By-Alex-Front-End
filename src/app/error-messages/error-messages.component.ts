import {Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-error-messages',
  templateUrl: './error-messages.component.html',
  styleUrls: ['./error-messages.component.css']
})
export class ErrorMessagesComponent {
  @Input() control: FormControl;

  constructor() { }

  get errorMessage(){
    for(let propertyName in this.control.errors){
      if(this.control.errors.hasOwnProperty(propertyName) && this.control.touched){
        return this.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }
    return null;
  }

  getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    let config = {
      'required': 'Required',
      'email': 'Invalid email address',
      'minlength': `Minimum length ${validatorValue.requiredLength}`
    };

    return config[validatorName];
  }

}
