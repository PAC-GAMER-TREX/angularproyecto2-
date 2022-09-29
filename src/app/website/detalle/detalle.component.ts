import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/core/services/post.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  id:any;
  post:any;
  constructor(private route:ActivatedRoute, private servicePost:PostService) { }

  ngOnInit(): void {

    this.route.params.subscribe(routeparam=>{

      console.log(routeparam['id']);

      this.conseguirPostPorID(routeparam['id']);
    })

  }

  conseguirPostPorID(id: any){
      this.servicePost.listPostByID(id).subscribe( (data:any) =>{
      this.post = data;
     })
    }

     
}
