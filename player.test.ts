import { Player, ComputerPlayer } from './player'

test('Player.hasLost() returns true for 0 ships', () => {
    const p = new Player("Peter");
    p.board.numShips = 0;
    expect(p.hasLost()).toBe(true);
});

test('Player.hasLost() returns false for 1 ship', () => {
    const p = new Player("Paul");
    p.board.numShips = 1;
    expect(p.hasLost()).toBe(false);
});

test('ComputerPlayer.getMove() returns valid Coord', () => {
    const c = new ComputerPlayer();
    const m = c.getMove();
    expect(c.board.validateMove(m)).toBe(true);
});

