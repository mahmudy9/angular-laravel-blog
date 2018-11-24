import { Component, OnInit } from '@angular/core';
import { TokenService } from '../token.service';
import { HttpClient } from '@angular/common/http';
import { ProfileService } from '../profile.service';
import { ImageInterface } from '../image';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private token:TokenService , private http: HttpClient ,
              private profile:ProfileService) { }

  ngOnInit() {
    this.getimages();
  }

  private selectedFile:File;

  onChange(event) {
    this.selectedFile = event.target.files[0];
    this.imageName = event.target.files[0]['name'];
  }
  public images:ImageInterface[];
  public done=false;
  public imageName;
  public error;
  public errorimages;
  upload() {
    let fd = new FormData();
    fd.append('image' , this.selectedFile , this.selectedFile.name);
    this.http.post("http://localhost:8000/api/uploadimage" , fd , {reportProgress:true , observe:'events'}).subscribe((e) => { this.done=true;console.log(e);this.getimages(); } , (error) => {console.error(error) ; this.error = error.statusText; });
  }

  getimages() {
    return this.profile.getimages().subscribe((data) => {this.images = data['images']} , 
  (error) => {this.errorimages = error.statusText; console.error(error);})
  }

}
