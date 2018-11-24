import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import * as $ from 'jquery';
import { Articlee } from '../articlee';
import { Article } from '../article';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dashboard:DashboardService) { 
    this.images=false;
  }

  ngOnInit() {
    this.getImages();
    this.getmyArticles();
  }
  public imagee = 'image';
  public articlee = 'article';
  public text;
  public images;
  public imagesError;
  public deleted = true;
  public errorDeleting;
  public articles:Article[];
  public articlesError;
  public edit = true;
  public body;
  public errorsupdating="";

  public Article = new Articlee(this.text);
  public editarticle = new Articlee(this.body);
  getImages() {
    this.dashboard.getImages().subscribe((data) => {this.images = data['images']} , 
    (error) => {this.imagesError=error.statusText});
  }

  
  deleteImage(id) {
    let con = confirm("Do you want to delete image?");
    if(con) {
      this.dashboard.deleteImage(id).subscribe((success) => {this.deleted=false ;console.log(success);this.removeItem(id);} , 
        (error) => {this.errorDeleting = error.statusText ; console.error(error)})
    
    } 
  }
  removeItem(id) {
    $("#"+id).remove();    
  }


  getmyArticles() {
    this.dashboard.getmyArticles().subscribe((data)=> {this.articles=data['data']} , 
    (error) => {this.articlesError = error.statusText})
  }

  addArticle() {
    this.dashboard.addArticle(this.Article).subscribe((success) => {console.log(success['article']); //this.addtodom(success['article'])
    this.getmyArticles();} , 
      (error) => {console.error(error)});
  }

  deleteArticle(id) {
    this.dashboard.deleteArticle(`http://localhost:8000/api/delete-article/${id}`).subscribe((success)=> { console.log(success); this.removearticlefromdom(id); } , (error) => {console.error(error)} )
  }

  removearticlefromdom(id) {
    let idd = 'article'+id;
    $('#'+idd).remove();
  }

  editArticle(id){
    this.edit = false;
    $("#update").click(() => {
    this.dashboard.editArticle('http://localhost:8000/api/editarticle/'+id , this.editarticle ).subscribe((success)=>{console.log(success) ; this.getmyArticles();this.edit=true } , (error) => {console.error(error) ; this.errorsupdating = error.error.errors['body']}); 
    });
  }

}
