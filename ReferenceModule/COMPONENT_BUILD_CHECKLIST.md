# Component Build Checklist

This checklist ensures every component is production-ready and matches reference quality standards.

---

## 📋 Pre-Build Checklist

Before you start coding a component, verify:

- [ ] I have read `LESSON_CREATION_GUIDE.md` section for this component type
- [ ] I have reviewed the corresponding component in `Schizophrenia/` or `ExampleModule/`
- [ ] I understand the `isPresentation` prop and font-scaling pattern
- [ ] I understand the lesson theme color system
- [ ] I have the exact question/content ready (from textbook)

---

## 📝 Lesson{{N}}UnderstandingCheck.tsx

**Purpose**: Test student understanding of Slides 2-3 content immediately after teaching

**Location**: `src/components/Lesson{{N}}UnderstandingCheck.tsx`

**Template to Copy From**: `Schizophrenia/components/Lesson3UnderstandingCheck.tsx`

### Build Checklist

- [ ] **File exists** at correct path
- [ ] **Imports correct**:
  ```tsx
  import React, { useState, useMemo } from 'react';
  import { CheckCircle, AlertCircle } from 'lucide-react';
  ```
- [ ] **Props interface defined**:
  ```tsx
  interface Props {
    isPresentation: boolean;
  }
  ```

### Question Content

- [ ] **5 questions total** (no more, no less)
- [ ] **3 are scenario-based** (story about a person, ask to identify/apply concept)
- [ ] **2 are matching** (match researcher/study to finding)
- [ ] **All questions test Slides 2-3 content only** (nothing from Slide 1, 5-6, etc.)
- [ ] **Each question has detailed feedback** (2-3 sentences linking to research)
- [ ] **All questions sourced from textbook** (traceable reference)

### Randomization (CRITICAL)

- [ ] **`useMemo` wraps question bank**:
  ```tsx
  const questions = useMemo(() => {
    const baseQuestions = [...];
    return baseQuestions.map(q => ({
      ...q,
      options: shuffleArray(q.options)
    }));
  }, []);
  ```
- [ ] **`shuffleArray()` function defined**:
  ```tsx
  const shuffleArray = (arr) => {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };
  ```
- [ ] **Verify randomization**: Reload page 5 times, answers should be in different order each time

### UI Structure

- [ ] **Question display** (current question shown)
- [ ] **Options clearly clickable** (button styling)
- [ ] **Feedback appears** after answer selected
- [ ] **Navigation** (Previous/Next buttons or similar)
- [ ] **Progress indicator** (Question 1 of 5, etc.)

### Color & Theme

- [ ] **Theme color applied** to:
  - [ ] Answer boxes (correct = green, wrong = red)
  - [ ] Feedback text (theme color for emphasis)
  - [ ] Borders and highlights
- [ ] **No hardcoded colors** (use `isPresentation` for scaling, use theme from constants)

### Presentation Mode

- [ ] **Accepts `isPresentation` prop**
- [ ] **Fonts scale when `isPresentation={true}`**:
  ```tsx
  <h4 className={`font-semibold ${isPresentation ? 'text-3xl' : 'text-lg'}`}>
  ```
- [ ] **Spacing increases** in presentation mode
- [ ] **Test**: Toggle presentation mode → fonts enlarge

### Testing

- [ ] **No TypeScript errors** (`npm run dev` → no red in console)
- [ ] **No import errors** (all imports resolve)
- [ ] **All 5 questions render** without errors
- [ ] **Clicking answers** triggers feedback
- [ ] **Navigation works** (previous/next buttons)
- [ ] **Answers randomize** on page reload (test 5 times)

---

## 🎮 Lesson{{N}}Simulation.tsx (or specialized sim)

**Purpose**: Interactive application of Slides 2-3 concepts

**Location**: `src/components/Lesson{{N}}Simulation.tsx`

**Template Options**:
- Copy from `Schizophrenia/components/SynapseBuilder.tsx` (drag-drop)
- Copy from `Schizophrenia/components/StroopSim.tsx` (timed challenge)
- Copy from `Schizophrenia/components/CBT_TherapistSim.tsx` (dialogue tree)

### Interaction Quality

- [ ] **At least 3 interactive elements** (not just radio buttons)
- [ ] **Visual feedback on interaction**:
  - [ ] Colors change (e.g., button turns green when correct)
  - [ ] Animations play (e.g., particle effects, icon appearing)
  - [ ] Score/progress updates visibly
