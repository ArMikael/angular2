import {Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AuthorsService} from '../authors/authors.service';

@Component({
    selector: 'author',
    template: `
        <h1>Author</h1>
        <div *ngIf="isLoading">
            <i class="fa fa-spinner fa-spin fa-3x"></i>
        </div>
        <div>
            <div *ngFor="#post of posts">
                <h3>{{post.title}}</h3>
                <p>{{post.body}}</p>
            </div>
        </div>
    `,
    providers: [AuthorsService],
})

export class AuthorComponent implements OnInit {
    isLoading = true;
    posts: any[];
    userId: number;

    constructor(private _authorsService: AuthorsService, private routeParams: ActivatedRoute ) {

    }

    ngOnInit(){
        // Get user id from url - route params
        this.userId = parseInt(this.routeParams.params["id"]);

        this._authorsService.getPost(this.userId)
            .subscribe(posts => {
                this.isLoading = false;
                this.posts = posts;
            });
    }
}