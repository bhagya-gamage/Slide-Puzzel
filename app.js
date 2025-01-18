document.addEventListener("DOMContentLoaded",()=>{
    const puzzelContainer = document.getElementById("puzzle-container");
    const shuffleButton = document.getElementById("shuffle-btn");
    const message = document.getElementById("message");

    const gridSize = 4;
    let tiles = [];

    function initPuzzle(){
        tiles = Array.from({ length: gridSize * gridSize -1}, (_,i) => i + 1);
        tiles.push(null);
        renderPuzzle();
    }

    
})