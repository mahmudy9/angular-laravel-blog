import { Component, OnInit } from '@angular/core';
import { SignupService } from '../signup.service';
import { Signupform } from '../signup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private signup : SignupService) { }

  ngOnInit() {
  }

  public submitted = false;

  public errorMsg="";
  public name:string;
  public email:string;
  public password:string;
  public password_confirmation:string;
  public error="";
  public success = "";

  private Signupform = new Signupform(this.name , this.email , this.password , this.password_confirmation);

  onSubmit() {
    this.signup.signup(this.Signupform).subscribe((data) => {this.success = data['success']} ,
    (error) => {console.error(error);
    this.errorMsg = error.statusText;
    this.error = error.error.errors;});
    this.submitted = true;
    
  }

}
