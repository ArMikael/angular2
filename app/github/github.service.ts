import {Injectable} from "angular2/core";
import {Http} from 'angular2/http';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';

@Injectable()
export class GitHubService {

    constructor(private _http: Http) {

    }

    getUser(userName) {
        return this._http.get('https://api.github.com/users/' + userName)
            .map(user => console.log(user));
    }

    getFollowers(userName) {
        return this._http.get('https://api.github.com/users/' + userName + '/followers')
            .map(followers => console.log(followers));
    }
}