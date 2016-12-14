import { Component } from '@angular/core';
import { GithubService } from '../services/github.service'


@Component({
  moduleId: module.id,
  selector: 'profile',
  templateUrl: 'profile.component.html'
})
export class ProfileComponent  {

  user:any[]

  constructor(private _GithubService: GithubService) {

    this._GithubService.getUser().subscribe(user => {
      this.user = user;
    })

  }


}
