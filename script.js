const container = document.querySelector("#container");
const btn = document.querySelector("#resize-btn");
const containerSize = 960; // Total width in pixels

function createGrid(squaresPerSide) {
    // 1. Clear existing grid
    container.innerHTML = "";

    // 2. Calculate size of each square
    // If container is 960px and we want 16 squares, each square is 60px.
    const squareSize = containerSize / squaresPerSide;

    // 3. Create the grid squares
    const totalSquares = squaresPerSide * squaresPerSide;

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("grid-square");
        
        // Apply calculated dimensions
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        // Add Hover Effect
        square.addEventListener("mouseover", changeColor);

        container.appendChild(square);
    }
}

function changeColor(e) {
    // EXTRA CREDIT: Random RGB Values
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;

    /* // ALTERNATIVE EXTRA CREDIT (Progressive Darkening):
    // Uncomment this block and comment out the RGB block above to use opacity instead.
    
    let currentOpacity = Number(e.target.style.opacity);
    if (currentOpacity < 1) {
        e.target.style.opacity = currentOpacity + 0.1;
        e.target.style.backgroundColor = "black";
    }
    */
}

// Button Logic
btn.addEventListener("click", () => {
    let input = prompt("Enter number of squares per side (max 100):");
    let size = parseInt(input);

    if (size && size > 0 && size <= 100) {
        createGrid(size);
    } else {
        alert("Please enter a valid number between 1 and 100.");
    }
});

// Initialize default 16x16 grid on load
createGrid(16);