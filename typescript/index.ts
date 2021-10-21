interface User {
	name: string;
	surname: string;
	age: number;
}

interface DevUser extends User {
	isProgrammer: boolean;
}

type numOrStr = number | string;

let array: [number, string, number] = [5, 'str', 6];



const enum Directions {
	UP = "UP",
	DOWN = "DOWN",
}

function getDirection(direction: Directions) {
	switch(direction) {
		case Directions.DOWN:
			console.log(Directions.DOWN);
			break;
		case Directions.UP:
			console.log(Directions.UP);
			break;
		default:
			const a: never = direction;
	}
}

function createArray<Type>(a: Type): Type[] {
	return [a];
}

interface TimeStamp {
	stamp: number;
}

function getStamp<T extends TimeStamp>(a: T) {
	return a.stamp;
}