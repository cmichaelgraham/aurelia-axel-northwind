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
define(["require", "exports", 'aurelia-framework', 'aurelia-fetch-client', './odata-helper'], function (require, exports, aurelia_framework_1, aurelia_fetch_client_1, odata_helper_1) {
    var OdataService = (function () {
        function OdataService(http) {
            var _this = this;
            /**
             * `createOdataHelper` returns a new [[OdataHelper]] that can be used to construct an odata query
             */
            this.createOdataHelper = function () {
                return new odata_helper_1.OdataHelper();
            };
            /**
             * `execQuery` executes an odata query and returns a promise to provide an array of the resulting entities
             */
            this.execQuery = function (odataHelper) {
                return new Promise(function (resolve, reject) {
                    // get the odata url from the odata helper
                    var helperResult = odataHelper.buildQuery();
                    if (!helperResult.valid) {
                        reject("Error in OdataHelper: " + helperResult.message);
                        return;
                    }
                    return _this.http.fetch(helperResult.query)
                        .then(function (response) {
                        return response.json();
                    })
                        .then(function (result) {
                        resolve(result);
                        return Promise.resolve(result);
                    });
                });
            };
            this.http = http;
        }
        OdataService = __decorate([
            aurelia_framework_1.inject(aurelia_fetch_client_1.HttpClient), 
            __metadata('design:paramtypes', [aurelia_fetch_client_1.HttpClient])
        ], OdataService);
        return OdataService;
    })();
    exports.OdataService = OdataService;
});
//# sourceMappingURL=odata-service.js.map