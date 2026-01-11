# AGENT IMPLEMENTATION GUIDE: Complete Walkthrough

This is a **step-by-step guide** for AI agents implementing a new psychology lesson module using the Lesson-Builder system.

---

## 📖 READING ORDER (Essential)

Before implementing, read these documents in this exact order:

```
1. This guide (you are here) ← Overview
2. MASTER_AGENT_PROMPT.md ← Mission brief
3. STANDARDIZATION_FRAMEWORK.md ← Core principles
4. SIDEBAR_NAVIGATION_STANDARD.md ← Navigation pattern
5. DO_NOW_QUIZ_STANDARD.md ← Slide 1 pattern
6. UNDERSTANDING_CHECK_STANDARD.md ← Slide 4 (CRITICAL)
7. SIMULATION_FRAMEWORK.md ← Slides 5-6 patterns
8. EVIDENCE_GRID_ESSAY_PLAN.md ← Slides 7, 9 patterns
9. QUICK_CHECKLIST.md ← Final verification
```

---

## 🗂️ PHASE 1: SETUP (15 minutes)

### 1.1 Copy Template
```bash
cp -r ReferenceModule /path/to/[TopicName]
cd /path/to/[TopicName]
npm install
npm run dev
```

### 1.2 Update Metadata Files

**File: `package.json`**
```json
{
  "name": "[topic-name-lowercase]",
  "displayName": "[Topic Name]",
  "description": "Interactive psychology lesson on [Topic]: [brief description]",
  "version": "1.0.0",
  // Keep rest the same
}
```

**File: `metadata.json`**
```json
{
  "displayName": "[Topic Name]",
  "description": "AQA GCSE/A Level Psychology: [Topic] - [Number] complete lessons with interactive simulations and assessments",
  "topic": "[Topic]",
  "subject": "Psychology",
  "level": "GCSE/A Level",
  "lessons": [NUMBER]
}
```

**File: `src/App.tsx` - First 50 lines**
Update the lesson array:
```typescript
const lessons = [
  { id: 1, title: "Lesson 1: [Title]" },
  { id: 2, title: "Lesson 2: [Title]" },
  // ... etc for all lessons
];
```

### 1.3 Assign Theme Colors

Create a mapping in `/src/App.tsx`:
```typescript
const lessonThemes: Record<number, { color: string }> = {
  1: { color: 'red' },      // Lesson 1 uses red
  2: { color: 'orange' },   // Lesson 2 uses orange
  3: { color: 'amber' },    // etc
  4: { color: 'yellow' },
  5: { color: 'green' },
  6: { color: 'cyan' },
  7: { color: 'purple' },
};
```

---

## 📚 PHASE 2: IDENTIFY SOURCE MATERIAL (30 minutes)

### 2.1 Get Textbook
Obtain the AQA GCSE or A Level textbook for your topic.

**Example: Schizophrenia**
- Textbook: "AQA A Level Psychology" chapter on Schizophrenia
- Identifies 2 major concepts per lesson
- Lists key research studies
- Provides clinical examples

### 2.2 Map Lessons to Textbook
For a 7-lesson module on [TOPIC]:

```
Lesson 1: [Concept A] - Textbook chapter X pages Y-Z
Lesson 2: [Concept B] - Textbook chapter X pages Z-AA
Lesson 3: [Concept C] - Textbook chapter Y pages A-B
Lesson 4: [Concept D] - Textbook chapter Y pages B-C
Lesson 5: [Concept E] - Textbook chapter Y pages C-D
Lesson 6: [Concept F] - Textbook chapter Z pages E-F
Lesson 7: [Synthesis] - Synthesis of Lessons 1-6
```

### 2.3 Extract Research
For each lesson, identify:
- 2 major concepts (Slides 2-3)
- 3-4 research studies (Slide 7)
- Real author names and years
- Actual findings (not paraphrased generically)

**Example (Schizophrenia Lesson 1)**:
- Concept 1: DSM-5 Classification
- Concept 2: ICD-10 Classification
- Research: Schneider (1959), APA (2013), WHO (1992)

---

## 🎯 PHASE 3: IMPLEMENT EACH LESSON (6-8 hours per lesson)

