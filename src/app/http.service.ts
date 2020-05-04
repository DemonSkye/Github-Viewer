import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  github_data(username){
    return this.http.get('https://api.github.com/users/' +username);
  }
  github_repos(username){
    return this.http.get('https://api.github.com/users/' +username+'/repos');
  }

}
