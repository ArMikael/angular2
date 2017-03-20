import {Component} from 'angular2/core';
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'observables',
    template: `
        <input #search type="text" placeholder="Search" id="search" />
    `
})
export class ObservablesComponent {
    constructor() {
        // Observable.fromEvent($("#search"), "change")
        //     .subscribe(data => console.log(data));
        console.log(new Observable());
    }
}