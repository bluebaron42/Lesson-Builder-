# Agent Prompt: Create a Psychology Lesson Module

## 🎯 Your Mission

You are tasked with creating a **production-ready AQA GCSE/A Level Psychology lesson module** using the Lesson-Builder system. Your module will be identical in quality and formatting to all other lesson modules in this repository.

---

## 📋 Critical Setup (Do This First)

### 1. Navigate to the Lesson-Builder Repository

https://github.com/bluebaron42/Lesson-Builder-

### 2. Read These Files in Order (30 minutes)

**⭐ START HERE - Most Important:**
- `ReferenceModule/LESSON_CREATION_GUIDE.md` - Complete patterns, requirements, and Year 1 topic list
- `ReferenceModule/AGENT_SETUP_PROMPT.md` - Setup instructions and GitHub Actions workflow

**Then review:**
- `README.md` - Workspace overview and authoritative sources
- Study `ReferenceModule/src/App.tsx` - Standard lesson structure
- Study `ReferenceModule/src/components/` - Reusable component patterns

### 3. Choose Your Topic

**For Year 1 & AS Level**, select from one of these areas in `LESSON_CREATION_GUIDE.md`:

**Paper 1: Introductory Topics**
- Social Influence (Conformity, Obedience, Minority Influence, Social Change)
- Memory (STM/LTM, Multi-store Model, Forgetting, Eyewitness Testimony)
- Attachment (Caregiver Interactions, Schaffer's Stages, Bowlby's Theory, Deprivation)

**Paper 2: Psychology in Context**
- Approaches in Psychology (Behaviourism, Social Learning, Cognitive, Biological, Humanistic)
- Psychopathology (Phobias, Depression, OCD, definitions of abnormality)
- Research Methods (and Mathematical Skills)

**Textbook Source**: `Textbooks/AQA Year 1 textbook work.txt`

---

## 🚀 Step-by-Step Workflow

### Phase 1: Setup Your Module (15 minutes)

```bash
# Copy the reference module
cp -r ReferenceModule [YourTopicName]
cd [YourTopicName]
npm install
```

Then update these files:
- `package.json` - Change name and add `displayName` (Ask: What should users see in the menu?)
- `metadata.json` - Update topic and description
- `src/App.tsx` - Add lesson titles (first 50 lines)

### Phase 2: Create Lesson Components (2-3 hours per lesson)

For **each lesson**, create these files:
```
src/components/
├── Lesson1UnderstandingCheck.tsx
├── Lesson1Simulation.tsx
├── Lesson2UnderstandingCheck.tsx
├── Lesson2Simulation.tsx
└── ... (repeat for each lesson)
```

### Phase 3: Build Each Lesson (10 slides per lesson)

**Slide 0**: Title slide with concept icon
**Slide 1**: Do Now Quiz (5 questions from PREVIOUS lessons only)
**Slides 2-3**: Concept teaching (2 major concepts from textbook)
**Slide 4**: Understanding Check ⭐ CRITICAL
  - 5 questions (3 scenario + 2 matching)
  - Tests ONLY slides 2-3
  - Randomized answers using `useMemo` + `shuffleArray()`
  
**Slides 5-6**: Interactive simulation or task
**Slide 7**: Evidence Grid (3-4 research studies with citations)
**Slide 8**: Critical evaluation (strengths/limitations)
**Slide 9**: Essay plan (AO1/AO3 breakdown)

### Phase 4: Test & Verify

```bash
npm run dev          # Test locally
npm run build        # Check for errors
```

Then verify the QUICK_CHECKLIST items:
- All 10 slides render correctly
- Understanding Check has randomized answers (reload 5 times to verify)
- All feedback links to research
- Color theme applied consistently
- No TypeScript errors

---

## 🔴 CRITICAL DO-NOTS (Violations Cause Rejection)

### ❌ DO NOT: Create Placeholder Components
- **Problem**: Importing components that don't exist (e.g., `import StroopSim from './components/StroopSim'` but file doesn't exist)
- **Fix**: Every `import` must have a corresponding fully-built `.tsx` file
- **Test**: Run `npm run dev` and navigate all 10 slides without console errors
- **Reference**: See `Schizophrenia/components/` - every component listed in App.tsx exists and is complete

