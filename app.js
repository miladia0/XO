let text= document.getElementById("pelayer-tex");
let reset = document.getElementById("reset-btn");
let box = Array.from( document.getElementsByClassName("box"));
let winc=getComputedStyle(document.body).getPropertyValue("--wining")
const O="O"
const X ="X"
let curentp=X;
let space =Array(9).fill(null);
const startgame=()=>{
    box.forEach(boxes=>boxes.addEventListener("click",boxclick))
}
function  boxclick(e)
{
const id= e.target.id
if(!space[id]){
    space[id]=curentp;
    e.target.innerText=curentp
if(playewon()!==false){
    text=`${curentp}borde`
    let wining=playewon();
    wining.map(boxes=>box[boxes].style.backgroundColor=winc)
 
    return
}
    curentp =curentp==X? O:X
}
}
const shartbord=[
    [0,1,2],
    [3,4,5,],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8],
]
function playewon(){
    for (const shartha of shartbord) {
[a,b,c]=shartha;
if(space[a]&&(space[a]==space[b]&&space[a]==space[c])){
    return[a,b,c]
}
        
    }
return false
}
reset.addEventListener("click",()=>{
   space.fill(null)
   box.forEach(boxes=>{
       boxes.innerText=""
       boxes.style.backgroundColor=""
   })
   text="دووز"
   curentp=X
})
startgame();