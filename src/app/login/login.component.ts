import { Component } from '@angular/core';
import { UserDataServiceService } from '../user-data-service.service';
import { IUserData } from './IUserData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private userDataService: UserDataServiceService, private router: Router){}

  userData: IUserData = {
    username: "",
    password: "",
    isLogged: false
  }

  navigate(path: string){
    this.router.navigate(['/', path])
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
      this.userDataService.addUserData(this.userData);
      this.userDataService.giveUserData.emit(this.userData);
      this.navigate('/');
    }else if(this.userData.username == "root" && this.userData.password == "root"){
      this.userData.isLogged = true;
      this.userDataService.giveUserData.emit(this.userData);
    }
    else{
      alert("Wrong username or password!")
    }
  }

}
