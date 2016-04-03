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
define(["require", "exports", 'aurelia-framework', 'views/odata/odata-service'], function (require, exports, aurelia_framework_1, odata_service_1) {
    var SearchCustomer = (function () {
        function SearchCustomer(odataService) {
            this.searchCriteria = {
                CompanyName: 'Ab'
            };
            this.searchResults = [];
            this.odataService = odataService;
        }
        SearchCustomer.prototype.runSearch = function () {
            var _this = this;
            alert('hello...');
            return;
            return new Promise(function (resolve, reject) {
                var odataHelper = _this.odataService.createOdataHelper();
                odataHelper
                    .url('odata')
                    .fromm('Customers')
                    .filter(_this.buildSearchFilter())
                    .orderBy('CompanyName')
                    .skip(0)
                    .take(10);
                _this.odataService.execQuery(odataHelper)
                    .then(function (result) {
                    resolve(result);
                })
                    .catch(function (reason) {
                    reject(reason);
                });
            });
        };
        SearchCustomer.prototype.buildSearchFilter = function () {
            var result = [];
            if (this.searchCriteria.CompanyName) {
                result.push('substringof(\'' + this.searchCriteria.CompanyName + '\', CompanyName) eq true');
            }
            return result.join(' and ');
        };
        SearchCustomer = __decorate([
            aurelia_framework_1.inject(odata_service_1.OdataService), 
            __metadata('design:paramtypes', [Object])
        ], SearchCustomer);
        return SearchCustomer;
    })();
    exports.SearchCustomer = SearchCustomer;
});
//# sourceMappingURL=search-customer.js.map