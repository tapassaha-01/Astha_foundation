import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAuthRoutingModule } from './user-auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RecoverAccComponent } from './recover-acc/recover-acc.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    WelcomeComponent,
    RecoverAccComponent
  ],
  imports: [
    CommonModule,
    UserAuthRoutingModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatButtonModule
  ],
  exports:[
    LoginComponent,
    RegisterComponent,
    WelcomeComponent,
    RecoverAccComponent
  ]
})
export class UserAuthModule { }
