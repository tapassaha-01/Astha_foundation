import { Component } from '@angular/core';
import { ScrollService } from '../scroll.service';
import { NavigationEnd, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router:Router){}
  
  classes:string="title"
  toggleMenu(){
    console.log(this.classes)
    if(this.classes === "active title"){
      this.classes="title"
    }
    else{
    this.classes="active title"}
  }
  

}
