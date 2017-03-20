System.register(['@angular/core', '@angular/router', '../authors/authors.service'], function(exports_1, context_1) {
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
    var core_1, router_1, authors_service_1;
    var AuthorComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (authors_service_1_1) {
                authors_service_1 = authors_service_1_1;
            }],
        execute: function() {
            AuthorComponent = (function () {
                function AuthorComponent(_authorsService, routeParams) {
                    this._authorsService = _authorsService;
                    this.routeParams = routeParams;
                    this.isLoading = true;
                }
                AuthorComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    // Get user id from url - route params
                    this.userId = parseInt(this.routeParams.params["id"]);
                    this._authorsService.getPost(this.userId)
                        .subscribe(function (posts) {
                        _this.isLoading = false;
                        _this.posts = posts;
                    });
                };
                AuthorComponent = __decorate([
                    core_1.Component({
                        selector: 'author',
                        template: "\n        <h1>Author</h1>\n        <div *ngIf=\"isLoading\">\n            <i class=\"fa fa-spinner fa-spin fa-3x\"></i>\n        </div>\n        <div>\n            <div *ngFor=\"#post of posts\">\n                <h3>{{post.title}}</h3>\n                <p>{{post.body}}</p>\n            </div>\n        </div>\n    ",
                        providers: [authors_service_1.AuthorsService],
                    }), 
                    __metadata('design:paramtypes', [authors_service_1.AuthorsService, router_1.ActivatedRoute])
                ], AuthorComponent);
                return AuthorComponent;
            }());
            exports_1("AuthorComponent", AuthorComponent);
        }
    }
});
//# sourceMappingURL=author.component.js.map