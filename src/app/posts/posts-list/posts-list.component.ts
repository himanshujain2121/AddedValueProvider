import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts/posts.service';
import { Posts } from '../../services/posts/posts';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  postList:Posts[] ;
  constructor(private postsService:PostsService) { }

  ngOnInit() {
    this.postsService.getPosts().subscribe(
      (res)=> {
               this.postList = res;
              },
       (err) => {
                  console.log(err)
                }        
    )
  }

}
