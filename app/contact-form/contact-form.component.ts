import {Component} from 'angular2/core';

@Component({
    selector: 'contact-form',
    templateUrl: 'app/contact-form/contact-form.component.html'
})
export class ContactFormComponent {

    inputChange(input) {
        console.log(input);
    };

    onSubmit(form) {
        console.log('User: ' + form.controls.firstName.value, ", Comment: " + form.controls.comment.value);
        console.log(form);
    };
}