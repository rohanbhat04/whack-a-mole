const squares = document.querySelectorAll(".square")
const moletile = document.querySelector(".mole")
const time = document.querySelector("#time")
const points = document.querySelector("#points")
const startbtn = document.querySelector("#start")
const stopbtn = document.querySelector("#stop")

let score = 0,timer = 60;
let startGame,hitposition

//start the game
function randomMoleTile(){
    startGame = setInterval(createMoletile, 700)
}

function createMoletile() {
    //remove the existing mole class from the random tile if it exists
    squares.forEach(tile => {
        tile.classList.remove("mole")
        // tile.removeEventListener("mousedown", calculatePoints);

    })

    //creating random tile having mole 
    let randomTile = squares[Math.floor(Math.random() * 9)] 
     hitposition = randomTile.id
    randomTile.classList.add('mole')

    //game time settings
    time.textContent = timer;
    timer--
    if(timer<0){
        clearInterval(startGame)
        alert("game over. \n your score is : "+ score)
    } 
    
}


function calculatePoints (){
    console.log(this)
    if(this.id == hitposition){
        score++ 
        points.textContent = score
    }
}


//points calculation
squares.forEach(tile =>{
    tile.addEventListener("mousedown",calculatePoints)
})

//start game button
startbtn.addEventListener("click", randomMoleTile)

//pause or stop game button
stopbtn.addEventListener("click", ()=>{
    clearInterval(startGame)
})
