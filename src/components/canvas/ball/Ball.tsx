import {FC} from 'react';
import {Decal, Float, useTexture} from "@react-three/drei";

interface IBallProps {
  imgUrl: string;
}

const Ball:FC<IBallProps> = ({imgUrl}) => {
  const [decal] = useTexture([imgUrl])

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25}/>
      <directionalLight position={[0, 0, 0.05]}/>
      <mesh castShadow={true} recieveShadow={true} scale={2.75}>
        <icosahedronGeometry args={[1, 1]}/>
          <meshStandardMaterial color="#fff8eb" polygonOffset={true} polygonOffsetFactor={-5} flatShading={true}/>
          <Decal map={decal} position={[0, 0, 1]} rotation={[2* Math.PI, 0, 6.25]} flatShading={true}/>
      </mesh>
    </Float>
  )
}

export default Ball;
