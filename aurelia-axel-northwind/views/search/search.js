define(["require", "exports"], function (require, exports) {
    "use strict";
    var Search = (function () {
        function Search() {
            this.heading = 'Search';
        }
        Search.prototype.configureRouter = function (config, router) {
            config.map([
                { route: ['', 'customer'], moduleId: './customer/search-customer', nav: true, title: 'Customer Search' },
                { route: 'order', moduleId: './order/search-order', nav: true, title: 'Order Search' },
                { route: 'product', moduleId: './product/search-product', nav: true, title: 'Product Search' }
            ]);
            this.router = router;
        };
        return Search;
    }());
    exports.Search = Search;
});
//# sourceMappingURL=search.js.map