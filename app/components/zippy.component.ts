import {Component} from 'angular2/core';

@Component({
    selector: 'zippy',
    styles: [`
        .panel-heading {
            cursor: pointer;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
    `],
    template: `
        <div class="panel panel-default">
            <div class="panel-heading" (click)="onClick()">
                <i class="glyphicon" [ngClass]="{
                    'glyphicon-chevron-up' : statusOpened,
                    'glyphicon-chevron-down' : !statusOpened
                    }">         
                </i>
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