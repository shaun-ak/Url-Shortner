import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUser, user } from './modal';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  registerUser(data:user){
    return this.http.post(`https://urlbackend.herokuapp.com/user/register`,data);
  }

  loginUser(data:LoginUser){
    return this.http.post(`https://urlbackend.herokuapp.com/user/login`,data);
  }
}
