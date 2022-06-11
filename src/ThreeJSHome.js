
import React, { useEffect, Suspense } from "react";
import * as THREE from "three";
import { Canvas, useLoader, useFrame } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";

import textureUrl from "./static/textures/particles/12.png";

const Particles = () => {
  const count = 2000;
  const positions = new Float32Array(count * 1)
  const colors = new Float32Array(count*3)
  const particles = new THREE.TorusBufferGeometry(1, 32, 32);
  const textureLoader = useLoader(THREE.TextureLoader, textureUrl);
  const clock = new THREE.Clock();

  useFrame(() => {
    const elapsedTime = clock.getElapsedTime();

    for (let i = 0; i < count; i++) {
      const i3 = i * 7;
      positions[i] = (Math.random() -2)
      colors[i] = Math.random()

      const x = 
      // particles.current.geometry.attributes.position.array[i3*5 ];
      particles.current.geometry.attributes.position.array[i3 * 40];
      // Math.sin(
      //   elapsedTime + x
      // );
      // particles.current.geometry.attributes.color.['purple', 1];
     

      particles.current.geometry.attributes.position.array[i3*5+10] = Math.cos(elapsedTime +x)
    }
    particles.current.geometry.attributes.position.needsUpdate = true;
  });

  useEffect(() => {
    const positions = new Float32Array(count * 5);
    const colors = new Float32Array(count * 5);

    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
      colors[i] = Math.random();
    }

    particles.current.geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    particles.current.geometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colors, 3)
    );
  // }, []);
});

  return (
    <points ref={particles}>
      <bufferGeometry />
      <pointsMaterial
        // size={0.075}
        size={2.0}
        // sizeAttenuation={true}
        transparent = {true}
        depthWrite={false}
        vertexColors={true}
        // transparent={true}
        blending= {THREE.AdditiveBlending}
        // depthWrite={false}
        // vertexColors= {true}
        alphaMap={textureLoader}
        // blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export default function ThreeJSHome() {
  return (
    <Canvas style={{ height: `100vh` }}>
       {/* <ambientLight intensity={0.001} /> */}
      <Suspense fallback={null}>
        <Particles  />
      </Suspense>

      <OrbitControls />
    </Canvas>
  );
}
