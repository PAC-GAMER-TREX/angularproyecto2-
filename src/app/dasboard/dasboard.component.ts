import { Component, OnInit } from '@angular/core';
import { PostService } from '../core/services/post.service';
import { CreatePostComponent } from './create-post/create-post.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.scss']
})
export class DasboardComponent implements OnInit {

  posts:any;
  closeResult ='';
  constructor(private servicePost:PostService,
     private modalService:NgbModal

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

registrar(){

  alert("hola");
  this.modalService.open(CreatePostComponent, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, 
  
  (reason) => {

    //algo pasa se cierra el modal
    this.listarPost();
  });

}

}
