import { Injectable, EventEmitter, Output } from '@angular/core';
import { IUserData } from './login/IUserData';

@Injectable({
  providedIn: 'root'
})
export class UserDataServiceService {
  @Output() giveUserData: EventEmitter<IUserData> = new EventEmitter();

  userData: IUserData = {
    username: '',
    password: '',
    isLogged: false
  }

  constructor() { }

  addUserData(user: IUserData){
    this.userData = user;
  }

  getUserData(): IUserData{
    return this.userData
  }

}
