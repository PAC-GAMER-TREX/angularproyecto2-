import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DasboardRoutingModule } from './dasboard-routing.module';
import { DasboardComponent } from './dasboard.component';
//import { PostComponent } from './create/post/post.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DasboardComponent,
//    PostComponent,
    CreatePostComponent
  ],
  imports: [
    CommonModule,
    DasboardRoutingModule,
    ReactiveFormsModule
  ]
})
export class DasboardModule { }
