import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { AbilitiesComponent } from './abilities/abilities.component';
import { BannerComponent } from './banner/banner.component';
import {SmoothScrollService} from './smooth-scroll.service';
import {EmailService} from './contact/email.service';
import {PhonePipe} from './contact/phonePipe';
import { ErrorMessagesComponent } from './error-messages/error-messages.component';
import { PhoneFormatterDirective } from './contact/phone-formatter.directive';
import {ElementFinderService} from './element-finder.service';
import { HttpClientModule } from '@angular/common/http';
import { SpeakingComponent } from './speaking/speaking.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ExperienceComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    AbilitiesComponent,
    BannerComponent,
    PhonePipe,
    ErrorMessagesComponent,
    PhoneFormatterDirective,
    SpeakingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ SmoothScrollService, EmailService, PhonePipe, ElementFinderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
