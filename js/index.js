 /** Global Variables */


/** Node Retrieval */

const mainDiv = () => document.getElementById("main");
const startBtn = () => document.getElementById("start-btn")
const restartBtn = () => document.getElementById("restart-btn");

 
 /*Event Listeners*/

 const startBtnClick = () => {
      startBtn.addEventListener("click", )
 } 


 /** Event Handlers */ 

const onLoad  = () => {
    const h1 = document.createElement("h1");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");

    console.log(p);

    h1.className = "center-align";
    p.className = "left-align";
    

    h1.innerText = "Matches: ";
    p.innerText = "Instructions on how to play go here";

    mainDiv().appendChild(h1);
    mainDiv().appendChild(p);
}

onLoad();

 /** Start Up */

 document.addEventListener("DOMCOntentLoaded", ()=> {
     
    
 });
