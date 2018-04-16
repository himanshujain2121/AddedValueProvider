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
import { PostsEditComponent } from './posts-edit/posts-edit.component';
import { AuthGuard } from '../services/guards/auth.guard';
import { PostResolveGuard } from '../services/posts/post-resolve.guard';
import { PostsService } from '../services/posts/posts.service';






@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'posts', component:PostsComponent,
         canActivate:[AuthGuard],
         resolve: { postList:PostResolveGuard},
      children: [
        { path: ':id', component: PostsDetailsComponent },
        { path: ':/edit/:userid', component: PostsEditComponent }
      ]
      },
      //{ path: 'posts/:id', component: PostsDetailsComponent }
    ])
  ],
  declarations: [PostsComponent, PostsDetailsComponent, PostsListComponent, PostsEditComponent],
  providers:[
    { provide: HTTP_INTERCEPTORS, useClass: PostInterceptorService, multi: true },
    PostResolveGuard,
    {provide: PostsService, useClass: PostsService}
  ]
})
export class PostsModule { }
