    var buttonSortByName = document.querySelector('.sortByName'),
        buttonSortByPrice = document.querySelector('.sortByPrice');
        targetList = document.querySelector('.good');
        targerTitle = document.querySelector('.title');
        targetPrice = document.querySelector('.price');

    // buttonSortByName.addEventListener("on")



    

function renderList(list){
    console.log(list);
    for (let i = 0; i < list.length; i++) {
        console.log(list[i].title);
        var div = document.createElement("div");
        div.innerHTML = list[i].title;
        targetList.appendChild(div);
    }
}

module.exports = {
    renderList
};