import {Component} from 'angular2/core';

@Component({
    selector: 'contact-form',
    templateUrl: 'app/contact-form/contact-form.component.html'
})
export class ContactFormComponent {

    inputChange(input) {
        console.log(input);
    };
}