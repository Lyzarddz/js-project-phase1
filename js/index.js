const baseUrl = 'http://localhost:3000'; // for Json server
let cards = [];


// On Load pop up instructions
const popUp = document.querySelector('.popup');
const close = document.querySelector('.close');


close.addEventListener("click", () => {
    popUp.style.display = "none";
})

//Populates cards and popUp
document.addEventListener('DOMContentLoaded', () => {
    fetchCards();
    popUp.style.display = "block";
})


//Starts Game
const startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", () => {
    cardGenerator();
    startTimer();
});

//Timer
let second = 0,
    minute = 0;
let timer = document.querySelector(".timer");
let interval;

const startTimer = () => {
    interval = setInterval(() => {
        timer.textContent = minute + "mins " + second + "secs";
        second++;

        if (second === 60) {
            minute++;
            second = 0;
        }

        //condition for losing
        if (minute === 1 && second === 2) {
            alert("You Lost, Try Again!");
            reloadCards();
        }
    }, 1000);

}


//To Restart Game
const resetBtn = document.getElementById("restart-btn");
resetBtn.addEventListener("click", refreshPage);


function refreshPage() {
    if (confirm("Are you sure you want to restart the game?")) {
        reloadCards();
    }
}

//Pauses Game
const pauseBtn = document.getElementById("pause-btn");
pauseBtn.addEventListener("click", pauseGame);

function pauseGame() {
    alert("Press Ok to Resume Game");
}


//Selects Elements
const section = document.querySelector("section");
const matchesCount = document.querySelector("span");


let matches = 0;

// Links matches to matchCount 
matchesCount.textContent = matches;


const fetchCards = () => {
    fetch(baseUrl + "/cards")
        .then(resp => resp.json())
        .then(data => {
            cards = data;
        })

}




//Need to Randomize cards
const randomize = () => {
    const cardData = cards;
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
}

//Generates Cards (shuffled)
const cardGenerator = () => {
    const cardData = randomize(); //sets card data to randomize

    //Creates HTML
    cardData.forEach(({ name, imageSrc }) => { //Destructed
        const card = document.createElement("div");
        const face = document.createElement("img");
        const back = document.createElement("div")

        card.classList = 'card';
        face.classList = 'face';
        back.classList = 'back';

        //Attaches info to cards
        face.src = imageSrc; //accessing img property via item
        card.setAttribute('name', name); //attaches image name



        //Attaches cards to section
        section.appendChild(card);
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
    clickedCard.classList.add('flipped');

    const flippedCards = document.querySelectorAll('.flipped');
    const toggleCard = document.querySelectorAll('.toggleCard');


    if (flippedCards.length === 2) {
        if (flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')) {
            console.log('match');
            flippedCards.forEach(card => { //flips cards back if wrong, and keeps up if correct
                card.classList.remove('flipped');
                card.style.pointerEvents = 'none';
            });
            matches++;
            matchesCount.textContent = matches; //increments matches when correct

        } else {
            console.log('wrong');
            flippedCards.forEach(card => {
                card.classList.remove('flipped'); //removes flipped after second card is selected
                setTimeout(() => card.classList.remove("toggleCard"), 1100);
            });

        }
    }


    // Condition for winning 
    if (toggleCard.length === 16) {
        alert("Congrats, You won!");
        reloadCards();
    }
};




// To reload game
const reloadCards = () => {
    let cardData = randomize();
    let face = document.querySelectorAll(".face");
    let cards = document.querySelectorAll(".card");

    cardData.forEach(({ name, imageSrc }, index) => {
        cards[index].classList.remove('toggleCard');

        cards[index].style.pointerEvents = "all";
        face[index].src = imageSrc;
        cards[index].setAttribute('name', name);

    });
    second = 0
    minute = 0;


    matches = 0;
    matchesCount.textContent = matches;
};