// Color theme mapping for all lessons
export const lessonThemes: Record<number, { color: string; name: string }> = {
  1: { color: 'cyan', name: 'Cyan' },
  2: { color: 'amber', name: 'Amber' },
  3: { color: 'orange', name: 'Orange' },
  4: { color: 'red', name: 'Red' },
  5: { color: 'yellow', name: 'Yellow' },
  6: { color: 'teal', name: 'Teal' },
  7: { color: 'purple', name: 'Purple' },
  8: { color: 'slate', name: 'Slate' }
};

// Do Now Quiz data - from previous lessons
export const lesson1DoNow = [
  { id: 1, question: 'Prior knowledge question 1', options: ['A', 'B', 'C'], correct: 0 },
  { id: 2, question: 'Prior knowledge question 2', options: ['A', 'B', 'C'], correct: 1 },
  { id: 3, question: 'Prior knowledge question 3', options: ['A', 'B', 'C'], correct: 2 },
  { id: 4, question: 'Prior knowledge question 4', options: ['A', 'B', 'C'], correct: 0 },
  { id: 5, question: 'Prior knowledge question 5', options: ['A', 'B', 'C'], correct: 1 }
];

export const lesson2DoNow = [
  { id: 1, question: 'Topic from Lesson 1', options: ['A', 'B', 'C'], correct: 0 },
  { id: 2, question: 'Topic from Lesson 1', options: ['A', 'B', 'C'], correct: 1 },
  { id: 3, question: 'Topic from prior content', options: ['A', 'B', 'C'], correct: 2 },
  { id: 4, question: 'Integrated retrieval', options: ['A', 'B', 'C'], correct: 0 },
  { id: 5, question: 'Spaced retrieval', options: ['A', 'B', 'C'], correct: 1 }
];

// Lessons metadata
export const lessons = [
  { id: 1, title: '01: Lesson Title', active: true, complete: false },
  { id: 2, title: '02: Lesson Title', active: false, complete: false },
  { id: 3, title: '03: Lesson Title', active: false, complete: false },
  { id: 4, title: '04: Lesson Title', active: false, complete: false },
  { id: 5, title: '05: Lesson Title', active: false, complete: false },
  { id: 6, title: '06: Lesson Title', active: false, complete: false },
  { id: 7, title: '07: Lesson Title', active: false, complete: false },
  { id: 8, title: '08: Lesson Title', active: false, complete: false }
];
