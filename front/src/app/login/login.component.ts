import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Loginform } from '../loginform';
import { LoginService } from '../login.service';
import { TokenService } from '../token.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient ,
      private LoginService: LoginService ,
      private Token:TokenService,
      private router:Router) { }

  public submitted = false;
  public errorMsg;
  public email = null;
  public password = null;

  public Loginform = new Loginform(this.email , this.password);

  ngOnInit() {
  }
  
  private tok;

  onSubmit() {
    this.LoginService.login(this.Loginform).subscribe((data) => {
      this.tok=data['access_token'];
      this.handleToken(this.tok);} , 
      (error) => {this.errorMsg = error.statusText;});
      this.submitted = true;
    console.log(this.Token.isTokenExpired());
  }

  handleToken(token) {
    this.Token.handle(token);
    window.location.reload();
    this.router.navigate(['/']);
  }

}
