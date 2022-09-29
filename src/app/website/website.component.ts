import { Component, OnInit } from '@angular/core';
import { PostService } from '../core/services/post.service';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.scss']
})
export class WebsiteComponent implements OnInit {

  posts:any;
  constructor(

    private servicePost:PostService
  ) { }

  ngOnInit(): void {

    this.listarPost();

  }

listarPost(){

this.servicePost.listarPosts().subscribe((data:any)=>{
this.posts=data;
console.log(this.posts);
})

}

}
