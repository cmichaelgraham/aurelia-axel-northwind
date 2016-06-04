var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', '../../odata/odata-service', '../../odata/odata-paged-data-source'], function (require, exports, aurelia_framework_1, odata_service_1, odata_paged_data_source_1) {
    "use strict";
    var CustomerSearchCriteria = (function () {
        function CustomerSearchCriteria() {
        }
        return CustomerSearchCriteria;
    }());
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
                    if (!_this.searchCriteria[field]) {
                        return '';
                    }
                    else {
                        return 'substringof(\'' +
                            _this.searchCriteria[field] +
                            '\', ' + field + ') eq true';
                    }
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
    }(odata_paged_data_source_1.OdataPagedDataSource));
    exports.CustomerDataSource = CustomerDataSource;
});
//# sourceMappingURL=customer-data-source.js.map