import { NgModule } from '@angular/core';
import {Component, OnInit} from '@angular/core';
import {HttpModule} from '@angular/http';

import {AuthorsComponent} from './authors/authors.component';
import {ContactFormComponent} from './contact-form/contact-form.component';
import {CoursesComponent} from './courses/courses.component';
import {GitHubComponent} from './github/github.component';
import {ObservablesComponent} from './observables/observables.component';
import {PostService} from "./posts/post.service";
import {TweetComponent} from './tweets/tweet.component';
import {VoteComponent} from './components/voter.component';
import {ZippyComponent} from './components/zippy.component';
import {ZippyService} from './components/zippy.service';


@Component({
    selector: 'my-app',
    template: `<ul class="nav nav-tabs">
                    <li role="presentation" class="active">
                        <a href="" [routerLink]="['Authors']">Home</a>
                    </li>
                    <li role="presentation">
                        <a href="" [routerLink]="['Authors']">Authors</a>
                    </li>
                    <li role="presentation">
                        <a href="" [routerLink]="['Courses']">Courses</a>
                    </li>
                    <li role="presentation">
                        <a href="" [routerLink]="['GitHub']">GitHub</a>
                    </li>
                </ul>


                <main class="main">

                   <h1>Angular 2 App</h1>
               
                   <router-outlet></router-outlet>
   
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
                        <h4 class="zippy-header">{{ zip.title }}</h4>
                        <p class="zippy-body">{{ zip.message }}</p>
                   </zippy>
                   
                   <contact-form></contact-form>
                   
                   <observables></observables>
                  
              </main> 
              `, // Two-way data binding - [(banana in the box)] = (event-binding) + [property-binding]
    providers: [HttpModule, PostService, ZippyService]
})
@NgModule({
    declarations: [AuthorsComponent, ContactFormComponent, CoursesComponent, GitHubComponent,
                    ObservablesComponent, TweetComponent, VoteComponent, ZippyComponent],
})
export class AppComponent implements OnInit {
    post = {
        totalVotes: 10,
        myVote: 0
    };

    zippyList: Object[];

    constructor (private _postService: PostService, zippyService: ZippyService) {
        this.zippyList = zippyService.getZippies();

        this._postService.createPost({userId: 4, id: 44, title: 'Angular 2.1 Update', body: 'blabla'});
    }

    onClick($event) {
        // $event.stopPropagation(); - Will disable to the event to go up by the parent elements
        console.log('Submit Clicked', $event)
    };

    onVote($event) {
        console.log($event);
    };

    ngOnInit() {
        this._postService.getPosts()
            .subscribe(posts => console.log(posts[0].title));

    }

}  