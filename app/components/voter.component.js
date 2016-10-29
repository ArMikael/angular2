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
    var VoteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            VoteComponent = (function () {
                function VoteComponent() {
                    this.totalVotes = 0;
                    this.myVote = 0;
                    this.vote = new core_1.EventEmitter();
                }
                VoteComponent.prototype.voteUp = function () {
                    if (this.myVote == 1) {
                        return;
                    }
                    this.myVote++;
                    this.vote.emit({ myVote: this.myVote });
                };
                ;
                VoteComponent.prototype.voteDown = function () {
                    if (this.myVote == -1) {
                        return;
                    }
                    this.myVote--;
                    this.vote.emit({ myVote: this.myVote });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VoteComponent.prototype, "totalVotes", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VoteComponent.prototype, "myVote", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], VoteComponent.prototype, "vote", void 0);
                VoteComponent = __decorate([
                    core_1.Component({
                        selector: 'voter',
                        template: "\n                <div class=\"voter-block\">\n                    <i class=\"glyphicon glyphicon-menu-up\" \n                       [class.highlighted]=\"myVote == 1\"\n                        (click)=\"voteUp()\">\n                    </i>\n                    \n                        <span class=\"total-votes\">{{ totalVotes + myVote }}</span>\n                        \n                    <i class=\"glyphicon glyphicon-menu-down\"\n                        [class.highlighted]=\"myVote == -1\"\n                        (click)=\"voteDown()\">\n                    </i>       \n                </div>\n              ",
                        styles: ["\n        .voter-block {\n            width: 20px;\n            display: inline-block;\n        }\n        \n        .glyphicon {\n            display: inline-block;\n            cursor: pointer;\n        }\n        \n        .glyphicon,\n        .total-votes {\n            font-size: 18px;\n            text-align: center;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n        }\n        \n        .total-votes {\n            display: inline-block;\n            width: 100%;\n        }\n        \n        .highlighted {\n            color: gold;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], VoteComponent);
                return VoteComponent;
            }());
            exports_1("VoteComponent", VoteComponent);
        }
    }
});
//# sourceMappingURL=voter.component.js.map