### ❌ DO NOT: Skip Do Now Quiz Buttons
- **Problem**: Do Now Quiz without "Submit Answers" and "Reveal All Answers" buttons
- **Fix**: 
  ```tsx
  {!showResults ? (
    <>
      <button onClick={() => setShowResults(true)} disabled={Object.keys(answers).length < 5}>
        Submit Answers
      </button>
      <button onClick={() => setShowResults(true)}>
        Reveal All Answers
      </button>
    </>
  ) : (
    <div>Score: {score} / 5</div>
  )}
  ```
- **Reference**: `ExampleModule/src/components/DoNowQuiz.jsx` lines 20-50
- **Why**: Teachers need to control when answers show; students need feedback

### ❌ DO NOT: Create Flat, Lifeless Simulations
- **Problem**: Simulations that are just quizzes with radio buttons
- **Fix**: Simulations must have:
  - **3+ interactive elements** (drag-drop, click zones, timed interactions, dialogue choices)
  - **Visual feedback** (color changes, animations, icons appearing/disappearing)
  - **Educational value** (teach a concept, not just assess)
  - **Results display** (score, accuracy, achievement)
- **Examples**:
  - ✅ `SynapseBuilder` - Drag neurotransmitters to receptors, see binding animation
  - ✅ `StroopSim` - Click colors matching words, timer runs, accuracy tracked
  - ✅ `CBT_TherapistSim` - Choose dialogue options, see thought record update
  - ❌ Quiz with radio buttons ≠ simulation
- **Reference**: `Schizophrenia/components/SynapseBuilder.tsx` and `StroopSim.tsx`

### ❌ DO NOT: Ignore Presentation Mode
- **Problem**: Components that don't adapt to `isPresentation={true}` prop
- **Fix**: Every component must:
  - Accept `isPresentation` prop
  - Scale fonts 1.5-2x larger when `isPresentation={true}`
  - Maintain readability at 20+ feet distance
  - Example:
    ```tsx
    <h3 className={`font-bold ${isPresentation ? 'text-4xl' : 'text-xl'}`}>
      Question
    </h3>
    ```
- **Why**: Teachers present these lessons to 30 students in a classroom
- **Reference**: Search "isPresentation" in `Schizophrenia/components/DoNowQuiz.tsx`

### ❌ DO NOT: Use Flat Grayscale Colors
- **Problem**: All buttons/text in plain gray instead of theme colors
- **Fix**: 
  1. Define `lessonThemes` in constants.ts:
     ```tsx
     export const lessonThemes = {
       1: { color: 'cyan', name: 'Cyan' },
       2: { color: 'amber', name: 'Amber' },
       // ...etc
     };
     ```
  2. Apply theme color everywhere:
     - Title slide border: `border-${lessonTheme.color}-500`
     - Buttons: `bg-${lessonTheme.color}-600`
     - Icons: `text-${lessonTheme.color}-400`
     - Highlights: `text-${lessonTheme.color}-300`
- **Reference**: `Schizophrenia/components/Slide.tsx` and `PhaseHeader.tsx`

### ❌ DO NOT: Miss Understanding Check
- **Problem**: "Understanding Check" slide doesn't exist or has wrong structure
- **Fix**: Create `Lesson{N}UnderstandingCheck.tsx` with:
  - **Exactly 5 questions**
  - **3 scenario-based questions** (story about a person, ask to identify concept)
  - **2 matching questions** (match study/researcher to finding)
  - **Randomized answers** using `useMemo` + `shuffleArray()`
  - **Detailed feedback** linking to slides 2-3
  ```tsx
  const shuffleArray = (arr) => [...arr].sort(() => Math.random() - 0.5);
  const [questions] = useState(() => shuffleArray(questionBank));
  ```
- **Reference**: `Schizophrenia/components/Lesson3UnderstandingCheck.tsx`
- **Why**: Randomization prevents students from memorizing answers

### ❌ DO NOT: Ship Without Keyboard Navigation
- **Problem**: App.tsx doesn't support arrow keys or escape key
- **Fix**: Add to App.tsx:
  ```tsx
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'Escape') setIsPresentation(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, slideCount]);
  ```
- **Why**: Teachers need hands-free navigation while presenting
- **Reference**: `Schizophrenia/App.tsx` lines 85-95

