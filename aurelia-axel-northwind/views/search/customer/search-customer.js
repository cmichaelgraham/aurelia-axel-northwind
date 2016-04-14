var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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