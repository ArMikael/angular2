import {Component, Input} from 'angular2/core';

@Component({
    selector: 'voter',
    template: `
                <i class="glyphicon-menu-up" (click)="voteUp()">
                </i>
                
                    {{ totalVotes }}
                    
                <i class="glyphicon-menu-down" (click)="voteDown">
                </i>       
              `
})
export class VoteComponent {
    @Input() totalVotes;
    @Input() isVoted = 0;

    voteUp(){
        if (this.isVoted != 1) {
            this.totalVotes++;
        }
    };

    voteDown(){
        if (this.isVoted != -1) {
            this.totalVotes--;
        }
    }
}