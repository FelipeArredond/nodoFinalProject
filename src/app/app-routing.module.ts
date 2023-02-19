import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { FreemiumComponent } from './freemium/freemium.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TemaryComponent } from './temary/temary.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { TargettcursosComponent } from './targettcursos/targettcursos.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { EcomerceComponent } from './ecomerce/ecomerce.component';
import { FormContactComponent } from './form-contact/form-contact.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
      path:'testimonial',
      component: TestimonialsComponent,

  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'courses',
    component: CoursesComponent
  },
  {
     path:'temary',
     component: TemaryComponent
  },
  {
    path: 'freemium',
    component: FreemiumComponent
  },
  {
    path: 'adminpanel',
    component: AdminpanelComponent
  },
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'target',
    component: TargettcursosComponent
  },
  {
    path: 'subscription',
    component: SubscriptionComponent
  },
  {
    path: 'ecomerce',
    component:EcomerceComponent
  },
  {
    path: 'formcontact',
    component:FormContactComponent

  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
