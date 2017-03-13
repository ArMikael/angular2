System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AuthorsService;
    return {
        setters:[],
        execute: function() {
            AuthorsService = (function () {
                function AuthorsService() {
                }
                AuthorsService.prototype.getAuthors = function () {
                    return [
                        { name: 'Uwe Rosenberg', id: 101 },
                        { name: 'Vlaada Chvatil', id: 102 },
                        { name: 'Ignazi Tzevichek', id: 103 },
                        { name: 'Mac Herds', id: 104 },
                        { name: 'Stefan Feld', id: 105 }
                    ];
                };
                return AuthorsService;
            }());
            exports_1("AuthorsService", AuthorsService);
        }
    }
});
//# sourceMappingURL=authors.service.js.map