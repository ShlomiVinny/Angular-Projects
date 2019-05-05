var poop;
var isShakharSmart;
var shakharLikes;
var shakharAge;
var randomNum;
var randomNum2;
poop = [];
poop.push('hello');
(poop.length < 1) ? poop.push('hello again') : poop.push('no hello');
console.log(poop);
function WAT() {
    var randomNum = Math.random() * 100;
    var randomNum2 = Math.random() * 100;
    console.log(randomNum);
    document.getElementById('shakhar').style.left = randomNum + 'vw';
    document.getElementById('shakhar').style.top = randomNum2 + 'vh';
}
function GlattKosher() {
    document.getElementById('shakhar').style.left = "0";
    document.getElementById('shakhar').style.top = "0";
}
function Centralize() {
    var elemRect = document.getElementById('shakhar').getBoundingClientRect();
    var bodyRect = document.body.getBoundingClientRect();
    var posX = (bodyRect.width / 2) - (elemRect.width / 2);
    var posY = (bodyRect.height / 2) - (elemRect.height / 2);
    console.log("Position: " + posX, posY);
    document.getElementById('shakhar').style.left = posX + "px";
    document.getElementById('shakhar').style.top = posY + "px";
}
function setColor() {
    var color = document.getElementById('color').value;
    console.dir(color);
    document.getElementById('shakhar').style.color = color;
}
