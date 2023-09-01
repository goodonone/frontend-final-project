import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  baseURL: string = "https://localhost:7025/api/post";
  tokenKey: string = "myPostToken";

  constructor(private http: HttpClient) { }

  getAllPosts() {
    return this.http.get<Post[]>(this.baseURL);
  }

  getAllPostsByUserId(userId: string) {
    return this.http.get<Post[]>(this.baseURL + "/" + userId + "/" + `posts`);
  }

  getPost(postId: string) {
    return this.http.get<Post>(this.baseURL + "/" + postId);
  }

  createPost(newPost: Post) {
    let reqHeaders = {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
  }
  return this.http.post(this.baseURL, newPost, { headers: reqHeaders });
  }

  editPost(updatedPost: Post) {

  }

  deletePost(postId: string) {

  }
}