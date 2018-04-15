import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts-details',
  templateUrl: './posts-details.component.html',
  styleUrls: ['./posts-details.component.css']
})
export class PostsDetailsComponent implements OnInit {

  postId:number;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (res) => this.postId = + res.get('id'),
      (err) => console.log(err)
    )
  }

}
