export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export function increase(){
	return {
		type : INCREMENT
	}
}

export function decrease(){
	return {
		type : DECREMENT
	}
}