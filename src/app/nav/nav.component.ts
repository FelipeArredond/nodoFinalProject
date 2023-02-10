import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  @Input() username = "";
  @Input() isLogged = false;

  constructor(private router: Router){}

  navigate(path: string){
    this.router.navigate(['/', path])
  }

}
