import { Component, OnDestroy, OnInit } from '@angular/core';
import {gql, Apollo} from 'apollo-angular';
import { Subscription } from 'rxjs';
import { User } from './Models/User';

const GET_USER = 
gql`
query {
  getUsers {
    idUser
    firstName
    email
  }
}
`;

@Component({ ... })
class PostsComponent implements OnInit, OnDestroy {
  loading: boolean;
  posts: any;

  private querySubscription: Subscription;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.querySubscription = this.apollo.watchQuery<any>({
      query: GETUSERS
    })
      .valueChanges
      .subscribe(({ data, loading }) => {
        this.loading = loading;
        this.posts = data.posts;
      });
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }
}
