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
// service
import { PostInterceptorService } from '../services/posts/post-interceptor.service';





@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: 'posts', component:PostsComponent}
    ])
  ],
  declarations: [PostsComponent],
  providers:[
    { provide: HTTP_INTERCEPTORS, useClass: PostInterceptorService, multi: true },
  ]
})
export class PostsModule { }
