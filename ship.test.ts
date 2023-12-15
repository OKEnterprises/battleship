import { Ship } from './ship.ts'

test('Ship.hit() increments hits correctly', () => {
    const s = new Ship(3);
    const prevHits = s.hits;
    s.hit();
    expect(s.hits).toBeGreaterThan(prevHits);
})

test('Ship.is_sunk() reports correctly', () => {
    const s = new Ship(3);
    s.hits = 3;
    expect(s.isSunk()).toBe(true);
})

test('Ship.deathMessage() correct for patrol boat', () => {
    const s = new Ship(2);
    expect(s.deathMessage()).toBe("You sunk my Patrol Boat! (size 2)");
})

test('Ship.deathMessage() correct for destroyer', () => {
    const s = new Ship(3);
    expect(s.deathMessage()).toBe("You sunk my Destroyer! (size 3)");
})

test('Ship.deathMessage() correct for battleship', () => {
    const s = new Ship(4);
    expect(s.deathMessage()).toBe("You sunk my Battleship! (size 4)");
})

test('Ship.deathMessage() correct for carrier', () => {
    const s = new Ship(5);
    expect(s.deathMessage()).toBe("You sunk my Carrier! (size 5)");
})

test('Ship.deathMessage() correct for OOB size', () => {
    const s = new Ship(7);
    expect(s.deathMessage()).toBe("You sunk my Invalid Ship! (size 7)")
})
