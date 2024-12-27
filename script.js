console.log("welcome to tic tac toe.");
let turn = 'X';
let gameOver = false;
const spanTurn = document.getElementsByClassName("turn")[0];
// console.log(spanTurn)
const video = document.querySelector(".imgbox video")
const reset = document.querySelector("#reset")

const changeTurn = function changeTurn(){
    if(turn === 'X'){
        spanTurn.innerText = "Turn for 0";
        turn = '0';
    }else if(turn === '0'){
        turn = 'X';
        spanTurn.innerText = "Turn for X";
    }
    
}



let boxes = document.getElementsByClassName("box")
const ArrayOfBoxes = Array.from(boxes);
ArrayOfBoxes.forEach(element => {
    // let boxText = document.querySelector('.box_text');
   if(gameOver === false){element.addEventListener('click' , () => {
        console.log("You have clicked the box.")
        if(element.innerText === ''){
            element.innerText = turn;
            changeTurn();   
            checkWin(); 
        }
        
        
    })}
    
})




const checkWin = function valueCheck(){
    // let boxText = document.getElementsByClassName("box_text");
    // const arrayOfBoxText = Array.from(boxText);
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e => {
        console.log(ArrayOfBoxes[e[0]].innerText + ArrayOfBoxes[e[1]].innerText + ArrayOfBoxes[e[2]].innerText)
        
        if((ArrayOfBoxes[e[0]].innerText === ArrayOfBoxes[e[1]].innerText) && (ArrayOfBoxes[e[0]].innerText === ArrayOfBoxes[e[2]].innerText) && (ArrayOfBoxes[e[0]].innerText !== "" ) && (ArrayOfBoxes[e[1]].innerText !== "" )&&(ArrayOfBoxes[e[2]].innerText !== "" )){
            spanTurn.innerText = ArrayOfBoxes[e[0]].innerText+" win";
            video.style.display = "block";
            gameOver = true;
        }
    })
}

reset.addEventListener('click', (e)=>{
    ArrayOfBoxes.forEach(e =>{
        e.innerText = '';
    })
    turn = 'X';
    video.style.display = "none";
    spanTurn.innerText = "Turn for X";
    gameOver = false;
})



