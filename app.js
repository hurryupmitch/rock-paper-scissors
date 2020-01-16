const game = ()=> {
    let pScore = 0; //player score
    let cScore = 0; //computer score
    let gCount = 0; //game (match) count

//start the game//
    const startGame = ()=> {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };
//Play match//
const playMatch = () => {
    const options = document.querySelectorAll('.options Button');
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    //computer options//
    const computerOptions = ['rock', 'paper', 'scissors'];

    options.forEach(option => {
        option.addEventListener('click', function() {
            //computer choice//
            const computerNumber = Math.floor(Math.random() * 3);
            const computerChoice = computerOptions[computerNumber];
            
            //this is where we call compareHands//
            compareHands(this.textContent, computerChoice);

            //update images//
            playerHand.src = `./assets/${this.textContent}.png`;
            computerHand.src = `./assets/${computerChoice}.png`;
        });
    });    
};

const updateScore = () => {
    const playerScore = document.querySelector('.player-score p');
    const computerScore = document.querySelector('.computer-score p');
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
};
const compareHands = (playerChoice, computerChoice) => {
    //update text//
    const winner = document.querySelector('.winner');
    //check for tie//
    if(playerChoice === computerChoice) {
        winner.textContent = 'It is a tie!';
        gCount++;
        return checkGame();
    }
    //check for rock//
    if(playerChoice === 'rock'){
        if(computerChoice === 'scissors'){
            winner.textContent = 'Player Wins!'
            pScore++;
            gCount++;
            updateScore();
            return checkGame();
        } else {
            winner.textContent = 'Computer Wins!';
            cScore++;
            gCount++;
            updateScore();
            return checkGame();
        }
    }
        //check for paper//
        if(playerChoice === 'paper'){
        if(computerChoice === 'scissors'){
            winner.textContent = 'Computer Wins!'
            cScore++;
            gCount++;
            updateScore();
            return checkGame();
        } else {
            winner.textContent = 'Player Wins!';
            pScore++;
            gCount++;
            updateScore();
            return checkGame();
        }
    }
        //check for scissors//
        if(playerChoice === 'scissors'){
        if(computerChoice === 'rock'){
            winner.textContent = 'Computer Wins!'
            cScore++;
            gCount++;
            updateScore();
            return checkGame();
        } else {
            winner.textContent = 'Player Wins!';
            pScore++;
            gCount++;
            updateScore();
            return checkGame();
        }
    }
}
//alert and reset after a score gets to 5//
const endGame = (pScore,cScore) => {
    if(pScore<cScore) alert('You Lose the Game! \n\nYou: '+ pScore + '\nComputer: '+ cScore + '\nGames in this Match: ' + gCount + '\n\n*click to restart the game*');
    else alert('You Win the Game!! \n\nYou: '+ pScore + '\nComputer: '+ cScore + '\nGames in this Match: ' + gCount + '\n\n*click to restart the game*');
    location.reload();
    return;
}
const checkGame = () => {
    if(pScore===5 || cScore===5) endGame(pScore,cScore);
}

//Call all the inner functions//
startGame();
playMatch();
}

//start the whole big function//
game();