import {Component} from 'angular2/core';
import {Observable} from 'rxjs';

@Component({
    selector: 'observables',
    template: `
        <input type="text" placeholder="search" id="search">
    `
})
export class ObservablesComponent {
    constructor() {
        var keyups = Observable.fromEvent($('#search'), 'keyup');

        keyups.subscribe(data => console.log(data));
    }
}
