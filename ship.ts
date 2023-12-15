class Ship {
    length: number;
    hits: number;

    constructor(length: number) {
        this.length = length;
        this.hits = 0;
    }

    hit(): void {
        this.hits++;
        if (this.isSunk()) this.deathMessage();
    }

    isSunk(): boolean {
        return this.hits >= this.length;
    }

    deathMessage(): string {
        switch (this.length) {
            case 2:
                return "You sunk my Patrol Boat! (size 2)";
            case 3:
                return "You sunk my Destroyer! (size 3)";
            case 4:
                return "You sunk my Battleship! (size 4)";
            case 5:
                return "You sunk my Carrier! (size 5)";
            default:
                return "You sunk my Invalid Ship! (size " + this.length + ")";
        }
    }
}

export { Ship };