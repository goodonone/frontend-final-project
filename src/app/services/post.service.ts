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

  // Check
  getAllPostsByUserId(userId: number) {
    return this.http.get<Post[]>(this.baseURL + "/" + userId + "/" + `posts`);
    // (this.baseURL + "/" + userId, Posts.userId);
  }

  getPost(postId?: number) {
    return this.http.get<Post>(this.baseURL + "/" + postId);
  }

  createPost(newPost: Post) {
    let reqHeaders = {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
  }
  return this.http.post(this.baseURL, newPost, { headers: reqHeaders });
  }

   // Check
  editPost(updatedPost: Post) {
    let reqHeaders = {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
  }
  return this.http.put(this.baseURL, updatedPost, { headers: reqHeaders });
  }

  deletePost(postId?: number) {
    let reqHeaders = {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
  }
  return this.http.delete<any>(this.baseURL+ "/" + postId, { headers: reqHeaders });
  }
}
