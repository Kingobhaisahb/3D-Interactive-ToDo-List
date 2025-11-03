import React, { useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";

function RotatingCube() {
  const meshRef = useRef();

  useFrame(() => {
    meshRef.current.rotation.x += 0.005;
    meshRef.current.rotation.y += 0.005;
  });

  return (
    <mesh ref={meshRef} scale={1.1}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#00ffff" metalness={0.7} roughness={0.5} />
      {/* Outline edges for 3D feel */}
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(2, 2, 2)]} />
        <lineBasicMaterial color="#020000ff" />
      </lineSegments>
    </mesh>
  );
}

export default function ThreeScene() {
  return (
    <Canvas
      camera={{ position: [3, 2, 5], fov: 50 }}
      style={{
        height: "100vh",
        width: "100vw",
        background: "linear-gradient(to bottom, #000000 70%)",
      }}
    >
      {/* Dark blue visible light glow */}
      <pointLight position={[5, 5, 5]} intensity={50} color="#fafbfcff" />
      {/* Slight ambient light to make cube edges visible */}
      <ambientLight intensity={0.4} />
      <RotatingCube />
    </Canvas>
  );
}
