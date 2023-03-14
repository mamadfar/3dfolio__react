import {FC} from "react";
import {useGLTF} from "@react-three/drei";

interface IComputerProps {
    isMobile: boolean;
}

const Computer:FC<IComputerProps> = ({isMobile}) => {
    const computer = useGLTF("./desktop_pc/scene.gltf");

    return (
        <mesh>
            <hemisphereLight intensity={0.15} groundColor='black'/>
            <pointLight intensity={1}/>
            <spotLight
                position={[-20, 50, 10]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow={true}
                shadow-mapSize={1024}
            />
            <primitive
                object={computer.scene}
                scale={isMobile? 0.7 : 0.75}
                position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
                rotation={[-0.01, -0.2, -0.1]}
            />
        </mesh>
    );
};

export default Computer;
