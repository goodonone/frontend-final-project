import { Component, OnInit } from '@angular/core';
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
export class ProfileComponent implements OnInit {

  currentUser: User = new User()
  currentId: string = "";
  postList: Post[] = []
  userId: number = 0;

  newPost: Post = new Post();

  currentPost: Post = new Post();
  currentPostId: string = "";

  constructor(private postService: PostService, private actRoute: ActivatedRoute, private userService: UserService, private router: Router,) { }

  ngOnInit(): void {

    this.currentId = this.actRoute.snapshot.paramMap.get("userId") ?? "";
    this.userService.getUser(parseInt(this.currentId)).subscribe(foundUser => {
      this.currentUser = foundUser;
    });

    this.postService.getAllPostsByUserId(this.userId).subscribe(post => {
      this.postList = post;
    });

  }

  onDelete(postId?: number) {
    this.postService.deletePost(postId).subscribe(deletedCoffee => {
      location.reload();
    }, error => {
      console.log('Error: ', error)
      if (error.status === 401) {
        this.router.navigate(['signin']);
      }

    })
  }

  onSubmit() {
    this.postService.createPost(this.newPost).subscribe(() => {
      window.alert("Created Coffee Successfully");
      // this.router.navigate(['coffee']);
    }, error => {
      console.log('Error: ', error)
      if (error.status === 401 || error.status === 403) {
        this.router.navigate(['signin']);
      }
    });
  }


  //   this.postService.getAllPostsByUserId(parseInt(this.currentId)).subscribe(post => {
  //     this.postList = post;
  // })

}







    // Put in method to submit posts from profile
    // Put in method to edit posts


