import useCanvas from '../../Hooks/useCanvas';

const Canvas = ( props ) => {

  const { draw , predraw} = props;
  const canvasRef = useCanvas(draw, predraw);
  
  return (
    <canvas ref={canvasRef} />      
  );
}

export default Canvas;
