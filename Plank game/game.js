document.addEventListener('DOMContentLoaded', function () {
    //virables
    let plankX = 0;//Declaring the position of plank
    let plankSpeedX = 15;//The speed of the movement by the amount of PX we change
    var intervalID;
    let ballX = 0;//is used for ball, declraing the horizontal value
    let ballY = 0;//is used for ball, declraing the vertical value
    let speedY = 22;//the amount of px that the ball pass each time
    let speedX = 5;//the amount of px that the ball pass each time
    let isBouncing = false
    let scoreUpdate = 0;


    //Declaring virables for elements from html
    const ballGame = document.getElementById('ball');
    const plank = document.getElementById('plankIndex');
    const container = document.getElementById('containter');
    const gameOver = document.getElementById('gameOverMessage');
    const resetBtn = document.createElement('button');
    const winBtn = document.createElement('button')
    const winMsg = document.getElementById('WinnerMsg');
    resetBtn.setAttribute('id', 'rstBtn');
    winBtn.setAttribute('id', 'winnerBtn');


    function movePlank(event) {
        const containerBounds = container.getBoundingClientRect(); // Get container bounds
        const plankBounds = plank.getBoundingClientRect(); // Get plank bounds

        switch (event.keyCode) {
            case 37:
                // Move left, but don't go beyond the left container border
                if (plankBounds.left - plankSpeedX >= containerBounds.left) {
                    plankX -= plankSpeedX;
                }
                break;
            case 39:
                // Move right, but don't go beyond the right container border
                if (plankBounds.right + plankSpeedX <= containerBounds.right) {
                    plankX += plankSpeedX;
                }
                break;
        }




        plank.style.marginLeft = plankX + 'px';
    }


    const originalBallY = parseInt(window.getComputedStyle(ballGame).getPropertyValue('top'));
    const originalBallX = parseInt(window.getComputedStyle(ballGame).getPropertyValue('left'));;



    function ballDrop() {
        const containerBounds = container.getBoundingClientRect();
        const ballBounds = ballGame.getBoundingClientRect();
        const plankBounds = plank.getBoundingClientRect();



        ballY += speedY;
        ballX += speedX;


        ballGame.style.marginLeft = ballX + 'px';
        ballGame.style.marginTop = ballY + 'px';


        if (ballBounds.bottom >= plankBounds.top && ballBounds.top <= plankBounds.bottom && ballBounds.right >= plankBounds.left && ballBounds.left <= plankBounds.right) {
            if (!isBouncing) {
                isBouncing = true;
                speedY = -Math.abs(speedY);
                speedX = speedX + (Math.random() * 8 +1);
                scoreCount()
            }
        } if (ballBounds.bottom >= containerBounds.top && ballBounds.top <= containerBounds.top) {
            if (!isBouncing) {
                isBouncing = true;
                speedY = Math.abs(speedY);
                speedX = speedX + (Math.random() * 7 +1);
            }
        }
        //game over - if button touches the bottom of the container
        if (ballBounds.bottom >= containerBounds.bottom && ballBounds.top <= containerBounds.bottom) {
            gameOverF()
            ballGame.style.marginTop = originalBallY;
            ballGame.style.marginLeft = originalBallX;
        }
        //checking if ball touching left side
        if (ballBounds.left <= containerBounds.left) {
            speedY = Math.abs(speedY);
            speedX = Math.abs(speedX);
        }
        //checking if ball touching right side
        if (ballBounds.right >= containerBounds.right) {
            speedY = Math.abs(speedY);
            speedX = -Math.abs(speedX);
        }
        else {
            isBouncing = false;
        }

    }


    function scoreCount() {
        score.innerHTML = `Score: ${Math.floor(scoreUpdate / 3)}`;
        scoreUpdate++
        if (scoreUpdate === 30) {
            document.removeEventListener('keydown', movePlank);
            clearInterval(intervalID)
            ballGame.remove();
            winMsg.innerHTML = 'You reached 10 score, you won!'
            winMsg.style.color = 'green'
            winMsg.appendChild(winBtn);
            winBtn.addEventListener('click', restartGame);
            winBtn.innerHTML = 'restart';
        }
    }


    function restartGame() {
        gameOver.remove();
        resetBtn.remove();
        location.reload();
    }


    function gameOverF() {
        document.removeEventListener('keydown', movePlank);
        resetBtn.innerHTML = 'restart';
        clearInterval(intervalID);
        gameOver.innerHTML = 'Game Over';
        gameOver.style.color = 'red';
        gameOver.appendChild(resetBtn);
        resetBtn.addEventListener('click', restartGame);
    }



    const msgStart = document.getElementById('startMsg');
    const score = document.createElement('div');
    score.setAttribute('id', 'displayScore');
    container.appendChild(score);

    function gameStart() {
        scoreCount();
        msgStart.remove();
        startBtn.remove();
        intervalID = setInterval(ballDrop, 100);
        document.addEventListener('keydown', movePlank);

    }

    // Call gameStart when the Start button is clicked
    const startBtn = document.getElementById('startButton');
    startBtn.addEventListener('click', gameStart);



});