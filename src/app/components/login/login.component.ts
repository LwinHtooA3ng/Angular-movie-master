import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  private defaultEmail : string = "lha@gmail.com";
  private defaultPassword : string = "abc123"
  isSubmitted : boolean = false;
  loginStatus : string = "";

  constructor(private router: Router) {
    this.loginForm = new FormGroup({
      email : new FormControl('', [Validators.required, Validators.email]),
      password : new FormControl('', [Validators.required])
    })
   }

  ngOnInit(): void {}

  login() {
    this.isSubmitted = true; 
    if(this.loginForm.value.email != null && this.loginForm.value.email != "" && this.loginForm.value.password !=null && this.loginForm.value.password != ""){
    if(this.loginForm.value.email == this.defaultEmail && this.loginForm.value.password == this.defaultPassword) {
      localStorage.setItem("isUserLoggedIn", "true");
      this.loginStatus = "";
      this.router.navigateByUrl("/home");
    }else{
      console.log("Login fail!");
      this.loginStatus = "Invalid email or password."
    }
  }
    
  }

}
