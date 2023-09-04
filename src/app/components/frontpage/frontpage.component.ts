import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit {
  // [x: string]: any;
  postList: Post[] = [];
  newPost: Post = new Post();

  displayPost: boolean = false;

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(post => {
      this.postList = post;
    });

    if(localStorage['tokenKey']){
      this.displayPost=true;
    }

  }

  onSubmit(){
    this.postService.createPost(this.newPost).subscribe(() => {
    }, error => {
      console.log('Error: ', error)
      if (error.status === 401 || error.status === 403) {
        this.router.navigate(['signin']);
      }
    });
  }



}
