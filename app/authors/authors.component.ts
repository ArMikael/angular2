import {Component} from 'angular2/core';
import {AuthorsService} from './authors.service';

@Component({
    selector: 'authors',
    // Style binding
    template: `<h2 [style.color]="isImportant ? 'gold' : 'pink'">Course Authors</h2>
               <ul class="authors">
                    <li class="author" *ngFor="#author of authors">
                        {{ author }}
                    </li>
               </ul>
    `,
    providers: [AuthorsService]
})
export class AuthorsComponent {
    authors: string[];

    constructor(authorsService:AuthorsService) {
        this.authors = authorsService.getAuthors();
    }

    isImportant = true;
}