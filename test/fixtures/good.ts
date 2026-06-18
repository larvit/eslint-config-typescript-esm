export interface Vector {
	height: number;
	width: number;
}

export enum Color {
	Blue = "blue",
	Green = "green",
	Red = "red",
}

export function area(vector: Vector): number {
	const result = vector.height * vector.width;

	return result;
}
