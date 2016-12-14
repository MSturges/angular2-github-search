import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

// Observable return the resopnese as an observable,
// and then subscribe to that observable in the component
// and display that information
// do this by importing the map operator

import 'rxjs/add/operator/map';

// injectable operator
@Injectable()

// Grab this from our github
// Client ID
// 3dba47cfe0ed2dd3cafa
// Client Secret
// a4b11c4041d750eedc7122e273e12b56b95b2143

export class GithubService {
  private username:string;
  private client_id = '3dba47cfe0ed2dd3cafa';
  private client_secret = 'a4b11c4041d750eedc7122e273e12b56b95b2143';

  constructor(private _http: Http) {
    console.log('github service is ready...');
    this.username = 'msturges'
  }

  getUser(){
    return this._http.get('http://api.github.com/users/' + this.username+'?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
      .map(res => res.json());
  }

  getRepos(){
    return this._http.get('http://api.github.com/users/' + this.username+'/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
      .map(res => res.json());
  }

  updateUser(username:string) {
    this.username = username;
  }
}
