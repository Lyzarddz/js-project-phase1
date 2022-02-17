
//Selects Elements
const matchSection = document.querySelector("section");
const matchesCount = document.querySelector("span");


let matches = 0;

// Links matches to matchCount 
matchesCount.textContent = matches;


// Gets Data 
const getData = () => [      // without curly brace, it automatically returns  
{imgSrc: "images/kit.jpeg", name: "Kit"},
{imgSrc: "images/Pixel.jpeg", name: "Pixel"},
{imgSrc: "images/Salvador.jpeg", name: "Salvador"},
{imgSrc: "images/Tongo.jpeg", name: "Tongo"},
{imgSrc: "images/Voltaire 8.jpeg", name: "Voltaire"},
{imgSrc: "images/Zion.jpeg", name: "Zion"},
{imgSrc: "images/Yadda.jpg", name: "Yadda"},
{imgSrc: "images/Jenny.jpg", name: "Jenny"},
{imgSrc: "images/kit.jpeg", name: "Kit"},
{imgSrc: "images/Pixel.jpeg", name: "Pixel"},
{imgSrc: "images/Salvador.jpeg", name: "Salvador"},
{imgSrc: "images/Tongo.jpeg", name: "Tongo"},
{imgSrc: "images/Voltaire 8.jpeg", name: "Voltaire"},
{imgSrc: "images/Zion.jpeg", name: "Zion"},
{imgSrc: "images/Yadda.jpg", name: "Yadda"},
{imgSrc: "images/Jenny.jpg", name: "Jenny"}
];

//Need to Randomize cards
const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
}

//Generates Cards (shuffled)
const cardGenerator = () => {
    const cardData = randomize();           //sets card data to randomize

    //Creates HTML
    cardData.forEach((item) => {
      const card = document.createElement("div");
      const face = document.createElement("img");
      const back = document.createElement("div")
        
        card.classList = 'card';
        face.classList = 'face';
        back.classList = 'back';

        //Attaches info to cards
        face.src = item.imgSrc;       //accessing img property via item
        card.setAttribute('name', item.name);         //attaches image name



        //Attaches cards to section
        matchSection.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        card.addEventListener('click', (e) => {
            card.classList.toggle("toggleCard");
            checkCards(e);
        })
    });
};


//Checks card for matches
const checkCards = (e) => {
    const clickedCard = e.target;
    clickedCard.classList.add('flipped');     // has to be put before grabbing elements 
    const flippedCards = document.querySelectorAll('.flipped');
    

    if(flippedCards.length === 2){
        if(flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')){
            console.log('match');
            flippedCards.forEach(card => {         //flips cards back if wrong, and keeps up
                card.classList.remove('flipped');
                card.style.pointerEvents = 'none';
            });
            matches++;                               //increments matches when correct
            matchesCount.textContent = matches;
        } else {
            console.log('wrong');
            flippedCards.forEach(card => {
                
            card.classList.remove('flipped');      //removes flipped after second card is selected
            setTimeout(() => card.classList.remove("toggleCard"), 1100);
            })
        }
    }
};


// On Load pop up instructions




//Timer

let second = 0, minute = 0;
let timer = document.querySelector(".timer");
let interval;

const startTimer = () => {
        interval = setInterval(() => {
        timer.textContent = minute + "mins " + second + "secs";
        second ++;

        if (second === 60){
            minute++;
            second = 0;
        }

        if (minute === 60){
            hour++;
            minute = 0;
        }
    }, 1000);
}

//Starts Game

const startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", () => {
    cardGenerator();
    startTimer();
});

//To Restart Game

    const resetBtn = document.getElementById("restart-btn");
    resetBtn.addEventListener("click",refreshPage);


    function refreshPage() {
        if (confirm("Are you sure you want to restart the game?")) {
            location.reload();                                  //reloads current URL
        }
    }

//Pauses Game
const pauseBtn = document.getElementById("pause-btn");
pauseBtn.addEventListener("click", pauseGame);

function pauseGame() {
    alert("Press Ok to Resume Game");
}





  


  