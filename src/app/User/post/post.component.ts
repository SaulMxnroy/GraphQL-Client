import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { User } from '../../Models/User' 

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
  }

  user:User = new User();
  Save(){
    this.service.postUser(this.user)
    .subscribe(data=>{
      alert("User: " + this.user.firstName + " added!");
      this.router.navigate(["get"]);

    })
  }

}
