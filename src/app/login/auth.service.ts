import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userAuthenticated : boolean = false;

  constructor(private router : Router) { }

  validate(user : User){
    if(user.login == "joao" && user.password == "1234"){
      this.userAuthenticated = true;
      this.router.navigate(["/"]);
      return true;
    }
    return false;
  }

  isAuthenticated(){
    return this.userAuthenticated;
  }
}
