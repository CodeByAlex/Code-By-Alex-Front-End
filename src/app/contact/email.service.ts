import { Injectable } from '@angular/core';
import {ContactInfo} from './contactInfo';
import {Observable} from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Response } from '@angular/http/src/static_response';
import * as emailjs from 'emailjs-com';
import { Config } from 'assets/config';
@Injectable()
export class EmailService {

  constructor(private http: HttpClient) {}

  sendEmail(message: ContactInfo): Observable<Object>  {
    const service_id = Config.EMAIL_JS_SERVICE_ID;
    const template_id = Config.EMAIL_JS_TEMPLATE_ID;
    const data = {
      service_id: service_id,
      template_id: template_id,
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
    return this.http.post('https://api.emailjs.com/api/v1.0/email/send', JSON.stringify(data), { headers: headers,  responseType: 'text' });
  }

}
