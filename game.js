let boxes=document.querySelectorAll(".box");
let rbtn=document.querySelector("#reset-btn");
let msgcon=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let newbtn=document.querySelector("#new-btn");
var count=0;
const winpatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8], 
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
let turn0=true;//player0,playerX
boxes.forEach((box) => {
    box.addEventListener("click", ()=> {
        // console.log("button was clicked");
        
        if(turn0){   //player0
            box.innerText="0"
            turn0=false;
          count++;
        }
        else{     //playerX
            box.innerText="X"
            box.style.color="black";
            turn0=true;
            count++;
        }
        box.disabled=true;
        checkwinner();
        if(count==9){
          gamedraw();
        }
    })
});
const checkwinner=()=>{
  for(let pattern of winpatterns ){
     let pos1val = boxes[pattern[0]].innerText;
     let pos2val = boxes[pattern[1]].innerText;
     let pos3val = boxes[pattern[2]].innerText;

     if(pos1val != "" && pos2val != "" && pos3val != ""){
       if(pos1val===pos2val && pos2val===pos3val){
           // console.log("winner",pos1val);
           showwinner(pos1val);
       }
     }
  }
}
const showwinner=(winner)=>{
  msgcon.classList.remove("hide");
  msg.innerText=`HEHE,The winner is ${winner}`;
  msg.style.fontSize="40px";
  msg.style.color="black";
  disablebtn();
  }
  const gamedraw=()=>{
    msgcon.classList.remove("hide");
    msg.innerText=`Oops,The game has draw.`;
    msg.style.fontSize="40px";
    msg.style.color="black";
    disablebtn();
    }

const disablebtn=()=>{
  for(let box of boxes){
    box.disabled=true;
  }
}
  const enablebtn=()=>{
    for(let box of boxes){
      box.disabled=false;
      box.innerText="";
    }
}
const newgame=()=>{
  turn0=true;
  enablebtn();
  msgcon.classList.add("hide");
 }
 newbtn.addEventListener("click",newgame);
 rbtn.addEventListener("click",newgame);

