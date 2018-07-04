import { Injectable } from '@angular/core';
import {User} from '../users_interfaces/users'
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user:User;

  constructor() { }
  setLogin(_user: User){
    this.user=_user;
    localStorage.setItem('currentUser',  JSON.stringify(this.user));
  }
  getLogin(){
    return this.user;
  }

}
