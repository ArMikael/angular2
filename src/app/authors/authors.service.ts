import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AuthorsService {
    private _url = "http://jsonplaceholder.typicode.com/posts";

    constructor(private _http: Http){

    }

    getAuthors(){
        return [
            {name: 'Uwe Rosenberg', id: 1},
            {name: 'Vlaada Chvatil', id: 2},
            {name: 'Ignazi Tzevichek', id: 3},
            {name: 'Mac Herds', id: 4},
            {name: 'Stefan Feld', id: 5}
        ]
    }

    getPost(id){
        return this._http.get(this._url + "/?userId=" + id)
            .map(res => res.json());
    }
}