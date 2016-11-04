System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var ZippyComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ZippyComponent = (function () {
                function ZippyComponent() {
                    this.statusOpened = false;
                }
                ZippyComponent.prototype.onClick = function () {
                    this.statusOpened = !this.statusOpened;
                };
                ZippyComponent = __decorate([
                    core_1.Component({
                        selector: 'zippy',
                        styles: ["\n        .panel-heading {\n            cursor: pointer;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n        }\n        \n        .zippy-header {\n            display: inline-block;\n        }\n    "],
                        template: "\n        <div class=\"panel panel-default zippy\">\n            <div class=\"panel-heading\" (click)=\"onClick()\">\n                <ng-content select=\".zippy-header\"></ng-content>\n                <i class=\"glyphicon\" [ngClass]=\"{\n                    'glyphicon-chevron-up' : statusOpened,\n                    'glyphicon-chevron-down' : !statusOpened\n                    }\">         \n                </i>\n            </div>\n            \n            <div class=\"panel-body\" *ngIf=\"statusOpened\">\n                <ng-content select=\".zippy-body\"></ng-content>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ZippyComponent);
                return ZippyComponent;
            }());
            exports_1("ZippyComponent", ZippyComponent);
        }
    }
});
//# sourceMappingURL=zippy.component.js.map