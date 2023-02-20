import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent {
  @Input() isOpen: boolean = true;
  @Output() refresh: EventEmitter<any> = new EventEmitter();
  newCourseData = {
    id: 0,
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

  handleCourseId($event: any) {
    $event.preventDefault();
    this.newCourseData.id = $event.target.value;
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

  async editCourse($event: any) {
    $event.preventDefault();
    const bodyData = JSON.stringify({
      imageURL: this.newCourseData.imageURL,
      tittle: this.newCourseData.tittle,
      desc: this.newCourseData.desc,
      hours: 10,
      users: [],
    });
    await fetch(`https://nodo-final-backend-78z1oeqy0-pipechiqui77-gmailcom.vercel.app/courses/${this.newCourseData.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: bodyData,
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
    alert('Se ha editado el curso correctamente')
    this.isOpen = false;
    this.refresh.emit(null);
  }
  
}
