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
export class EditProfileComponent implements OnInit{

  currentUser: User = new User()
  currentId: string = "";
  userId?: number = 0;

  constructor(private userService: UserService, private actRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.currentId = this.actRoute.snapshot.paramMap.get("userId") ?? "";
    this.userService.getUser(parseInt(this.currentId)).subscribe(foundUser => {
      this.currentUser = foundUser;
      this.userId = this.currentUser.userId;
    });
  }

  editProfile() {
    this.userService.updateUser(this.currentUser,).subscribe(edittedUser => {
      this.router.navigate(['profile', this.userId]);
    }, error => {
      console.log('Error: ', error)
      if (error.status === 401) {
        this.router.navigate(['signin']);
      }

    })
  }}