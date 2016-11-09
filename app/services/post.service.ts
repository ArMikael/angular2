import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Injectable} from 'angular2/core';

@Injectable()
export class PostService {
    private _url = 'https://jsonplaceholder.typicode.com/posts';

    constructor(private _http: Http){

    }

    getPost(){
        return this._http.get(this._url)
            .map(response => response.json());
    }

    createPost(post){
        return this._http.post(this._url, JSON.stringify(post))
            .map(response => response.json());
    }
}