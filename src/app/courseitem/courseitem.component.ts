import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-courseitem',
  templateUrl: './courseitem.component.html',
  styleUrls: ['./courseitem.component.css'],
})
export class CourseitemComponent {
  @Input() courseImageURL:string = '';
  @Input() courseTittle: string = '';
  @Input() courseDescription: string = '';
  @Input() courseHours: number  = 0;
  @Output() inscribe: EventEmitter <any> = new EventEmitter(); 

  constructor() {}

  onInscribe(){
    this.inscribe.emit(null);
  }

}
