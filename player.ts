import { Gameboard } from "./gameboard";
import { Coord } from "./types";

function getRandomInteger(max: number): number {
    return Math.floor(Math.random() * max);
}

class Player {
    name: string;
    board: Gameboard;

    constructor(name: string) {
        this.name = name;
        this.board = new Gameboard();
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