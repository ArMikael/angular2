System.register(['angular2/core', '../components/like.component', './tweets.service'], function(exports_1, context_1) {
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
    var core_1, like_component_1, tweets_service_1;
    var TweetComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            },
            function (tweets_service_1_1) {
                tweets_service_1 = tweets_service_1_1;
            }],
        execute: function() {
            TweetComponent = (function () {
                function TweetComponent(tweetsService) {
                    this.totalTweets = 0;
                    this.tweets = tweetsService.getTweets();
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], TweetComponent.prototype, "totalTweets", void 0);
                TweetComponent = __decorate([
                    core_1.Component({
                        selector: 'tweet',
                        template: "\n        <div class=\"media\" *ngFor=\"#tweet of tweets\">\n            <div class=\"media-left\">\n                <a href=\"#\">\n                    <img class=\"media-object\" src=\"http://lorempixel.com/100/100/people\" alt=\"photo\">\n                </a>\n            </div>\n            <div class=\"media-body\">\n                <h4 class=\"media-heading\">\n                    {{ tweet.title }}\n                    <span class=\"tweeter-user\">{{ tweet.user }}</span>\n                </h4>\n                <p class=\"tweet\">{{ tweet.text }}</p>\n                <like [likesNum]=\"tweet.likesNum\" [isLiked]=\"tweet.isLiked\"></like>\n            </div>\n        </div>\n    ",
                        styles: ["\n        .tweeter-user {\n            color: lightgray;\n        }\n    "],
                        directives: [like_component_1.LikeComponent],
                        providers: [tweets_service_1.TweetsService]
                    }), 
                    __metadata('design:paramtypes', [tweets_service_1.TweetsService])
                ], TweetComponent);
                return TweetComponent;
            }());
            exports_1("TweetComponent", TweetComponent);
            ;
        }
    }
});
//# sourceMappingURL=tweet.component.js.map