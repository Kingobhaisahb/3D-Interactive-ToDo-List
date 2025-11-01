import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function RotatingCube() {
  const meshRef = useRef();

  useFrame((state) => {
    // Rotate the cube
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;

    // Create a rainbow-like color shift over time
    const time = state.clock.getElapsedTime();
    const color = new THREE.Color(`hsl(${(time * 40) % 360}, 100%, 50%)`);

    // Apply color + emissive glow dynamically
    meshRef.current.material.color = color;
    meshRef.current.material.emissive = color.clone().multiplyScalar(0.4);
  });

  return (
    <mesh ref={meshRef} scale={1.5}>
      <boxGeometry args={[1, 1, 1]} />
      <meshPhongMaterial color="#0040ff" emissive="#001133" shininess={80} />
    </mesh>
  );
}

export default function ThreeScene() {
  return (
    <Canvas style={{ height: '100vh', background: '#0d0d0d' }}>
      {/* Lights for realistic gloss and glow */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1.2} />
      <spotLight position={[-5, 5, 5]} angle={0.5} penumbra={0.5} intensity={1.5} />

      {/* Rotating rainbow cube */}
      <RotatingCube />

      {/* OrbitControls for mouse interaction */}
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
}
