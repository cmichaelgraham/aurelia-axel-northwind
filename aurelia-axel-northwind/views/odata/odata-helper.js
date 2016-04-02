define(["require", "exports"], function (require, exports) {
    /**
     * The OdataHelper provides a [fluent api](https://en.wikipedia.org/wiki/Fluent_interface) for constructing [odata urls](http://www.odata.org/documentation/odata-version-2-0/uri-conventions/)
     */
    var OdataHelper = (function () {
        function OdataHelper() {
            var _this = this;
            this.inlineCountProp = false;
            /**
             * `buildQuery` is used once the fluent calls have been made (that provide the url, from, sort, filter, select, skip, take, and orderby odata query criteria).
             * @returns returns a [[BuildQueryResult]] that holds the resulting odata url or the error message (if an error occured)
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
            /**
             * `url` is used to provide the base url from which the odata query is based
             */
            this.url = function (url) {
                _this.urlProp = url;
                return _this;
            };
            /**
             * `fromm` is used to provide the resource against which the odata query will be run
             */
            this.fromm = function (fromm) {
                _this.fromProp = fromm;
                return _this;
            };
            /**
             * `filter` is used to restrict the results based on filter criteria.  odata filtering has a [rich syntax](http://www.odata.org/documentation/odata-version-2-0/uri-conventions/) (scroll down to section 4.5, `filters`)
             */
            this.filter = function (filter) {
                _this.filterProp = filter;
                return _this;
            };
            /**
             * `select` is used to provide a comma-separated list of properties which restricts (filters out) data which isn't requied, increasing query efficiency and reducing required network bandwidth.
             */
            this.select = function (select) {
                _this.selectProp = select;
                return _this;
            };
            /**
             * `orderBy` is used to specify the properties used to control (ascending (*default*) or descending) the sort order for the resulting entities
             */
            this.orderBy = function (orderBy, desc) {
                _this.orderByProp = orderBy;
                _this.descProp = desc;
                return _this;
            };
            /**
             * `skip` indicates how many entities to skip in the result set (these entities are not returned).  `skip` is typically used in conjunction with [[take]] to implement paging
             */
            this.skip = function (count) {
                _this.skipProp = count;
                return _this;
            };
            /**
             * `take` indicates how many entities to return from the result set.  `take` actually translates to `$top` in the odata query.
             */
            this.take = function (count) {
                _this.takeProp = count;
                return _this;
            };
            /**
             * `inlineCount` is used to request a property in the odata query result that indicates how many entities match the odata query.  This is typically used in paging to indicate how many rows are available.
             */
            this.inlineCount = function () {
                _this.inlineCountProp = true;
                return _this;
            };
            /**
             * `expand` is very powerful and is used to indicate related data to include in the result.  Typically this would be arrays of child, grandchild, ... data, returned in a nested hierarchy under the returned entities.
             */
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