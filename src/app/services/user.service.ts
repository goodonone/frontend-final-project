import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../models/user';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL: string = "https://localhost:7025/api/auth";
  tokenKey: string = "myPostToken";

  constructor(private http: HttpClient) { }

  signUp(newUser: User) {
    return this.http.post(`${this.baseURL}/register`, newUser);
  }

  login(username: string, password: string) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('username', username);
    queryParams = queryParams.append('password', password);

    return this.http.get(`${this.baseURL}/login`, { params: queryParams, responseType: 'text' })
      .pipe(tap((response: any) => {
        localStorage.setItem('myPostToken', response);
      }));
  }

  getUser(userId: number) {
    return this.http.get<User>(this.baseURL + "/" + userId);
  }

  updateUser(edittedUser: User) {
    let reqHeaders1 = {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.put<User>(this.baseURL + "/" + edittedUser.userId, edittedUser, { headers: reqHeaders1 }) ;
  }

}
