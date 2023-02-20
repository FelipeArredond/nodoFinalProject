import { Component } from '@angular/core';
import { IUserData } from '../login/IUserData';
import { UserDataServiceService } from '../user-data-service.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  constructor(private router: Router) {}

  userData: IUserData = {
    username: '',
    password: '',
    isLogged: false,
  };

  confirmPasword = '';

  navigate(path: string) {
    this.router.navigate(['/', path]);
  }

  handleUsername($event: any) {
    this.userData.username = $event.target.value; //SE LE DA AL USERNAME EL VALOR DEL INPUT
  }

  handlePassword($event: any) {
    this.userData.password = $event.target.value; //SE LE DA AL PASSWORD EL VALOR DEL INPUT
  }

  handleConfirmPassword($event: any) {
    this.confirmPasword = $event.target.value; //SE ALMACENA EL VALOR DEL CONFIRM PASSWORD
  }

  signup($event: any) {
    $event.preventDefault();
    if (
      this.userData.password != '' &&
      this.confirmPasword != '' &&
      this.userData.password == this.confirmPasword
    ) {
      fetch('https://nodo-final-backend-78z1oeqy0-pipechiqui77-gmailcom.vercel.app/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: this.userData.username,
          password: this.userData.password,
        }),
      })
        .then((data) => data.json())
        .then((data) => console.log(data));
      this.navigate('/'); //VAMOS AL INICIO
    } else {
      alert('Las contraseñas no coinciden');
    }
  }
}
