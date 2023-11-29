import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RecoverAccComponent } from './recover-acc/recover-acc.component';
// import { WelcomeComponent } from 'src/app/user-auth/welcome/welcome.component';

const routes: Routes = [
  {
    path:'register',component:RegisterComponent
  },
 {
  path:'',component:WelcomeComponent
 },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'recoverAcc',component:RecoverAccComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAuthRoutingModule { }
