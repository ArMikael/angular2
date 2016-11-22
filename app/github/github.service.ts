import {Injectable} from "angular2/core";
import {Http} from 'angular2/http';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';

@Injectable()
export class GitHubService {
    private _baseUrl = 'https://api.github.com/users/';

    constructor(private _http: Http) { }

    getUser(userName) {
        return this._http.get(this._baseUrl + userName)
            .map(user => console.log(user));
    }

    getFollowers(userName) {
        return this._http.get(this._baseUrl + userName + '/followers')
            .map(followers => console.log(followers));
    }
}