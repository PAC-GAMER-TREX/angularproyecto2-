import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthlayoutComponent } from './layouts/authlayout/authlayout.component';
import { DasboardlayoutComponent } from './layouts/dasboardlayout/dasboardlayout.component';
import { WebsitelayoutComponent } from './layouts/websitelayout/websitelayout.component';

const routes: Routes = [
 {
  path:'',
  redirectTo:'website',
  pathMatch:'full'

 },
 {path:'',
 component:WebsitelayoutComponent,
 children:[ {
   path: 'website', 
   loadChildren: () => import('./website/website.module').then(m => m.WebsiteModule) 
  }]
  },

  {
    path:'',
    component:AuthlayoutComponent,
    children:[
      { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }, 

    ]
  },
  { 

    path:'',
    component:DasboardlayoutComponent,
    children:[
      { path: 'dasboard', loadChildren: () => import('./dasboard/dasboard.module').then(m => m.DasboardModule) }, 
    ]
  }
];
  

  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
