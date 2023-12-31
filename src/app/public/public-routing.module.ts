import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './user-auth/register/register.component';
import { LoginComponent } from './user-auth/login/login.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [  
 {
  path:'',component:HomeComponent
},
{
  path:'about',component:AboutComponent
},{
  path:'gallery',component:GalleryComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
