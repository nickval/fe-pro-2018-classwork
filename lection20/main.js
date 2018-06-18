console.log("server started123");

// var menu = [];


function doAjax(method, file) {

    var promise = new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, file, true);
        xhr.send();

        xhr.onreadystatechange = function () {
            if (xhr.readyState != 4) {
                return;
            }
            console.log('resolve');
            // resolve(JSON.parse(xhr.responseText));

            if (xhr.status != 200 || xhr.responseText == '{}') {
                reject(xhr);
            } else {
                resolve(JSON.parse(xhr.responseText));
            }
        }
    });

    return promise;
};

// var req1 = doAjax('GET', '/data.json');
// var req2 = doAjax('GET', '/data2.json');

// Promise.all([req1, req2])
//     .then(function (response) {
//         console.log(response);

//         // return response;
//     })
//     .catch(function (response) {
//         console.log(response);
//     });


function getMenu(role) {
    return doAjax('GET', `/${role}.json`)
}

window.onload = function () {
    var menuMain = document.getElementsByClassName('menu');
    console.log(menuMain);
    getMenu('user')
        .then(function (response) {
            // menuArray = response.menu;
            console.log(response.menu);
            for (let i = 0; i < response.menu.length; i++) {
                console.log(i);
                var div = document.createElement("div");
        
                // div.classList.add("menu-item");
                div.innerHTML = response.menu[i];
                menuMain.appendChild(div);
            }
        });
    
}