### ❌ DO NOT: Miss Visual Effects
- **Problem**: No blur, glow, animations, or gradients
- **Fix**: Use these throughout:
  - Glowing icon: `blur-[100px] opacity-20 rounded-full animate-pulse`
  - Gradient text: `bg-gradient-to-r from-${color}-400 to-${color}-600`
  - Fade in: `animate-fadeIn`
- **Reference**: `Schizophrenia/App.tsx` lines 105-110 (glowing brain icon)

---

## ✅ CRITICAL DO-THIS-ALWAYS (Quality Standards)

### ✅ DO: Build Every Required Component
**Checklist for each lesson:**
- [ ] `Lesson{N}UnderstandingCheck.tsx` - Exists and fully implemented
- [ ] `Lesson{N}Simulation.tsx` (or multiple sim components) - Exists and interactive
- [ ] Imported in App.tsx and rendered on the correct slide
- [ ] All imports match actual files (no ghost imports)

**Template import section for App.tsx:**
```tsx
// Required for every lesson
import Lesson1UnderstandingCheck from './components/Lesson1UnderstandingCheck';
import Lesson1Simulation from './components/Lesson1Simulation';

// These MUST exist. If you import them, you MUST create them.
// Check: npm run dev → no console errors → no missing component warnings
```

### ✅ DO: Structure Do Now Quiz Correctly
**Must-have button flow:**
1. User answers all 5 questions
2. "Submit Answers" button becomes enabled
3. User clicks "Submit Answers" → shows score
4. OR user clicks "Reveal All Answers" → shows all correct answers
5. Correct answers highlighted in green
6. Wrong answers highlighted in red with correction

**CSS pattern:**
```tsx
<button
  onClick={() => setShowResults(true)}
  disabled={Object.keys(answers).length < 5}
  className={`${
    Object.keys(answers).length < 5
      ? 'opacity-50 cursor-not-allowed'
      : 'hover:bg-green-600'
  } bg-green-700 text-white font-bold px-8 py-3 rounded-lg`}
>
  Submit Answers
</button>
```

### ✅ DO: Make Simulations Engaging
**Minimum interactive elements:**

| Type | Example | Components |
|------|---------|-----------|
| Drag-Drop | Synapse builder | Draggable elements, drop zones, validation |
| Timed | Stroop test | Timer, clickable areas, score tracking |
| Dialogue | Therapist sim | Multiple choice dialogue, branching logic |
| Visual | Drug molecule | Animated transitions, clickable details |

**All must have:**
- Visual feedback (colors change, animations play)
- Error messages or guidance if wrong
- Success state (score, achievement, congratulations)
- Reset button to retry
- Presentation mode scaling

### ✅ DO: Apply Theme Color System
**Color options for lessons:**
- Cyan (`cyan-400`, `cyan-500`, `cyan-600`)
- Amber (`amber-400`, `amber-500`, `amber-600`)
- Orange (`orange-400`, `orange-500`, `orange-600`)
- Red (`red-400`, `red-500`, `red-600`)
- Yellow (`yellow-400`, `yellow-500`, `yellow-600`)
- Teal (`teal-400`, `teal-500`, `teal-600`)
- Purple (`purple-400`, `purple-500`, `purple-600`)

**Apply to:**
- Title slide border/text
- PhaseHeader icons and accents
- Button hovers
- Highlighted text
- Quiz correct answer highlights

**Example in constants.ts:**
```tsx
export const lessonThemes = {
  1: { color: 'cyan', name: 'Cyan' },
  2: { color: 'amber', name: 'Amber' },
  // ...
};

// In App.tsx:
const lessonTheme = lessonThemes[currentLesson];

// In components:
<div className={`border-${lessonTheme.color}-500`}>
  <Brain className={`text-${lessonTheme.color}-400`} />
</div>
```

### ✅ DO: Implement Presentation Mode
**Required in App.tsx:**
```tsx
const [isPresentation, setIsPresentation] = useState(false);

useEffect(() => {
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'Escape') setIsPresentation(false);
  };
  window.addEventListener('keydown', handleKeyDown);
  return () => window.removeEventListener('keydown', handleKeyDown);
}, [currentSlide, slideCount]);

// In toolbar:
<button onClick={() => setIsPresentation(!isPresentation)}>
  <Projector size={24} />
</button>
```

