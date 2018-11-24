import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})



export class DashboardService {

  constructor(private http:HttpClient) { }



  getImages() {
    return this.http.get("http://localhost:8000/api/images").pipe(catchError(this.handleError))
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error);
  }

  deleteImage(id) {
    return this.http.delete("http://localhost:8000/api/deleteimage/"+id).pipe(catchError(this.handleError));
  }

  getmyArticles() {
    return this.http.get("http://localhost:8000/api/get-my-articles").pipe(catchError(this.handleError));
  }

  addArticle(value) {
    return this.http.post("http://localhost:8000/api/create-article" , value).pipe(catchError(this.handleError));
  }


  deleteArticle(url) {
    return this.http.delete(url).pipe(catchError(this.handleError));
  }


  editArticle(url , body) {
    return this.http.put(url , body).pipe(catchError(this.handleError));
  }

}
