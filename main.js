const score = document.querySelector('.score');
const selected = document.querySelector('.selected');
const winMsg = document.querySelector('.winMsg');
const btns = document.querySelectorAll('.btn');

// ARRAY FOR RANDOM COMP PICK
let arr = ['Rock', 'Paper', 'Scissors'];

let countC = 0;
let countP = 0;

btns.forEach(btn => {
    btn.addEventListener('click', playGame);
});

function playGame(e) {
    //RANDOM COMPUTER
    let random = Math.floor(Math.random() * arr.length);
    let computer = arr[random];
    //PLAYER CHOOSE
    let player = e.target.textContent;
    console.log('Player:', e.target.textContent)
    console.log('Computer:', computer);

    // CHECK WINNER LOGIC
    function checkWin() {

        if (player === computer) {
            return draw();
        }

        if (player === "Rock") {
            if (computer === "Paper") {
                return cWin();
            } else {
                return pWin();
            };
        }

        if (player === "Paper") {
            if (computer === "Scissors") {
                return cWin();
            } else {
                return pWin();
            }
        }

        if (player === "Scissors") {
            if (computer === "Rock") {
                return cWin();
            } else {
                return pWin();
            }
        }
    };

    checkWin();

    // DRAW
    function draw() {
        selected.textContent = `Player: ${player} | Computer: ${computer}`;
        winMsg.textContent = `It's a draw`;
        winMsg.style.color = 'blueviolet';
    }
    // PLAYER WINS
    function pWin() {
        countP++;
        selected.textContent = `Player: ${player} | Computer: ${computer}`;
        winMsg.textContent = 'Player Wins';
        winMsg.style.color = 'green';
    }
    // COMPUTER WINS
    function cWin() {
        countC++;
        selected.textContent = `Player: ${player} | Computer: ${computer}`;
        winMsg.textContent = 'Computer Wins';
        winMsg.style.color = 'red';
    }

    // SCORE COUNT
    score.innerHTML = `Player:` + countP + '<br>' +
        `Computer:` + countC;
};












