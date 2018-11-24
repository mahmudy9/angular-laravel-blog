import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  constructor(private blogService: BlogService) { }


  public articles: Article;
  public error;

  ngOnInit() {
    this.getArticles();

  }

  getArticles() {
    this.blogService.getPosts().subscribe((data) => { this.articles = data['data']; },
      (error) => { this.error = error.statusText; });
  }

}
