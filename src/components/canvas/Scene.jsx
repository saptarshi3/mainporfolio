import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { Suspense } from 'react';
import Model from './Model';

export default function Scene() {
    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10">
            <Canvas>
                <Suspense fallback={null}>
                    <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />

                    {/* Lighting */}
                    <ambientLight intensity={0.2} />
                    <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
                    <directionalLight position={[-10, -10, -5]} intensity={0.3} />
                    <pointLight position={[0, 5, 0]} intensity={0.5} />

                    {/* 3D Model */}
                    <Model />

                    {/* Environment */}
                    <Environment preset="city" />

                    {/* Optional: Enable orbit controls for development */}
                    {/* <OrbitControls enableZoom={false} enablePan={false} /> */}
                </Suspense>
            </Canvas>
        </div>
    );
}
