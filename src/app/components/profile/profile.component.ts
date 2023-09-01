import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { Post } from 'src/app/models/post';
import { UserService } from 'src/app/services/user.service';
import { PostService } from 'src/app/services/post.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  currentUser: User = new User()
  currentId: string = "";
  postList: Post[] = []
  userId: number = 0;

  constructor(private postService: PostService, private actRoute: ActivatedRoute, private userService: UserService, private router: Router,) { }

  ngOnInit(): void {
    this.postService.getAllPostsByUserId(this.userId).subscribe(post => {
      this.postList = post;
    });

    this.currentId = this.actRoute.snapshot.paramMap.get("userId") ?? "";
    this.userService.getUser(parseInt(this.currentId)).subscribe(foundUser => {
      this.currentUser = foundUser;
      // const routeId = this.actRoute.snapshot.paramMap.get("id") ?? "";
      // // this.id = routeId;
      // console.log(foundCoffee);
    });
  }


}

onSubmit() {
  this.coffeeService.updateCoffee(this.currentCoffee).subscribe(edittedProduct => {
    window.alert("Updated Coffee Successfully");
    this.router.navigate(["coffee"]);
  }, error => {
    console.log('Error: ', error)
    if (error.status === 401) {
      this.router.navigate(['signin']);
      // this.router.navigate(["coffee"]);
    }

    // Put in method to submit posts from profile
    // Put in method to edit posts

  }
