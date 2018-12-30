import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import {ElementRef} from "@angular/core";
import {ElementFinderService} from "./element-finder.service";
import { HeaderComponent } from 'src/app/header/header.component';
import { BannerComponent } from 'src/app/banner/banner.component';
import { AboutComponent } from 'src/app/about/about.component';
import { AbilitiesComponent } from 'src/app/abilities/abilities.component';
import { ExperienceComponent } from 'src/app/experience/experience.component';
import { SpeakingComponent } from 'src/app/speaking/speaking.component';
import { ContactComponent } from 'src/app/contact/contact.component';
import { FooterComponent } from 'src/app/footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ErrorMessagesComponent } from 'src/app/error-messages/error-messages.component';
import { SmoothScrollService } from 'src/app/smooth-scroll.service';
import { EmailService } from 'src/app/contact/email.service';

class MockElementRef implements ElementRef {
  nativeElement = {};
}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        BannerComponent,
        AboutComponent,
        AbilitiesComponent,
        ExperienceComponent,
        SpeakingComponent,
        ContactComponent,
        FooterComponent,
        ErrorMessagesComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        HttpClientModule
      ],
      providers: [{ provide: ElementRef, useClass: MockElementRef },
        ElementFinderService,
        SmoothScrollService,
        EmailService],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
