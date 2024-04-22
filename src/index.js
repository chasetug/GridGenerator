let size = null;
let bombs = 0;

function generateButtons() {
    size = +document.querySelector('input[name="size"]:checked').value;

    let sizeInput = document.getElementById("size-input");
    sizeInput.style.display = 'none';

    let center = Math.ceil(size / 2);

    for (let i = 0; i < size; i++) {
        let buttonDiv = document.getElementById("buttons");
        let row = document.createElement("div");
        let bombCount = document.getElementById("bomb-count");

        row.setAttribute("id", `row-${i}`);
        buttonDiv.appendChild(row);

        for (let j = 0; j < size; j++) {
            let button = document.createElement(`button`);

            button.innerText = '⬜'
            button.setAttribute("id", `button-${i}-${j}`);

            if (i+1 === center && j+1 === center) {
                button.innerText = "🟦";
            } else {
                button.addEventListener('click', () => {
                    if (button.innerText === "⬜") {
                        button.innerText = "💣"
                        bombs++;
                        bombCount.innerText = `Bomb Count: ${bombs}`
                    } else {
                        button.innerText = "⬜";
                        bombs--;
                        bombCount.innerText = `Bomb Count: ${bombs}`
                    }
                })
            }

            row.appendChild(button)
        }
    }

    let gridButtons = document.getElementById("grid-buttons");
    gridButtons.style.display = 'inline';
}



function generateJson() {
    let grid = [];
    for (let i = 0; i < size; i++) {
        let row = [];
        for (let j = 0; j < size; j++) {
            let button = document.getElementById(`button-${i}-${j}`);
            let cell = button.innerText === "💣" ? 1 : 0;
            row.push(cell);
        }
        grid.push(row);
    }

    let resultsDiv = document.getElementById(`results-div`);
    resultsDiv.style.display = 'inline';

    let results = document.getElementById(`results`);
    results.innerText = JSON.stringify(grid);
}

function reloadPage() {
    location.reload();
}

function copyResults() {
    let copyText = document.getElementById("results");
    navigator.clipboard.writeText(copyText.innerText)
        .then();
}
