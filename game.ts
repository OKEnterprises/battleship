import { Player, ComputerPlayer } from './player'
import { Coord } from './types'

export class Game {
    player: Player;
    computer: ComputerPlayer;

    constructor(name: string) {
        this.player = new Player(name);
        this.computer = new ComputerPlayer;
    }

    setup() {

    }

    turn(coord: Coord): boolean {
        this.player.board.receiveAttack(this.computer.getMove());
        return this.computer.board.receiveAttack(coord);
    }
}