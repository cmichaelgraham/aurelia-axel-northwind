define(["require", "exports"], function (require, exports) {
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
    })();
    exports.NumberValueConverter = NumberValueConverter;
});
//# sourceMappingURL=number-converter.js.map