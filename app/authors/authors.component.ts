import {Component} from 'angular2/core';
import {AuthorsService} from './authors.service';
import {FavoriteComponent} from '../components/favorite.component';

@Component({
    selector: 'authors',

    // Style binding
    template: `<h2 [style.color]="isImportant ? 'gold' : 'pink'">Course Authors</h2>
               <ul class="authors">
                    <li class="author" *ngFor="#author of authors">
                        <favorite [isFavorited]="author.isFavorited"
                                   (change) = "onFavoriteChange($event)">                                   
                        </favorite>
                        {{ author }}
                    </li>
               </ul>
    `,
    providers: [AuthorsService],
    directives: [FavoriteComponent]
})
export class AuthorsComponent {
    authors: string[];

    constructor(authorsService:AuthorsService) {
        this.authors = authorsService.getAuthors();
    }

    onFavoriteChange($event) {
        console.log('Favorite changed: ', $event);
    }

    author = {
        name: 'Vladlen Kaparov',
        isFavorited: true
    };

    isImportant = true;
}