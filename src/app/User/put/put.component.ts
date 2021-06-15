import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/User';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-put',
  templateUrl: './put.component.html',
  styleUrls: ['./put.component.css']
})
export class PutComponent implements OnInit {

  user :User = new User();
  constructor(private router: Router, private service:ServiceService) { }

  ngOnInit(): void {
    this.edit();
  }

  edit(){
    let id = localStorage.getItem("id");
    this.service.getUserById(+id)
    .subscribe(data=>{
      this.user=data;
    })
  }
  update(user:User){
    this.service.updateUser(user)
    .subscribe(data=>{
      this.user=data;
      alert("Successfully updated user information");
      this.router.navigate(["get"]);
    })
  }
}
