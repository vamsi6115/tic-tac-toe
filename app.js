let boxes = document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset-btn");
let newgame=document.querySelector(".newgame");
let msg =document.querySelector(".msg");
let winner=document.querySelector("#winner");
let turno = true;
let winpattern =[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8],];
let count=0;

let reset = () => {
    turno=true;
    enableboxes();
    msg.classList.add("hide")

}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        
        if(turno){
        box.innerText ="o";
        
        turno=false;
        }
        else{
            box.innerText="x";
            
            turno=true;
            
        }
       box.disabled = true;
       count++;
       let iswinner=checkwinner();
        if(count===9 && !iswinner){
           gamedraw();
        }
    });


});
let gamedraw= () => {
    winner.innerText="game is draw.";
    msg.classList.remove("hide");
    disableboxes();

}
let enableboxes =() =>{
    for( let box of boxes){
        box.disabled =false;
        box.innerText="";
    }
};
let disableboxes =() =>{
    for( let box of boxes){
        box.disabled =true;
    }
};
let showwinner = (eiw) =>{
    winner.innerText=`congartulation winner is ${eiw}`;
    msg.classList.remove("hide");
    disableboxes();
    
};   
const checkwinner = () => {
    for(win of winpattern){
let pos1=boxes[win[0]].innerText;
 let pos2=boxes[win[1]].innerText;
let pos3=boxes[win[2]].innerText;
if(pos1 != "" && pos2 != "" && pos3 != ""){
    if(pos1===pos2 && pos2 ===pos3){
        showwinner(pos1);
        return true;
    }

    }
    }
};
 
resetbtn.addEventListener("click",reset);

newgame.addEventListener("click",reset);