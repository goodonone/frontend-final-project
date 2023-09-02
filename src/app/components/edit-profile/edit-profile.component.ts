import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';



@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {

  currentUser: User = new User()
  currentId: String = "";
  userId: number = 0;

  constructor(private userService: UserService, private actRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.currentId = this.actRoute.snapshot.paramMap.get("userId") ?? "";
    this.userService.getUser(parseInt(this.currentId)).subscribe(foundUser => {
      this.currentUser = foundUser;
    });
  }

  editProfile() {
    this.userService.updateUser(this.currentUser,).subscribe(edittedUser => {
      window.alert("Updated Coffee Successfully");
      this.router.navigateByUrl('["profile", UserId]');
    }, error => {
      console.log('Error: ', error)
      if (error.status === 401) {
        this.router.navigate(['signin']);
      // this.router.navigate(["coffee"]);
      }

}
