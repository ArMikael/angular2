import {Injectable} from "angular2/core";
import {Http} from 'angular2/http';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';

@Injectable()
export class GitHubService {
    private _userUrl = 'https://api.github.com/users/octocat';
    private _followersUrl = 'https://api.github.com/users/octocat/followers';

    constructor() {

    }
}