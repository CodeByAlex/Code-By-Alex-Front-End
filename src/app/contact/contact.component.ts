import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ContactInfo} from "./contactInfo";
import {EmailService} from "./email.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  @Input() contactInfo: ContactInfo;
  submitted=false;
  contactForm: FormGroup;

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

  onSubmit(){
    this.submitted=true;
    const newContact: ContactInfo = new ContactInfo(
      this.contactForm.get('contact-name').value,
      this.contactForm.get('contact-email').value,
      this.contactForm.get('contact-phone-number').value.replace(/\D+/g, ''),
      this.contactForm.get('contact-message').value);
    this.sendMail(newContact);
    this.contactForm.reset();
    setTimeout(()=>{
      this.submitted=false;
    }, 5000);
  }

  sendMail(newContact:ContactInfo){

    this.emailService.sendEmail(newContact).subscribe(res => {
      console.log('Email Success', res);
      console.log("Email Sent: Name - "+newContact.name+", Email - "+newContact.email+", Phone Number - "+newContact.phone+", Message - "+newContact.message);
    }, error => {
      console.log('Email Error', error);
    })
  }
}
