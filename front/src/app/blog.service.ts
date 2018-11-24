import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from './article';
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http : HttpClient) { }
  private url = "http://localhost:8000/api/get-articles";

  getPosts(): Observable<Article[]> {
    return this.http.get<Article[]>(this.url);
  }

}
