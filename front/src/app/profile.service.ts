import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { ImageInterface } from './image';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }


  getdata() {
    return this.http.get("http://localhost:8000/api/auth/me").pipe(catchError(this.handleError));
  }

  getimages() : Observable<ImageInterface[]> {
    return this.http.get<ImageInterface[]>("http://localhost:8000/api/images").pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error);
  }


}
