System.register(['@angular/core', './app.routes', './authors/authors.component', './contact-form/contact-form.component', './courses/courses.component', './github/github.component', './observables/observables.component', "./posts/post.service", './tweets/tweet.component', './components/voter.component', './components/zippy.component', './components/zippy.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, core_2, app_routes_1, authors_component_1, contact_form_component_1, courses_component_1, github_component_1, observables_component_1, post_service_1, tweet_component_1, voter_component_1, zippy_component_1, zippy_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (app_routes_1_1) {
                app_routes_1 = app_routes_1_1;
            },
            function (authors_component_1_1) {
                authors_component_1 = authors_component_1_1;
            },
            function (contact_form_component_1_1) {
                contact_form_component_1 = contact_form_component_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (github_component_1_1) {
                github_component_1 = github_component_1_1;
            },
            function (observables_component_1_1) {
                observables_component_1 = observables_component_1_1;
            },
            function (post_service_1_1) {
                post_service_1 = post_service_1_1;
            },
            function (tweet_component_1_1) {
                tweet_component_1 = tweet_component_1_1;
            },
            function (voter_component_1_1) {
                voter_component_1 = voter_component_1_1;
            },
            function (zippy_component_1_1) {
                zippy_component_1 = zippy_component_1_1;
            },
            function (zippy_service_1_1) {
                zippy_service_1 = zippy_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_postService, zippyService) {
                    this._postService = _postService;
                    this.post = {
                        totalVotes: 10,
                        myVote: 0
                    };
                    this.zippyList = zippyService.getZippies();
                    this._postService.createPost({ userId: 4, id: 44, title: 'Angular 4 Final', body: 'blabla' });
                }
                AppComponent.prototype.onClick = function ($event) {
                    // $event.stopPropagation(); - Will disable to the event to go up by the parent elements
                    console.log('Submit Clicked', $event);
                };
                ;
                AppComponent.prototype.onVote = function ($event) {
                    console.log($event);
                };
                ;
                AppComponent.prototype.ngOnInit = function () {
                    this._postService.getPosts()
                        .subscribe(function (posts) { return console.log(posts[0].title); });
                };
                AppComponent = __decorate([
                    core_2.Component({
                        selector: 'my-app',
                        template: "<ul class=\"nav nav-tabs\">\n                    <li role=\"presentation\" class=\"active\">\n                        <a href=\"\" [routerLink]=\"['Authors']\">Home</a>\n                    </li>\n                    <li role=\"presentation\">\n                        <a href=\"\" [routerLink]=\"['Authors']\">Authors</a>\n                    </li>\n                    <li role=\"presentation\">\n                        <a href=\"\" [routerLink]=\"['Courses']\">Courses</a>\n                    </li>\n                    <li role=\"presentation\">\n                        <a href=\"\" [routerLink]=\"['GitHub']\">GitHub</a>\n                    </li>\n                </ul>\n\n\n                <main class=\"main\">\n\n                   <h1>Angular 2 App</h1>\n               \n                   <router-outlet></router-outlet>\n   \n                   <button class=\"btn-success\" (click)=\"onClick($event)\" >Submit</button>\n    \n                   <div>\n                       <h3 [style.color]=\"courseTitle ? 'gold' : 'gray'\">Course Wanted: {{ courseTitle }}</h3>\n                       <input type=\"text\" [(ngModel)]='courseTitle' />\n                       <input type=\"button\" class=\"btn-danger\" value=\"Clear\" (click)=\"courseTitle=''\" />\n                   </div>\n                   \n                   <article>\n                        <voter \n                            [totalVotes]=\"post.totalVotes\"\n                            [myVote]=\"post.myVote\"\n                            (vote)=\"onVote($event)\"\n                        >\n                        </voter>\n                        <p class=\"article-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur assumenda doloribus\n                        enim maxime perspiciatis quia quisquam quo similique vel.</p>\n                   </article>\n                   \n                   <zippy *ngFor=\"#zip of zippyList\">\n                        <h4 class=\"zippy-header\">{{ zip.title }}</h4>\n                        <p class=\"zippy-body\">{{ zip.message }}</p>\n                   </zippy>\n                   \n                   <contact-form></contact-form>\n                   \n                   <observables></observables>\n                  \n              </main> \n              ",
                        providers: [post_service_1.PostService, zippy_service_1.ZippyService]
                    }),
                    core_1.NgModule({
                        imports: [app_routes_1.routing],
                        declarations: [authors_component_1.AuthorsComponent, contact_form_component_1.ContactFormComponent, courses_component_1.CoursesComponent, github_component_1.GitHubComponent,
                            observables_component_1.ObservablesComponent, tweet_component_1.TweetComponent, voter_component_1.VoteComponent, zippy_component_1.ZippyComponent],
                    }), 
                    __metadata('design:paramtypes', [post_service_1.PostService, zippy_service_1.ZippyService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map