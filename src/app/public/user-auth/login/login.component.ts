import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: any;
  isInputFocused: boolean = false;
  
  constructor(private formBuilder: FormBuilder) { loginForm: FormGroup;}
  
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}')]],
      password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]{8,}')]]
    });
  }
  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    // Perform login logic here
  }

  togglePlaceholder() {
    this.isInputFocused = !this.isInputFocused;
  }
}
