import React, { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";

function FloatingInteractiveCube() {
  const meshRef = useRef();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const clock = useRef(new THREE.Clock());

  // Track mouse movement
  const handleMouseMove = (event) => {
    setMouse({
      x: (event.clientX / window.innerWidth) * 2 - 1,
      y: -(event.clientY / window.innerHeight) * 2 + 1,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(() => {
    const t = clock.current.getElapsedTime();

    if (meshRef.current) {
      // 🌊 Floating up and down
      meshRef.current.position.y = Math.sin(t * 1.5) * 0.2;

      // 🌀 Smooth rotation towards mouse direction
      meshRef.current.rotation.y += (mouse.x * Math.PI - meshRef.current.rotation.y) * 0.01;
      meshRef.current.rotation.x += (mouse.y * Math.PI - meshRef.current.rotation.x) * 0.01;
      meshRef.current.rotation.y += 0.0008;
      meshRef.current.rotation.x += 0.0004;

    }
  });

  return (
    <mesh ref={meshRef} scale={1.1}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#00ffff" metalness={0.7} roughness={0.5} />
      {/* Outline edges for 3D depth */}
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(1.6, 1.6, 1.6)]} />
        <lineBasicMaterial color="#00ffff" />
      </lineSegments>
    </mesh>
  );
}

export default function ThreeScene() {
  return (
    <Canvas
      camera={{ position: [3, 2, 5], fov: 50 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        height: "100vh",
        width: "100vw",
        background:
          "radial-gradient(circle at 100% 0%, rgba(3, 41, 71, 0.99), #020221ff 55%)",
      }}
    >
      {/* 💡 Lighting setup */}
      <pointLight position={[5, 5, 5]} intensity={30} color="#fafbfcff" />
      <ambientLight intensity={0.4} />
      <FloatingInteractiveCube />
    </Canvas>
  );
}
