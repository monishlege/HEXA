"use client";
import { Canvas } from "@react-three/fiber";
import { useMemo } from "react";
import * as THREE from "three";

function Mesh() {
  const grid = useMemo(() => {
    const geometry = new THREE.PlaneGeometry(20, 20, 50, 50);
    const material = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#C5A059"),
      metalness: 0.9,
      roughness: 0.2,
      wireframe: true,
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = -Math.PI / 2.5;
    mesh.position.y = -2;
    return mesh;
  }, []);
  return <primitive object={grid} />;
}

export default function GoldenMeshBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 6], fov: 70 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={1.6} color={"#C5A059"} />
        <pointLight position={[-5, -3, 4]} intensity={1.4} color={"#00e6ff"} />
        <Mesh />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />
      <div className="absolute inset-0 blur-3xl opacity-20 bg-[radial-gradient(circle_at_50%_20%,#C5A059_0%,transparent_35%)] pointer-events-none" />
      <div className="absolute inset-0 blur-3xl opacity-15 bg-[radial-gradient(ellipse_at_20%_80%,#00e6ff_0%,transparent_35%)] pointer-events-none" />
    </div>
  );
}
