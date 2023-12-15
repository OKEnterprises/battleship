import { Gameboard } from "./gameboard";
import { Coord } from "./types"

class Player {
    name: string;
    board: Gameboard;

    constructor(name: string) {
        this.name = name;
        this.board = new Gameboard;
    }

    hasLost(): boolean {
        return this.board.numShips <= 0;
    }
}

class ComputerPlayer extends Player {
    constructor() {
        super("Computer");
    }

    getMove(): Coord {
        let move: Coord;
        do {
            move = [getRandomInteger(10), getRandomInteger(10)]
        } while (!this.board.validateMove(move));
        return move;
    }
}

export { Player, ComputerPlayer }