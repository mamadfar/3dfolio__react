import {Html, useProgress} from "@react-three/drei";

const CanvasLoader = () => {
  const {progress} = useProgress();

  return (
    <Html>
      <span className="canvas-loader"></span>
      <p className="text-sm text-[#f1f1f1] font-extrabold mt-9">{progress.toFixed(2)}%</p>
    </Html>
  )
}

export default CanvasLoader;
