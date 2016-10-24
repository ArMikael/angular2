import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'favorite',
    template: `<i
                    class="glyphicon"
                    [class.glyphicon-star] = isFavorited
                    [class.glyphicon-star-empty] = !isFavorited 
                    (click)="onClick()">
               </i>`
})
export class FavoriteComponent {
    @Input() isFavorited;

    @Output() change = new EventEmitter();
    
    onClick() {
        this.isFavorited = !this.isFavorited;
        this.change.emit({ newValue: this.isFavorited });
    }
}