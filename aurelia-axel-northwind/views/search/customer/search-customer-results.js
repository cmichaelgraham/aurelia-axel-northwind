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
    var SearchCustomerResults = (function () {
        function SearchCustomerResults(element) {
            var _this = this;
            this.pageLoaded = function () {
                _this.gridBody.scrollTop = 0;
            };
            this.element = element;
        }
        SearchCustomerResults.prototype.bind = function () {
            var _this = this;
            this.dataSource.pageLoaded.on(function () { return _this.pageLoaded(); });
        };
        SearchCustomerResults.prototype.unbind = function () {
            this.dataSource.pageLoaded.off(this.pageLoaded);
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], SearchCustomerResults.prototype, "dataSource", void 0);
        SearchCustomerResults = __decorate([
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customElement('search-customer-results'), 
            __metadata('design:paramtypes', [Element])
        ], SearchCustomerResults);
        return SearchCustomerResults;
    })();
    exports.SearchCustomerResults = SearchCustomerResults;
});
//# sourceMappingURL=search-customer-results.js.map