- [ ] **Error handling** (hints if student clicks wrong area)
- [ ] **Success state** (clear indication when complete or scored)

### Pedagogical Value

- [ ] **Teaches a concept** from Slides 2-3 (not just assesses)
- [ ] **Realistic scenario** (authentic to discipline)
- [ ] **Multiple attempts possible** (reset button)
- [ ] **Feedback is constructive** (helps learning, not just right/wrong)

### State Management

- [ ] **Component-level state for interactions**:
  ```tsx
  const [score, setScore] = useState(0);
  const [stage, setStage] = useState(0);
  const [feedback, setFeedback] = useState('');
  ```
- [ ] **State updates on user interaction** (immediate feedback)
- [ ] **Reset functionality** to restart simulation

### Content

- [ ] **Instructions clear** (student knows what to do)
- [ ] **All text/content sourced from textbook**
- [ ] **Examples realistic** to psychology concepts

### Color & Theme

- [ ] **Theme color applied** to:
  - [ ] Interactive elements (buttons, zones)
  - [ ] Feedback text (success = green, error = red)
  - [ ] Visual highlights
- [ ] **Consistent with lesson theme**

### Presentation Mode

- [ ] **Accepts `isPresentation` prop**
- [ ] **All fonts scale up**:
  ```tsx
  <p className={`${isPresentation ? 'text-3xl' : 'text-base'}`}>
  ```
- [ ] **Interactive elements enlarge** (buttons, click zones)
- [ ] **Readable from 20+ feet distance** in presentation mode

### Testing

- [ ] **No TypeScript errors**
- [ ] **No import errors**
- [ ] **Interactive elements respond** to clicks/interactions
- [ ] **Score/feedback displays** correctly
- [ ] **Reset button works** (resets state to initial)
- [ ] **Presentation mode**: fonts enlarge, stays readable
- [ ] **No performance issues** (animations smooth)

---

## 📊 Do Now Quiz Data (in constants.tsx)

**Purpose**: 5 retrieval-practice questions from previous lessons

**Location**: `src/constants.tsx` (alongside other lesson data)

**Pattern**:
```tsx
export const lesson{{N}}DoNow = [
  { id: 1, question: "...", options: ["A", "B", "C"], correct: 0 },
  { id: 2, question: "...", options: ["A", "B", "C"], correct: 1 },
  // ... 3 more questions
];
```

### Content Quality

