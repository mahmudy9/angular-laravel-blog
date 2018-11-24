import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Loginform } from './loginform';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public url: string = "http://localhost:8000/api/auth/login"; 


  login(loginform : Loginform) {
  
    return this.http.post(this.url , loginform ).pipe(catchError(this.handleError));
 
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error);
  }

}
