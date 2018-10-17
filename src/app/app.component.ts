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
        document.querySelector('.list-container .row').innerHTML = '';
        for(let i = 21; i<27; i++){
          let adminStatus = data[i].site_admin ? "Yes" : "No";
          html += `
          <div _ngcontent-c0 class="user d-flex">
          <div _ngcontent-c0 class="user-logo">
          <img _ngcontent-c0 class="user_image" src="${data[i].avatar_url}" alt="Image of ${data[i].login}">
          </div>
          <div _ngcontent-c0 class="user-info">
          <h2 _ngcontent-c0 class="user-name">${data[i].login}</h2>
          <p _ngcontent-c0 class="admin-value"><strong _ngcontent-c0>Site Administrator:</strong> ${adminStatus}!</p>
          </div>
          </div>
          <div _ngcontent-c0 class="user_hyperlink">
          <a _ngcontent-c0 class="btn btn-primary" href="${data[i].html_url}">Profile</a>
          </div>`;
          // let userList = '';
          
      }
      document.querySelector('.list-container .row').innerHTML+=html;
      
  
        console.log(data)})
  }

  ngOnInit(){
    this.getPosts();
  }
}
