import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ContactInfo} from './contactInfo';
import {EmailService} from './email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  @Input() contactInfo: ContactInfo;
  submitted = false;
  contactForm: FormGroup;
  submissionMessage: string;

  constructor(private emailService: EmailService, private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      'contact-name': ['', Validators.required],
      'contact-email': ['', Validators.compose([Validators.required, Validators.email])],
      'contact-phone-number': [''],
      'contact-message': ['', Validators.required]
    });
  }

  ngOnInit() {
    this.contactInfo = {name: null, email: null, phone: null, message: null};
  }

  onSubmit() {
    if (this.contactForm.valid) {
      let phoneNumber = '';
      if (this.contactForm.get('contact-phone-number').value) {
        phoneNumber = this.contactForm.get('contact-phone-number').value.replace(/\D+/g, '');
      }
      const newContact: ContactInfo = new ContactInfo(
        this.contactForm.get('contact-name').value,
        this.contactForm.get('contact-email').value,
        phoneNumber,
        this.contactForm.get('contact-message').value);
      this.sendMail(newContact);
      this.contactForm.reset();
    }
  }

  sendMail(newContact: ContactInfo) {
    this.emailService.sendEmail(newContact).subscribe(res => {
      console.log('Email Success', res);
      this.submissionMessage = 'Thank You For Your Submission!';
      this.submitted = true;
    }, error => {
      this.submissionMessage = 'Oops! Something must have gone wrong. Please try again later.';
      this.submitted = true;
      console.log('Email Error', error);
    });
    setTimeout(() => {
      this.submitted = false;
    }, 5000);
  }

  changePhoneModel(val: string) {
    this.contactInfo.phone = val;
  }
}
