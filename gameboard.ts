import { Ship } from './ship'
import { Square, Coord, Direction } from './types'

type BoardRow = [Square, Square, Square, Square, Square, Square, Square, Square, Square, Square]
type Board = [BoardRow, BoardRow, BoardRow, BoardRow, BoardRow, BoardRow, BoardRow, BoardRow, BoardRow, BoardRow]

class Gameboard {
    board: Board;
    numShips: number;

    constructor() {
        this.numShips = 5;

        []
    }

    placeShip(coord: Coord, length: number, orientation: Direction): boolean {
        const s = new Ship(length);
        const [x, y] = coord;

        if (orientation === 'vertical') {
            for (let i = x; i < x + length; i++) {
                if (this.board[i][y].value) return false;
                this.board[i][y].value = s;
            }
        } else if (orientation === 'horizontal') {
            for (let i = y; i < y + length; i++) {
                if (this.board[x][i].value) return false;
                this.board[x][i].value = s;
            }
        }

        return true;
    }

    private placeMiss(coord: Coord): Coord {
        const [x, y] = coord;
        this.board[x][y].value = 'O';
        return coord;
    }

    validateMove(coord: Coord): boolean {
        const [x, y] = coord;
        return !(this.board[x][y].value == 'X' || this.board[x][y].value == 'O');
    }

    receiveAttack(coord: Coord): boolean {
        const [x, y] = coord;
        const entity = this.board[x][y].value;

        if (!entity) {
            this.placeMiss(coord);
            return false;
        } else if (entity instanceof Ship && entity.hits == 1) {
            entity.hit();
            this.board[x][y].value = 'X';
            this.numShips--;
            return true;
        } else if (entity instanceof Ship) {
            entity.hit();
            this.board[x][y].value = 'X';
            return true;
        } else {
            console.log("Invalid placement")
            return false;
        }
    }

}

export { Gameboard };