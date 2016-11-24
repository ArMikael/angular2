System.register(['angular2/core', './courses/courses.component', './authors/authors.component', './components/voter.component', './tweets/tweet.component', './contact-form/contact-form.component', './components/zippy.component', './components/zippy.service', './observables/observables.component', "./posts/post.service", './github/github.component', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, courses_component_1, authors_component_1, voter_component_1, tweet_component_1, contact_form_component_1, zippy_component_1, zippy_service_1, observables_component_1, post_service_1, github_component_1, http_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (authors_component_1_1) {
                authors_component_1 = authors_component_1_1;
            },
            function (voter_component_1_1) {
                voter_component_1 = voter_component_1_1;
            },
            function (tweet_component_1_1) {
                tweet_component_1 = tweet_component_1_1;
            },
            function (contact_form_component_1_1) {
                contact_form_component_1 = contact_form_component_1_1;
            },
            function (zippy_component_1_1) {
                zippy_component_1 = zippy_component_1_1;
            },
            function (zippy_service_1_1) {
                zippy_service_1 = zippy_service_1_1;
            },
            function (observables_component_1_1) {
                observables_component_1 = observables_component_1_1;
            },
            function (post_service_1_1) {
                post_service_1 = post_service_1_1;
            },
            function (github_component_1_1) {
                github_component_1 = github_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
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
                    this._postService.createPost({ userId: 4, id: 44, title: 'Angular 2.1 Update', body: 'blabla' });
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
                    core_1.Component({
                        selector: 'my-app',
                        template: "<main class=\"main\">\n                   <h1>Angular 2 App</h1>\n                   <courses></courses> \n                   <authors></authors>\n                   <button class=\"btn-success\" (click)=\"onClick($event)\" >Submit</button>\n    \n                   <div>\n                       <h3 [style.color]=\"courseTitle ? 'gold' : 'gray'\">Course Wanted: {{ courseTitle }}</h3>\n                       <input type=\"text\" [(ngModel)]='courseTitle' />\n                       <input type=\"button\" class=\"btn-danger\" value=\"Clear\" (click)=\"courseTitle=''\" />\n                   </div>\n                   \n                   <article>\n                        <voter \n                            [totalVotes]=\"post.totalVotes\"\n                            [myVote]=\"post.myVote\"\n                            (vote)=\"onVote($event)\"\n                        >\n                        </voter>\n                        <p class=\"article-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur assumenda doloribus\n                        enim maxime perspiciatis quia quisquam quo similique vel.</p>\n                   </article>\n                   \n                   <zippy *ngFor=\"#zip of zippyList\">\n                        <h4 class=\"zippy-header\">{{ zip.title }}</h4>\n                        <p class=\"zippy-body\">{{ zip.message }}</p>\n                   </zippy>\n                   \n                   <contact-form></contact-form>\n                   \n                   <observables></observables>\n                   \n                   <github-profile></github-profile>\n                   \n              </main> \n              ",
                        directives: [courses_component_1.CoursesComponent, authors_component_1.AuthorsComponent, voter_component_1.VoteComponent,
                            tweet_component_1.TweetComponent, contact_form_component_1.ContactFormComponent, zippy_component_1.ZippyComponent, observables_component_1.ObservablesComponent, github_component_1.GitHubComponent],
                        providers: [zippy_service_1.ZippyService, post_service_1.PostService, http_1.HTTP_PROVIDERS]
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