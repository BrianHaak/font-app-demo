var x = 0;
var y = 0;
var maxWidth = 1000;
var maxWeight = 1000;

function setStyles(property, value) {
    return document.documentElement.querySelector(".text").style.setProperty(property, value);
}

document.addEventListener('mousemove', e => {

    maxY = window.innerHeight;
    maxX = window.innerWidth;
    x = e.clientX;
    y = e.clientY;

    setStyles('--wdth', maxWidth * (x/maxX));
    setStyles('--wght', maxWeight * (y/maxY));

});

document.addEventListener('touchmove', e => {

    e.preventDefault();
    maxY = window.innerHeight;
    maxX = window.innerWidth;
    x = e.clientX;
    y = e.clientY;

    setStyles('--wdth', maxWidth * (x/maxX));
    setStyles('--wght', maxWeight * (y/maxY));

});
