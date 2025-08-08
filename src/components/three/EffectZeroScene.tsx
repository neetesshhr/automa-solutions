import React, { Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Rotator: React.FC = () => {
  const ref = React.useRef<any>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.2;
      ref.current.rotation.y += delta * 0.25;
    }
  });
  return (
    <mesh ref={ref} castShadow receiveShadow>
      <torusKnotGeometry args={[1.1, 0.35, 220, 32]} />
      <meshStandardMaterial color="#6f66ff" metalness={0.2} roughness={0.2} />
    </mesh>
  );
};

const Particles: React.FC = () => {
  const points = useMemo(() => {
    const pts = [] as number[];
    for (let i = 0; i < 600; i++) {
      const r = 3.5;
      const x = (Math.random() - 0.5) * r * 2;
      const y = (Math.random() - 0.5) * r * 2;
      const z = (Math.random() - 0.5) * r * 2;
      pts.push(x, y, z);
    }
    return new Float32Array(pts);
  }, []);
  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={points.length / 3} array={points} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#9b8aff" size={0.02} sizeAttenuation />
    </points>
  );
};

const EffectZeroScene: React.FC = () => {
  return (
    <div className="h-[320px] md:h-[420px] rounded-lg border bg-card shadow-glow overflow-hidden">
      <Canvas shadows camera={{ position: [2.8, 2.2, 3.2], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 3, 3]} intensity={0.8} castShadow />
        <Suspense fallback={null}>
          <Rotator />
          <Particles />
        </Suspense>
        <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.4} />
      </Canvas>
    </div>
  );
};

export default EffectZeroScene;
