window.onload = function () {
    var counter = 0,
        step = 1;

    var bloks = document.querySelectorAll('.block');

    console.dir(bloks);
    console.log(bloks.length);
    setInterval(function () {
        if (step == 1) {
            bloks[counter].classList.add('move');
        } else {
            bloks[counter].classList.remove('move');
        }
        console.dir(bloks[counter]);
        console.log(counter);
        if (counter < bloks.length - 1 && counter >= 0) {
            counter += step;
        } else if (counter == bloks.length -1){
            counter = 0;
            counter *= -1;
        } else {
            counter = bloks.length;
        }
    }, 1000);
};