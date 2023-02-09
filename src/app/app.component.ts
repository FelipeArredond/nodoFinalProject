import { Component } from '@angular/core';
import { IUserData } from './login/IUserData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'finalproject';
  userData: IUserData = {
    username: "",
    password: "",
    isLogged: false
  }

  handleLogin(user: IUserData){
    this.userData = user;
  }

}
