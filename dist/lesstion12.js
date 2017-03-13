var displayColorSpread = function (mg) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    for (var i in colors) {
        console.log(colors[i]);
    }
};
var msSpr = "Day la thong bao nhe";
var colors = ['Vang', 'Do', 'Tim', 'Xanh'];
displayColorSpread.apply(void 0, [msSpr].concat(colors));
//# sourceMappingURL=lesstion12.js.map