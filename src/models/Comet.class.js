export class Comet {
	x1;
	y1;
	x2;
	y2;
	translate = 1 ;
	disappear = 1 ;
	draw = true ;
	opacity = 1;
	aleatory;
	constructor(canvasWidth, cavasHeight) {
		this.x1 = this.#getRandomNumber(5, canvasWidth - 5);
		this.y1 = this.#getRandomNumber(5, cavasHeight - 5);
		this.x2 = this.#getRandomNumber(5, canvasWidth - 5);
		this.y2 = this.#getRandomNumber(5, cavasHeight - 5);
		this.xdiff = (this.x2 - this.x1) / 20;
		this.ydiff = (this.y2 - this.y1) / 20;
	}

	#getRandomNumber = (min, max) => {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1) + min);
	};

	new = (canvasWidth,cavasHeight) => {
		this.x1 = this.#getRandomNumber(5, canvasWidth - 5);
		this.y1 = this.#getRandomNumber(5, cavasHeight - 5);
		this.x2 = this.#getRandomNumber(5, canvasWidth - 5);
		this.y2 = this.#getRandomNumber(5, cavasHeight - 5);
		this.xdiff = (this.x2 - this.x1) / 20;
		this.ydiff = (this.y2 - this.y1) / 20;
		this.translate = 1;
		this.disappear = 1;
		this.draw = false;
		this.opacity = 1;
		this.aleatory = this.#getRandomNumber(20,400);
	}
}