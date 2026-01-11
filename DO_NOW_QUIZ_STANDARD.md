# DO NOW QUIZ STANDARD

This document defines the **IDENTICAL Do Now Quiz pattern** used across all modules.

---

## 🎯 PRINCIPLE

The Do Now Quiz is **Phase 1: Activation** - it activates prior knowledge through spaced retrieval. It is:
- ✅ Always 5 questions
- ✅ Always from PREVIOUS lessons ONLY
- ✅ No new content (not testing the current lesson)
- ✅ Mix of topics and question types
- ✅ 5-minute time allocation

---

## 📋 STRUCTURE

### Location
- **Position**: Slide 1 of every lesson
- **Data**: Defined as constants in `/src/App.tsx`
- **Component**: `DoNowQuiz.tsx` (reusable, never modified)

### Data Format

```typescript
const lesson[X]DoNow = [
  { 
    id: 1, 
    question: "Question text from prior lesson", 
    options: ["Option A", "Option B", "Option C"], 
    correct: 0  // Index of correct answer (0, 1, or 2)
  },
  // ... 4 more questions
];
```

### Example: Lesson 2 Do Now (for Schizophrenia)

```typescript
const lesson2DoNow = [
  {
    id: 1,
    question: "From Lesson 1: What does DSM-5 require for schizophrenia diagnosis?",
    options: [
      "At least ONE positive symptom",
      "At least TWO negative symptoms",
      "At least THREE symptoms total"
    ],
    correct: 0
  },
  {
    id: 2,
    question: "From Lesson 1: Which classification system recognizes schizophrenia subtypes?",
    options: [
      "DSM-5",
      "ICD-10",
      "Both equally"
    ],
    correct: 1
  },
  {
    id: 3,
    question: "From Lesson 1: Which symptom type involves distorted perceptions?",
    options: [
      "Positive symptoms",
      "Negative symptoms",
      "Cognitive symptoms"
    ],
    correct: 0
  },
  {
    id: 4,
    question: "From Lesson 1: What is a delusion of reference?",
    options: [
      "Belief that you are a famous person",
      "Belief that external events communicate to you",
      "Belief that you are being followed"
    ],
    correct: 1
  },
  {
    id: 5,
    question: "From Lesson 1: Auditory hallucinations are most common in which symptom category?",
    options: [
      "Negative symptoms",
      "Positive symptoms",
      "Both equally"
    ],
    correct: 1
  }
];
```

---

## 🔴 CRITICAL RULES

### Rule 1: Prior Lesson Content ONLY
- ✅ Questions test Lesson [X-1] and Lesson [X-2]
- ❌ NO questions about current lesson (Lesson [X])
- ❌ NO new concepts not yet taught

**Why**: Do Now is for **retrieval**, not introduction. It activates what students already know.

### Rule 2: Exactly 5 Questions
- ✅ Always exactly 5
- ❌ Never 3, 4, 6, or any other number
- Fits 5-minute allocation with 1 minute per question

### Rule 3: Mix of Content & Types
- ✅ Questions from at least 2 different prior lessons
- ✅ Variety of question types (not all definitions)
- ✅ Range of difficulty (some easy, some harder)
- ❌ Don't repeat the same type 5 times

**Example variety**:
1. Concept definition (easy)
2. Research detail (medium)
3. Scenario application (harder)
4. Matching/pairing (medium)
5. Integration across lessons (harder)

### Rule 4: 3-Option Multiple Choice
- ✅ Always 3 options per question
- ✅ Plausible distractors (not obviously wrong)
- ✅ Only 1 correct answer per question
- ❌ Never 4-5 options, never true/false

**Why**: 3 options is the sweet spot:
- Statistically harder than true/false
- Faster to read than 4-5 options
- 5 minutes is sufficient for 5 questions

---

## 📊 QUESTION DISTRIBUTION

### Lesson 1 (No prior lesson)
Lesson 1 is unique: it has no prior lessons to retrieve from.

