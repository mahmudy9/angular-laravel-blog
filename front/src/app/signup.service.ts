import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http:HttpClient) { }


  signup({ name , email , password , password_confirmation}) {
    return this.http.post("http://localhost:8000/api/auth/signup" , {name , email , password , password_confirmation}).pipe(catchError(this.handleError));
  }


  handleError(error: HttpErrorResponse) {
    return throwError(error);
  }

}
