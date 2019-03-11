import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RepoService {

  private repo: string;
  private per_page: string;

  constructor(private http: Http) {
    console.log('Servis ngam!');
    // this.repo = 'react';
    this.per_page = '10';
  }

  getTotalRepository() {
    return this.http.get('https://api.github.com/search/repositories?per_page=' + this.per_page + '&q=' + this.repo).map(res => res.json());
  }

  getRepoDetails() {
    return this.http.get('https://api.github.com/search/repositories?per_page=' + this.per_page + '&q=' + this.repo).map(res => res.json());
  }

  findRepo(repo:string){
    this.repo = repo;
  }
}
