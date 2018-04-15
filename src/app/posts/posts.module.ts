import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { PostInterceptorService } from '../services/posts/post-interceptor.service';
import { PostsComponent } from './posts.component';


@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [PostsComponent],
  providers:[
    { provide: HTTP_INTERCEPTORS, useClass: PostInterceptorService, multi: true },
  ]
})
export class PostsModule { }
