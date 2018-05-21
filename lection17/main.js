window.onload = function() {
    var buttonsArr = document.querySelectorAll(".btn1, .btn2, .btn3, .btn4");  //".btn1, .btn2, .btn3, .btn4"

    console.log(buttonsArr);
    buttonsArr.forEach(function(item){
        // console.log(item);
        item.addEventListener("click", function(event) {
            console.log("click");
        })
    })
}

// myMethods = {
//     function getValuesByType(type) {
//         return 
//     }
// }