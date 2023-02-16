import { Component } from '@angular/core';
import { UserDataServiceService } from '../user-data-service.service';
import { Router } from '@angular/router';
import { IUserData } from '../login/IUserData';

@Component({
  selector: 'app-freemium',
  templateUrl: './freemium.component.html',
  styleUrls: ['./freemium.component.css']
})
export class FreemiumComponent {

  constructor(private userDataService: UserDataServiceService, private router: Router){}

  navigate(path: string){
    this.router.navigate(['/', path])
  }

  validateInscribe(){
    if(this.userDataService.getUserData().isLogged){
      alert('Inscrito')
    }else{
      alert('Inicia Sesion')
      this.navigate('login');
    }
  }

}
