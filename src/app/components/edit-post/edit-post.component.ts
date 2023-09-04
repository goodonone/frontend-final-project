import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';


@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  currentPost: Post = new Post()
  currentPostId?: string = "";
  userId: number = 0;

  constructor(private postService: PostService, private actRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.currentPostId = this.actRoute.snapshot.paramMap.get("postId") ?? "";
    this.postService.getPost(parseInt(this.currentPostId)).subscribe(foundPost => {
      this.currentPost = foundPost;
    });
  }

  onSubmit() {
    this.postService.editPost(this.currentPost).subscribe(edittedProduct => {
      this.router.navigate(['profile', this.userId]);
    }, error => {
      console.log('Error: ', error)
      if (error.status === 401) {
        this.router.navigate(['signin']);
      }
    })

  }
}
