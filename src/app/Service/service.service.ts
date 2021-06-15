import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private  http:HttpClient) { }

  Url= 'http://localhost:9090/RESTAPI/user'

  getUsers(){
    return this.http.get<User[]>(this.Url + "/getAll");
}

  postUser(user:User){
    return this.http.post<User>(this.Url + "/add",user);
  }
  getUserById(idUser:number){
  return this.http.get<User>(this.Url+"/"+idUser);
  }

  updateUser(user:User){
    return this.http.put<User>(this.Url+"/"+user.idUser, user);
  }

  deleteUser(user:User){
    return this.http.delete<User>(this.Url+"/"+user.idUser);
  }
}