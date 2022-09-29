import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PostService } from 'src/app/core/services/post.service';


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

//postform error sin !
  postForm!:FormGroup

  constructor(
    private modalService:NgbModal,
    private router:Router,
    private formBuilder:FormBuilder,
    private postService:PostService,
    private activeModal:NgbActiveModal) { }

  ngOnInit(): void {

    this.postForm = this.formBuilder.group({
      title:['',[Validators.required]],
      body: ['',[Validators.required]],
    });

  }

  registrar(){



      this.postService.crearpost(this.postForm.value).subscribe((data:any)=>{

        alert("Su registro fue guardado exitosamente");
        this.activeModal.close(data);
      });

  }

}
