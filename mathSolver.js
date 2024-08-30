const SCORE_NEEDED = 306;
var score = 0;

var start = document.getElementById("button_correct");

var rightAnswerButton = document.getElementById('button_correct');
var wrongAnswerButton = document.getElementById('button_wrong');
start.click();

function play() {
    var x = +document.getElementById("task_x").innerText;
    var y = +document.getElementById("task_y").innerText;
    var operator = document.getElementById('task_op').innerHTML;
    var res = +document.getElementById('task_res').innerText;
    var real_result;
    switch (operator) {
        case '+':
            real_result = x + y;
            break;
        case '–':
            real_result = x - y;
            break;
        case '×':
            real_result = x * y;
            break;
        case '/':
            real_result = x / y;
            break;
    }

    if (score >= SCORE_NEEDED) {
        console.log("Score reached", score);
        return;
    }
    score = score + 1;
    if (res === real_result) {
        console.log("Equation", x, operator, y, "=", res, "(", real_result, ") - Right");
        pressRight();
    } else {
        console.log("Equation", x, operator, y, "=", res, "(", real_result, ") - Wrong");
        pressWrong();
    }
}

function pressRight() {
    setTimeout(function () {
        rightAnswerButton.click();
        play();
    }, 10);
}

function pressWrong() {
    setTimeout(function () {
        wrongAnswerButton.click();
        play();
    }, 10);
}

play();