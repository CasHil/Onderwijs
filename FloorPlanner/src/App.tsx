import { Canvas } from "@react-three/fiber";
import { Text, OrbitControls } from "@react-three/drei";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import * as THREE from "three";
import "./App.css"; // Import for CSS styles

const DIMENSION = 50;
// Table interface definition
// Table interface definition
interface TableProps {
  id: string;
  position: [number, number, number];
  color: string;
  text?: string;
  hasComputer?: boolean; // Optional argument with default value
}

// Table component that displays a table and optional student name
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
      <mesh position={[0, 1.3, 0]}>
        <boxGeometry args={[0.5, 0.3, 0.5]} /> {/* Computer dimensions */}
        <meshStandardMaterial color="gray" />
      </mesh>
    )}
    {student && (
      <Text position={[0, 2.5, 0]} fontSize={0.5} color="white">
        {student}
      </Text>
    )}
  </group>
);

// Classroom interface definition
interface ClassroomProps {
  tables: TableProps[];
}

// Classroom component that renders multiple tables
const Classroom = ({ tables }: ClassroomProps) => (
  <>
    {tables.map((table) => (
      <Table
        id={table.id}
        key={table.id}
        position={table.position}
        color={table.color}
        text={table.text}
      />
    ))}
  </>
);

// Walls and floor component
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

// Utility to generate random color for each group
const getRandomColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

// App component with group handling and rendering logic
const App = () => {
  const [groupSize, setGroupSize] = useState<number>(4); // Default group size
  const students: string[] = Array.from(
    { length: 25 },
    (_, i) => `Student ${i + 1}`
  ); // 30 students
  const groupColors: string[] = Array.from(
    { length: Math.ceil(students.length / groupSize) },
    () => getRandomColor()
  );

  // Function to split students into balanced groups
  const groupStudents = (students: string[], groupSize: number): string[][] => {
    const groups: string[][] = [];
    const groupCount = Math.floor(students.length / groupSize);
    const remaining = students.length % groupSize;

    // Add groups of groupSize
    for (let i = 0; i < groupCount; i++) {
      groups.push(students.slice(i * groupSize, (i + 1) * groupSize));
    }

    // Distribute remaining students across the groups if necessary
    if (remaining > 0) {
      for (let i = 0; i < remaining; i++) {
        groups[i].push(students[groupSize * groupCount + i]);
      }
    }
    return groups;
  };

  const groups = groupStudents(students, groupSize);

  // Generate table data based on the groups
  const tables: TableProps[] = groups.flatMap((group, index) => {
    const color = groupColors[index]; // Assign a color to each group
    const joinedStudentNames = group.join(", ");
    const margin = 1;
    const effectiveDimension = DIMENSION - 2 * margin;

    return {
      id: uuidv4(),
      position: [
        margin + ((index % 5) * effectiveDimension) / 4 - DIMENSION / 2,
        1,
        margin +
          (Math.floor(index / 5) * effectiveDimension) / 4 -
          DIMENSION / 2,
      ],
      color: color,
      text: joinedStudentNames,
      hasComputer: true,
    };
  });

  return (
    <>
      <Canvas className="canvas-fullscreen">
        <ambientLight intensity={0.9} />
        <Environment />
        <Classroom tables={tables} />
        <OrbitControls />
      </Canvas>
      <div className="controls">
        <label>
          Group Size:
          <input
            type="number"
            value={groupSize}
            onChange={(e) => setGroupSize(Number(e.target.value))}
            min={1}
            max={students.length}
          />
        </label>
      </div>
    </>
  );
};

export default App;
