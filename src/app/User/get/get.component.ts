import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ServiceService} from '../../Service/service.service'
import {User} from '../../Models/User';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  users: User[] = [];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getUsers()
    .subscribe(data=>{
      this.users=data;
    })
  }

  Edit(user:User){
    localStorage.setItem("id",user.idUser.toString());
    this.router.navigate(["put"]);
  }

  Delete(user:User){
    this.service.deleteUser(user)
    .subscribe(data=>{
      this.users=this.users.filter(p=>p!==user);
      alert("Deleted user: " + user.idUser)
    })
  }

}
