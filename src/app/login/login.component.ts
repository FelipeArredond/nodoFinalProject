import { Component, EventEmitter, Output } from '@angular/core';
import { IUserData } from './IUserData';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Output() log: EventEmitter<IUserData> = new EventEmitter();

  userData: IUserData = {
    username: "",
    password: "",
    isLogged: false
  }

  handleUsername($event: any){
    this.userData.username = $event.target.value;
  }

  handlePassword($event: any){
    this.userData.password = $event.target.value;
  }

  login($event: any){
    $event.preventDefault();
    if(this.userData.username == "admin" && this.userData.password == "admin"){
      this.userData.isLogged = true;
      this.log.emit(this.userData);
    }else{
      alert("Wrong username or password!")
    }
  }

}