**Option 1: General Psychology Knowledge**
```typescript
const lesson1DoNow = [
  {
    id: 1,
    question: "Define what 'psychology' means",
    options: ["Study of behavior and mind", "Study of history", "Study of drugs"],
    correct: 0
  },
  // ... questions on general psychology, research methods, etc.
];
```

**Option 2: Topic-Adjacent Knowledge** (If teaching psychology within a topic)
```typescript
const lesson1DoNow = [
  {
    id: 1,
    question: "What does the nervous system do?",
    options: [
      "Transmits signals throughout the body",
      "Produces hormones",
      "Filters toxins"
    ],
    correct: 0
  },
  // ... questions on biological basics
];
```

Choose based on context. The goal is still activation/retrieval, just of general knowledge.

### Lesson 2+
Retrieve from Lesson 1 and earlier.

**Distribution Pattern**:
- Questions 1-3: From Lesson [X-1] (most recent)
- Questions 4-5: From Lesson [X-2] and earlier

**Example for Lesson 3**:
- Q1: Lesson 2 concept
- Q2: Lesson 2 research
- Q3: Lesson 2 application
- Q4: Lesson 1 definition
- Q5: Lesson 1 + 2 integration

---

## 🎯 QUESTION DESIGN GUIDELINES

### DO ✅

1. **Reference specific content from prior lessons**
   ```
   "From Lesson 1: What does DSM-5 require..."
   ```
   - Helps students remember they're retrieving prior knowledge

2. **Use varied question types**
   - Definitions: "What is...?"
   - Research: "Which study showed...?"
   - Application: "In this scenario..."
   - Mechanism: "How does...?"
   - Classification: "Which category...?"

3. **Include realistic detail**
   ```
   "From Lesson 2: The study by [Author] found that..."
   - Include author names and years if available
   - Reference specific findings, not generic claims

4. **Vary difficulty level**
   - Easy (1-2): Definition or recall of key term
   - Medium (3): Application or detail recall
   - Harder (4-5): Integration or interpretation

### DON'T ❌

1. **Test current lesson content**
   ```
   // WRONG
   "From Lesson 3: What is..." ← This is Lesson 3, not prior
   ```

2. **Ask about upcoming slides**
   ```
   // WRONG
   "Based on the simulation you're about to see..."
   ```

3. **Copy verbatim from textbook**
   ```
   // Wrong - word-for-word copy
   // Better - paraphrase or apply the concept
   ```

4. **Include trick questions**
   ```
   // WRONG
   "All of the above" / "None of the above" options
   // Better - clear distractors
   ```

5. **Make all three options equally valid**
   ```
   // WRONG
   Q: "What does dopamine do?"
   A) Transmits signals  B) Regulates mood  C) Affects movement
   ← All correct!
   
   // Better
   Q: "What is dopamine's primary role?"
   A) Transmits signals ← Specific and best
   B) Prevents sleep  ← Plausible but wrong
   C) Produces energy  ← Plausible but wrong
   ```

---

## 💡 EXAMPLE: Multi-Lesson Do Now Questions

### Schizophrenia - Lesson 3 Do Now
Tests Lesson 2 (Positive Symptoms) and Lesson 1 (Diagnosis):

```typescript
const lesson3DoNow = [
  // Lesson 2 content (questions 1-3)
  {
    id: 1,
    question: "From Lesson 2: Auditory hallucinations where the person hears their own thoughts repeated are called:",
    options: [
      "Echo de la pensée",
      "Thought broadcasting",
      "Command hallucinations"
    ],
    correct: 0
  },
  {
    id: 2,
    question: "From Lesson 2: In the study by Schneider, first-rank symptoms included all EXCEPT:",
    options: [
      "Thought insertion",
      "Poverty of speech",
      "Auditory hallucinations commenting on actions"
    ],
    correct: 1
  },
  {
    id: 3,
    question: "From Lesson 2: What is the difference between a hallucination and a delusion?",
    options: [
      "Hallucinations are false perceptions; delusions are false beliefs",
      "Hallucinations are about the past; delusions about the future",
      "Hallucinations are more serious than delusions"
    ],
    correct: 0
  },
  
  // Lesson 1 content (questions 4-5)
  {
    id: 4,
    question: "From Lesson 1: According to DSM-5, schizophrenia requires at least how many positive symptoms?",
    options: [
      "At least one",
      "At least two",
      "At least three"
    ],
    correct: 0
  },
  {
    id: 5,
    question: "From Lesson 1: The ICD-10 differs from DSM-5 because it allows diagnosis based on:",
    options: [
      "Only positive symptoms",
      "Only negative symptoms",
      "Two negative symptoms alone"
    ],
    correct: 2
  }
];
```

---

## 🔄 COMPONENT INTEGRATION

### In App.tsx

```tsx
import { lesson1DoNow, lesson2DoNow, lesson3DoNow, ... } from './constants';

