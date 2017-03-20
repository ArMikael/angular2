System.register(['@angular/router', './author/author.component', './authors/authors.component', './courses/courses.component', './github/github.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, author_component_1, authors_component_1, courses_component_1, github_component_1;
    var routes, routing;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (author_component_1_1) {
                author_component_1 = author_component_1_1;
            },
            function (authors_component_1_1) {
                authors_component_1 = authors_component_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (github_component_1_1) {
                github_component_1 = github_component_1_1;
            }],
        execute: function() {
            routes = [
                {
                    path: '/authors',
                    component: authors_component_1.AuthorsComponent,
                },
                {
                    path: '/authors/:id',
                    component: author_component_1.AuthorComponent
                },
                {
                    path: '/courses',
                    component: courses_component_1.CoursesComponent
                },
                {
                    path: '/github',
                    component: github_component_1.GitHubComponent
                },
                {
                    path: '',
                    redirectTo: '/authors',
                    pathMatch: 'full'
                }
            ];
            exports_1("routing", routing = router_1.RouterModule.forRoot(routes));
        }
    }
});
//# sourceMappingURL=app.routes.js.map