import {Component} from 'angular2/core';
import {CoursesService} from './courses.service';
import {AutoGrowDirective} from '../directives/auto-grow.directive';

@Component({
    selector: 'courses',
    template: `
              <h2>Courses</h2> 
              <input type="text" class="animated" autoGrow />
              <button class="btn-default btn-primary" [class.active]="isActive">Go</button>
              <ul class="courses">
                <li *ngFor="#course of courses">
                    {{ course }}
                </li>
              </ul>

              <a [href]="link"> 
                <small>find more courses</small>
              </a>
              `, // Property binding it is one way binding from component to the DOM
    providers: [CoursesService],
    directives: [AutoGrowDirective]
})
export class CoursesComponent {
    courses: string[];

    constructor(courseService:CoursesService) {
        this.courses = courseService.getCourses();
    }

    isActive = true;
    link = 'http://www.geen.io';
}