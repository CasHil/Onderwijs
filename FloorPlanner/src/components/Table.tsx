import React from "react";
import { Text } from "@react-three/drei";
import * as THREE from "three";

interface TableProps {
  id: string;
  position: [number, number, number];
  color: string;
  text?: string;
  hasComputer?: boolean;
}

const Table = ({
  position,
  color,
  text: student,
  hasComputer = false,
}: TableProps) => (
  <group position={new THREE.Vector3(...position)}>
    {/* Tabletop */}
    <mesh position={[0, 1, 0]}>
      <boxGeometry args={[4, 0.2, 2]} /> {/* Rectangular tabletop */}
      <meshStandardMaterial color={color} />
    </mesh>
    {/* Legs */}
    <mesh position={[-1.9, 0.5, -0.9]}>
      <boxGeometry args={[0.1, 1, 0.1]} />
      <meshStandardMaterial color={color} />
    </mesh>
    <mesh position={[1.9, 0.5, -0.9]}>
      <boxGeometry args={[0.1, 1, 0.1]} />
      <meshStandardMaterial color={color} />
    </mesh>
    <mesh position={[-1.9, 0.5, 0.9]}>
      <boxGeometry args={[0.1, 1, 0.1]} />
      <meshStandardMaterial color={color} />
    </mesh>
    <mesh position={[1.9, 0.5, 0.9]}>
      <boxGeometry args={[0.1, 1, 0.1]} />
      <meshStandardMaterial color={color} />
    </mesh>
    {/* Computer */}
    {hasComputer && (
      <>
        {/* Monitor */}
        <mesh position={[0, 1.6, 0]}>
          <boxGeometry args={[1, 0.6, 0.05]} /> {/* Monitor screen */}
          <meshStandardMaterial color="black" />
        </mesh>
        <mesh position={[0, 1.35, 0]}>
          <boxGeometry args={[0.1, 0.5, 0.1]} /> {/* Monitor stand */}
          <meshStandardMaterial color="black" />
        </mesh>
        <mesh position={[0, 1.2, 0]}>
          <boxGeometry args={[0.4, 0.05, 0.4]} /> {/* Monitor base */}
          <meshStandardMaterial color="black" />
        </mesh>
        {/* Keyboard */}
        <mesh position={[0, 1.15, 0.5]}>
          <boxGeometry args={[0.8, 0.05, 0.3]} /> {/* Keyboard */}
          <meshStandardMaterial color="darkgray" />
        </mesh>
        {/* CPU */}
        <mesh position={[-0.6, 1.3, 0]}>
          <boxGeometry args={[0.2, 0.6, 0.8]} /> {/* CPU */}
          <meshStandardMaterial color="gray" />
        </mesh>
      </>
    )}
    {student && (
      <Text position={[0, 2.5, 0]} fontSize={0.5} color="white">
        {student}
      </Text>
    )}
  </group>
);

export { Table };
export type { TableProps };
