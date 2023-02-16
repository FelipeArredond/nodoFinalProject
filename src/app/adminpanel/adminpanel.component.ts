import { Component } from '@angular/core';
import { ICourseItem } from '../freemium/ICourseItem';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent {

  courses: ICourseItem[]  = [];

  async ngOnInit(){
    const res = await fetch("http://localhost:3000/courses");
    const data = await res.json();
    this.courses = data;
  }

  edit(id: number, courseImageURL: string, courseTittle: string, courseDescription: string, courseHours: number, courseUsers: string[]){
    console.log('edit')
  }
}
