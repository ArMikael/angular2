System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ZippyService;
    return {
        setters:[],
        execute: function() {
            ZippyService = (function () {
                function ZippyService() {
                }
                ZippyService.prototype.getZippies = function () {
                    return [
                        {
                            title: 'AngularJS News',
                            message: 'we have a new great album for you. Listen to it and take fun'
                        },
                        {
                            title: 'New Album - Tesera Nova',
                            message: '@Red_Hot_Chili_Peppers tadadada'
                        },
                        {
                            title: 'React News',
                            message: 'Angular 2 is released! Give me two!'
                        },
                        {
                            title: 'Dont speak with me',
                            message: 'Angry angry girl dont want to talk.'
                        }
                    ];
                };
                return ZippyService;
            }());
            exports_1("ZippyService", ZippyService);
        }
    }
});
//# sourceMappingURL=zippy.service.js.map