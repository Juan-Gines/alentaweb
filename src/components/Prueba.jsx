import Canvas from "./canvas/Canvas";
import { useState } from "react";
import { Comet } from '../models/Comet.class.js';
import { Star } from '../models/Star.class.js';

const initialStars = () => {
	let tempStars = [];
	for (let i = 0; i < 300; i++) {
		tempStars = [...tempStars, new Star(window.innerWidth, window.innerHeight)];
	}
	return tempStars;
};

const initialComet = () => {
	const comet = new Comet(window.innerWidth, window.innerHeight);
	return comet;
};

const Prueba = () => {

	const [stars, setStars] = useState(initialStars);
	const [comet, setComet] = useState(initialComet);
  
  const predraw = (context, canvas) => {
    resizeCanvas(canvas);
    const { width, height } = context.canvas;
    context.clearRect(0, 0, width, height);
  }

  const draw = (ctx) => {
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		stars.map((star, id) => {
			if (star.update > 0) {
				star.update--;
			} else {
				if (star.opacity > 1.4 || star.opacity < 0) star.opacityDif = -star.opacityDif;
				star.update = star.time;
			}
			star.opacity += star.opacityDif;
			ctx.fillStyle = 'rgba(' + star.color + ',' + star.opacity + ')';
			ctx.beginPath();
			ctx.arc(star.x, star.y, star.dimension, 0, 2 * Math.PI);
			ctx.fill();
			if (star.dimension >= 1.5) {
				ctx.fillStyle = 'rgba(' + star.color + ',' + (star.opacity - 0.4) + ')';
				ctx.beginPath();
				ctx.moveTo(star.x, star.y - star.dimension);
				ctx.lineTo(star.x + star.dimension + star.opacity * star.dimension + 2, star.y);
				ctx.lineTo(star.x, star.y + star.dimension);
				ctx.lineTo(star.x - star.dimension - star.opacity * star.dimension - 2, star.y);
				ctx.fill();
				ctx.beginPath();
				ctx.moveTo(star.x, star.y - star.dimension - star.opacity * star.dimension - 2);
				ctx.lineTo(star.x + star.dimension, star.y);
				ctx.lineTo(star.x, star.y + star.dimension + star.opacity * star.dimension + 2);
				ctx.lineTo(star.x - star.dimension, star.y);
				ctx.fill();
				ctx.beginPath();
				ctx.moveTo(star.x + 1, star.y - 1);
				ctx.lineTo(
					star.x + star.dimension + star.opacity * star.dimension,
					star.y + star.dimension + star.opacity * star.dimension
				);
				ctx.lineTo(star.x - 1, star.y + 1);
				ctx.lineTo(
					star.x - star.dimension - star.opacity * star.dimension,
					star.y - star.dimension - star.opacity * star.dimension
				);
				ctx.fill();
				ctx.beginPath();
				ctx.moveTo(
					star.x + star.dimension + star.opacity * star.dimension,
					star.y - star.dimension - star.opacity * star.dimension
				);
				ctx.lineTo(star.x + 1, star.y + 1);
				ctx.lineTo(
					star.x - star.dimension - star.opacity * star.dimension,
					star.y + star.dimension + star.opacity * star.dimension
				);
				ctx.lineTo(star.x - 1, star.y - 1);
				ctx.fill();
			}
			if (star.opacity < 0) star.newStar(ctx.canvas.width, ctx.canvas.height);
		});
		if (comet.draw) {
			ctx.strokeStyle = 'rgba(255,255,255,1)';
			ctx.fillStyle = 'rgba(255,255,255,1)';
			ctx.lineCap = 'round';
			ctx.beginPath();
			if (comet.translate < 20) {
				ctx.moveTo(comet.x1, comet.y1);
				ctx.lineTo(
					comet.x1 + comet.xdiff * comet.translate,
					comet.y1 + comet.ydiff * comet.translate
				);
				comet.translate++;
				ctx.stroke();
				ctx.beginPath();
				ctx.arc(
					comet.x1 + comet.xdiff * comet.translate,
					comet.y1 + comet.ydiff * comet.translate,
					2,
					0,
					2 * Math.PI
				);
				ctx.fill();
			} else if (comet.disappear < 20) {
				ctx.moveTo(
					comet.x1 + comet.xdiff * comet.disappear,
					comet.y1 + comet.ydiff * comet.disappear
				);
				ctx.lineTo(comet.x2, comet.y2);
				ctx.stroke();
				ctx.beginPath();
				ctx.arc(comet.x2, comet.y2, 2, 0, 2 * Math.PI);
				ctx.fill();
				comet.disappear++;
			} else {
				ctx.fillStyle = 'rgba(255,255,255,' + comet.opacity + ')';
				ctx.beginPath();
				ctx.arc(comet.x2, comet.y2, 2, 0, 2 * Math.PI);
				ctx.fill();
				comet.opacity = comet.opacity - 0.01;
				if (comet.opacity < 0) {
					comet.new(ctx.canvas.width, ctx.canvas.height);
				}
			}
		} else {
			comet.aleatory--;
			if (comet.aleatory < 0) comet.draw = true;
		}
	};

  const resizeCanvas = (canvas) => {
		const { innerWidth, innerHeight } = window;

		if (canvas.width !== innerWidth || canvas.height !== innerHeight) {
			const context = canvas.getContext('2d');
			canvas.width = innerWidth ;
			canvas.height = innerHeight ;						
			return true;
		}

		return false;
	}

  return (    
    <div className='relative flex flex-row items-center justify-center bg-gradient-to-tr w-full h-screen from-gray-800 to-black'>
      <Canvas draw={draw} predraw={predraw}/>
      <div className='absolute top-20 text-4xl sm:text-6xl text-center font-bold font-sans font-family: text-orange-600 transition-opacity'>Alenta Solutions</div>
    </div>
  );
}

export default Prueba;
