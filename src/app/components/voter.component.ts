import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'voter',
    template: `
                <div class="voter-block">
                    <i class="glyphicon glyphicon-menu-up" 
                       [class.highlighted]="myVote == 1"
                        (click)="voteUp()">
                    </i>
                    
                        <span class="total-votes">{{ totalVotes + myVote }}</span>
                        
                    <i class="glyphicon glyphicon-menu-down"
                        [class.highlighted]="myVote == -1"
                        (click)="voteDown()">
                    </i>       
                </div>
              `,
    styles: [`
        .voter-block {
            width: 20px;
            display: inline-block;
        }
        
        .glyphicon {
            display: inline-block;
            cursor: pointer;
        }
        
        .glyphicon,
        .total-votes {
            font-size: 18px;
            text-align: center;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
        
        .total-votes {
            display: inline-block;
            width: 100%;
        }
        
        .highlighted {
            color: gold;
        }
    `]
})
export class VoteComponent {
    @Input() totalVotes = 0;
    @Input() myVote = 0;

    @Output() vote = new EventEmitter();

    voteUp(){
        if (this.myVote == 1) {
            return;
        }

        this.myVote++;

        this.vote.emit({ myVote: this.myVote });
    };

    voteDown(){
        if (this.myVote == -1) {
            return;
        }

        this.myVote--;

        this.vote.emit({ myVote: this.myVote });
    }
}