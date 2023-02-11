import { Component } from '@angular/core';
import { IUserData } from './login/IUserData';
import { UserDataServiceService } from './user-data-service.service';

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

  constructor(private userDataService: UserDataServiceService){}

  ngOnInit(): void{
    this.userDataService.giveUserData.subscribe(data =>{
      this.userData = data;
    })
  }

  handleLogin(user: IUserData){
    this.userData = user;
  }

}
