export class Star {
	x;
	y;
	opacity;
	opacityDif;
	time;
	update;
	dimension;
	colors = ['255,255,255', '254, 249, 195', '207, 250, 254', '153, 246, 228'];
	color;
	dimensions = [1,1.5,2];
	constructor(canvasWidth, cavasHeight) {
		this.x = this.#getRandomNumber(5, canvasWidth - 5);
		this.y = this.#getRandomNumber(5, cavasHeight - 5);
		this.time = this.#getRandomNumber(1, 2);
		this.update = this.#getRandomNumber(1, 2);
		this.opacity = this.#getRandomDecimal(0,1,3);
		this.opacityDif = this.#getRandomDecimal(0,0.01,3);
		this.color = this.colors[this.#getRandomNumber(0, 3)];
		this.dimension = this.dimensions[this.#getRandomNumber(0, 2)];
	}

	newStar = (width, height) =>{
		this.x = this.#getRandomNumber(5, width - 5);
		this.y = this.#getRandomNumber(5, height - 5);
		this.dimension = this.dimensions[this.#getRandomNumber(0, 2)];
		this.opacityDif = this.#getRandomDecimal(0, 0.01, 3);
	}

	#getRandomNumber = (min, max) => {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1) + min);
	};

	#getRandomDecimal = (min,max,decimals) =>{
		const precision = Math.pow(10, decimals);
    min = min*precision;
    max = max*precision;
    return Math.floor(Math.random()*(max-min+1) + min) / precision;
	}
}
