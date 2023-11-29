import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
const routes: Routes = [
{
  path:"user-auth",loadChildren:()=>import('./public/user-auth/user-auth.module').then(mod=>mod.UserAuthModule)
},
{
  path:"",loadChildren:()=>import('./public/public.module').then(mod=>mod.PublicModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
