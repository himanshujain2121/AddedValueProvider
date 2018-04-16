import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts/posts.service';
import { Posts } from '../../services/posts/posts';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  postList:Posts[] ;

  constructor(private postsService:PostsService,private route:ActivatedRoute) { }

  ngOnInit() {
        this.route.data.subscribe(
            (res) => {
              this.postList = res['postList']
            },
        (err)=>{
          console.log(err);
        }
      );
  }

}