For each lesson [X], follow this workflow:

### 3.1 Create Understanding Check Component

**File: `/src/components/Lesson[X]UnderstandingCheck.tsx`**

Copy the template from `UNDERSTANDING_CHECK_STANDARD.md` and fill in:

```typescript
// 5 questions minimum
// Questions 1-3: Scenario-based (test slides 2-3)
// Questions 4-5: Matching (concept-definition)

const questions = [
  {
    id: 1,
    type: 'scenario',
    question: 'Realistic scenario testing [concept from slide 2 or 3]',
    options: [
      { text: 'Option A', correct: false },
      { text: 'Option B', correct: true },
      { text: 'Option C', correct: false }
    ],
    feedback: '2-3 sentences explaining correct answer and linking to research...'
  },
  // ... 4 more questions
];
```

**CRITICAL CHECKLIST**:
- [ ] Exactly 5 questions
- [ ] 3 scenario-based, 2 matching
- [ ] Tests ONLY Slides 2-3 concepts
- [ ] Feedback is 2-3 sentences, educational
- [ ] **ALL answers randomized with useMemo + shuffleArray()**

### 3.2 Create Interaction Component (Optional)

**File: `/src/components/Lesson[X]Simulation.tsx`** (or similar name)

Choose interaction type from SIMULATION_FRAMEWORK.md:

**Example: Dopamine Hypothesis Simulator**
```typescript
export default function DopamineSimulator({ isPresentation, themeColor }) {
  const [dopamineLevel, setDopamineLevel] = useState('normal');

  return (
    <div className={isPresentation ? 'p-12' : 'p-8'}>
      {/* Controls for dopamine levels */}
      <button onClick={() => setDopamineLevel('low')}>Low Dopamine</button>
      <button onClick={() => setDopamineLevel('normal')}>Normal</button>
      <button onClick={() => setDopamineLevel('high')}>High Dopamine</button>

      {/* Visual response */}
      {dopamineLevel === 'low' && <div>Shows negative symptoms...</div>}
      {dopamineLevel === 'normal' && <div>Normal functioning...</div>}
      {dopamineLevel === 'high' && <div>Shows hyperactivity...</div>}

      {/* Educational feedback */}
      <p>{getExplanation(dopamineLevel)}</p>
    </div>
  );
}
```

**CRITICAL CHECKLIST**:
- [ ] Interactive (user makes choices)
- [ ] Applies Slides 2-3 concepts
- [ ] Provides feedback or learning
- [ ] Realistic scenarios or valid representations
- [ ] Fits 8-minute time window
- [ ] Accepts `isPresentation` prop and scales

### 3.3 Update App.tsx - Lesson Rendering

In `/src/App.tsx`, add rendering for all 10 slides:

