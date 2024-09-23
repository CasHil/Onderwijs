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

export default groupStudents;
