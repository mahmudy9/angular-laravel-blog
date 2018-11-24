import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private http: HttpClient) { }

  private refreshedToken;

  handle(token) {
    this.setToken(token);
  }

  setToken(token) {
    localStorage.setItem('token' , token);
  }


  getToken() {
    return localStorage.getItem('token');
  }


  removeToken() {
    return localStorage.removeItem('token');
  }


  isTimeToRefresh() {
    let now = new Date();
    if(this.getToken()) {
    let decodedToken = this.payload(this.getToken());
    if(Math.round(now.getTime() / 1000) > (+decodedToken.exp)-900 ) {
      return true;
    }
    }
    return false;
  }


  isTokenExpired() {
    let now = new Date();
    if (this.getToken()) {
    let decodedToken = this.payload(this.getToken());
    let time = Math.round(now.getTime() / 1000)
      if (time > (+decodedToken.exp)) {
        return true;
      }
    }
    return false;
  }


  isValid() {
    if(this.getToken()){
    if (!this.isTokenExpired()) {
    let token = this.getToken();
    let payload = this.payload(token);
      if(payload) {
        return (payload.iss == "http://localhost:8000/api/auth/login") ? true : false;
      }
    }
    }
    return false;
  }

  payload(token) {
    let payload = token.split('.')[1];
    return this.decode(payload);
  }


  decode(token) {
    let tok = JSON.parse(atob(token));
    
    return tok;
  }

  isLoggedIn() {
    return this.isValid();
  }


  refreshToken(token) {
    if(this.isTimeToRefresh()){
      this.http.post('http://localhost:8000/api/auth/refresh' , token ).pipe(catchError(this.handleError)).subscribe((data) => {this.refreshedToken = data['access_token']} , (error)=>{console.error(error)});
      this.setToken(this.refreshedToken);
    }
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error);
  } 


}
