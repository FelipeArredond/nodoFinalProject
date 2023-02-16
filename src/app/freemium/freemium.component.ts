import { Component } from '@angular/core';
import { UserDataServiceService } from '../user-data-service.service';
import { Router } from '@angular/router';
import { ICourseItem } from './ICourseItem';
import { IUserData } from '../login/IUserData';

@Component({
  selector: 'app-freemium',
  templateUrl: './freemium.component.html',
  styleUrls: ['./freemium.component.css']
})
export class FreemiumComponent {

  courses: ICourseItem[]  = [];

  userData = {
    username: '',
    password: ''
  }

  constructor(private userDataService: UserDataServiceService, private router: Router){}

  navigate(path: string){
    this.router.navigate(['/', path])
  }

  async validateInscribe(id: number, courseImageURL: string, courseTittle: string, courseDescription: string, courseHours: number, courseUsers: string[]){
    if(this.userDataService.getUserData().isLogged){
      await fetch(`http://localhost:3000/courses/${id}`,{
        method: 'PUT',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          imageURL: courseImageURL,
          tittle: courseTittle,
          desc: courseDescription,
          hours: courseHours,
          users: [...courseUsers, this.userDataService.getUserData().username]
        })
      }).then(res => console.log(res))
      alert('Inscrito')
    }else{
      alert('Debes de Iniciar Sesion')
      this.navigate('login');
    }
  }

  async ngOnInit(){
    const res = await fetch("http://localhost:3000/courses");
    const data = await res.json();
    this.courses = data;
  }

}
