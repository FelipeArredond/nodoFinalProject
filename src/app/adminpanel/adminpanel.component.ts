import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ICourseItem } from '../freemium/ICourseItem';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css'],
})
export class AdminpanelComponent {
  courses: ICourseItem[] = [];
  isCourseFormOpen: boolean = false;
  isModalOpen: boolean = false;
  newCourseData = {
    imageURL: '',
    tittle: '',
    desc: '',
    hours: 0,
    users: [],
  };

  constructor(private router: Router){}

  navigate(path: string){
    this.router.navigate(['/', path])
  }


  async ngOnInit() {
    const res = await fetch('http://localhost:3000/courses');
    const data = await res.json();
    this.courses = data;
  }

  handleForm(){
    this.isCourseFormOpen = !this.isCourseFormOpen;
  }

  handleCourseImage($event: any) {
    $event.preventDefault();
    this.newCourseData.imageURL = $event.target.value;
  }
  handleCourseTittle($event: any) {
    $event.preventDefault();
    this.newCourseData.tittle = $event.target.value;
  }
  handleCourseDesc($event: any) {
    $event.preventDefault();
    this.newCourseData.desc = $event.target.value;
  }
  handleCourseHours($event: any) {
    $event.preventDefault();
    this.newCourseData.hours = $event.target.value;
  }

  edit() {
    this.isModalOpen = !this.isModalOpen;
  }

  async createCourse(
    courseImageURL: string,
    courseTittle: string,
    courseDescription: string,
    courseHours: number,
    courseUsers: string[],
    $event: any
  ) {
    $event.preventDefault();
    const bodyData = JSON.stringify({
      imageURL: this.newCourseData.imageURL,
      tittle: this.newCourseData.tittle,
      desc: this.newCourseData.desc,
      hours: 10,
      users: [],
    });
    await fetch('http://localhost:3000/courses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: bodyData,
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
    alert('Se ha creado el curso correctamente')
    const res = await fetch('http://localhost:3000/courses');
    const data = await res.json();
    this.courses = data;
  }
  async deleteCourse(id: number) {
    await fetch(`http://localhost:3000/courses/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
    alert('Se ha eliminado el curso correctamente')
    const res = await fetch('http://localhost:3000/courses');
    const data = await res.json();
    this.courses = data;
  }

  async handleRefresh(){
    const res = await fetch('http://localhost:3000/courses');
    const data = await res.json();
    this.courses = data;
  }

}
