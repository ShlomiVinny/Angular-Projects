let poop: Array<string>;
let isShakharSmart: boolean;
let shakharLikes: any;
let shakharAge: number;
let randomNum: number;
let randomNum2: number;


poop = [];
poop.push('hello');
(poop.length<1) ? poop.push('hello again') : poop.push('no hello');
console.log(poop);


function WAT() : void{
   let randomNum = Math.random()*100;
   let randomNum2 = Math.random()*100;
   

   console.log(randomNum);
   
   document.getElementById('shakhar').style.left = randomNum+'vw';
   document.getElementById('shakhar').style.top = randomNum2+'vh';
}

function GlattKosher() : void {
   document.getElementById('shakhar').style.left = "0";
   document.getElementById('shakhar').style.top = "0";
}

function Centralize() : void{
   
   let elemRect = document.getElementById('shakhar').getBoundingClientRect();
   let bodyRect = document.body.getBoundingClientRect();
   let posX = (bodyRect.width / 2) - (elemRect.width / 2);
   let posY = (bodyRect.height / 2) - (elemRect.height / 2);
   console.log("Position: " + posX, posY);
   
   document.getElementById('shakhar').style.left = posX + "px";
   document.getElementById('shakhar').style.top = posY + "px";
}

function setColor() : void {
   let color = document.getElementById('color').value;
   console.dir(color);
   document.getElementById('shakhar').style.color = color;
}

