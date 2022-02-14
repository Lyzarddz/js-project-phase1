
//Selects Elements
const matchSection = document.querySelector("section");
const matchesCount = document.querySelector("span");

const matches = 0;


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
    cardData.forEach(item => {
      const card = document.createElement("div");
        const face = document.createElement("img");
        const back = document.createElement("img");
        
        card.classList = 'card';
        face.classList = 'face';
        back.classList = 'back';

        //Attaches info to cards
        face.src = item.imgSrc;
        back.src = item.imgSrc;

        //Attaches cards to section
        matchSection.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);
    });
};
cardGenerator();

