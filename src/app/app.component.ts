import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './models/user';
import { Router } from '@angular/router';
import { FrontpageComponent } from './components/frontpage/frontpage.component';
// import { FrontpageComponent } from './components/frontpage/frontpage.component';

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
  // private frontPage: FrontpageComponent;

  ngOnInit(): void {

    // if (this.userService.tokenKey != null) {
    //   this.show = true;
    //   this.frontpage['signIn'] = User;
    //   this.user = User.userId;
    // }

  }
}
