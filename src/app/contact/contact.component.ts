import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {ContactInfo} from './contactInfo';
import {EmailService} from './email.service';
import 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  public static SUCCESS_RESPONSE = 'OK';
  public static CONTACT_NAME_ATTRIBUTE = 'contact-name';
  public static CONTACT_EMAIL_ATTRIBUTE = 'contact-email';
  public static CONTACT_MESSAGE_ATTRIBUTE = 'contact-message';
  public static CONTACT_PHONE_ATTRIBUTE = 'contact-phone-number';
  public static DIGIT_REGEX = /\D+/g;

  @Input() contactInfo: ContactInfo;
  submitted = false;
  contactForm: FormGroup;
  submissionMessage: string;

  constructor(private emailService: EmailService, private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({});
    this.contactForm.addControl(ContactComponent.CONTACT_NAME_ATTRIBUTE,
        new FormControl('', Validators.required));
    this.contactForm.addControl(ContactComponent.CONTACT_EMAIL_ATTRIBUTE,
        new FormControl('', Validators.compose([Validators.required, Validators.email])));
    this.contactForm.addControl(ContactComponent.CONTACT_PHONE_ATTRIBUTE,
        new FormControl(''));
    this.contactForm.addControl(ContactComponent.CONTACT_MESSAGE_ATTRIBUTE,
        new FormControl('', Validators.required));
  }

  ngOnInit() {
    this.contactInfo = {name: null, email: null, phone: null, message: null};
  }

  onSubmit() {
    if (this.contactForm.valid) {
      let phoneNumber = '';
      if (this.contactForm.get(ContactComponent.CONTACT_PHONE_ATTRIBUTE).value) {
        phoneNumber = this.contactForm.get(ContactComponent.CONTACT_PHONE_ATTRIBUTE).value.replace(ContactComponent.DIGIT_REGEX, '');
      }
      const newContact: ContactInfo = new ContactInfo(
        this.contactForm.get(ContactComponent.CONTACT_NAME_ATTRIBUTE).value,
        this.contactForm.get(ContactComponent.CONTACT_EMAIL_ATTRIBUTE).value,
        phoneNumber,
        this.contactForm.get(ContactComponent.CONTACT_MESSAGE_ATTRIBUTE).value);
      this.sendMail(newContact);
      this.contactForm.reset();
    }
  }

  sendMail(newContact: ContactInfo) {
    this.emailService.sendEmail(newContact)
    .subscribe(
        (data) => {
          if(data === ContactComponent.SUCCESS_RESPONSE){
            this.handleSuccess();
          } else {
            this.handleError();
          }
        },
        (err) => {
          this.handleError();
        }
    );
  }

  changePhoneModel(val: string) {
    this.contactInfo.phone = val;
  }

  handleError() {
    this.submitted = true;
    this.submissionMessage = 'Oops! Something must have gone wrong. Please try again later.';
    setTimeout(() => {
      this.submitted = false;
    }, 5000);
  }

  handleSuccess(){
    this.submitted = true;
    this.submissionMessage = 'Thank You For Your Submission!';
    setTimeout(() => {
      this.submitted = false;
    }, 5000);
  }

}