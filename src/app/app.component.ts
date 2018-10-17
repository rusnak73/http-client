import { Component, OnInit } from '@angular/core';
import {FetchdataService} from './fetchdata-service.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./main.css'],
  providers: [FetchdataService]
})
export class AppComponent implements OnInit {
  title = 'http-Client';
  posts;
  URL = 'https://api.github.com/users'

  //inject HttpClient
  constructor(private srv:FetchdataService){}

  getPosts() : void {
    this.srv.getData(this.URL)
      .subscribe(data =>{ 
        let html = '';
        for(let i = 21; i<27; i++){
          let adminStatus = data[i].site_admin ? "Yes" : "No";
          html += `
          <div class="list-container container">
          <div class="row justify-content-between">
          <div class="user d-flex">
          <div class="user-logo">
          <img class="user_image" src="${data[i].avatar_url}" alt="Image of ${data[i].login}">
          </div>
          <div class="user-info">
          <h2 class="user-name">${data[i].login}</h2>
          <p class="admin-value"><strong>Site Administrator:</strong> ${adminStatus}!</p>
          </div>
          </div>
          <div class="user_hyperlink">
          <a class="btn btn-primary" href="${data[i].html_url}">Profile</a>
          </div>
          </div>
          </div>`;
          // let userList = '';
          
      }
      document.getElementsByClassName('user-list')[0].innerHTML+=html;
      
  
        console.log(data)})
  }

  ngOnInit(){
    this.getPosts();
  }
}
