import {Component} from 'angular2/core';
import {CoursesComponent} from './courses/courses.component';
import {AuthorsComponent} from './authors/authors.component';
import {VoteComponent} from './components/voter.component';
import {TweetComponent} from './tweets/tweet.component';
import {ContactFormComponent} from './contact-form/contact-form.component';
import {ZippyComponent} from './components/zippy.component';
import {ZippyService} from './components/zippy.service';

@Component({
    selector: 'my-app',
    template: `<main class="main">
                   <h1>Angular 2 App</h1>
                   <courses></courses> 
                   <authors></authors>
                   <button class="btn-success" (click)="onClick($event)" >Submit</button>
    
                   <div>
                       <h3 [style.color]="courseTitle ? 'gold' : 'gray'">Course Wanted: {{ courseTitle }}</h3>
                       <input type="text" [(ngModel)]='courseTitle' />
                       <input type="button" class="btn-danger" value="Clear" (click)="courseTitle=''" />
                   </div>
                   
                   <article>
                        <voter 
                            [totalVotes]="post.totalVotes"
                            [myVote]="post.myVote"
                            (vote)="onVote($event)"
                        >
                        </voter>
                        <p class="article-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur assumenda doloribus
                        enim maxime perspiciatis quia quisquam quo similique vel.</p>
                   </article>
                   
                   <zippy *ngFor="#zip of zippyList">
                        <h2 class="zippy-header">{{ zip.title }}</h2>
                        <p class="zippy-body">{{ zip.message }}</p>
                   </zippy>
                   
                   <contact-form></contact-form>
                   
              </main> 
              `, // Two-way data binding - [(banana in the box)] = (event-binding) + [property-binding]
    directives: [CoursesComponent, AuthorsComponent, VoteComponent,
                TweetComponent, ContactFormComponent, ZippyComponent],
    providers: [ZippyService]
})
export class AppComponent {
    post = {
        totalVotes: 10,
        myVote: 0
    };

    zippyList:any[];

    constructor (zippyService: ZippyService) {
        this.zippyList = zippyService.getZippies();
    }

    onClick($event) {
        // $event.stopPropagation(); - Will disable to the event to go up by the parrent elements
        console.log('Submit Clicked', $event)
    };

    onVote($event) {
        console.log($event);
    };

}  