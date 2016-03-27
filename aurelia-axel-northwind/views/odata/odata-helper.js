define(["require", "exports"], function (require, exports) {
    /**
     * The OdataHelper provides a [fluent api](https://en.wikipedia.org/wiki/Fluent_interface) for constructing [odata urls](http://www.odata.org/documentation/odata-version-2-0/uri-conventions/)
     */
    var OdataHelper = (function () {
        function OdataHelper() {
            var _this = this;
            this.inlineCountProp = false;
            /**
             * this is the function that builds odata query urls
             */
            this.buildQuery = function () {
                // error if no url
                if (_this.urlProp === null || _this.urlProp.length < 1) {
                    return { valid: false, message: 'Error in OdataHelper: missing required url' };
                }
                // error if no from clause
                if (!_this.fromProp) {
                    return { valid: false, message: ('Error in OdataHelper: missing required fromm') };
                }
                // build query
                var query = _this.urlProp + "/" + _this.fromProp + "?"; // $format=json";
                // add filter if present
                if (_this.filterProp) {
                    query += "&$filter=" + _this.filterProp;
                }
                // add select if present
                if (_this.selectProp) {
                    query += "&$select=" + _this.selectProp;
                }
                // add orderBy if present
                if (_this.orderByProp) {
                    query += "&$orderby=" + _this.orderByProp + (_this.descProp ? ' desc' : '');
                }
                // add skip if present
                if (_this.skipProp) {
                    query += "&$skip=" + _this.skipProp;
                }
                // add take if present
                if (_this.takeProp) {
                    query += "&$top=" + _this.takeProp;
                }
                // add inlineCount if present
                if (_this.inlineCountProp) {
                    query += "&$inlinecount=allpages";
                }
                // add expand if present
                if (_this.expandProp) {
                    query += "&$expand=" + _this.expandProp;
                }
                return { valid: true, query: query };
            };
            this.url = function (url) {
                _this.urlProp = url;
                return _this;
            };
            this.fromm = function (fromm) {
                _this.fromProp = fromm;
                return _this;
            };
            this.filter = function (filter) {
                _this.filterProp = filter;
                return _this;
            };
            this.select = function (select) {
                _this.selectProp = select;
                return _this;
            };
            this.orderBy = function (orderBy, desc) {
                _this.orderByProp = orderBy;
                _this.descProp = desc;
                return _this;
            };
            this.skip = function (count) {
                _this.skipProp = count;
                return _this;
            };
            this.take = function (count) {
                _this.takeProp = count;
                return _this;
            };
            this.inlineCount = function () {
                _this.inlineCountProp = true;
                return _this;
            };
            this.expand = function (expand) {
                _this.expandProp = expand;
                return _this;
            };
        }
        return OdataHelper;
    })();
    exports.OdataHelper = OdataHelper;
});
//# sourceMappingURL=odata-helper.js.map