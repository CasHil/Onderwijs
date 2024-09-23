import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { v4 as uuidv4 } from "uuid";
import { TableProps } from "./components/Table"; // Ensure this import is correct
import Classroom from "./components/Classroom";
import Environment from "./components/Environment";
import getRandomColour from "./utils/getRandomColour";
import groupStudents from "./utils/groupStudents";
import "./App.css";

const DIMENSION = 50;

const App = () => {
  const [groupSize, setGroupSize] = useState<number>(4); // Default group size
  const students: string[] = Array.from(
    { length: 25 },
    (_, i) => `Student ${i + 1}`
  ); // 25 students
  const groupColors: string[] = Array.from(
    { length: Math.ceil(students.length / groupSize) },
    () => getRandomColour()
  );

  const groups = groupStudents(students, groupSize);

  // Generate table data based on the groups
  const tables = groups.flatMap((group, index) => {
    const color = groupColors[index]; // Assign a color to each group
    const joinedStudentNames = group.join(", ");
    const margin = 1;
    const effectiveDimension = DIMENSION - 2 * margin;

    return {
      id: uuidv4(),
      position: [
        margin + ((index % 5) * effectiveDimension) / 4 - DIMENSION / 2,
        0,
        margin +
          (Math.floor(index / 5) * effectiveDimension) / 4 -
          DIMENSION / 2,
      ],
      color: color,
      text: joinedStudentNames,
      hasComputer: true,
    } as TableProps;
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
