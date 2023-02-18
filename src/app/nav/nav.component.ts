import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataServiceService } from '../user-data-service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  @Input() username = "";
  @Input() isLogged = false;

  mobileMenuDisplay = false;

  constructor(private router: Router, private userDataService: UserDataServiceService){}

  navigate(path: string){
    this.router.navigate(['/', path])
  }

  handleMobile(){
    this.mobileMenuDisplay = !this.mobileMenuDisplay;
  }

  exit(){
    this.userDataService.addUserData({
      username: '',
      password: '',
      isLogged: false
    })
    location.reload()
    this.navigate('')
  }

}
