var arr1 = [1, 2, 3],
arr2 = [3, 6, 3223],
arr3 = [2, 8, 5, 7, 457, 457, 4];

function fofoFunction() {
    var A = []; 
    
    for (var i = 0; i < arguments.length; i++) {
        A = A.concat(arguments[i]);
    }
    return A;
}

console.log(fofoFunction(arr1, arr2, arr3));


function factory(arr){
    var index = -1;
    return function(){
        index++;
        return arr[index];
    }    
}

var step = factory([2, 8, 9, 2, 4]);


console.log(step());
console.log(step());
console.log(step());
console.log(step());
console.log(step());


