import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url:any;

  constructor(
    private http:HttpClient

  ) {

this.url = environment.baseURL + "posts";

   }

  listarPosts()
  {

    return this.http.get(this.url);

  }

  listPostByID(id:any){

    return this.http.get(this.url+ "/" + id);

  }

  crearpost(formData:any){

    return this.http.post<any>(this.url,formData);

  }


}
