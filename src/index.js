var flag = true;
var str = '';
var num = 123;
var obj = Object.create(null);
var arr = [1, 2];
var arrS = ['strrr', 'inggg'];
var arrT = [123, 'string'];
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var colorName = Color.Red;
function fn() {
}
var u = undefined;
var n = null;
// 类型断言 
var any = 'string';
var strany = any.length;
var strany2 = any.length;
function fnint(p) {
    p.num = 123;
    p.str = 'str';
}
// 接口继承 待补充
