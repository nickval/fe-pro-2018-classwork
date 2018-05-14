window.onload = function() {
    var block = document.querySelector(".block");

    var top, left;

    block.addEventListener("mousedown", function (event) {
        left = event.offsetX;
        top = event.offsetY;

        document.addEventListener("mousemove", move);
        
    });

    block.addEventListener("mouseup", function (event) {
        document.removeEventListener("mousemove", move);
    })


    function move(event) {
        block.style.left = event.pageX - left + "px";
        block.style.top = event.pageY - top + "px";

    }
    }