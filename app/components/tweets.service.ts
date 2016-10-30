export class TweetsService {
    getTweets() {
        return [
            {
                title: 'AngularJS News',
                user: '@angular_news',
                text: 'Angular 2 is released! Give me two!',
                likesNum: 5,
                isLiked: false
            },
            {
                title: 'New Album - Tesera Nova',
                user: '@Red_Hot_Chili_Peppers',
                text: 'Hi guys, we have a new great album for you. Listen to it and take fun.',
                likesNum: 8,
                isLiked: true
            },
            {
                title: 'AngularJS News',
                user: '@angular_news',
                text: 'Angular 2 is released! Give me two!',
                likesNum: 114,
                isLiked: false
            }
        ];
    }
}