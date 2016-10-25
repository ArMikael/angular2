import {Component, Input} from 'angular2/core';

@Component({
    selector: 'voter',
    template: `
                <i class="glyphicon-menu-up">
                </i>
                
                    {{ totalVotes }}
                    
                <i class="glyphicon-menu-down">
                </i>       
              `
})
export class VoteComponent {
    @Input() totalVotes;
}