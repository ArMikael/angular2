System.register(['angular2/core', './courses.service', '../directives/auto-grow.directive', '../components/like.component'], function(exports_1, context_1) {
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
    var core_1, courses_service_1, auto_grow_directive_1, like_component_1;
    var CoursesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_service_1_1) {
                courses_service_1 = courses_service_1_1;
            },
            function (auto_grow_directive_1_1) {
                auto_grow_directive_1 = auto_grow_directive_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            }],
        execute: function() {
            CoursesComponent = (function () {
                function CoursesComponent(courseService) {
                    this.courseStat = {
                        likesNum: 12,
                        isLiked: false
                    };
                    this.isActive = true;
                    this.link = 'http://www.geen.io';
                    this.courses = courseService.getCourses();
                }
                CoursesComponent = __decorate([
                    core_1.Component({
                        selector: 'courses',
                        template: "\n              <h2>Courses</h2> \n              <input type=\"text\" class=\"animated\" autoGrow />\n              <button class=\"btn-default btn-primary\" [class.active]=\"isActive\">Go</button>\n              <ul class=\"courses\">\n                <li *ngFor=\"#course of courses\">\n                    <like [likesNum]=\"courseStat.likesNum\" [isLiked]=\"courseStat.isLiked\"></like> \n                    {{ course }}\n                </li>\n              </ul>\n\n              <a [href]=\"link\"> \n                <small>find more courses</small>\n              </a>\n              ",
                        providers: [courses_service_1.CoursesService],
                        directives: [auto_grow_directive_1.AutoGrowDirective, like_component_1.LikeComponent]
                    }), 
                    __metadata('design:paramtypes', [courses_service_1.CoursesService])
                ], CoursesComponent);
                return CoursesComponent;
            }());
            exports_1("CoursesComponent", CoursesComponent);
        }
    }
});
//# sourceMappingURL=courses.component.js.map