- [ ] **5 questions exactly**
- [ ] **ALL from PREVIOUS lessons** (e.g., Lesson 2 Do Now tests Lessons 1)
- [ ] **NO current lesson content** (save that for Understanding Check)
- [ ] **Variety of topics** (don't repeat same concept)
- [ ] **Mix of question types** (matching, MCQ, scenario, definition)
- [ ] **All from textbook** (traceable references)

### Formatting

- [ ] **Questions are clear** and unambiguous
- [ ] **Options are plausible** (not obviously wrong)
- [ ] **Exactly 3 options per question** (standard format)
- [ ] **Correct answer indexed correctly** (0, 1, or 2)

---

## 📚 Evidence Grid (Slide 7)

**Purpose**: Show research studies supporting Slides 2-3 concepts

**Location**: Usually embedded in `App.tsx` or separate `Lesson{{N}}EvidenceGrid.tsx`

**Pattern**: Grid or card layout with research details

### Research Quality

- [ ] **3-4 studies included** (minimum)
- [ ] **All studies from textbook** (traceable references)
- [ ] **Each study includes**:
  - [ ] Researcher name(s)
  - [ ] Year conducted
  - [ ] Key finding (in student-friendly language)
  - [ ] Relevance to Slides 2-3 concepts
  - [ ] Limitations or evaluation points
- [ ] **Studies support teaching content**

### Presentation

- [ ] **Visual hierarchy clear** (title, year, findings, limitations)
- [ ] **Color-coded or icon-coded** for quick scanning
- [ ] **Presentation mode support** (scales up)

---

## 🧪 Critical Evaluation Slide (Slide 8)

**Purpose**: Discuss strengths, limitations, and alternative explanations

**Location**: Usually embedded in `App.tsx` as text slide or separate component

### Content Quality

- [ ] **Strengths listed** (why this theory/evidence is good)
- [ ] **Limitations listed** (weaknesses, conditions where it doesn't apply)
- [ ] **Alternative explanations** (other theories or approaches)
- [ ] **All points from textbook** (traceable references)
- [ ] **Linked to research** (refers back to studies on Slide 7)

### Educational Value

- [ ] **Develops critical thinking** (students see nuance)
- [ ] **Exam-relevant** (AO2/AO3 skills)

---

## 📝 Essay Plan Slide (Slide 9)

**Purpose**: Show exam-style essay structure and AO breakdown

**Location**: Usually `Lesson{{N}}EssayPlan.tsx` or embedded in `App.tsx`

### Content

- [ ] **Sample essay question** (realistic A-Level question)
- [ ] **AO1 points** (knowledge) - 3-4 points listed
- [ ] **AO3 points** (evaluation) - 3-4 points listed
- [ ] **Essay structure** (introduction, 3 body paragraphs, conclusion)
- [ ] **Mark allocation** (e.g., "AO1: 9 marks, AO2: 9 marks, AO3: 12 marks")

### Educational Value

- [ ] **Directly helps exam preparation**
- [ ] **Shows how to structure answers**
- [ ] **Links back to evidence/evaluation**

---

## 📱 Responsive Design & Presentation Mode

**Every component** must support two modes:

### Edit/Learning Mode
- Normal font sizes
- Full sidebar visible
- Standard spacing
- Single-column for phones, multi-column for desktop

### Presentation Mode (`isPresentation={true}`)
- **Fonts 1.5-2x larger**
- **Sidebar hidden** (full-screen)
- **Increased spacing/padding**
- **Readable from 20+ feet** (test by standing back)
- **Large touch targets** (buttons 60px+ height)

**Pattern in every component**:
```tsx
<div className={`
  transition-all duration-300
  ${isPresentation ? 'p-12 text-2xl' : 'p-6 text-base'}
`}>
  Content
</div>
```

---

## 🧪 Testing Procedures

### Before Submitting

```bash
# Test 1: No errors
npm run dev
# Open DevTools (F12) → Console tab
# ❌ No red errors
# ✅ All pages load

# Test 2: Do Now Quiz
# Go to slide 1 (Do Now Quiz)
# Answer all 5 questions
# Click "Submit Answers"
# Score displays correctly
# Click "Reveal All Answers"
# All answers reveal with correct highlighting

# Test 3: Understanding Check
# Go to Understanding Check slide
# Answer all 5 questions
# Verify feedback appears
# Reload page (F5)
# Answer order is different (randomized)
# Repeat reload 5 times

# Test 4: Simulation
# Go to simulation slide
# Interact with 3+ elements
# Verify visual feedback occurs
# Get to success state
# Click reset (if available)
# Verify state resets

# Test 5: Presentation Mode
# Click Projector button (toggle presentation)
# Fonts should be noticeably larger
# Stand back from screen
# Can you read everything from 6-8 feet away?
# Arrow keys navigate slides
# Escape key exits presentation
# All interactive elements still work

# Test 6: Build succeeds
npm run build
# ✅ dist/ folder created
# ❌ No errors in build output
```

---

## ✅ Final Verification Checklist

Before marking component complete:

- [ ] All files created and exist at correct paths
- [ ] All imports have corresponding files (no ghost imports)
- [ ] TypeScript: `npm run dev` shows 0 errors
- [ ] Do Now Quiz: 5 questions, both buttons present, score displays
- [ ] Understanding Check: 5 questions, answers randomize (test 5x), feedback present
- [ ] Simulation: 3+ interactive elements, visual feedback, success state
- [ ] Theme colors applied consistently
- [ ] All fonts scale in presentation mode
- [ ] Keyboard navigation works (arrow keys in App.tsx)
- [ ] Projector button visible and toggles presentation mode
- [ ] Build: `npm run build` succeeds with no errors
- [ ] No console warnings about missing props or unused variables

---

## 🚀 Submission Checklist

When ready to ship this module:

1. [ ] All 10 lessons (Lesson 1-10 or N lessons) complete
2. [ ] All components built and tested
3. [ ] No placeholder imports (every import is a real file)
4. [ ] `package.json` updated (name, displayName)
5. [ ] `metadata.json` updated (topic, year, board)
6. [ ] `constants.tsx` has all Do Now quizzes
7. [ ] `App.tsx` has proper presentation mode logic
8. [ ] All lessons have color theme applied
9. [ ] `npm run dev` works (no errors, all slides navigate)
10. [ ] `npm run build` succeeds
11. [ ] README.md updated with topic description
12. [ ] GitHub Actions workflow configured
13. [ ] Ready for production!

---

**Last Updated**: January 12, 2026
