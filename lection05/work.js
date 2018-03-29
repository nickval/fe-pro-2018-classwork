var number = 20;
var arr = new Array(number);

for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(number);
}

var n = arr.length;
// console.log(arr, n);
var cent = Math.ceil(n / 2) - 1;
for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
        if ((i + j <= n - 1) && (i <= cent)) {
            arr[i][j] = 1;
        } else if ((i >= j + cent + 1) || 
                ((i + j <= cent + n -1) &&
                i >= cent &&
                j >= cent)) {
            arr[i][j] = 1;
        } else {
            arr[i][j] = 0;
        }

        document.write(arr[i][j] + ' ');
    }
    document.write('<br />');
}