
let boxes = document.getElementsByClassName("box");
let winner = document.querySelector("#winner");


let turn  = 0;
let o_color_p1 = "green";
let x_color_p2 = "orange";

let validate = [
    [ 0 , 1 , 2] ,
    [ 3 , 4 , 5] ,
    [ 6 , 7 , 8] ,
    [ 0 , 3 , 6] ,
    [ 1 , 4 , 7] ,
    [ 2 , 5 , 8] ,
    [ 0 , 4 , 8] ,
    [ 2 , 4 , 6] ,
]

let arr = new Array(9);   // array to store which box clicked



for( let i = 0; i < boxes.length; i++ ){



    boxes[i].addEventListener("click", (e) => {


        document.querySelector("body").style.backgroundColor = getRandomColor();


        if( turn%2 == 0){                                              // checking for player 0
            e.target.style.backgroundColor = o_color_p1;

            e.target.innerHTML = `<img src="/images/o_mark.png" alt="img" width="55px">`;     // adding image 

            arr[e.target.getAttribute("value")] = 0;        
            
            turn++;
        }
        else {                                                      // checking for player 1
            e.target.style.backgroundColor = x_color_p2;

            e.target.innerHTML = `<img src="./images/x_mark.png" alt="img" width="55px">`;      // adding image 
            
            arr[e.target.getAttribute("value")] = 1;

            turn++;
        }

        validate.forEach( valArray => {      // matching patterns

            if( arr[valArray[0]] && arr[valArray[1]] && arr[valArray[2]]){
                
                setTimeout(() => {                              
                    location.reload();
                }, 4000);
                winner.innerText = "Player2 is Winner !!"
                return;
            }

            if( arr[valArray[0]] === 0 && arr[valArray[1]] === 0 && arr[valArray[2]] === 0 ){
                setTimeout(() => {
                    location.reload();
                }, 4000);
                winner.innerText = "Player1 is Winner !!"                
                return;
            }
        })

        if( turn === 9){
            winner.innerText = "Match Drawn !!"            
            location.reload();
        }  
    })
}

// for random color change

function getRandomColor(){ 

    const red = Math.floor( Math.random() * 256);
    const green = Math.floor( Math.random() * 256);
    const blue = Math.floor( Math.random() * 256);
    const rgb = `rgb( ${red} , ${green} , ${blue})`;
    return rgb;
}