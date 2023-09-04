import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './models/user';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';

  user: User = new User();
  userId?: number;

  show: boolean = false;

  constructor(private userService: UserService, private router: Router) { }

  // The methods that determine if Hi! <username> and if Sign In becomes Log Out

  ngOnInit(): void {

    if (localStorage['tokenKey']) {
      this.show = true;
    }
  }

  deleteKey() {
    localStorage.removeItem('tokenKey');
    location.reload();
  }

  // 


}
