import { Injectable, EventEmitter, Output } from '@angular/core';
import { IUserData } from './login/IUserData';

@Injectable({
  providedIn: 'root'
})
export class UserDataServiceService {
  @Output() giveUserData: EventEmitter<IUserData> = new EventEmitter();

  constructor() { }
}
