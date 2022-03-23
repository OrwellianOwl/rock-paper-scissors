let userChoice;
let computerChoice;
let computerChoices = ["rock", "paper", "scissor"];

const click = document
  .querySelector("#choiceWrapper")
  .addEventListener("click", (choice) => {
    userChoice = choice.target.id;
    document.querySelector(
      "#userChoice"
    ).innerHTML = `User Choice: ${userChoice}`;
    compChoice();
    result();
  });

const compChoice = () => {
  let choiceNumber = Math.floor(Math.random() * 3);
  computerChoice = computerChoices[choiceNumber];
  document.querySelector(
    "#computerChoice"
  ).innerHTML = `Computer Choice: ${computerChoice}`;
};

const result = () => {
  if (userChoice === computerChoice) {
    document.querySelector("#result").innerHTML = `Result is a Draw.`;
  } else if (userChoice === "rock" && computerChoice === "scissor") {
    enable();
    confetti({
      particleCount: 550,
    });
    setTimeout(() => {
      disable();
      confetti.reset();
    }, 2000);
  } else if (userChoice === "paper" && computerChoice === "rock") {
    document.querySelector("#result").innerHTML = `Player wins!!!`;
    enable();
    confetti({
      particleCount: 550,
    });
    setTimeout(() => {
      disable();
      confetti.reset();
    }, 2000);
  } else if (userChoice === "scissor" && computerChoice === "paper") {
    document.querySelector("#result").innerHTML = `Player wins!!!`;
    enable();
    confetti({
      particleCount: 550,
    });
    setTimeout(() => {
      disable();
      confetti.reset();
    }, 2000);
  } else {
    document.querySelector("#result").innerHTML = `Computer wins!!!`;
  }
};

const disable = () => {
  document.querySelector("#rock").disabled = false;
  document.querySelector("#paper").disabled = false;
  document.querySelector("#scissor").disabled = false;
}

const enable = () => {
  document.querySelector("#rock").disabled = true;
  document.querySelector("#paper").disabled = true;
  document.querySelector("#scissor").disabled = true;
}