import React, { useRef, useEffect } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";

const Circle = () => {
  const cubeGroupRef = useRef<THREE.Group>();
  const cubeRef = useRef<THREE.Mesh>();
  const sphereRef = useRef<THREE.Mesh>();

  useEffect(() => {
    const rotateCube = () => {
      // Rotate the cube on the corner (vertex)
      if (cubeGroupRef.current) {
        cubeGroupRef.current.rotation.x += 0.005;
        cubeGroupRef.current.rotation.y += 0.005;
      }
    };

    const rotateSphere = () => {
      // Rotate the sphere inside the cube
      if (sphereRef.current) {
        sphereRef.current.rotation.x += 0.01;
        sphereRef.current.rotation.y += 0.01;
      }
    };

    const animate = () => {
      rotateCube();
      rotateSphere();
      requestAnimationFrame(animate);
    };

    animate();

    // Clean up the animation when the component unmounts
    return () => cancelAnimationFrame(animate);
  }, []);

  return (
    <Canvas style={{ background: "#fff" }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <group ref={cubeGroupRef}>
        <mesh ref={cubeRef}>
          <boxGeometry args={[2.5, 2.5, 2.5]} />
          <meshBasicMaterial color={0x000000} wireframe />
        </mesh>
      </group>
      <group>
        <mesh ref={sphereRef} position={[0, 0, 0]}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshBasicMaterial color={0x354853} wireframe />
        </mesh>
      </group>
      <OrbitControls
        enableZoom={false}
        args={[undefined, cubeGroupRef.current]}
      />
    </Canvas>
  );
};

export default Circle;
