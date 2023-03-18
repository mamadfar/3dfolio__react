import {useGLTF} from "@react-three/drei";

const Earth = () => {
    const earth = useGLTF("./planet/scene.gltf")

    return (
        <primitive
            object={earth.scene}
            scale={2.5}
            position-y={0}
            position-x={0}
        />
    )
}

export default Earth
