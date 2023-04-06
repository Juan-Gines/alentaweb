import { useRef, useEffect } from 'react';

function resizeCanvasToDisplaySize(canvas) {
	const { width, height } = canvas.getBoundingClientRect();

	if (canvas.width !== width || canvas.height !== height) {
		canvas.width = width;
		canvas.height = height;
		return true; // here you can return some usefull information like delta width and delta height instead of just true
		// this information can be used in the next redraw...
	}

	return false;
}

function resizeCanvas(canvas) {
	const { width, height } = canvas.getBoundingClientRect();

	if (canvas.width !== width || canvas.height !== height) {
		const { devicePixelRatio: ratio = 1 } = window;
		const context = canvas.getContext('2d');
		canvas.width = width * ratio;
		canvas.height = height * ratio;
		context.scale(ratio, ratio);
		return true;
	}

	return false;
}

const postdraw = () => {
	index++;
	ctx.restore();
};

const predraw = (context, canvas) => {
	context.save();
	resizeCanvasToDisplaySize(context, canvas);
	const { width, height } = context.canvas;
	context.clearRect(0, 0, width, height);
};

// Ejemplo de Canvas.jsx con opciones
// import ...
// const _predraw = (context) => { ... }
// const _postdraw = () => { ... }
// const Canvas = props => {
//   const { draw, predraw=_predraw, postdraw=_postdraw } = props
//   const canvasRef = useCanvas(draw, {predraw, postdraw})
//   return <canvas ref={canvasRef} {...rest}/>
// }
// export default Canvas

const useCanvas = (draw, predraw) => {
	const canvasRef = useRef(null);

	

	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas.getContext('2d');		
		let animationFrameId;

		const render = () => {
			predraw(context,canvas);
			draw(context);
			animationFrameId = window.requestAnimationFrame(render);
		};
		render();

		return () => {
			window.cancelAnimationFrame(animationFrameId);
		};
	}, [draw]);

	return canvasRef;
};

export default useCanvas;
