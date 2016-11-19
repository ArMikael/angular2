import {Component} from "angular2/core";
import {GitHubService} from "./github.service";
import {HTTP_PROVIDERS} from "angular2/http";

@Component({
    selector: 'github',
    template: `
        <h2>[user]</h2>
    `,
    providers: [GitHubService, HTTP_PROVIDERS]
})
export class GitHubComponent {
    user: {};

    constructor (githubService: GitHubService) {
        this.user = githubService.getUser('ArMikael');
    }

    

}