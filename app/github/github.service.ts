import {Injectable} from "angular2/core";
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';


@Injectable()
export class GitHubService {
    private _baseUrl = 'https://api.github.com/users/';

    constructor(private _http: Http) {

    }

    getUser(userName) {
        return this._http.get(this._baseUrl + userName)
            .map(res => res.json());
    }

    getFollowers(userName) {
        return this._http.get(this._baseUrl + userName + '/followers')
            .map(res => res.json());
    }
}