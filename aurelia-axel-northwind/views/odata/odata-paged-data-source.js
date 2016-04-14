var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', './odata-service'], function (require, exports, aurelia_framework_1, odata_service_1) {
    var OdataPagedDataSource = (function () {
        function OdataPagedDataSource(odataService) {
            var _this = this;
            this.config = new DataSourceConfig(this);
            this.pageData = [];
            this.isBusy = false;
            this.isPageValid = false;
            this.fetchFirstPage = function () {
                return _this.fetchPage(0);
            };
            this.fetchPreviousPage = function () {
                if (_this.currentPage > 0) {
                    return _this.fetchPage(_this.currentPage - 1);
                }
                else {
                    return _this.fetchFirstPage();
                }
            };
            this.fetchNextPage = function () {
                if (_this.currentPage + 1 < _this.pageCount) {
                    return _this.fetchPage(_this.currentPage + 1);
                }
                else {
                    return _this.fetchLastPage();
                }
            };
            this.fetchLastPage = function () {
                return _this.fetchPage(_this.pageCount - 1);
            };
            this.fetchPage = function (newPage) {
                if (_this.isBusy) {
                    throw new Error("Error - Can't fetch pages when busy.");
                }
                var that = _this;
                var p = new Promise(function (resolve, reject) {
                    if (that.isPageValid && that.currentPage == newPage) {
                        resolve(that.pageData);
                    }
                    else {
                        // todo: make sure we aren't asking for a page beyond the page count.  may require a fetch if we haven't yet received the page count.
                        that.currentPage = newPage;
                        var odataHelper = that.odataService.createOdataHelper();
                        odataHelper
                            .url(that.url)
                            .fromm(that.resourceName)
                            .filter(that.buildSearchFilter(that.searchCriteria))
                            .orderBy(that.sortCriteria)
                            .skip(that.currentPage * that.pageSize)
                            .take(that.pageSize)
                            .inlineCount();
                        that.odataService.execQuery(odataHelper)
                            .then(function (result) {
                            that.pageData.splice(0, that.pageData.length);
                            //for (let ii = 0; ii < result.value.length; ii++)
                            result.value.forEach(function (item) {
                                that.pageData.push(item);
                            });
                            that.itemCount = result['odata.count'];
                            that.pageCount = Math.floor(that.itemCount / that.pageSize) + 1;
                            that.isPageValid = true;
                            resolve(that.pageData);
                        })
                            .catch(function (reason) {
                            reject(reason);
                        });
                    }
                });
                return p;
            };
            this.buildSearchFilter = function (criteria) {
                throw new Error("Error in OdataPagedDataSource: buildSearchFilter is an abstract function.  You must implement an override in your derived class");
            };
            this.odataService = odataService;
        }
        Object.defineProperty(OdataPagedDataSource.prototype, "firstPage", {
            get: function () {
                return this.isPageValid && this.currentPage == 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OdataPagedDataSource.prototype, "lastPage", {
            get: function () {
                return this.isPageValid && this.currentPage == this.pageCount - 1;
            },
            enumerable: true,
            configurable: true
        });
        __decorate([
            aurelia_framework_1.computedFrom('isPageValid', 'currentPage'), 
            __metadata('design:type', Object)
        ], OdataPagedDataSource.prototype, "firstPage", null);
        __decorate([
            aurelia_framework_1.computedFrom('isPageValid', 'currentPage'), 
            __metadata('design:type', Object)
        ], OdataPagedDataSource.prototype, "lastPage", null);
        OdataPagedDataSource = __decorate([
            aurelia_framework_1.inject(odata_service_1.OdataService), 
            __metadata('design:paramtypes', [Object])
        ], OdataPagedDataSource);
        return OdataPagedDataSource;
    })();
    exports.OdataPagedDataSource = OdataPagedDataSource;
    var DataSourceConfig = (function () {
        function DataSourceConfig(pagedDataSource) {
            var _this = this;
            this.resourceName = function (resourceName) {
                _this.pagedDataSource.resourceName = resourceName;
                return _this;
            };
            this.sortCriteria = function (sortCriteria) {
                _this.pagedDataSource.sortCriteria = sortCriteria;
                return _this;
            };
            this.pageSize = function (pageSize) {
                _this.pagedDataSource.pageSize = pageSize;
                return _this;
            };
            this.searchCriteria = function (searchCriteria) {
                _this.pagedDataSource.searchCriteria = searchCriteria;
                return _this;
            };
            this.url = function (url) {
                _this.pagedDataSource.url = url;
                return _this;
            };
            this.fetch = function () {
                _this.pagedDataSource.isPageValid = false;
                return _this.pagedDataSource.fetchFirstPage();
            };
            this.pagedDataSource = pagedDataSource;
        }
        return DataSourceConfig;
    })();
    exports.DataSourceConfig = DataSourceConfig;
});
//# sourceMappingURL=odata-paged-data-source.js.map