```typescript
const renderLesson = () => {
  switch (currentSlide) {
    case 0:
      // Title slide - update title and icon
      return (
        <Slide isPresentation={isPresentation}>
          <div className="flex flex-col items-center justify-center h-full">
            <Brain size={isPresentation ? 120 : 80} 
                   className={`text-${lessonTheme.color}-400`} />
            <h1 className={`text-6xl font-bold text-white`}>
              Lesson [X] Title
            </h1>
            {/* ... rest of title slide */}
          </div>
        </Slide>
      );

    case 1:
      // Do Now Quiz
      return (
        <Slide isPresentation={isPresentation}>
          <PhaseHeader 
            phase="Phase 1: Activation" 
            title="Do Now Quiz" 
            icon={Activity} 
            time="5 MINS" 
            isPresentation={isPresentation}
          />
          <DoNowQuiz 
            questions={getDoNowQuestions(currentLesson)}
            isPresentation={isPresentation}
          />
        </Slide>
      );

    case 2:
      // Concept Slide 1
      return (
        <Slide isPresentation={isPresentation}>
          <PhaseHeader 
            phase="Phase 2: Concept" 
            title="[Concept 1 Title]" 
            icon={Brain} 
            time="10 MINS" 
            isPresentation={isPresentation}
          />
          {/* Your concept content here */}
        </Slide>
      );

    case 3:
      // Concept Slide 2
      return (
        <Slide isPresentation={isPresentation}>
          <PhaseHeader 
            phase="Phase 2: Concept" 
            title="[Concept 2 Title]" 
            icon={Brain} 
            time="10 MINS" 
            isPresentation={isPresentation}
          />
          {/* Your concept content here */}
        </Slide>
      );

    case 4:
      // Understanding Check
      return (
        <Slide isPresentation={isPresentation}>
          <PhaseHeader 
            phase="Phase 2: Check" 
            title="Understanding Check" 
            icon={Brain} 
            time="10 MINS" 
            isPresentation={isPresentation}
          />
          <Lesson[X]UnderstandingCheck 
            isPresentation={isPresentation}
            themeColor={lessonTheme.color}
          />
        </Slide>
      );

    case 5:
      // Simulation Part 1
      return (
        <Slide isPresentation={isPresentation}>
          <PhaseHeader 
            phase="Phase 3: Application" 
            title="[Interaction Title]" 
            icon={Activity} 
            time="8 MINS" 
            isPresentation={isPresentation}
          />
          <Lesson[X]Simulation 
            isPresentation={isPresentation}
            themeColor={lessonTheme.color}
          />
        </Slide>
      );

    case 6:
      // Simulation Part 2 or Alternative
      return (
        <Slide isPresentation={isPresentation}>
          <PhaseHeader 
            phase="Phase 3: Application" 
            title="[Interaction Title Part 2]" 
            icon={Activity} 
            time="8 MINS" 
            isPresentation={isPresentation}
          />
          {/* Continuation or alternative interaction */}
        </Slide>
      );

    case 7:
      // Evidence Grid
      return (
        <Slide isPresentation={isPresentation}>
          <PhaseHeader 
            phase="Phase 4: Evidence" 
            title="Research Studies" 
            icon={Brain} 
            time="10 MINS" 
            isPresentation={isPresentation}
          />
          {/* Evidence Grid content */}
        </Slide>
      );

    case 8:
      // Critical Evaluation
      return (
        <Slide isPresentation={isPresentation}>
          <PhaseHeader 
            phase="Phase 5: Evaluation" 
            title="Critical Analysis" 
            icon={Brain} 
            time="10 MINS" 
            isPresentation={isPresentation}
          />
          {/* Evaluation content */}
        </Slide>
      );

    case 9:
      // Essay Plan
      return (
        <Slide isPresentation={isPresentation}>
          <PhaseHeader 
            phase="Phase 6: Assessment" 
            title="Essay Plan" 
            icon={FileText} 
            time="5 MINS" 
            isPresentation={isPresentation}
          />
          {/* Essay Plan content */}
        </Slide>
      );

    default:
      return <Slide isPresentation={isPresentation}><div>Slide not found</div></Slide>;
  }
};
```

### 3.4 Add Do Now Quiz Data

In `/src/App.tsx`, define quiz data:

```typescript
const lesson[X]DoNow = [
  {
    id: 1,
    question: "From Lesson [X-1]: [Question about prior lesson]",
    options: ["Option A", "Option B", "Option C"],
    correct: 0  // Index of correct answer
  },
  {
    id: 2,
    question: "From Lesson [X-1]: [Question about prior lesson]",
    options: ["Option A", "Option B", "Option C"],
    correct: 1
  },
  {
    id: 3,
    question: "From Lesson [X-2]: [Question about prior lesson]",
    options: ["Option A", "Option B", "Option C"],
    correct: 2
  },
  {
    id: 4,
    question: "From Lesson [X-1]: [Question about prior lesson]",
    options: ["Option A", "Option B", "Option C"],
    correct: 0
  },
  {
    id: 5,
    question: "Integration of Lessons [X-1] and [X-2]: [Question]",
    options: ["Option A", "Option B", "Option C"],
    correct: 1
  }
];
```

Then add to the selection logic:
```typescript
const getDoNowQuestions = (lessonId: number) => {
  switch(lessonId) {
    case 1: return lesson1DoNow;
    case 2: return lesson2DoNow;
    case 3: return lesson3DoNow;
    // ... etc
    default: return [];
  }
};
```

