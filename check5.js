
const memoryGameQuestions = [
  {
    q: "What's that one thing you always crave with your LIIT?",
    options: ["French Fries", "Honey Chilli Potato", "Nachos", "Pasta"],
    answer: 1,
    right: "Of course. Honey chilli potato. You and your LIIT have a very specific relationship. 😂",
    wrong: "Hmm. I'm disappointed. This one was supposed to be easy. 😏"
  },
  {
    q: "Which colour top were you wearing when we met the first time after the office party — in the office basement?",
    options: ["Black", "White", "Pink", "Blue"],
    answer: 2,
    right: "Pink. I remember. ❤️",
    wrong: "Nope. Think back to that office basement moment."
  },
  {
    q: "Tell me the colour I am obsessed with.",
    options: ["Navy Blue", "Black", "Grey", "White"],
    answer: 1,
    right: "Black. Obviously. 🖤",
    wrong: "You really should know this one by now. 😂"
  },
  {
    q: "Which animal did we see at RAHA when we were sitting near the pool?",
    options: ["Lizard", "Frog", "Squirrel", "Snake"],
    answer: 1,
    right: "The frog! 🐸 One tiny animal, one very specific memory.",
    wrong: "Nope. Think about that poolside moment at RAHA."
  },
  {
    q: "Which vodka bottle did we finish when we went to Themis the second time?",
    options: ["Absolut", "Grey Goose", "Smirnoff", "Belvedere"],
    answer: 0,
    right: "Absolut. 🍾 Apparently we had work to do.",
    wrong: "Wrong bottle. You were there! 😂"
  },
  {
    q: "Which perfume did you bring back for me from Europe?",
    options: ["Jaguar", "Armani", "Hugo Boss", "Davidoff"],
    answer: 0,
    right: "Jaguar. 🎁 You remembered me even while travelling.",
    wrong: "Nope. Think about that Europe gift."
  },
  {
    q: "Between you and me, who is more toxic?",
    options: [
      "You: “Me? I only react because you give me reasons to.” 😇",
      "Me: “Me? I only do it because you make it impossible to behave normally.” 😂"
    ],
    answer: -1,
    toxic: true
  }
];

let memoryGameIndex = 0;
let memoryGameScore = 0;
let memoryGameAnswered = false;

function renderMemoryGame(){
  const q = memoryGameQuestions[memoryGameIndex];
  const oldButton = document.getElementById("quizNextButton");
  if(oldButton) oldButton.remove();
  document.getElementById("quizProgress").textContent =
    "Question " + (memoryGameIndex + 1) + " of " + memoryGameQuestions.length;
  document.getElementById("quizNumber").textContent =
    String(memoryGameIndex + 1).padStart(2,"0");
  document.getElementById("quizQuestion").textContent = q.q;
  const options = document.getElementById("quizOptions");
  const feedback = document.getElementById("quizFeedback");
  feedback.innerHTML = "";
  options.innerHTML = "";
  memoryGameAnswered = false;

  q.options.forEach(function(text, i){
    const b=document.createElement("button");
    b.type="button";
    b.className="quiz-option";
    b.textContent=text;
    b.onclick=function(){answerMemoryGame(i);};
    options.appendChild(b);
  });
}

function answerMemoryGame(choice){
  if(memoryGameAnswered) return;
  memoryGameAnswered = true;
  const q=memoryGameQuestions[memoryGameIndex];
  const buttons=[...document.querySelectorAll("#quizOptions .quiz-option")];

  if(q.toxic){
    buttons.forEach(b=>b.disabled=true);
    document.getElementById("quizFeedback").innerHTML =
      "<strong>There is no answer. 😂</strong><br>" +
      "You: <em>“Me? I only react because you give me reasons to.”</em> 😇<br>" +
      "Me: <em>“Me? I only do it because you make it impossible to behave normally.”</em> 😂";
    showNextButton();
    return;
  }

  buttons.forEach((b,i)=>{
    b.disabled=true;
    if(i===q.answer) b.classList.add("correct");
    if(i===choice && i!==q.answer) b.classList.add("wrong");
  });

  if(choice===q.answer){
    memoryGameScore++;
    document.getElementById("quizFeedback").textContent=q.right;
  }else{
    document.getElementById("quizFeedback").textContent=q.wrong;
  }
  showNextButton();
}

function showNextButton(){
  const oldButton = document.getElementById("quizNextButton");
  if(oldButton) oldButton.remove();

  const card = document.getElementById("quizCard");
  const b=document.createElement("button");
  b.id="quizNextButton";
  b.type="button";
  b.className="quiz-next";
  b.textContent=memoryGameIndex===memoryGameQuestions.length-1 ? "See My Score" : "Next →";
  b.onclick=function(){
    if(memoryGameIndex===memoryGameQuestions.length-1){
      finishMemoryGame();
    }else{
      memoryGameIndex++;
      renderMemoryGame();
    }
  };
  card.appendChild(b);
}

function finishMemoryGame(){
  document.getElementById("quizCard").hidden=true;
  document.getElementById("quizProgress").hidden=true;
  const result=document.getElementById("quizResult");
  result.hidden=false;
  document.getElementById("quizScore").textContent=memoryGameScore + " / 6";

  let text="";
  if(memoryGameScore===6){
    text="Okay... you actually remember everything. ❤️";
  }else if(memoryGameScore>=4){
    text="Not bad. I'll allow it. 😏";
  }else if(memoryGameScore>=2){
    text="We clearly need another Goa trip. 😂";
  }else{
    text="Who are you and what have you done with my girlfriend? 😂";
  }
  document.getElementById("quizResultText").textContent=text;
}

function resetMemoryGame(){
  const oldButton = document.getElementById("quizNextButton");
  if(oldButton) oldButton.remove();
  memoryGameIndex=0;
  memoryGameScore=0;
  document.getElementById("quizCard").hidden=false;
  document.getElementById("quizProgress").hidden=false;
  document.getElementById("quizResult").hidden=true;
  renderMemoryGame();
}

document.addEventListener("DOMContentLoaded",function(){
  if(document.getElementById("quizQuestion")) renderMemoryGame();
});
