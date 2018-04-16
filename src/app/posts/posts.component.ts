import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts/posts.service';
import { Posts } from '../services/posts/posts';
import { HttpEventType } from '@angular/common/http';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: []
})
export class PostsComponent implements OnInit {
  postsList: Posts[];
  post: Posts = new Posts();
  downloadedBytes: number = 0;
  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.postService.getPhotos().subscribe(
      (event) => {
        switch (event.type) {
          case HttpEventType.DownloadProgress: {
            this.downloadedBytes = this.downloadedBytes + event.loaded;
            break;
          }
          case HttpEventType.Response: {
            console.log(event.body);
            break;
          }
        }
      },
      (err) => console.log(err)
    )
  }

  addPost() {
    console.log(this.post);
    this.postService.addPost(this.post).subscribe((res) => {
      console.log(res);
      this.post = new Posts();
    },
      (err) => console.log(err))
  }

  updatePost() {
    this.postService.updatePost().subscribe((res) => console.log(res),
      (err) => console.log(err));
  }

  deletePost() {
    this.postService.deletePost().subscribe((res) => console.log(res));
  }

}