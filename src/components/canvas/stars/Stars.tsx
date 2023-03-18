import {useRef, useState} from 'react';
import {useFrame} from "@react-three/fiber";
import {Points, PointMaterial} from "@react-three/drei";
import {random} from "maath";

const Stars = (props: any) => {
  const ref = useRef<any>();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
      <group rotation={[0, 0, Math.PI / 4]}>
        <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
          <PointMaterial
              transparent
              color='#f272c8'
              size={0.002}
              sizeAttenuation={true}
              depthWrite={false}
          />
        </Points>
      </group>
  )
}

export default Stars;
