let size = null;
while (isNaN(size) || size > 10 || size < 1) {
    size = +prompt(`Enter grid size:`);
}
let center = Math.ceil(size / 2);

for (let i = 0; i < size; i++) {
    let buttonDiv = document.getElementById("buttons");
    let row = document.createElement("div");

    row.setAttribute("id", `row-${i}`);
    buttonDiv.appendChild(row);

    for (let j = 0; j < size; j++) {
        let button = document.createElement(`button`);

        button.innerText = '⬜'
        button.setAttribute("id", `button-${i}-${j}`);

        if (i+1 === center && j+1 === center) {
            button.innerText = "⬛";
        } else {
            button.addEventListener('click', () => {
                button.innerText === "⬜" ? button.innerText = "💣" : button.innerText = "⬜";
            })
        }

        row.appendChild(button)
    }
}

function generate() {
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
    let results = document.getElementById(`results`);
    results.innerText = JSON.stringify(grid);
}
