type Grid = HTMLDivElement;

export const page = (() => {
    function generateGrid(size=10): Grid {
        const container = document.createElement('div');
        container.style.display = 'grid';
        container.style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr";
        container.style.gridTemplateRows = "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr";

        for (let i = 1; i <= size; i++) {
            for (let j = 1; j <= size; j++) {
                const cell = document.createElement('div');
                cell.style.gridColumn = `${i} / ${i + 1}`;
                cell.style.gridRow = `${j} / ${j + 1}`;
                container.append(cell);
            }
        }

        return container;
    }

    function displayShips(grid: Grid) {

    }

    return {generateGrid, displayShips}
})();