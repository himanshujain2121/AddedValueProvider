// common module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
// custom module
import { RoutingModule } from '../routing/routing.module';
// component
import { PostsComponent } from './posts.component';
import { PostsDetailsComponent } from './posts-details/posts-details.component';
import { PostsListComponent } from './posts-list/posts-list.component';
// service
import { PostInterceptorService } from '../services/posts/post-interceptor.service';






@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: 'posts', component:PostsComponent},
      { path: 'posts/:id', component: PostsDetailsComponent }
    ])
  ],
  declarations: [PostsComponent, PostsDetailsComponent, PostsListComponent],
  providers:[
    { provide: HTTP_INTERCEPTORS, useClass: PostInterceptorService, multi: true },
  ]
})
export class PostsModule { }
