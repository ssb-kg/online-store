let stroca1LeftButtom1 = document.getElementById('stroca1-left-buttom-1');
let stroca1LeftButtom2 = document.getElementById('stroca1-left-buttom-2');
let stroca1IeftTextBlock = document.getElementById('stroca1-left-text-block');
let menuEnd = document.getElementById('menu-end-menu');
let menuu = document.getElementById('menu');
let back = document.querySelector('.back');
let str4 = document.getElementById('stroca4')


 function open1(){
     stroca1IeftTextBlock.classList.toggle('active');
 }


let rows2 = document.getElementById('rows2');
let rows1 = document.getElementById('rows1');
let rows11 = document.getElementById('rows-1');
let rows3 = document.getElementById('rows3');
let rows4 = document.getElementById('rows4');
let rows5 = document.getElementById('rows5');

function com1(){
    rows11.style.display = "flex";
    rows1.style.display = "flex";
    rows3.style.opacity = "0";
    rows4.style.opacity = "0";
    rows5.style.opacity = "0";
    rows2.style.opacity = "0";
    str4.style.marginTop = "0px";
}

function com2(){
    rows11.style.display = "none";
    rows1.style.display = "none";
    rows3.style.opacity = "0";
    rows4.style.opacity = "0";
    rows5.style.opacity = "0";
    rows2.style.opacity="1";
    rows2.style.width = "100%";
    str4.style.marginTop = "500px";
}
function com3(){
    rows11.style.display = "none";
    rows1.style.display = "none";
    rows3.style.opacity = "1";
    rows4.style.opacity = "0";
    rows5.style.opacity = "0";
    rows2.style.opacity = "0";
    str4.style.marginTop = "500px";
}
function com4(){
    rows11.style.display = "none";
    rows1.style.display = "none";
    rows3.style.opacity = "0";
    rows4.style.opacity = "1";
    rows5.style.opacity = "0";
    rows2.style.opacity = "0";
    str4.style.marginTop = "500px";
}
function com5(){
    rows11.style.display = "none";
    rows1.style.display = "none";
    rows3.style.opacity = "0";
    rows4.style.opacity = "0";
    rows5.style.opacity = "1";
    rows2.style.opacity = "0";
    str4.style.marginTop = "500px";
}

function menuOpen() {
    menuu.classList.toggle('active');
    back.classList.toggle('active');
    document.body.style.overflow = 'hidden';
}

function mennuClose() {
    menuu.classList.toggle('active');
    back.classList.toggle('active');
    document.body.style.overflow = 'inherit';

}

