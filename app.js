let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;
let buttons=["red","sea","orange","green"];


document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started")
        started=true;
        Gamestarted();
        
    }
})

function buttonflash(di){
    di.classList.add("flash");
    setTimeout(() => {
        di.classList.remove("flash");
    }, 250);
    
}
//user click response
function Userflash(d1){
    d1.classList.add("userflash");
    setTimeout(() => {
        d1.classList.remove("userflash");
    }, 250);
}
//game start
let para=document.querySelector("h2");
function Gamestarted(){
    userSeq=[];
    level++;
    para.innerHTML=`Level ${level}`;

    let rIndex=Math.floor(Math.random()*4);
    let rcolor=buttons[rIndex];
    console.log(rcolor);
    gameSeq.push(rcolor);// game sequence
    let rdiv=document.querySelector(`.${rcolor}`);
    buttonflash(rdiv);
}

function checkans(index){

    if(userSeq[index]==gameSeq[index]){
     if(gameSeq.length==userSeq.length){
         setTimeout(Gamestarted,250);
    }
    }
    else{
     para.innerHTML=`Game Over! Your score is ${level-1}<br>Press any key to Restart`;
     document.querySelector("body").style.backgroundColor="red";
     setTimeout(() => {
        document.querySelector("body").style.backgroundColor="white";
     }, 150);
     
     reset();
    }

}
function buttonPress(){
    let d1=this;
    console.log(this);
    let userColor=d1.getAttribute("id");
    userSeq.push(userColor);// user sequence
    Userflash(d1);//flashing of clicked buttons with green color
    checkans(userSeq.length-1);
}
//user click
let allbuttons=document.querySelectorAll(".box-color");
for(dbba of allbuttons){
    dbba.addEventListener("click",buttonPress);
}
function reset(){
    gameSeq=[];
    userSeq=[];
    level=0;
    started=false;
    document.addEventListener("keypress",function(){
        if(started==false){
            console.log("game started")
            started=true;
            Gamestarted();
            
        }
    })
    
}
