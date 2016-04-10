var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', './customer-data-source'], function (require, exports, aurelia_framework_1, customer_data_source_1) {
    var SearchCustomer = (function () {
        function SearchCustomer(customerDataSource) {
            var _this = this;
            this.runSearch = function () {
                return _this.customerDataSource.config.fetch();
            };
            this.customerDataSource = customerDataSource;
            this.customerDataSource.config.fetch();
        }
        SearchCustomer = __decorate([
            aurelia_framework_1.inject(customer_data_source_1.CustomerDataSource), 
            __metadata('design:paramtypes', [Object])
        ], SearchCustomer);
        return SearchCustomer;
    })();
    exports.SearchCustomer = SearchCustomer;
});
//# sourceMappingURL=search-customer.js.map