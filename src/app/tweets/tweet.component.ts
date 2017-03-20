import {Component, Input, Output} from 'angular2/core';
import {LikeComponent} from '../components/like.component';
import {TweetsService} from './tweets.service';

@Component({
    selector: 'tweet',
    template: `
        <div class="media" *ngFor="#tweet of tweets">
            <div class="media-left">
                <a href="#">
                    <img class="media-object" src="http://lorempixel.com/100/100/people" alt="photo">
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading">
                    {{ tweet.title }}
                    <span class="tweeter-user">{{ tweet.user }}</span>
                </h4>
                <p class="tweet">{{ tweet.text }}</p>
                <like [likesNum]="tweet.likesNum" [isLiked]="tweet.isLiked"></like>
            </div>
        </div>
    `,
    styles: [`
        .tweeter-user {
            color: lightgray;
        }
    `],
    directives: [LikeComponent],
    providers: [TweetsService]
})
export class TweetComponent {
    @Input() totalTweets = 0;

    tweets: any[];

    constructor (tweetsService:TweetsService) {
        this.tweets = tweetsService.getTweets();
    }
};