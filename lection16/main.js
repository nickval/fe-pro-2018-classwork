
window.onload = function () {
    var menu = document.querySelector(".menu");
    // var container = document.getElementsByClassName("menu");
    var contextmenu = {
        actions: [
            {
                title: 'Action 1',
                handler: 'Copy'
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
    

    document.addEventListener("contextmenu", function (event) {
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