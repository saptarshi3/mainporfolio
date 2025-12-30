import { useRef, useLayoutEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Model() {
    const groupRef = useRef();
    const meshRef = useRef();

    // Scroll-based animations
    useLayoutEffect(() => {
        if (!groupRef.current) return;

        const ctx = gsap.context(() => {
            // Hero section - initial state
            gsap.set(groupRef.current.position, { x: 0, y: 0, z: 0 });
            gsap.set(groupRef.current.rotation, { x: 0, y: 0, z: 0 });
            gsap.set(groupRef.current.scale, { x: 1, y: 1, z: 1 });

            // About section - move to side
            ScrollTrigger.create({
                trigger: '#about',
                start: 'top center',
                end: 'bottom center',
                scrub: 1,
                onUpdate: (self) => {
                    gsap.to(groupRef.current.position, {
                        x: 2,
                        y: 0.5,
                        duration: 0.5,
                    });
                    gsap.to(groupRef.current.scale, {
                        x: 0.7,
                        y: 0.7,
                        z: 0.7,
                        duration: 0.5,
                    });
                },
            });

            // Skills section - break apart effect
            ScrollTrigger.create({
                trigger: '#skills',
                start: 'top center',
                end: 'bottom center',
                scrub: 1,
                onUpdate: (self) => {
                    gsap.to(groupRef.current.rotation, {
                        y: Math.PI * 2 * self.progress,
                        duration: 0.5,
                    });
                },
            });

            // Projects section - orbit
            ScrollTrigger.create({
                trigger: '#projects',
                start: 'top center',
                end: 'bottom center',
                scrub: 1,
                onUpdate: (self) => {
                    gsap.to(groupRef.current.position, {
                        x: -2,
                        y: -0.5,
                        duration: 0.5,
                    });
                },
            });

            // Experience section - wireframe mode
            ScrollTrigger.create({
                trigger: '#experience',
                start: 'top center',
                end: 'bottom center',
                scrub: 1,
                onUpdate: (self) => {
                    gsap.to(groupRef.current.position, {
                        x: 0,
                        y: 0,
                        z: -1,
                        duration: 0.5,
                    });
                },
            });

            // Contact section - center and enlarge
            ScrollTrigger.create({
                trigger: '#contact',
                start: 'top center',
                end: 'bottom center',
                scrub: 1,
                onUpdate: (self) => {
                    gsap.to(groupRef.current.position, {
                        x: 0,
                        y: 0,
                        z: 0.5,
                        duration: 0.5,
                    });
                    gsap.to(groupRef.current.scale, {
                        x: 1.2,
                        y: 1.2,
                        z: 1.2,
                        duration: 0.5,
                    });
                },
            });
        });

        return () => ctx.revert();
    }, []);

    // Continuous rotation
    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.002;
        }
    });

    return (
        <group ref={groupRef}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                {/* Central abstract tech object */}
                <group ref={meshRef}>
                    {/* Main core sphere */}
                    <mesh castShadow receiveShadow>
                        <icosahedronGeometry args={[1, 1]} />
                        <MeshDistortMaterial
                            color="#ffffff"
                            metalness={0.9}
                            roughness={0.1}
                            distort={0.3}
                            speed={2}
                        />
                    </mesh>

                    {/* Orbiting rings */}
                    <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
                        <torusGeometry args={[1.5, 0.02, 16, 100]} />
                        <meshStandardMaterial color="#ffffff" metalness={0.8} roughness={0.2} />
                    </mesh>

                    <mesh rotation={[0, Math.PI / 2, 0]} position={[0, 0, 0]}>
                        <torusGeometry args={[1.5, 0.02, 16, 100]} />
                        <meshStandardMaterial color="#ffffff" metalness={0.8} roughness={0.2} />
                    </mesh>

                    <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]} position={[0, 0, 0]}>
                        <torusGeometry args={[1.5, 0.02, 16, 100]} />
                        <meshStandardMaterial color="#ffffff" metalness={0.8} roughness={0.2} />
                    </mesh>

                    {/* Floating cubes */}
                    {[...Array(8)].map((_, i) => {
                        const angle = (i / 8) * Math.PI * 2;
                        const radius = 2.5;
                        return (
                            <mesh
                                key={i}
                                position={[
                                    Math.cos(angle) * radius,
                                    Math.sin(angle * 2) * 0.5,
                                    Math.sin(angle) * radius,
                                ]}
                                rotation={[angle, angle, 0]}
                            >
                                <boxGeometry args={[0.1, 0.1, 0.1]} />
                                <meshStandardMaterial color="#ffffff" metalness={0.9} roughness={0.1} />
                            </mesh>
                        );
                    })}
                </group>
            </Float>
        </group>
    );
}