**Required in all components:**
- Accept `isPresentation` prop
- Scale fonts when `isPresentation={true}`
- Maintain readability (test at 20+ feet)

### ✅ DO: Test Everything Before Shipping
```bash
# Test 1: No console errors
npm run dev
# → Open localhost:5173
# → Open DevTools (F12)
# → Check Console tab → No red errors
# → Test all 10 slides → No broken imports

# Test 2: Presentation mode works
# → Click Projector button
# → Arrow keys navigate
# → Fonts are large (readable from 20 feet)
# → Escape closes presentation mode

# Test 3: Do Now Quiz works
# → Answer all 5 questions
# → Click "Submit Answers" → Shows score
# → Reload page
# → Click "Reveal All Answers" → Shows all answers

# Test 4: Understanding Check randomizes
# → Open Understanding Check slide (usually slide 4)
# → Note answer order
# → Reload page (F5)
# → Answer order should be different (randomized)
# → Repeat 5+ times to verify

# Test 5: Build succeeds
npm run build
# → No errors in build output
# → dist/ folder created successfully
```

### ✅ DO: Copy from Working Examples
Rather than build from scratch, copy and modify:
- **Do Now Quiz**: Copy `Schizophrenia/components/DoNowQuiz.tsx`
- **Understanding Check**: Copy `Schizophrenia/components/Lesson3UnderstandingCheck.tsx`
- **Simulation**: Choose from `SynapseBuilder.tsx`, `StroopSim.tsx`, or `CBT_TherapistSim.tsx`
- **App.tsx structure**: Copy `Schizophrenia/App.tsx` and adapt

---

## 🔴 Non-Negotiable Requirements

1. **All content from textbook** - Every concept, study, and evaluation point must trace to `Textbooks/AQA Year 1 textbook work.txt`
2. **Answer randomization** - Understanding Check MUST randomize answers using `useMemo` + `shuffleArray()` (prevents gaming)
3. **10-slide structure** - Every lesson is exactly 10 slides (non-negotiable)
4. **Do Now Quiz** - 5 questions from PREVIOUS lessons ONLY (spaced retrieval)
5. **Detailed feedback** - 2-3 sentences per answer linking to research
6. **NO placeholder imports** - Every `import` statement must have a corresponding `.tsx` file that is complete and functional
7. **Presentation mode support** - All components must scale fonts and support `isPresentation` prop
8. **Theme colors applied** - All lessons must use the color theme system
9. **Keyboard navigation** - Arrow keys and Escape key must work in App.tsx
10. **Visual polish** - Gradients, blur effects, glowing icons, animations (not just flat colors)

---

## 📚 Key Resources

| File | Purpose |
|------|---------|
| `LESSON_CREATION_GUIDE.md` | Complete patterns, requirements, Year 1 topics, examples |
| `AGENT_SETUP_PROMPT.md` | Setup tasks (GitHub Actions, JSX fixes, package.json) |
| `ReferenceModule/src/App.tsx` | Template for lesson structure and routing |
| `ReferenceModule/src/components/` | Reusable component patterns to copy |
| `Textbooks/AQA Year 1 textbook work.txt` | Authoritative source for all content |

---

## ✅ Quick Start Example

**If creating a "Conformity" lesson:**

1. Read `ReferenceModule/LESSON_CREATION_GUIDE.md` section on "Year 1 Topics"
2. Find Conformity under "Paper 1, Section A: Social Influence, Chapter 1"
3. Reference `Textbooks/AQA Year 1 textbook work.txt` for Asch's research, group size, unanimity, task difficulty
4. Create:
   - Slides 2-3: Asch's theory + variables affecting conformity
   - Slide 4: Understanding Check with 3 scenario + 2 matching on Asch's variables
   - Slides 5-6: Interactive simulation (e.g., line-judging task simulator)
   - Slide 7: Evidence Grid with Asch + Todd Lucas et al. + research support
   - Slide 8: Evaluation (artificial situation, limited application, ethical issues)
   - Slide 9: Essay plan with AO1/AO3 points

---

## 🎓 When You're Ready

1. Design the **lesson structure** (which concepts, which studies, which evaluation points)
2. Create **component files** with Understanding Check and simulation
3. Test locally with `npm run dev`
4. Ask for help on any specific slide or component design

**Good luck! You've got this.** 🚀

---

**Last Updated**: January 12, 2026
