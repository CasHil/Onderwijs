const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const groupStudents = (students: string[], groupSize: number): string[][] => {
  const shuffledStudents = shuffleArray([...students]); // Shuffle the students array
  const groups: string[][] = [];
  const groupCount = Math.floor(shuffledStudents.length / groupSize);
  const remaining = shuffledStudents.length % groupSize;

  // Add groups of groupSize
  for (let i = 0; i < groupCount; i++) {
    groups.push(shuffledStudents.slice(i * groupSize, (i + 1) * groupSize));
  }

  // Distribute remaining students across the groups if necessary
  if (remaining > 0) {
    for (let i = 0; i < remaining; i++) {
      groups[i].push(shuffledStudents[groupSize * groupCount + i]);
    }
  }
  return groups;
};

export default groupStudents;
