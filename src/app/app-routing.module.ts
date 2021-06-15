import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetComponent } from './User/get/get.component';
import { PostComponent } from './User/post/post.component';
import { PutComponent } from './User/put/put.component';

const routes: Routes = [
  {path:'get', component: GetComponent},
  {path:'post', component: PostComponent},
  {path:'put', component: PutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
