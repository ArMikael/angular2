System.register(['angular2/core', './authors.service', '../components/favorite.component', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, authors_service_1, favorite_component_1, router_1;
    var AuthorsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (authors_service_1_1) {
                authors_service_1 = authors_service_1_1;
            },
            function (favorite_component_1_1) {
                favorite_component_1 = favorite_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AuthorsComponent = (function () {
                function AuthorsComponent(authorsService) {
                    this.isImportant = true;
                    this.authors = authorsService.getAuthors();
                }
                AuthorsComponent.prototype.onFavoriteChange = function ($event) {
                    console.log('Favorite changed: ', $event);
                };
                AuthorsComponent = __decorate([
                    core_1.Component({
                        selector: 'authors',
                        // Style binding
                        template: "<h2 [style.color]=\"isImportant ? 'gold' : 'pink'\">Course Authors</h2>\n               <ul class=\"authors\">\n                    <li class=\"author\" *ngFor=\"#author of authors\">\n                        <favorite [isFavorited]=\"author.isFavorited\"\n                                   (change) = \"onFavoriteChange($event)\">                                   \n                        </favorite>\n                        <a [routerLink]=\"['Author', {id: author.id}]\" class=\"author-link\">\n                            {{ author.name }}\n                        </a>\n                    </li>\n               </ul>\n    ",
                        providers: [authors_service_1.AuthorsService],
                        directives: [router_1.ROUTER_DIRECTIVES, favorite_component_1.FavoriteComponent]
                    }), 
                    __metadata('design:paramtypes', [authors_service_1.AuthorsService])
                ], AuthorsComponent);
                return AuthorsComponent;
            }());
            exports_1("AuthorsComponent", AuthorsComponent);
        }
    }
});
//# sourceMappingURL=authors.component.js.map