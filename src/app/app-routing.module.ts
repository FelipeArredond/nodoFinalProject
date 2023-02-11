import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { HomepageComponent } from './homepage/homepage.component';

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
    path: '',
    component: HomepageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
