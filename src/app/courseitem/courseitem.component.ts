import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-courseitem',
  templateUrl: './courseitem.component.html',
  styleUrls: ['./courseitem.component.css']
})
export class CourseitemComponent {
  @Input() courseTittle = "";
}
