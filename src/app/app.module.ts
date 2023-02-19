import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseitemComponent } from './courseitem/courseitem.component';
import { TemaryComponent } from './temary/temary.component';
import { FreemiumComponent } from './freemium/freemium.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { AdmincourseitemComponent } from './admincourseitem/admincourseitem.component';
import { EcomerceComponent } from './ecomerce/ecomerce.component';
import { TargettcursosComponent } from './targettcursos/targettcursos.component';
import { FormContactComponent } from './form-contact/form-contact.component';
import { SubscriptionComponent } from './subscription/subscription.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    TestimonialsComponent,
    LoginComponent,
    SignupComponent,
    HomepageComponent,
    CoursesComponent,
    CourseitemComponent,
    TemaryComponent,
    FreemiumComponent,
    AdminpanelComponent,
    AdmincourseitemComponent,
    EcomerceComponent,
    TargettcursosComponent,
    FormContactComponent,
    SubscriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
