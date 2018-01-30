import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {ContactInfo} from "./contactInfo";
import {Observable} from "rxjs";
import {ConfigurationService} from "../config/configuration.service";

@Injectable()
export class EmailService {
  contactEndpoint:string;
  constructor(private http: Http, configService: ConfigurationService) {
    console.log("Reading ConfigurationService");
    configService.getConfiguration("ContactEndpoint").subscribe((result) => this.contactEndpoint = result);
  }

  sendEmail(message: ContactInfo): Observable<ContactInfo> | any {
    return this.http.post(this.contactEndpoint, message)
      .map(response => {
        console.log('Sending email was successful', response);
        return response;
      })
      .catch(error => {
        console.log('Sending email received error', error);
        return Observable.throw(error);
      });
  }

}
