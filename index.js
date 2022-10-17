const WinScore = document.querySelector('#WinScore');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');

let score1 = 0;
let score2 = 0;

btn1.addEventListener('click', () => {
    if (score1 < WinScore.value) {
        score1++;
        if (score1 == WinScore.value) {
            btn1.disabled = true;
            btn2.disabled = true;
            player1.style.color = 'green';
            player2.style.color = 'red';
        }
        player1.innerText = score1;
    };
});

btn2.addEventListener('click', () => {
    if (score2 < WinScore.value) {
        score2++;
        if (score2 == WinScore.value) {
            btn1.disabled = true;
            btn2.disabled = true;
            player2.style.color = 'green';
            player1.style.color = 'red';
        }
        player2.innerText = score2;
    };
});

btn3.addEventListener('click', () => {
    score1 = 0;
    score2 = 0;
    btn1.disabled = false;
    btn2.disabled = false;
    player2.style.color = 'black';
    player1.style.color = 'black';
    player1.innerText = score2;
    player2.innerText = score2;
});