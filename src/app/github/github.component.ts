import {Component, OnInit} from "angular2/core";
import {GitHubService} from "./github.service";
import {HTTP_PROVIDERS} from "angular2/http";
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'github-profile',
    styles: [`
        .avatar {
            width: 100px;
            height: 100px;
            border-radius: 100%;
        }
    `],
    template: `
        <i *ngIf="isLoading" class="fa fa-spinner fa-spin fa-3x"></i>
        <h2>@{{ user.login }}</h2>
        <img class="avatar" src="{{ user.avatar_url }}">
        
        <h3>Followers</h3>
        <div class="media" *ngFor="#follower of followers">
            <div class="media-left">
                <a href="#">
                    <img src="{{ follower.avatar_url }}" class="media-object avatar">    
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading">{{ follower.login }}</h4>
            </div>
        </div>
        
    `,
    providers: [GitHubService, HTTP_PROVIDERS]
})
export class GitHubComponent implements OnInit {
    isLoading = false;
    username = 'ArMikael';
    user = {};
    followers = [];

    constructor (private _githubService: GitHubService) {

    }

    ngOnInit () {
        Observable.forkJoin(
            this._githubService.getUser(this.username),
            this._githubService.getFollowers(this.username)
        )
            .subscribe(
                res => {
                    this.user = res[0];
                    this.followers = res[1];
                },
                null,
                () => { this.isLoading = false; })
    }

}