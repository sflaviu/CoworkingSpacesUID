import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import {ViewPostComponent} from './view-post/view-post.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'add-blog',
    component: AddBlogComponent
  }, {
    path: 'view-post',
    component: ViewPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
