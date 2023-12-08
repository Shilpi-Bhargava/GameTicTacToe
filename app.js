let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#Reset");
let msgContainer = document.querySelector(".msgContainer");
let newGame = document.querySelector("#new-game");
let msg = document.querySelector("#msg");


let turn0 = true;//PlayerX, PlayerO
let count = 0;//To track draw

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6],
];

const resetGame = () => {
    turn0 = true;
    count =0;
    isEnabled();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        //console.log("box are clicked");
        if (turn0) {//playerO
            box.innerText = "O";
            turn0 = false;
        }
        else {//player X
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        count++;

        let isWinner = checkWinner();

        if (count === 9 && !isWinner) {
            gameDraw();
        }

        
    });


});

const gameDraw = () => {
    msg.innerText = `That's a draw!", "We have no winner`;
    msgContainer.classList.remove("hide");
   isDisabled()}




const isDisabled = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const isEnabled = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
//////////////////////////////////////////////////////////



const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    isDisabled();
}


const checkWinner = () => {
    for (let pattern of winPatterns) {
        // console.log(pattern[0], pattern[1], pattern[2]);


        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("Winner");
                showWinner(pos1Val);

            }
        }


    }

}

newGame.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);