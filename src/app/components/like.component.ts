import {Component, Input, Output} from 'angular2/core';

@Component({
    selector: 'like',
    template:
        `
            <i class="glyphicon" 
               [class.glyphicon-heart-empty]="!isLiked"
               [class.glyphicon-heart]="isLiked"
               (click)="changeLikeStat()" 
               >
            </i>
            <span>{{ likesNum }}</span>
        `,
    styles:
        [`
            .glyphicon {
                cursor: pointer;
            }
            
            .glyphicon-heart {
                color: deeppink;
            }   
       
        `]
})

export class LikeComponent {
    @Input() likesNum;
    @Input() isLiked;

    changeLikeStat() {
        this.isLiked = !this.isLiked;

        if (this.isLiked) {
            this.likesNum++;
        } else {
            this.likesNum--;
        }
    }
}