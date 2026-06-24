flashcards.js

```javascript
const flashcards = [

{
title:"Covalent Bond",
topic:"B1.1",
difficulty:"easy",
question:"What is a covalent bond?",
answer:"A covalent bond is formed when atoms share one or more pairs of electrons."
},

{
title:"Hydrolysis",
topic:"B1.1",
difficulty:"easy",
question:"What occurs during a hydrolysis reaction?",
answer:"Hydrolysis breaks polymers into monomers through the addition of water."
},

{
title:"Condensation",
topic:"B1.1",
difficulty:"easy",
question:"What occurs during a condensation reaction?",
answer:"Monomers join together while releasing water."
},

{
title:"Starch",
topic:"B1.1",
difficulty:"medium",
question:"What is starch?",
answer:"Starch is a storage polysaccharide in plants composed mainly of amylose and amylopectin."
},

{
title:"Glycogen",
topic:"B1.1",
difficulty:"medium",
question:"What is glycogen?",
answer:"Glycogen is the storage polysaccharide of animals."
},

{
title:"Cellulose",
topic:"B1.1",
difficulty:"medium",
question:"What is cellulose?",
answer:"Cellulose forms plant cell walls and consists of beta-glucose monomers."
},

{
title:"Triglycerides",
topic:"B1.1",
difficulty:"medium",
question:"What are triglycerides?",
answer:"Triglycerides consist of glycerol bonded to three fatty acids."
},

{
title:"Phospholipids",
topic:"B1.1",
difficulty:"medium",
question:"Why are phospholipids important?",
answer:"They form cell membranes due to their amphipathic properties."
},

{
title:"Steroids",
topic:"B1.1",
difficulty:"hard",
question:"What are steroids?",
answer:"Steroids are lipids with four fused carbon rings that function in signalling and membrane structure."
}

];

let currentCards = [...flashcards];
let currentIndex = 0;

const dnaHelix =
document.getElementById("dnaHelix");

const searchBar =
document.getElementById("searchBar");

const topicFilter =
document.getElementById("topicFilter");

const difficultyFilter =
document.getElementById("difficultyFilter");

const cardTitle =
document.getElementById("cardTitle");

const cardQuestion =
document.getElementById("cardQuestion");

const cardAnswer =
document.getElementById("cardAnswer");

const difficultyBadge =
document.getElementById("difficultyBadge");

const totalCards =
document.getElementById("totalCards");

const filteredCards =
document.getElementById("filteredCards");

const previousCard =
document.getElementById("previousCard");

const nextCard =
document.getElementById("nextCard");

const modal =
document.getElementById("flashcardModal");

const modalTitle =
document.getElementById("modalTitle");

const modalTopic =
document.getElementById("modalTopic");

const modalQuestion =
document.getElementById("modalQuestion");

const modalAnswer =
document.getElementById("modalAnswer");

const closeModal =
document.getElementById("closeModal");

function updateStats(){

totalCards.textContent =
flashcards.length;

filteredCards.textContent =
currentCards.length;

}

function updateStudyPanel(card){

cardTitle.textContent =
card.title;

cardQuestion.textContent =
card.question;

cardAnswer.textContent =
card.answer;

difficultyBadge.textContent =
card.difficulty;

}

function openModal(card){

modal.style.display = "flex";

modalTitle.textContent =
card.title;

modalTopic.textContent =
card.topic;

modalQuestion.textContent =
card.question;

modalAnswer.textContent =
card.answer;

}

function createDNA(){

dnaHelix.innerHTML = "";

const strand =
document.createElement("div");

strand.className =
"dna-strand";

dnaHelix.appendChild(strand);

currentCards.forEach((card,index)=>{

const node =
document.createElement("div");

node.className =
"dna-node";

if(index % 2 === 0){

node.classList.add("left-node");

}else{

node.classList.add("right-node");

}

node.style.top =
`${index * 95}px`;

node.textContent =
card.title;

node.addEventListener("click",()=>{

currentIndex = index;

updateStudyPanel(card);

openModal(card);

});

dnaHelix.appendChild(node);

});

}

function filterCards(){

const search =
searchBar.value
.toLowerCase();

const topic =
topicFilter.value;

const difficulty =
difficultyFilter.value;

currentCards =
flashcards.filter(card=>{

const matchSearch =

card.title
.toLowerCase()
.includes(search)

||

card.question
.toLowerCase()
.includes(search);

const matchTopic =

topic === "all"

||

card.topic === topic;

const matchDifficulty =

difficulty === "all"

||

card.difficulty === difficulty;

return (
matchSearch
&&
matchTopic
&&
matchDifficulty
);

});

createDNA();
updateStats();

}

searchBar.addEventListener(
"input",
filterCards
);

topicFilter.addEventListener(
"change",
filterCards
);

difficultyFilter.addEventListener(
"change",
filterCards
);

previousCard.addEventListener(
"click",
()=>{

if(currentCards.length===0) return;

currentIndex--;

if(currentIndex < 0){

currentIndex =
currentCards.length-1;

}

updateStudyPanel(
currentCards[currentIndex]
);

}
);

nextCard.addEventListener(
"click",
()=>{

if(currentCards.length===0) return;

currentIndex++;

if(
currentIndex >=
currentCards.length
){

currentIndex = 0;

}

updateStudyPanel(
currentCards[currentIndex]
);

}
);

closeModal.addEventListener(
"click",
()=>{

modal.style.display =
"none";

}
);

window.addEventListener(
"click",
(e)=>{

if(e.target === modal){

modal.style.display =
"none";

}

}
);

function createParticles(){

const container =
document.querySelector(
".particles"
);

if(!container) return;

for(let i=0;i<80;i++){

const particle =
document.createElement("span");

particle.style.position =
"absolute";

particle.style.width =
"4px";

particle.style.height =
"4px";

particle.style.borderRadius =
"50%";

particle.style.background =
"#57d7ff";

particle.style.left =
Math.random()*100+"%";

particle.style.top =
Math.random()*100+"%";

particle.style.opacity =
Math.random();

particle.style.boxShadow =
"0 0 10px #57d7ff";

container.appendChild(
particle
);

}

}

createDNA();

updateStats();

createParticles();

updateStudyPanel(
flashcards[0]
);
```
