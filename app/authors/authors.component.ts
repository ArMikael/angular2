import {Component} from 'angular2/core';
import {AuthorsService} from './authors.service';
import {FavoriteComponent} from '../components/favorite.component';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'authors',

    // Style binding
    template: `<h2 [style.color]="isImportant ? 'gold' : 'pink'">Course Authors</h2>
               <ul class="authors">
                    <li class="author" *ngFor="#author of authors">
                        <favorite [isFavorited]="author.isFavorited"
                                   (change) = "onFavoriteChange($event)">                                   
                        </favorite>
                        <a [routerLink]="['Author', {id: author.id}]" class="author-link">
                            {{ author.name }}
                        </a>
                    </li>
               </ul>
    `,
    providers: [AuthorsService],
    directives: [ROUTER_DIRECTIVES, FavoriteComponent]
})
export class AuthorsComponent {
    authors: any[];

    constructor(authorsService:AuthorsService) {
        this.authors = authorsService.getAuthors();
    }

    onFavoriteChange($event) {
        console.log('Favorite changed: ', $event);
    }

    isImportant = true;
}