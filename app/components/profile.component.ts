import { Component } from '@angular/core';
import { GithubService } from '../services/github.service'


@Component({
  moduleId: module.id,
  selector: 'profile',
  templateUrl: 'profile.component.html'
})
export class ProfileComponent  {

  user:any
  repos:any[]
  username: string;

  constructor(private _GithubService: GithubService) {
    this.user = false;

  }

  searchUser(){

    this._GithubService.updateUser(this.username);

    this._GithubService.getUser().subscribe(user => {
      this.user = user;
    })
    this._GithubService.getRepos().subscribe(repos => {
      this.repos = repos;
    })

  }


}
