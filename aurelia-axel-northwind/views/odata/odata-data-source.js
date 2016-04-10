define(["require", "exports"], function (require, exports) {
    var OdataPagedDataSource = (function () {
        function OdataPagedDataSource() {
            var _this = this;
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
                if (_this.currentPage < _this.pageCount - 1) {
                    return _this.fetchPage(_this.currentPage + 1);
                }
                else {
                    return _this.fetchLastPage();
                }
            };
            this.fetchLastPage = function () {
                return _this.fetchPage(_this.pageCount);
            };
            this.fetchPage = function (newPage) {
                if (_this.isBusy) {
                    throw new Error("Error - Can't fetch pages when busy.");
                }
                var p = new Promise(function (resolve, reject) {
                    if (_this.isPageValid && _this.currentPage == newPage) {
                        resolve(_this.pageData);
                    }
                    else {
                        // todo: make sure we aren't asking for a page beyond the page count.  may require a fetch if we haven't yet received the page count.
                        _this.currentPage = newPage;
                        var odataHelper = _this.odataService.createOdataHelper();
                        odataHelper
                            .url('odata')
                            .fromm('Customers')
                            .filter(_this.buildSearchFilter(_this.searchCriteria))
                            .orderBy(_this.sortCriteria)
                            .skip(_this.currentPage * _this.pageSize)
                            .take(_this.pageSize)
                            .inlineCount();
                        _this.odataService.execQuery(odataHelper)
                            .then(function (result) {
                            _this.pageData.splice(0, _this.pageData.length);
                            result.forEach(function (result) {
                                _this.pageData.push(result.data);
                            });
                            resolve(_this.pageData);
                        })
                            .catch(function (reason) {
                            reject(reason);
                        });
                    }
                });
                return p;
            };
            this.isFirstPage = function () {
                return _this.isPageValid && _this.currentPage == 0;
            };
            this.isLastPage = function () {
                return _this.isPageValid && _this.currentPage == _this.pageCount;
            };
        }
        OdataPagedDataSource.prototype.buildSearchFilter = function (criteria) {
            throw new Error("Error in OdataPagedDataSource: buildSearchFilter is an abstract function.  You must implement an override in your derived class");
        };
        return OdataPagedDataSource;
    })();
    exports.OdataPagedDataSource = OdataPagedDataSource;
    var DataSourceConfig = (function () {
        function DataSourceConfig(pagedDataSource) {
            var _this = this;
            this.resourceName = function (resourceName) {
                _this.pagedDataSource.resourceName = resourceName;
                return _this.pagedDataSource;
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
                return _this.pagedDataSource.fetchFirstPage();
            };
            this.pagedDataSource = pagedDataSource;
        }
        return DataSourceConfig;
    })();
    exports.DataSourceConfig = DataSourceConfig;
});
//# sourceMappingURL=odata-data-source.js.map