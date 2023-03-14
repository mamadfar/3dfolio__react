import React, {FC, Suspense} from 'react';
import {Canvas} from "@react-three/fiber";
import {CanvasLoader} from "../../index";
import {OrbitControls, Preload} from "@react-three/drei";
import Ball from "./Ball";

interface IBallCanvasProps {
    icon: string;
}

const BallCanvas: FC<IBallCanvasProps> = ({icon}) => {
    return (
        <Canvas
            frameloop="demand"
            gl={{preserveDrawingBuffer: true}}
        >
            <Suspense fallback={<CanvasLoader/>}>
                <OrbitControls enableZoom={false}/>
                <Ball imgUrl={icon}/>
            </Suspense>
            <Preload all/>
        </Canvas>
    );
};

export default BallCanvas;
