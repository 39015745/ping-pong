const WinScore = document.querySelector('#WinScore');

let player1 = {
    score: 0,
    btn: document.querySelector('.btn1'),
    display: document.querySelector('.player1')
};

let player2 = {
    score: 0,
    btn: document.querySelector('.btn2'),
    display: document.querySelector('.player2')
};

player1.btn.addEventListener('click', () => { update(player1, player2) });
player2.btn.addEventListener('click', () => { update(player2, player1) });

function update(player, opponent) {
    if (player.score < WinScore.value) {
        player.score++;
        if (player.score == WinScore.value) {
            player.btn.disabled = true;
            opponent.btn.disabled = true;
            player.display.style.color = 'green';
            opponent.display.style.color = 'red';
        }
        player.display.innerText = player.score;
    };
}

document.querySelector('.btn3').addEventListener('click', () => {
    for (let i of [player1, player2]) {
        i.score = 0;
        i.btn.disabled = false;
        i.display.style.color = 'black';
        i.display.innerText = 0;
    };
});
