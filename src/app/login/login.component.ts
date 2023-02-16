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
    this.userData.username = $event.target.value;//SE LE DA AL USERNAME EL VALOR DEL INPUT
  }

  handlePassword($event: any){
    this.userData.password = $event.target.value;//SE LE DA AL PASSWORD EL VALOR DEL INPUT
  }

  login($event: any){
    if(this.userData.username == "admin" && this.userData.password == "admin"){
      this.userData.isLogged = true;
      this.userDataService.addUserData(this.userData);//LE PASAMOS AL SERVICIO EL USUARIO LOGUEADO
      this.userDataService.giveUserData.emit(this.userData);
      this.navigate('/');//VAMOS AL INICIO
    }else if(this.userData.username == "root" && this.userData.password == "root"){
      this.userData.isLogged = true;
      this.userDataService.giveUserData.emit(this.userData);
    }
    else{
      alert("Wrong username or password!")
    }
  }

}
