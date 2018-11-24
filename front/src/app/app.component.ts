import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { TokenService } from './token.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private location: Location ,
              private token : TokenService,
              private router: Router){

  }

  ngOnInit(){
  }

  public loggedIn = this.token.isLoggedIn();

  goBack(): void {
    this.location.back();
  }

  
  logout(e):void {
    e.preventDefault();
    this.token.removeToken();
    window.location.reload();
    this.router.navigate(['/']);
  }
    

}
