define(["require", "exports"], function (require, exports) {
    var NumberConverter = (function () {
        function NumberConverter() {
        }
        NumberConverter.prototype.toView = function (n) {
            return n.toString();
        };
        NumberConverter.prototype.fromView = function (s) {
            return Number(s);
        };
        return NumberConverter;
    })();
    exports.NumberConverter = NumberConverter;
});
//# sourceMappingURL=number-converter.js.map