import {Component} from 'angular2/core';
import {CoursesComponent} from './courses/courses.component';
import {AuthorsComponent} from './authors/authors.component';
import {VoteComponent} from './components/voter.component';

@Component({
    selector: 'my-app',
    template: `<h1>Angular 2 App</h1>
               <courses></courses> 
               <authors></authors>
               <button class="btn-success" (click)="onClick($event)" >Submit</button>

               <div>
                   <h3 [style.color]="courseTitle ? 'gold' : 'gray'">Course Wanted: {{ courseTitle }}</h3>
                   <input type="text" [(ngModel)]='courseTitle' />
                   <input type="button" class="btn-danger" value="Clear" (click)="courseTitle=''" />
               </div>
               <voter></voter>
               <article>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur assumenda doloribus
                enim maxime perspiciatis quia quisquam quo similique vel.
               </article>
               `, // Two-way data binding - [(banana in the box)] = (event-binding) + [property-binding]
    directives: [CoursesComponent, AuthorsComponent, VoteComponent]
})
export class AppComponent { 
    onClick($event) {
        // $event.stopPropagation(); - Will disable to the event to go up by the parrent elements
        console.log('Submit Clicked', $event)
    }

}  