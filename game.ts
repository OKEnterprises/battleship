import { Player, ComputerPlayer } from './player'
import { Coord } from './types'
import { Page } from './page'

export class Game {
    player: Player;
    computer: ComputerPlayer;

    constructor(name: string) {
        this.player = new Player(name);
        this.computer = new ComputerPlayer();
    }

    setup() {

    }

    turn(coord: Coord): boolean {
        this.player.board.receiveAttack(this.computer.getMove());
        return this.computer.board.receiveAttack(coord);
    }

    play() {
        this.setup();
        while (!(this.player.hasLost() || this.computer.hasLost())) {
            const move = Page.getInput();
            this.turn();
        }
    }
}