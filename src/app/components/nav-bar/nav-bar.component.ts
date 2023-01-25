import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public loggedIn! : boolean;

  constructor() { }

  ngOnInit(): void {
    // console.log(localStorage.getItem("isUserLoggedIn"));
    if(localStorage.getItem("isUserLoggedIn") == "true") {
      this.loggedIn = true;
      console.log(this.loggedIn);
      
    } else {
      this.loggedIn = false;
      console.log(this.loggedIn);
    }
    
  }

}
