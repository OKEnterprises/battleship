import { Coord } from "./types";

type Grid = HTMLDivElement;

export const Page = (() => {
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

    function coordInputDisplay(): HTMLFormElement {
        const form = document.createElement('form');
        form.id = 'coord-input-form';

        const xInput = document.createElement('input');
        xInput.id = 'x-input';
        xInput.classList.add('coord-input', 'x-input');
        xInput.type = 'number';

        const yInput = document.createElement('input');
        yInput.id = 'y-input';
        xInput.classList.add('coord-input', 'y-input')
        yInput.type = 'number';

        form.append(xInput, yInput);
        return form;
    }

    function getInputCoord(): Coord {
        const xInput: HTMLInputElement = document.querySelector("#x-input");
        const yInput: HTMLInputElement = document.querySelector("#y-input");

        if (!xInput.value || !yInput.value) return [-1, -1];
        else return [parseInt(xInput.value), parseInt(yInput.value)];
    }

    function render() {
        const body: HTMLBodyElement = document.querySelector('body');

    }

    return {generateGrid, displayShips, getInputCoord, render}
})();