var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework'], function (require, exports, aurelia_framework_1) {
    var App = (function () {
        function App() {
            this.mapVisible = false;
            this.mapInitialized = false;
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = 'Aurelia';
            config.map([
                { route: ['', 'welcome'], name: 'welcome', moduleId: './welcome', nav: true, title: 'Welcome' },
                { route: 'search', name: 'search', moduleId: './search/search', nav: true, title: 'Search' },
                { route: 'flickr', name: 'flickr', moduleId: './flickr', nav: true, title: 'Flickr' },
                { route: 'users', name: 'users', moduleId: './users', nav: true, title: 'Github Users' },
                { route: 'esri-globe', name: 'esri-globe', moduleId: './esri-globe', nav: true, title: 'ESRI Globe' },
                { route: 'child-router', name: 'child-router', moduleId: './child-router', nav: true, title: 'Child Router' }
            ]);
            this.router = router;
        };
        App = __decorate([
            aurelia_framework_1.singleton(), 
            __metadata('design:paramtypes', [])
        ], App);
        return App;
    })();
    exports.App = App;
});
//# sourceMappingURL=app.js.map