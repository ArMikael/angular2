import {Component, Input, Output} from 'angular2/core';
import {LikeComponent} from './like.component';

@Component({
    selector: 'tweet',
    template: `
        <div class="media">
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
                <like></like>
            </div>
        </div>
    `,
    styles: [`
        .tweeter-user {
            color: lightgray;
        }
    `],
    directives: ['LikeComponent']
})
export class TweetComponent {
    @Input() totalTweets = 0;

    tweet: {
        title: 'AngularJS News',
        user: '@angular_news',
        text: 'Angular 2 is released! Give me two!'
    }
};