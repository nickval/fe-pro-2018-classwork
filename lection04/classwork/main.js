var arr = [2, 3, 8, -4, 3, 2];
var min = arr[0];

for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
}

console.log('min element: ', min);