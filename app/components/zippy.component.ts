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
        
        .zippy-header {
            display: inline-block;
        }
    `],
    template: `
        <div class="panel panel-default zippy">
            <div class="panel-heading" (click)="onClick()">
                <ng-content select=".zippy-header"></ng-content>
                <i class="glyphicon" [ngClass]="{
                    'glyphicon-chevron-up' : statusOpened,
                    'glyphicon-chevron-down' : !statusOpened
                    }">         
                </i>
            </div>
            
            <div class="panel-body" *ngIf="statusOpened">
                <ng-content select=".zippy-body"></ng-content>
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