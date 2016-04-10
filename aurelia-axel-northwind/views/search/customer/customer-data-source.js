var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
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
define(["require", "exports", 'aurelia-framework', '../../odata/odata-service', '../../odata/odata-paged-data-source'], function (require, exports, aurelia_framework_1, odata_service_1, odata_paged_data_source_1) {
    var CustomerSearchCriteria = (function () {
        function CustomerSearchCriteria() {
        }
        return CustomerSearchCriteria;
    })();
    exports.CustomerSearchCriteria = CustomerSearchCriteria;
    var CustomerDataSource = (function (_super) {
        __extends(CustomerDataSource, _super);
        function CustomerDataSource(odataService) {
            var _this = this;
            _super.call(this, odataService);
            this.buildSearchFilter = function (customerSearchCriteria) {
                var result = [];
                var fields = [
                    'CompanyName',
                    'ContactName',
                    'ContactTitle',
                    'Address',
                    'City',
                    'Region',
                    'Country'
                ];
                return fields.map(function (field) {
                    return 'substringof(\'' +
                        _this.searchCriteria.CompanyName +
                        '\', CompanyName) eq true';
                })
                    .filter(function (n) { return !!n; })
                    .join(' and ');
            };
            this.searchCriteria = new CustomerSearchCriteria();
            this.config
                .url('odata')
                .resourceName('Customers')
                .sortCriteria('CompanyName')
                .pageSize(10);
        }
        ;
        CustomerDataSource = __decorate([
            aurelia_framework_1.transient(),
            aurelia_framework_1.inject(odata_service_1.OdataService), 
            __metadata('design:paramtypes', [Object])
        ], CustomerDataSource);
        return CustomerDataSource;
    })(odata_paged_data_source_1.OdataPagedDataSource);
    exports.CustomerDataSource = CustomerDataSource;
});
//# sourceMappingURL=customer-data-source.js.map