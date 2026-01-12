# Lesson Creation Guide: ReferenceModule Standard

This guide consolidates all critical patterns and requirements for creating AQA GCSE/A Level Psychology lesson modules based on ReferenceModule.

---

## � Content Source Requirement

**EXPLICIT**: All lesson content MUST be derived from the official AQA Psychology textbooks:

- **Year 1 & AS**: `../Textbooks/AQA Year 1 textbook work.txt`
- **Year 2 (A Level)**: `../Textbooks/AQA Psychology for A Level Year 2 Student Book- 2nd Edition -- Cara Flanagan, Matt Jarvis and Rob Liddle -- ( WeLib.org ).pdf`

These are the **authoritative sources** for:
- Concepts, theories, and terminology
- Research studies and citations
- Evaluation points (strengths/limitations)
- Exam question styles and mark schemes

**Do not generate content from general knowledge.** Always verify against these textbooks.

### Year 1 Topics Covered

The Year 1 & AS textbook covers the following topics organized by paper and section:

**Paper 1: Introductory Topics in Psychology**
- **Section A: Social Influence** (Chapter 1)
  - Conformity (Asch's research, variables: group size, unanimity, task difficulty)
  - Types and explanations of conformity
  - Conformity to social roles
  - Obedience (Situational variables, situational & dispositional explanations)
  - Resistance to social influence
  - Minority influence
  - Social influence and social change
  
- **Section B: Memory** (Chapter 2)
  - Coding, capacity and duration of memory
  - Short-term memory (STM) vs Long-term memory (LTM)
  - The multi-store model of memory
  - Types of long-term memory
  - The working memory model
  - Explanations for forgetting: Interference and Retrieval failure
  - Factors affecting the accuracy of eyewitness testimony (Misleading information, Anxiety)

- **Section C: Attachment** (Chapter 3)
  - Caregiver-infant interactions
  - Schaffer's stages of attachment
  - The role of the father
  - Animal studies of attachment
  - Explanations of attachment: Learning theory and Bowlby's theory
  - Types of attachment
  - Cultural variations in attachment
  - Bowlby's theory of maternal deprivation
  - Romanian orphan studies: Institutionalisation
  - Influence of early attachment on later relationships

**Paper 2: Psychology in Context**
- **Section A: Approaches in Psychology** (Chapter 4)
  - Origins of Psychology (Wundt, introspection)
  - The behaviourist approach (Learning theory)
  - Social learning theory
  - The cognitive approach
  - The biological approach
  - Biopsychology: The nervous system and the endocrine system
  - Neurons and synaptic transmission
  - Humanistic psychology
  - Comparison of approaches

- **Section B: Psychopathology** (Chapter 5)
  - Definitions of abnormality (Statistical infrequency, Deviation from social norms)
  - Phobias
  - Depression
  - Obsessive-compulsive disorder (OCD)
  - The behavioural approach to explaining and treating phobias
  - The cognitive approach to explaining and treating depression
  - The biological approach to explaining and treating OCD

- **Section C: Research Methods**
  - Research methods and investigation design
  - Data analysis and interpretation
  - Mathematical skills in psychology

---

## �📋 Lesson Architecture (Always 9–10 Slides)

Every lesson follows this structure:

| Slide | Phase | Component | Duration | Notes |
|-------|-------|-----------|----------|-------|
| 0 | Intro | Title Slide | - | Icons + concept + start button |
| 1 | Phase 1: Activation | Do Now Quiz | 5 min | 5 questions from prior lessons |
| 2–3 | Phase 2: Concept | Concept Slides | 10 min | 2 major concepts with visuals |
| 4 | Phase 2: Check | **Understanding Check** ⭐ | 10 min | 5 questions (3 scenario + 2 matching); randomized answers |
| 5–6 | Phase 3: Application | Simulation/Task | 15 min | Interactive application of concepts |
| 7 | Phase 4: Evidence | Evidence Grid | 10 min | 3–4 research studies with citations |
| 8 | Phase 5: Critique | Critical Evaluation | 10 min | Strengths, limitations, alternatives |
| 9 | Phase 6: Assessment | Essay Plan | 5 min | AO1/AO3 breakdown, exam guidance |

---

## 🔴 Critical Requirements

### ⭐ Understanding Check (Slide 4)

**File**: `components/Lesson[X]UnderstandingCheck.tsx`

**Must Have**:
- **5 questions** testing ONLY slides 2–3 content
- **Mix**: 3 scenario-based + 2 matching questions
- **Randomized answers**: Use `useMemo` + `shuffleArray()` (CRITICAL—prevents gaming)
- **Feedback**: 2–3 sentences per answer, linking to research
- **Color theme**: Lesson-specific throughout
- **Accept `isPresentation` prop**: Enlarge fonts/spacing for classroom projection

**Example Pattern**:

```typescript
import React, { useState, useMemo } from 'react';

export default function Lesson[X]UnderstandingCheck({ isPresentation }: { isPresentation: boolean }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showFeedback, setShowFeedback] = useState(false);

  const shuffleArray = (array: any[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const questions = useMemo(() => {
    const baseQuestions = [
      {
        id: 1,
        type: 'scenario',
        question: 'Scenario testing concept from slides 2–3...',
        options: [
          { text: 'Option A', correct: false },
          { text: 'Option B', correct: true },
          { text: 'Option C', correct: false }
        ],
        feedback: '2–3 sentence explanation linking to lesson research...'
      },
      // ... 4 more questions (2 more scenarios + 2 matching)
    ];
    return baseQuestions.map(q => ({
      ...q,
      options: q.type === 'scenario' ? shuffleArray(q.options) : q.options
    }));
  }, []);

  // Render component...
}
```

### Do Now Quiz (Slide 1)

**File**: `constants.tsx`

**Pattern**:

```typescript
export const lesson[X]DoNow = [
  { id: 1, question: "Topic from Lesson [X-1]...", options: ["A", "B", "C"], correct: 0 },
  { id: 2, question: "Topic from Lesson [X-1]...", options: ["A", "B", "C"], correct: 1 },
  { id: 3, question: "Topic from Lesson [X-2]...", options: ["A", "B", "C"], correct: 2 },
  { id: 4, question: "Topic from Lesson [X-1]...", options: ["A", "B", "C"], correct: 0 },
  { id: 5, question: "Mixed/integrated topic...", options: ["A", "B", "C"], correct: 1 }
];
```

**Rules**:
- ✅ 5 questions **only from prior lessons**
- ✅ No new content (not testing current lesson)
- ✅ Variety of topics and question types
- ❌ NO generic or copy-pasted questions

### Theme System

**Color Themes** (Apply Consistently Everywhere):

```
Lesson 1: cyan    (cyan-400, cyan-500, cyan-600)
Lesson 2: amber   (amber-400, amber-500, amber-600)
Lesson 3: orange  (orange-400, orange-500, orange-600)
Lesson 4: red     (red-400, red-500, red-600)
Lesson 5: yellow  (yellow-400, yellow-500, yellow-600)
Lesson 6: teal    (teal-400, teal-500, teal-600)
Lesson 7: purple  (purple-400, purple-500, purple-600)
Lesson 8: slate   (slate-400, slate-500, slate-600)
```

Use color in:
- Title slide icons and text
- Understanding Check boxes/borders
- Evidence Grid highlights
- Simulation elements
- All interactive components

### Component Structure

All components must:

```typescript
export default function ComponentName({ isPresentation }: { isPresentation: boolean }) {
  const textClass = isPresentation ? 'text-xl' : 'text-base';
  const paddingClass = isPresentation ? 'px-12' : 'px-6';

  return (
    <div className={`flex flex-col gap-4 ${paddingClass}`}>
      {/* Content with isPresentation checks */}
    </div>
  );
}
```

---

## 🎮 Simulation & Interaction Framework (Slides 5–6)

Slides 5–6 are **Phase 3: Application** where students actively apply concepts from Slides 2–3.

### Interaction Type Variety

Each module should include **2–3 different interaction types** across all lessons to maintain variety and engagement while ensuring all interactions:
- ✅ Apply concepts from Slides 2–3
- ✅ Are interactive (not passive reading)
- ✅ Provide realistic/authentic scenarios
- ✅ Support learning objectives
- ✅ Fit within 15-minute window (Slides 5–6)

### The 5 Interaction Types

#### Type 1: SIMULATION (System/Model Interaction)

**What it is**: Students interact with a simplified model of a real system to understand how components relate.

**Psychology Examples**:
- Neurotransmitter mechanism simulator
- Neural pathway visualization
- CBT thought-analysis model
- Stress response system
- Memory encoding model

**Pattern**: User adjusts parameters → System responds with outputs → Student observes relationship

**Implementation Example**:
```typescript
export default function DopamineSimulator({ isPresentation }) {
  const [dopamineLevel, setDopamineLevel] = useState('normal');

  return (
    <div>
      {/* Input controls */}
      <div className="flex gap-4">
        <button onClick={() => setDopamineLevel('low')}>Low Dopamine</button>
        <button onClick={() => setDopamineLevel('normal')}>Normal</button>
        <button onClick={() => setDopamineLevel('high')}>High Dopamine</button>
      </div>

      {/* Visual response */}
      {dopamineLevel === 'low' && <SymptomsDisplay symptoms={negativeSymptoms} />}
      {dopamineLevel === 'normal' && <SymptomsDisplay symptoms={normalSymptoms} />}
      {dopamineLevel === 'high' && <SymptomsDisplay symptoms={hyperactivitySymptoms} />}

      {/* Educational feedback */}
      <p>{getFeedback(dopamineLevel)}</p>
    </div>
  );
}
```

#### Type 2: GAME (Strategic Decision-Making)

**What it is**: Students make repeated decisions in a game context, learning through consequences.

**Psychology Examples**:
- Diagnosis game (symptoms → diagnosis)
- Treatment planning game (condition → therapy selection)
- Prison Dilemma game (cooperation vs. defection)
- Ultimatum game (fairness decisions)
- Patient-clinician negotiation game

**Pattern**: Scenario presented → Student makes choice → Consequence shown → Learning feedback (Repeat 3–5 times)

**Implementation Example**:
```typescript
export default function DiagnosisGame({ isPresentation }) {
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);

  const handleDiagnose = (chosenDiagnosis: string) => {
    const isCorrect = chosenDiagnosis === currentScenario.correct;
    
    if (isCorrect) {
      setScore(s => s + 1);
      showFeedback(`Correct! The key symptom was...`);
    } else {
      showFeedback(`Not quite. The correct diagnosis was... because...`);
    }
    
    setTimeout(() => setRound(r => r + 1), 3000);
  };

  return (
    <div>
      <CaseScenario scenario={scenarios[round]} />
      <div className="flex gap-4">
        {scenarios[round].options.map(opt => (
          <button key={opt} onClick={() => handleDiagnose(opt)}>
            {opt}
          </button>
        ))}
      </div>
      <FeedbackDisplay message={feedback} isCorrect={lastWasCorrect} />
      <ProgressBar current={round} total={scenarios.length} />
    </div>
  );
}
```

#### Type 3: VISUALIZATION & DATA EXPLORATION

**What it is**: Students explore data or visual relationships to understand patterns and mechanisms.

**Psychology Examples**:
- Twin study concordance visualization
- Gene-environment interaction graphs
- Brain scan (fMRI) heatmaps
- Neurotransmitter reuptake animation
- Research results comparison (bar charts, distributions)

**Pattern**: Data displayed → Student explores/filters → Patterns revealed → Interpretation guided

**Implementation Example**:
```typescript
export default function DataExplorer({ isPresentation }) {
  const [filterGender, setFilterGender] = useState('all');
  const [filterAge, setFilterAge] = useState('all');

  const filteredData = data.filter(item => 
    (filterGender === 'all' || item.gender === filterGender) &&
    (filterAge === 'all' || item.ageGroup === filterAge)
  );

  return (
    <div>
      {/* Filters */}
      <div className="flex gap-4">
        <select value={filterGender} onChange={(e) => setFilterGender(e.target.value)}>
          <option value="all">All Genders</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      {/* Visualization updates based on filters */}
      <DataVisualization data={filteredData} />
      <InterpretationGuide data={filteredData} />
    </div>
  );
}
```

#### Type 4: LAB/TASK (Problem-Solving Activity)

**What it is**: Students complete a structured task similar to actual research or clinical processes.

**Psychology Examples**:
- Experimental design task (setup/controls)
- Data analysis (calculate stats, interpret results)
- Clinical assessment interview (decide questions to ask)
- Protocol design challenge (order of interventions)
- Case formulation task (symptom → mechanism → treatment)

**Pattern**: Task presented → Student completes steps → Solution evaluated → Learning explained

**Implementation Example**:
```typescript
export default function ProtocolDesign({ isPresentation }) {
  const [steps, setSteps] = useState({
    pharmacology: '',
    dosage: '',
    monitoring: ''
  });

  const evaluateProtocol = () => {
    const feedback = [];
    if (steps.pharmacology === 'antipsychotic') {
      feedback.push('Good choice because...');
    } else {
      feedback.push('Consider X instead...');
    }
    return feedback;
  };

  return (
    <div>
      <PatientCase case={currentCase} />
      <ProtocolSteps steps={steps} onUpdate={setSteps} />
      <button onClick={evaluateProtocol}>Evaluate Protocol</button>
      <FeedbackDisplay feedback={evaluateProtocol()} />
    </div>
  );
}
```

#### Type 5: DEBATE/DISCUSSION (Evidence Evaluation)

**What it is**: Students engage with conflicting evidence or viewpoints to think critically.

**Psychology Examples**:
- Causation debate (correlation vs. causation)
- Research methodology evaluation (strengths vs. limitations)
- Theory comparison (theory A vs. theory B arguments)
- Ethical dilemma discussion (competing principles)
- Evidence quality assessment (strong vs. weak studies)

**Pattern**: Position presented → Student evaluates pros/cons → Alternative position revealed → Student weighs both

**Implementation Example**:
```typescript
export default function CausationDebate({ isPresentation }) {
  const [position, setPosition] = useState<'for' | 'against' | null>(null);
  const [showCounter, setShowCounter] = useState(false);

  return (
    <div>
      {/* Initial position */}
      <ArgumentDisplay 
        title="Argument for biological cause" 
        evidence={biologicalEvidence} 
      />
      
      <VotingButtons onVote={(choice) => {
        setPosition(choice);
        setShowCounter(true);
      }} />
      
      {/* Counterargument */}
      {showCounter && (
        <ArgumentDisplay 
          title="Counterargument" 
          evidence={psychologicalEvidence} 
        />
      )}
      
      {/* Synthesis */}
      <Conclusion>Both contribute (biopsychosocial model)</Conclusion>
    </div>
  );
}
```

### Distribution Guidelines

**For a 7-Lesson Module**:

| Lesson | Slide 5–6 Type | Example |
|--------|-----------|---------|
| 1 | Simulation | Neurotransmitter/mechanism visualization |
| 2 | Game | Diagnosis challenge or decision-making |
| 3 | Visualization | Data exploration or brain imaging |
| 4 | Lab Task | Experimental design or case formulation |
| 5 | Simulation | Different system (e.g., therapy mechanism) |
| 6 | Debate | Evidence evaluation or theory comparison |
| 7 | Game | Synthesis/applied diagnosis challenge |

**Pattern**: Vary types across lessons. No more than 2 of the same type.

### Quality Checklist for All Interactions

Every interaction (regardless of type) must:
- [ ] **Apply Slides 2–3 concepts**: Interactive content tests/reinforces core teaching
- [ ] **Be interactive**: Student makes choices, not passive viewing
- [ ] **Provide feedback**: Student learns from interaction outcomes
- [ ] **Be authentic**: Realistic scenarios or valid representations
- [ ] **Fit in 15 min**: 8 min per slide, includes instructions
- [ ] **Be self-contained**: Works on its own, doesn't assume prior interaction
- [ ] **Support learning**: Clear connection between interaction and concept
- [ ] **Maintain theme**: Uses lesson color and styling conventions
- [ ] **Presentation mode**: Accept `isPresentation` prop, fonts scale

---

## 📁 Files to Create Per Lesson

```
components/
  ├─ Lesson[X]DoNowQuiz.tsx
  ├─ Lesson[X]Concept1.tsx
  ├─ Lesson[X]Concept2.tsx
  ├─ Lesson[X]UnderstandingCheck.tsx        ⭐ CRITICAL
  ├─ Lesson[X]Simulation.tsx
  ├─ Lesson[X]EvidenceGrid.tsx
  ├─ Lesson[X]CritiqueGrid.tsx
  └─ Lesson[X]EssayPlan.tsx

constants.tsx (update):
  ├─ lesson[X]DoNow data
  ├─ lesson[X]Color theme

App.tsx (update):
  ├─ Import all components
  ├─ Add renderLesson[X]() function
  ├─ Update getSlideCount(lessonId)
  ├─ Add lesson to lessons array
```

---

## 🚀 Deployment Setup

### Step 1: Configure package.json Display Name

**CRITICAL**: Add a `displayName` field to `package.json` to ensure proper module identification in Psych-hub.

```json
{
  "name": "my-module",
  "displayName": "My Psychology Topic",
  "private": true,
  "version": "1.0.0",
  ...
}
```

**Naming Guidelines**:
- `displayName` controls how the module appears in Psych-hub menu
- Use exact capitalization you want displayed
- Common patterns:
  - `"displayName": "Relationships"` - Capital first letter
  - `"displayName": "schizophrenia"` - Lowercase for clinical terms
  - `"displayName": "Issues & Debates"` - Spaces and capitals for multi-word

### Step 2: GitHub Actions Workflow

The `.github/workflows/build-and-deploy.yml` file is already included in ReferenceModule.

**What it does**:
- Triggers on git tags (e.g., `v1.0.0`) or manual dispatch
- Builds module with `npm run build`
- Creates `module-dist.zip` from `dist/` folder
- Creates GitHub release with zip attached
- Syncs to Psych-hub using `displayName` from package.json

**Important Notes**:
1. Requires `permissions: contents: write` (already configured)
2. Build output must go to `dist/` directory (Vite default)
3. Repository must have `PSYCH_HUB_DEPLOY_TOKEN` secret configured

**To deploy**:
```bash
git tag v1.0.0
git push origin v1.0.0
```

### Step 3: Fix JSX Syntax Errors

**Problem**: React/JSX does not allow raw `->`, `<`, `>` in text content between JSX tags.

**Solution**: Replace ASCII arrows with Unicode equivalents.

**Common Patterns**:

```tsx
// WRONG - causes JSX syntax error
<p>Step A -> Step B -> Step C</p>

// CORRECT - use Unicode arrow →
<p>Step A → Step B → Step C</p>
```

**Search for issues**:
```bash
grep -rn "\->" --include="*.tsx" --include="*.jsx" .
```

**Replace with Unicode**:
- Right arrow: `→` (U+2192) - replaces `->`
- Left arrow: `←` (U+2190) - replaces `<-`

**DO NOT replace**:
- Arrow functions: `() => {}`
- Type definitions: `Array<string>`
- Comments: `// some -> comment`

**Verification**:
```bash
npm run build  # Should complete without JSX errors
```

---

## ✅ Verification Checklist

Before considering a lesson complete:

**Understanding Check**:
- [ ] 5 questions targeting slides 2–3 only
- [ ] 3 scenario + 2 matching questions
- [ ] ALL answers randomized using useMemo + shuffleArray
- [ ] 2–3 sentence feedback per question
- [ ] Feedback links to research/concepts
- [ ] Color theme consistent throughout
- [ ] Accepts isPresentation prop

**Do Now Quiz**:
- [ ] 5 questions from prior lessons only
- [ ] No new content
- [ ] Variety of topics/types
- [ ] Correct answers specified

**Integration**:
- [ ] All components imported
- [ ] Do Now data added to constants
- [ ] renderLesson[X]() function includes all slides
- [ ] Slide count updated
- [ ] Lesson added to lessons array with active: true

**Quality**:
- [ ] No console errors
- [ ] Presentation mode works (fonts enlarged)
- [ ] Answer randomization works (run twice, verify different orders)
- [ ] All simulations functional
- [ ] Color theme consistent
- [ ] Navigation smooth

**Deployment**:
- [ ] `displayName` added to package.json
- [ ] No ASCII arrows (->) in JSX text (use → instead)
- [ ] `npm run build` completes without errors
- [ ] GitHub Actions workflow exists
- [ ] Repository has PSYCH_HUB_DEPLOY_TOKEN secret (if deploying to hub)

---

## 🎨 Theme Implementation Example

For a lesson with **red** theme:

```typescript
// Title slide
<Brain size={120} className="text-red-400" />
<h1 className="text-red-500">Lesson Title</h1>

// Understanding Check
<div className="border-t-4 border-red-500 bg-red-900/20">
  {/* Questions */}
</div>

// Evidence Grid
<div className="border-l-4 border-red-500">
  {/* Studies */}
</div>

// All interactive elements
className="bg-red-900/30 border-red-500 hover:border-red-400"
```

---

## 📚 Learning Progression

All lessons enforce this evidence-based progression:

1. **Activation** (Do Now) → Prior knowledge retrieval
2. **Concept** (Slides 2–3) → New information introduction
3. **Check** (Understanding Check) → Immediate assessment
4. **Application** (Simulation) → Active learning
5. **Evidence** (Evidence Grid) → Research support
6. **Evaluation** (Critique) → Critical thinking
7. **Assessment** (Essay Plan) → Synthesis & exam prep

---

## TypeScript Best Practices

- Always type props and state
- Use `export default` for components
- Keep components focused (single responsibility)
- Use Tailwind CSS classes (no inline styles)
- Comment complex logic
- Test with `isPresentation` mode
- Use Unicode arrows (→) not ASCII (->) in JSX text

---

## Quick Checklist: Am I Done?

**Development**:
- [ ] All 8 component files created
- [ ] Understanding Check has randomized answers
- [ ] App.tsx updated with all imports and renders
- [ ] constants.tsx has Do Now data + lesson colors
- [ ] Presentation mode tested
- [ ] Answer randomization verified
- [ ] Color theme consistent throughout
- [ ] No console errors
- [ ] Lesson marked active in lessons array

**Deployment**:
- [ ] `displayName` added to package.json
- [ ] No ASCII arrows (->) in JSX text (use → instead)
- [ ] `npm run build` completes without errors
- [ ] GitHub Actions workflow exists
- [ ] Repository has PSYCH_HUB_DEPLOY_TOKEN secret (if deploying to hub)

If all are checked ✅, your lesson is ready for deployment.

---

**Version**: 1.0 (Gold Standard)  
**Updated**: January 12, 2026  
**Reference**: ReferenceModule
