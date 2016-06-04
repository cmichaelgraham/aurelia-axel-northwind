define(["require", "exports"], function (require, exports) {
    "use strict";
    var NumberValueConverter = (function () {
        function NumberValueConverter() {
        }
        NumberValueConverter.prototype.toView = function (n) {
            return n.toString();
        };
        NumberValueConverter.prototype.fromView = function (s) {
            return Number(s);
        };
        return NumberValueConverter;
    }());
    exports.NumberValueConverter = NumberValueConverter;
});
//# sourceMappingURL=number.js.map