import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userData = {
    username: "",
    password: "",
    isLogged: false
  }

  handleLogin($event: any){
    console.log($event.target.value)
  }

}
