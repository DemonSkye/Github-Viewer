import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  gh_data: any;
  gh_repos: any;
  username = 'Angular';
  constructor(private _http: HttpService) { }

  onSubmit(){
    try{
      console.log("test");
      this._http.github_data(this.username).subscribe(data =>{
      this.gh_data = data;
      console.log(this.gh_data);
      }),
      this._http.github_repos(this.username).subscribe(data =>{
        this.gh_repos = data;
        console.log(this.gh_repos);
      });
    }
    catch(e){
      console.log(e);
    }
    
  }
  ngOnInit(): void {
  }

}
