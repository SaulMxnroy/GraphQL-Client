import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetComponent } from './User/get/get.component';
import { PostComponent } from './User/post/post.component';
import { PutComponent } from './User/put/put.component';
import {FormsModule} from '@angular/forms';
import { ServiceService } from '../app/Service/service.service';
import {HttpClientModule} from '@angular/common/http';
import { GraphQLModule } from './graphql.module';

@NgModule({
  declarations: [
    AppComponent,
    GetComponent,
    PostComponent,
    PutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    GraphQLModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
