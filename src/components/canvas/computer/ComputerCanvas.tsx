import {Suspense, useEffect, useState} from "react";
import {Canvas, extend} from "@react-three/fiber";
import {OrbitControls, Preload} from "@react-three/drei";
import {CanvasLoader} from "../../index";
import Computer from "./Computer";

extend({OrbitControls})

const ComputerCanvas = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    const handleMediaQueryChange = (e: MediaQueryListEvent) => {
        setIsMobile(e.matches);
    }

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 500px)");

        setIsMobile(mediaQuery.matches);

        mediaQuery.addEventListener("change", handleMediaQueryChange);

        return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
    }, []);

    return (
        <Canvas
            className="cursor-grab"
            frameloop="demand"
            shadows
            camera={{position: [20, 3, 5], fov: 25}} // [x-axis, y-axis, z-axis], fov: field of view
            gl={{preserveDrawingBuffer: true}}
        >
            <Suspense fallback={<CanvasLoader/>}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2} // fix the angle to turn to left and right
                    minPolarAngle={Math.PI / 2} // fix the angle to turn to left and right
                />
                <Computer isMobile={isMobile}/>
            </Suspense>
            <Preload all/>
        </Canvas>
    )
}

export default ComputerCanvas;
