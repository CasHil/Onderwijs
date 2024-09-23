import React from "react";
import { Table } from "./Table";

interface TableProps {
  id: string;
  position: [number, number, number];
  color: string;
  text?: string;
  hasComputer?: boolean;
}

interface ClassroomProps {
  tables: TableProps[];
}

const Classroom = ({ tables }: ClassroomProps) => (
  <>
    {tables.map((table) => (
      <Table
        id={table.id}
        key={table.id}
        position={table.position}
        color={table.color}
        text={table.text}
        hasComputer={table.hasComputer}
      />
    ))}
  </>
);

export default Classroom;
