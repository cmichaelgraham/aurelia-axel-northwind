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
define(["require", "exports", 'aurelia-framework', '../../odata/odata-service'], function (require, exports, aurelia_framework_1, odata_service_1) {
    var SearchCustomerData = (function () {
        function SearchCustomerData(odataService) {
            var _this = this;
            this.fetchPage = function (page) {
                var me = _this;
                return new Promise(function (resolve, reject) {
                    var odataHelper = _this.odataService.createOdataHelper();
                    odataHelper
                        .url('odata')
                        .fromm('Customers')
                        .filter(_this.buildSearchFilter())
                        .orderBy('CompanyName')
                        .skip(0)
                        .take(10)
                        .inlineCount();
                    _this.odataService.execQuery(odataHelper)
                        .then(function (result) {
                        me.searchResults.customers.splice(0, me.searchResults.customers.length);
                        result.value.forEach(function (result) {
                            me.searchResults.customers.push(result.value);
                        });
                        resolve(me.searchResults.customers);
                    })
                        .catch(function (reason) {
                        reject(reason);
                    });
                });
            };
            this.odataService = odataService;
        }
        SearchCustomerData.prototype.buildSearchFilter = function () {
            var result = [];
            if (this.searchCriteria.CompanyName) {
                result.push('substringof(\'' + this.searchCriteria.CompanyName + '\', CompanyName) eq true');
            }
            return result.join(' and ');
        };
        SearchCustomerData = __decorate([
            aurelia_framework_1.inject(odata_service_1.OdataService), 
            __metadata('design:paramtypes', [Object])
        ], SearchCustomerData);
        return SearchCustomerData;
    })();
    exports.SearchCustomerData = SearchCustomerData;
});
//# sourceMappingURL=search-customer-data.js.map