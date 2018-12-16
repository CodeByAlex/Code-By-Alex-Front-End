import { Injectable } from '@angular/core';
import {ContactInfo} from './contactInfo';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Response } from '@angular/http/src/static_response';
import { Config } from '../../assets/config';
import { Observable } from 'rxjs/Observable';
import * as emailjs from 'emailjs-com';

@Injectable()
export class EmailService {

  constructor(private http: HttpClient) {}

  sendEmail(message: ContactInfo): Observable<Object>  {
    const data = {
      service_id: Config.EMAIL_JS_SERVICE_ID,
      template_id: Config.EMAIL_JS_TEMPLATE_ID,
      user_id: Config.EMAIL_JS_USER_ID,
      template_params: {
        'from_name': message.name,
        'from_email': message.email,
        'message': message.message,
        'phone_number': message.phone,
      }
    };
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const jsonData = JSON.stringify(data);
    return this.http.post(Config.EMAIL_JS_ENDPOINT, JSON.stringify(data), { headers: headers,  responseType: 'text' });
  }

}
