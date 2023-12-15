import { Ship } from './ship'

export type Miss = 'O';
export type Hit = 'X';
export type Coord = [number, number];
export type Direction = "horizontal" | "vertical";

export interface Square {
    value: Ship | Hit | Miss | undefined;
}