var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function getRandomInteger(max) {
    return Math.floor(Math.random() * max);
}
var Ship = /** @class */ (function () {
    function Ship(length) {
        this.length = length;
        this.hits = 0;
    }
    Ship.prototype.hit = function () {
        this.hits++;
        if (this.isSunk())
            this.printDeathMessage();
    };
    Ship.prototype.isSunk = function () {
        return this.hits >= this.length;
    };
    Ship.prototype.printDeathMessage = function () {
        switch (this.length) {
            case 2:
                console.log("You sunk my Patrol Boat! (size 2)");
            case 3:
                console.log("You sunk my Destroyer! (size 3)");
            case 4:
                console.log("You sunk my Battleship! (size 4");
            case 5:
                console.log("You sunk my Carrier! (size 5)");
        }
    };
    return Ship;
}());
var Gameboard = /** @class */ (function () {
    function Gameboard() {
        this.numShips = 5;
        var startingShips = [5, 4, 3, 3, 2];
        for (var _i = 0, startingShips_1 = startingShips; _i < startingShips_1.length; _i++) {
            var shipLength = startingShips_1[_i];
            var shipCoord = this.inputCoord();
            var shipOrientation = this.inputOrientation();
            this.placeShip(shipCoord, shipLength, shipOrientation);
        }
    }
    Gameboard.prototype.placeShip = function (coord, length, orientation) {
        var s = new Ship(length);
        var x = coord[0], y = coord[1];
        if (orientation === 'vertical') {
            for (var i = x; i < x + length; i++) {
                if (this.board[i][y].value)
                    return false;
                this.board[i][y].value = s;
            }
        }
        else if (orientation === 'horizontal') {
            for (var i = y; i < y + length; i++) {
                if (this.board[x][i].value)
                    return false;
                this.board[x][i].value = s;
            }
        }
        return true;
    };
    Gameboard.prototype.placeMiss = function (coord) {
        var x = coord[0], y = coord[1];
        this.board[x][y].value = 'O';
        return coord;
    };
    Gameboard.prototype.validateMove = function (coord) {
        var x = coord[0], y = coord[1];
        return !(this.board[x][y].value == 'X' || this.board[x][y].value == 'O');
    };
    Gameboard.prototype.receiveAttack = function (coord) {
        var x = coord[0], y = coord[1];
        var entity = this.board[x][y].value;
        if (!entity) {
            this.placeMiss(coord);
            return false;
        }
        else if (entity instanceof Ship && entity.hits == 1) {
            entity.hit();
            this.board[x][y].value = 'X';
            this.numShips--;
            return true;
        }
        else if (entity instanceof Ship) {
            entity.hit();
            this.board[x][y].value = 'X';
            return true;
        }
        else {
            console.log("Invalid placement");
            return false;
        }
    };
    return Gameboard;
}());
var Player = /** @class */ (function () {
    function Player(name) {
        this.name = name;
        this.board = new Gameboard;
    }
    Player.prototype.hasLost = function () {
        return this.board.numShips <= 0;
    };
    return Player;
}());
var ComputerPlayer = /** @class */ (function (_super) {
    __extends(ComputerPlayer, _super);
    function ComputerPlayer() {
        return _super.call(this, "Computer") || this;
    }
    ComputerPlayer.prototype.getMove = function () {
        var move;
        do {
            move = [getRandomInteger(10), getRandomInteger(10)];
        } while (!this.board.validateMove(move));
        return move;
    };
    return ComputerPlayer;
}(Player));
var Game = /** @class */ (function () {
    function Game(name) {
        this.player = new Player(name);
        this.computer = new ComputerPlayer;
    }
    Game.prototype.turn = function (coord) {
        this.player.board.receiveAttack(this.computer.getMove());
        return this.computer.board.receiveAttack(coord);
    };
    return Game;
}());
var Page = /** @class */ (function () {
    function Page() {
    }
    Page.prototype.placeShips = function () {
        for (var i = 0; i < 5; i++) {
        }
    };
    return Page;
}());
