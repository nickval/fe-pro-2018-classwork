
function doAjax(method, url){
    var xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    
    return new Promise(function(resolve, reject){
        xhr.send();

        xhr.onreadystatechange = function(){
            if (xhr.readyState != 4) {
                return;
            }

            if (xhr.status != 200) {
                reject(xhr);
            }

            resolve(JSON.parse(xhr.responseText));
        }
    });
}


// function executeRequest(url) {
//     // let res = [];
//     doAjax('GET', url);
// }


module.exports = {
    doAjax,
    // executeRequest
};