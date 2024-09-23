import React from "react";
import * as THREE from "three";

const DIMENSION = 50;

const Environment = () => {
  const wallMaterial = new THREE.MeshStandardMaterial({
    color: "#ADD8E6",
    side: THREE.BackSide,
  });
  const floorMaterial = new THREE.MeshStandardMaterial({ color: "gray" });

  return (
    <>
      {/* Skybox */}
      <mesh>
        <boxGeometry args={[DIMENSION * 5, DIMENSION * 5, DIMENSION * 5]} />
        <meshStandardMaterial {...wallMaterial} />
        <meshStandardMaterial {...wallMaterial} />
        <meshStandardMaterial {...wallMaterial} />
        <meshStandardMaterial {...wallMaterial} />
        <meshStandardMaterial {...wallMaterial} />
        <meshStandardMaterial {...wallMaterial} />
      </mesh>

      {/* Floor */}
      <mesh position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[DIMENSION, DIMENSION]} />
        <meshStandardMaterial {...floorMaterial} />
      </mesh>
    </>
  );
};

export default Environment;
