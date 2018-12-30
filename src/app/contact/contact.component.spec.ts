import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorMessagesComponent } from 'src/app/error-messages/error-messages.component';
import { EmailService } from 'src/app/contact/email.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [ ContactComponent, ErrorMessagesComponent ],
      providers: [FormBuilder, EmailService, HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
