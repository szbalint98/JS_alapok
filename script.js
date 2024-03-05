window.addEventListener("load", function () {
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
    elemekElerese4();
    Elemekformazasa1();
});

function elemekElerese1() {
    let cim=document.getElementById('f1')
    cim=cim.innerHTML;
    console.log(cim)
}
function elemekElerese2() {
    let div=document.getElementById('ide')
    div.innerHTML+='<p>Jó reggelt!</p>';
    console.log(div)
}
function elemekElerese3() {
    let div=document.querySelector('.ide')
    div.innerHTML+='<p>Jó reggelt!</p>';
    console.log(div)
}
function elemekElerese4() {
    let div=document.querySelector('.lista')
    const listam=[]
    let min=10
    let max =30
    let random=0
    for (let index = 0; index < 5; index++) {
        random=Math.floor(Math.random()*(max-min+1))+min
        listam.push(random)
        div.innerHTML+=(`${listam[index]},`)
    }
    div.innerHTML+=(listam[0])
    console.log(listam)
    console.log(listam)
}
function Elemekformazasa1(){
    let div=document.querySelector('.lista')
    div.classList.add("formazott");

}
