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
import {WindowService} from "app/window.service";
import {SmoothScrollService} from "./smooth-scroll.service";
import {EmailService} from "./contact/email.service";
import {PhonePipe} from "./contact/phonePipe";
import { ErrorMessagesComponent } from './error-messages/error-messages.component';
import {ConfigurationService} from "./config/configuration.service";

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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [ WindowService, SmoothScrollService, EmailService, ConfigurationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
