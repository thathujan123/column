
let rows = 1;
let columns = 1;
const table = document.getElementById('dynamic-table');
const rowCountDisplay = document.getElementById('row-count');
const columnCountDisplay = document.getElementById('column-count');
function updateTable() {
    table.innerHTML = ''; 
    for (let i = 0; i < rows; i++) {
        let row = table.insertRow();        
        for (let j = 0; j < columns; j++) {
            let cell = row.insertCell();
            cell.textContent = `R${i + 1} C${j + 1}`;
        }
    }
}
document.getElementById('increase-row').addEventListener('click', function () {
    rows++;
    rowCountDisplay.textContent = rows;
    updateTable();
});document.getElementById('decrease-row').addEventListener('click', function () {
    if (rows > 1) {
        rows--;
        rowCountDisplay.textContent = rows;
        updateTable();
    }
});document.getElementById('increase-column').addEventListener('click', function () {
    columns++;
    columnCountDisplay.textContent = columns;
    updateTable();
});document.getElementById('decrease-column').addEventListener('click', function () {
    if (columns > 1) {
        columns--;
        columnCountDisplay.textContent = columns;
        updateTable();
    }
});
updateTable();