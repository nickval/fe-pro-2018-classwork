var h = 200,
    step = 50,
    movingFlag = false,
    seatingFlag = false;

window.onload = function () {
    var menu = document.querySelector(".menu"),
        block = document.querySelector(".block"),
        getStyle = window.getComputedStyle(block),
        topPosition = +getStyle.getPropertyValue('top').split("px")[0],
        leftPosition = +getStyle.getPropertyValue('left').split("px")[0],
        widthBlock = +getStyle.getPropertyValue('width').split("px")[0],
        heightBlock = +getStyle.getPropertyValue('height').split("px")[0],
        animationSpeed = +getStyle.getPropertyValue('transition-duration').split("s")[0] * 1000;
    // var container = document.getElementsByClassName("menu");
    var contextmenu = {
        actions: [
            {
                title: 'Jump',
                handler: 'Jump'
            },
            {
                title: 'Action 2',
                handler: 'Edit'
            },
            {
                title: 'Action 3',
                handler: 'Delete'
            },
        ]
    }

    for (let i = 0; i < contextmenu.actions.length; i++) {
        console.log(i);
        var div = document.createElement("div");

        div.classList.add("menu-item");
        div.innerHTML = contextmenu.actions[i].title;
        div.addEventListener("mousedown", window[contextmenu.actions[i].handler]);
        menu.appendChild(div);
    }


    block.addEventListener("contextmenu", function (event) {
        event.preventDefault();
        // console.log("prevent");
        menu.style.left = event.pageX + "px";
        menu.style.top = event.pageY + "px";
        menu.classList.add("show");
    })
    document.addEventListener("mousedown", function (event) {
        menu.classList.remove("show");
    })
}

function Copy(event) {
    event.stopPropagation();
    console.log('Copy');
}
function Edit(event) {
    event.stopPropagation();
    console.log('Edit');
}
function Delete(event) {
    event.stopPropagation();
    console.log('Delete');
}

function Jump() {
    topPosition -= h;
    block.style.top = topPosition + "px";
    setTimeout(function () {
        // console.log("back " + block);
        topPosition += h;
        block.style.top = topPosition + "px";
        isMoveChange();
    }, animationSpeed);
}