$(document).ready(function(){
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
    elemekElerese4();
    Elemekformazasa1();
    Esemenykezeles1();
    Esemenykezeles2();
    Esemenykezeles4();


})
    
const listam=[]
function elemekElerese1() {
    let cim=$('#f1')
    console.log(cim)
    console.log(cim.html())
}
function elemekElerese2() {
    let div=$('#ide')
    div.html('<p>Jó reggelt!</p>');
    console.log(div)
}
function elemekElerese3() {
    let div=$('.ide')
    div.html('<p>Jó reggelt!</p>');
    console.log(div.html())
}
function elemekElerese4() {
    let div=$('.lista')
    
    let min=10
    let max =30
    let random=0
    let text=""
    for (let index = 0; index < 5; index++) {
        random=Math.floor(Math.random()*(max-min+1))+min
        listam.push(random)
        text+=(`${listam[index]},`)
        div.html(text)
    }
    
    console.log(listam)
    
}
function Elemekformazasa1(){
    let div=$('.lista')
    div.addClass("formazott");

}
function Esemenykezeles1(){
    let div=$('.lista')
    div.click(belerak);

}
function belerak() {
    let div=document.querySelector('.lista')
    let divTartalom=div.innerHTML
    let listadiv=document.querySelector('.kattintasutan')
    listadiv.innerHTML=divTartalom
   
    console.log(listadiv)
}
function Esemenykezeles2(){
    let div=document.querySelector('.feladat')
    div.innerHTML+="<button>OK</button>";
    console.log(div)
    let elem=document.querySelector('.feladat button')
    console.log(elem)
    elem.addEventListener('click',hozzaad);

}
function hozzaad(){
    let divELEM=document.querySelector('.feladat')
    console.log(divELEM)
    divELEM.innerHTML+=`<div><img src="kepek/heble.jpg" alt="kep"></div>`
    Esemenykezeles3();
    
    
}
function Esemenykezeles3(){
    let elem=document.querySelector('.feladat img')
    elem.addEventListener('mouseover',valtozas1)
    elem.addEventListener('mouseout',valtozas2)

}
function valtozas1(){
    let divelem=document.querySelector('.feladat img')
    divelem.classList.add("imgformaz");
}
 function valtozas2() {
    let divelem=document.querySelector('.feladat img')
    divelem.classList.remove("imgformaz");
 }
 function Esemenykezeles4() {
    let divElemek=document.querySelectorAll('.tarolo .elem')
    for (let index = 0; index < divElemek.length; index++) {
            divElemek[index].addEventListener('click',katt)        
    }
 }
 function katt(event) {
    const erdmenyElem=document.querySelector('.eredmeny')
    console.log(erdmenyElem)
    let kattintottEelem=event.target
    erdmenyElem.innerHTML=kattintottEelem.innerHTML
 }