### 3.5 Update Slide Count

In `/src/App.tsx`:
```typescript
const getSlideCount = (lessonId: number) => {
  return 10; // Always 10 for every lesson
};
```

---

## 🧪 PHASE 4: TESTING & VERIFICATION (2 hours per lesson)

### 4.1 Run Development Server
```bash
npm run dev
```

### 4.2 Test Every Slide
- [ ] Slide 0: Title appears correctly
- [ ] Slide 1: Do Now Quiz has 5 questions
- [ ] Slide 2: Concept 1 renders
- [ ] Slide 3: Concept 2 renders
- [ ] Slide 4: Understanding Check appears and works
- [ ] Slide 5-6: Interaction works
- [ ] Slide 7: Evidence Grid displays
- [ ] Slide 8: Evaluation content displays
- [ ] Slide 9: Essay Plan displays

### 4.3 Test Understanding Check Specifically
- [ ] Reload page 5 times
- [ ] After EACH reload, verify answer positions changed (randomization working)
- [ ] Example: Question 1 correct answer changes from position 0 to position 2 to position 1, etc.
- [ ] If positions don't change, randomization is broken—FIX BEFORE CONTINUING

### 4.4 Test Navigation
- [ ] Previous/Next buttons work
- [ ] Can jump to any slide
- [ ] Sidebar lesson selection works
- [ ] Keyboard arrows work

### 4.5 Test Presentation Mode
- [ ] Toggle presentation mode
- [ ] Fonts enlarge appropriately
- [ ] Sidebar disappears
- [ ] All content visible
- [ ] Interactions still work
- [ ] Exit presentation mode works

---

## 🏗️ PHASE 5: BUILD & FINALIZE (30 minutes)

### 5.1 Build Project
```bash
npm run build
```

**Must succeed with zero errors or warnings.**

### 5.2 Final Verification
Run through [QUICK_CHECKLIST.md](QUICK_CHECKLIST.md):
- [ ] All 10 slides render
- [ ] Navigation works
- [ ] Understanding Check randomizes
- [ ] Presentation mode works
- [ ] Build succeeds
- [ ] ~150 checklist items verified

### 5.3 Quality Standards Met
- [ ] Identical to ReferenceModule in structure
- [ ] Identical color/typography/spacing
- [ ] All research citations verifiable
- [ ] All content grounded in textbook
- [ ] Ready for production/classroom use

---

## 📋 CHECKLIST: Before You're Done

For each lesson:

- [ ] **Lesson [X] Title** correctly specified in `App.tsx`
- [ ] **Slide 0** (Title Slide) renders with correct title and theme color
- [ ] **Slide 1** (Do Now) has 5 questions from Lessons [X-1] and [X-2]
- [ ] **Slides 2-3** (Concepts) have textbook-grounded content
- [ ] **Slide 4** (Understanding Check) has:
  - [ ] 5 questions (exactly 5)
  - [ ] 3 scenario, 2 matching
  - [ ] Randomized answers (test 5 reloads)
  - [ ] 2-3 sentence feedback
  - [ ] Tests Slides 2-3 ONLY
- [ ] **Slides 5-6** (Interaction) are interactive and apply Slides 2-3
- [ ] **Slide 7** (Evidence Grid) has 3-4 real, cited studies
- [ ] **Slide 8** (Evaluation) addresses strengths, limitations, alternatives
- [ ] **Slide 9** (Essay Plan) has AO1 and AO3 structure
- [ ] **Navigation** works (sidebar, prev/next, arrows)
- [ ] **Presentation mode** works (fonts scale, no sidebar)
- [ ] **Build** succeeds (`npm run build`)
- [ ] **No TypeScript errors**

---

## 🚀 YOU'RE DONE!

Your module is production-ready when:

✅ All phases complete
✅ All checklists items verified
✅ Understanding Check randomizes
✅ Build succeeds
✅ Identical in quality to ReferenceModule/Schizophrenia

**Congratulations! Your module is ready for classroom use.**

---

**Version**: 1.0 (Agent Implementation Guide - Complete)
**Last Updated**: January 2026
