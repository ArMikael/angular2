import {Component} from 'angular2/core';

@Component({
    selector: 'zippy',
    template: `
        <div class="panel panel-default">
            <div class="panel-heading" (click)="onClick()">
                <i class="glyphicon" ngClass="statusOpened = true ? glyphicon-chevron-up : glyphicon-chevron-down"></i>
            </div>
            
            <div class="panel-body" *ngIf="statusOpened">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, quas.
                <!--<ng-content select=".zippy-body"></ng-content>-->
            </div>
        </div>
    `
})
export class ZippyComponent {
    statusOpened = false;

    onClick() {
        this.statusOpened = !this.statusOpened;
    }
}