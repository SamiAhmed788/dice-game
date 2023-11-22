let player1Turn = true;

// player 1 
let currentScorePlayer1 = document.querySelector('#currentScore1');
let totalScorePlayer1 = document.querySelector('#totalScore1');

// player 2 
let currentScorePlayer2 = document.querySelector('#currentScore2');
let totalScorePlayer2 = document.querySelector('#totalScore2');



// how to play modal 
function okHandler() {
    let myModal2 = document.querySelector('.myModal2')
    myModal2.style.display = "none" 
}


// players name modal
let player1NameInput = document.querySelector('#player1NameInput');
let player2NameInput = document.querySelector('#player2NameInput');
let SubmitBtn = document.querySelector('#SubmitBtn');
let player1Name = document.querySelector('.player1Name');
let player2Name = document.querySelector('.player2Name');

function SubmitHandler() {
    if (player1NameInput.value === '' || player2NameInput.value === '') {
        alert("Firstly write the name of players");
    } else {
        player1Name.textContent = player1NameInput.value;
        player2Name.textContent = player2NameInput.value;
        myModal.style.display = "none";
    }
}


// rolling dice button
let diceImage = document.querySelector('.diceImage');
let DiceRoll = document.querySelector('#DiceRoll');
DiceRoll.addEventListener("click" , () => {
    diceImage.style.transform += "rotate(360deg)"
    diceImage.style.transition += "0.1s"
    if (totalScorePlayer1.textContent < 100 && totalScorePlayer2.textContent < 100) {
        let randomNumber = Number(Math.ceil(Math.random() * 6))
        console.log(randomNumber);
        diceImage.src = `./assets/${randomNumber}.png`
        
        if (randomNumber == 1) {
            const audio = document.createElement('audio')
            audio.setAttribute('src', 'Milena Wrong Answer.mp3');
            audio.play()
            alert(`It's 1 turn change`);
            if (player1Turn) {
                player1Turn = false;
            } else {
                player1Turn = true;
            }
            currentScorePlayer1.textContent = 0;
            currentScorePlayer2.textContent = 0;
          
        } else {
            console.log(randomNumber);
            if (player1Turn) {
                currentScorePlayer1.textContent = Number(currentScorePlayer1.textContent) + randomNumber;
            } else {
                currentScorePlayer2.textContent = Number(currentScorePlayer2.textContent) + randomNumber;
            }
        }
    }
})


// hold button
let hold = document.querySelector('#hold');
hold.addEventListener("click", () => {
    if (totalScorePlayer1.textContent < 100 && totalScorePlayer2.textContent < 100) {
        if (player1Turn) {
            totalScorePlayer1.textContent = Number(totalScorePlayer1.textContent) + Number(currentScorePlayer1.textContent);
            currentScorePlayer1.textContent = 0;
            player1Turn = false;
        } else {
            totalScorePlayer2.textContent = Number(totalScorePlayer2.textContent) + Number(currentScorePlayer2.textContent);
            currentScorePlayer2.textContent = 0;
            player1Turn = true;
        }
        
        if (Number(totalScorePlayer1.textContent) >= 100 || Number(totalScorePlayer2.textContent) >= 100) {
            if (totalScorePlayer1.textContent > totalScorePlayer2.textContent) {
                
                myModal.innerHTML = `            <div class="row Winner"               >
                <div  class="col-12 d-flex justify-content-end align-items-center">
                <img id="crossBtn" onclick="crossHandler()"  width="30rem" class="" src="./assets/cross.png" alt="">
                </div>
                </div>
                <h1>${player2NameInput.value} won the game</h1>`;
                
            } else {
                myModal.innerHTML = `<div class="row">
                <div  class="col-12 d-flex justify-content-end align-items-center">
                <img id="crossBtn"  onclick="crossHandler()" width="30rem" class="" src="./assets/cross.png" alt="">
                </div>
                </div>
                <h1>${player1NameInput.value} won the game</h1>`;
                
            }
            myModal.style.display = 'block';
            const audio = document.createElement('audio')
            audio.setAttribute('src', 'crowd-cheer-ii-6263.mp3');
            audio.play()
        } else {
            console.log("game is going on");
        }
    }
});
    

// new game button
let newGame = document.querySelector('#newGame');
newGame.addEventListener("click", () => {
    location.reload()
})


// win the game modal button 
let myModal = document.querySelector('.myModal');
let crossBtn = document.querySelector('#crossBtn');
let buttons = document.querySelector('.centerBtns');

function crossHandler() {
    myModal.style.display = 'none';
}ccc