export default function App() {
  const [currentLesson, setCurrentLesson] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);

  const getDoNowQuestions = (lessonId: number) => {
    switch(lessonId) {
      case 1: return lesson1DoNow;
      case 2: return lesson2DoNow;
      case 3: return lesson3DoNow;
      // ... etc
      default: return [];
    }
  };

  const renderLesson = () => {
    switch(currentSlide) {
      case 1:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader
              phase="Phase 1: Activation"
              title="Do Now Quiz"
              icon={Clock}
              time="5 MINS"
              isPresentation={isPresentation}
            />
            <DoNowQuiz
              questions={getDoNowQuestions(currentLesson)}
              isPresentation={isPresentation}
            />
          </Slide>
        );
      // ... other slides
    }
  };
}
```

### DoNowQuiz Component

The `DoNowQuiz.tsx` component (reusable, copied from ReferenceModule) handles:
- Question display
- Option selection
- Answer feedback (correct/incorrect)
- Navigation to next question
- Progress tracking

**Pattern**: Pass questions array, component handles the rest.

---

## ✅ QUALITY CHECKLIST

For each lesson's Do Now Quiz:

- [ ] Exactly 5 questions
- [ ] All questions from PREVIOUS lessons (not current)
- [ ] Mix of question types (definitions, research, application, etc.)
- [ ] Range of difficulty (easy to harder)
- [ ] Each question has exactly 3 options
- [ ] Only 1 correct answer per question
- [ ] Distractors are plausible (not obviously wrong)
- [ ] Questions test understanding, not trivia
- [ ] References lesson numbers explicitly ("From Lesson X:")
- [ ] No questions about current lesson content
- [ ] All questions are at appropriate depth for GCSE/A Level

---

## 🎬 USER EXPERIENCE

### Student Flow (Schizophrenia, Lesson 2)

1. Student starts Lesson 2
2. Sees "Phase 1: Activation - Do Now Quiz" header
3. Reads Q1: "From Lesson 1: What does DSM-5 require..."
4. Selects an option (A, B, or C)
5. Sees feedback: "Correct!" or explanation of why incorrect
6. Clicks "Next" to go to Q2
7. Repeats for Q3, Q4, Q5
8. Completes Do Now Quiz
9. Advances to Slide 2 (Concept 1 teaching)

**Time**: ~5 minutes (1 min per question)

---

## 🔗 INTEGRATION WITH LESSON STRUCTURE

```
Slide 0: Title Slide
Slide 1: Do Now Quiz ← YOU ARE HERE
         Phase 1: Activation
         Questions from Lesson [X-1] and [X-2]
Slide 2: Concept 1 (NEW content from Lesson [X])
         Phase 2: Concept
Slide 3: Concept 2
         Phase 2: Concept
... etc
```

The Do Now creates a boundary between:
- **Activation**: What students already know (Slide 1)
- **New Teaching**: What they're learning today (Slides 2-3)

---

**Version**: 1.0 (Do Now Standard - Finalized)
**Last Updated**: January 2026
