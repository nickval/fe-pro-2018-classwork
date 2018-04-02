function doMath(x, znak, y) {
    var res = 0;
    if (!x || !znak || !y) {
        return;
    }
    if (znak == '+') {
        res = x + y;
    } else if (znak == '-') {
        res = x - y;
    } else if (znak == '*') {
        res = x * y;
    } else if (znak == '/') {
        res = x / y;
    } else if (znak == '%') {
        res = x % y;
    } else if (znak == '^') {
        res = x ^ y;
    }

    return res;
}

var x = +prompt('x');
var znak = prompt('znak');
var y = +prompt('y');

console.log(doMath(x, znak, y));