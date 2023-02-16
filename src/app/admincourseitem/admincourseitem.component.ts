import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-admincourseitem',
  templateUrl: './admincourseitem.component.html',
  styleUrls: ['./admincourseitem.component.css']
})
export class AdmincourseitemComponent {
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
