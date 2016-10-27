import {Component, Input} from 'angular2/core';

@Component({
    selector: 'voter',
    template: `
                <div class="voter-block">
                    <i class="glyphicon glyphicon-menu-up" (click)="voteUp()">
                    </i>
                    
                        <span>{{ totalVotes }}</span>
                        
                    <i class="glyphicon glyphicon-menu-down" (click)="voteDown">
                    </i>       
                </div>
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