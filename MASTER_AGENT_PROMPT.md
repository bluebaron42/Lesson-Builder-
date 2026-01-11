# MASTER AGENT PROMPT: Create Psychology Lesson Modules

## 🎯 YOUR MISSION

You are an expert React/TypeScript developer tasked with creating **PRODUCTION-READY AQA GCSE/A Level Psychology lesson modules** that are **IDENTICAL IN QUALITY AND FORMATTING**.

This prompt contains everything you need to build a complete module for ANY psychology topic using:
1. The standards and templates in this Lesson-Builder repo
2. The textbook content for your specific topic
3. This master prompt

---

## 📍 CRITICAL: Read These Files FIRST

Before you start building, you MUST read these files in this exact order:

1. **[STANDARDIZATION_FRAMEWORK.md](STANDARDIZATION_FRAMEWORK.md)** ← START HERE
   - Module structure requirements
   - Consistency standards
   - Quality checklist

2. **[SIDEBAR_NAVIGATION_STANDARD.md](SIDEBAR_NAVIGATION_STANDARD.md)**
   - How to structure sidebar navigation
   - Lesson management
   - Active state handling

3. **[DO_NOW_QUIZ_STANDARD.md](DO_NOW_QUIZ_STANDARD.md)**
   - Do Now Quiz requirements
   - Spaced retrieval principles
   - Answer patterns

4. **[UNDERSTANDING_CHECK_STANDARD.md](UNDERSTANDING_CHECK_STANDARD.md)** ⭐ MOST CRITICAL
   - Understanding Check component template
   - Question types (scenarios + matching)
   - Answer randomization (NON-NEGOTIABLE)
   - Feedback structure

5. **[SIMULATION_FRAMEWORK.md](SIMULATION_FRAMEWORK.md)**
   - Simulation/interaction variety
   - When to use each type
   - Architecture patterns

6. **[EVIDENCE_GRID_ESSAY_PLAN.md](EVIDENCE_GRID_ESSAY_PLAN.md)**
   - Evidence Grid research citation format
   - Essay Plan structure
   - Exam guidance

7. **ReferenceModule/** in this repo
   - Study `ReferenceModule/src/App.tsx` for the standard lesson flow
   - Study `ReferenceModule/components/` for reusable components
   - Study `ReferenceModule/src/index.css` for Tailwind configuration

8. **[QUICK_CHECKLIST.md](QUICK_CHECKLIST.md)**
   - Final verification before submitting

---

## 🏗️ LESSON ARCHITECTURE (NON-NEGOTIABLE)

Every lesson has exactly **10 slides** following this structure:

```
Slide 0: Title Slide
         └─ Visual introduction with concept icon
         └─ Lesson title + subtitle
         └─ Start button

Slide 1: Do Now Quiz (Phase 1: Activation)
         └─ 5 questions from PREVIOUS lessons only
         └─ Spaced retrieval (no new content)
         └─ Questions from Lesson [X-1] and [X-2]

Slides 2-3: Concept Slides (Phase 2: Concept Teaching)
         └─ Slide 2: Major Concept 1 with visuals/explanations
         └─ Slide 3: Major Concept 2 with visuals/explanations
         └─ Both grounded in textbook and research

Slide 4: Understanding Check (Phase 2: Check) ⭐ CRITICAL
         └─ Tests ONLY the concepts from slides 2-3
         └─ 5 questions: 3 scenario-based + 2 matching
         └─ ALL answers randomized (use useMemo + shuffleArray)
         └─ Detailed feedback (2-3 sentences each)
         └─ Color-themed matching lesson

Slides 5-6: Simulation/Interactive Task (Phase 3: Application)
         └─ Slide 5: Interactive component (Part 1)
         └─ Slide 6: Continuation or different interaction (Part 2)
         └─ Types: Simulations, games, visualizations, labs, tasks
         └─ Must apply knowledge from slides 2-3

Slide 7: Evidence Grid (Phase 4: Evidence)
         └─ 3-4 research studies with citations
         └─ Format: Author (Year) | Key Finding | Evaluation
         └─ All studies support concepts from slides 2-3

Slide 8: Critical Evaluation (Phase 5: Critique)
         └─ Strengths, limitations, alternatives of research
         └─ Links to essay evaluation criteria (AO3)
         └─ Consider opposing viewpoints

Slide 9: Essay Plan (Phase 6: Assessment)
         └─ AO1/AO3 breakdown
         └─ Key points to include
         └─ Exam guidance for 9/12 mark essays
```

---

## 🔴 CRITICAL REQUIREMENTS (NON-NEGOTIABLE)

### #1: Understanding Check (Slide 4) ⭐ MOST IMPORTANT

**File**: `/src/components/Lesson[X]UnderstandingCheck.tsx`

**Requirements:**
- **5 questions total**: 3 scenario-based + 2 matching
- **Tests ONLY slides 2-3 content** - DO NOT test new material
- **Answer randomization**: EVERY option must be randomized using `useMemo` + `shuffleArray()`
  - This is NON-NEGOTIABLE to prevent students gaming the system
  - Randomization must happen on every component mount
  - Use the exact pattern shown in UNDERSTANDING_CHECK_STANDARD.md
- **Detailed feedback**: Each answer has 2-3 sentence explanation linking to research/concepts
- **Color-themed**: Use lesson theme color throughout (backgrounds, borders, text highlights)
- **Accepts `isPresentation` prop**: Enlarges fonts/spacing for classroom projection
- **Accepts `themeColor` prop**: Applies consistent color to all interactive elements

**Why this matters:**
- Without randomization, students memorize positions instead of understanding
- This is the ONLY assessment checkpoint for slides 2-3
- If this component fails, the entire lesson validity is compromised

### #2: Sidebar Navigation (Consistent across all modules)

**File**: `/src/App.tsx` (lines handling sidebar)

**Requirements:**
- Menu toggle button (top-left)
- List of all lessons by number and title
- Active lesson highlighted (blue background)
- Clicking lesson resets to slide 0 of that lesson
- Sidebar width: 256px (w-64 in Tailwind) when open, 80px (w-20) when collapsed
- Color scheme: `bg-gray-800`, `border-gray-700`, hover `bg-gray-700`
- Typography: lesson titles in gray-400 (normal), white when active

**See**: SIDEBAR_NAVIGATION_STANDARD.md for full implementation details

### #3: Do Now Quiz (5 questions, prior lessons only)

**Location**: Defined in `/src/App.tsx` constants

**Requirements:**
- **5 questions**: From Lesson [X-1] and Lesson [X-2] ONLY
- **NO new content**: Do not test current lesson concepts
- **Variety**: Mix question types and topics
- **Spaced retrieval**: Activate prior knowledge from 1-2 lessons back
- **Example structure**:
  ```typescript
  const lesson[X]DoNow = [
    { id: 1, question: "Lesson [X-1] concept: ...", options: ["Option A", "Option B", "Option C"], correct: 0 },
    { id: 2, question: "Lesson [X-1] research: ...", options: ["Option A", "Option B", "Option C"], correct: 1 },
    { id: 3, question: "Lesson [X-2] definition: ...", options: ["Option A", "Option B", "Option C"], correct: 2 },
    { id: 4, question: "Lesson [X-1] mechanism: ...", options: ["Option A", "Option B", "Option C"], correct: 0 },
    { id: 5, question: "Lesson [X-2] integrated: ...", options: ["Option A", "Option B", "Option C"], correct: 1 },
  ];
  ```

**See**: DO_NOW_QUIZ_STANDARD.md for full patterns

### #4: Theme System (Consistent color application)

**All modules use one of these lesson colors**:
- Red (`red-500`, `red-600`, `red-400`)
- Orange (`orange-500`, `orange-600`, `orange-400`)
- Amber (`amber-500`, `amber-600`, `amber-400`)
- Yellow (`yellow-500`, `yellow-600`, `yellow-400`)
- Green (`green-500`, `green-600`, `green-400`)
- Cyan (`cyan-500`, `cyan-600`, `cyan-400`)
- Purple (`purple-500`, `purple-600`, `purple-400`)
- Slate (`slate-500`, `slate-600`, `slate-400`)

**Apply theme to**:
- Title slide (icon glow, button border)
- Understanding Check (question backgrounds, feedback boxes)
- Evidence Grid (study card borders)
- All interactive elements
- Never apply dark theme colors; use medium/light shades

**See**: STANDARDIZATION_FRAMEWORK.md for theme assignment rules

### #5: Presentation Mode Support

**Every interactive component must**:
- Accept `isPresentation` boolean prop
- Enlarge fonts when `isPresentation={true}`
- Increase spacing/padding for classroom visibility
- Maintain visual hierarchy at scale

**Pattern**:
```typescript
const textClass = isPresentation ? 'text-2xl' : 'text-lg';
const containerClass = isPresentation ? 'p-12 gap-8' : 'p-6 gap-4';
```

### #6: Simulation/Interaction Types (Pick variety per module)

**Module should include 2-3 different interaction types** across lessons:
- **Simulation**: System/model interactions (e.g., neurotransmitter mechanisms, CBT model)
- **Game**: Strategic decision-making (e.g., diagnosis game, treatment planning)
- **Visualization**: Data/process displays (e.g., twin study results, molecular structures)
- **Lab/Task**: Problem-solving activity (e.g., data analysis, protocol design)
- **Debate/Discussion**: Evidence evaluation (e.g., causation debate, clinical interview)

**See**: SIMULATION_FRAMEWORK.md for detailed examples and implementation patterns

---

## 📋 IMPLEMENTATION WORKFLOW

### Phase 1: Setup (15 min)
- [ ] Copy ReferenceModule to a new directory: `[TopicName]/`
- [ ] Update `package.json` with your topic name
- [ ] Update `metadata.json` with topic info
- [ ] Choose lesson theme colors (one per lesson)
- [ ] Document textbook chapters for each lesson

### Phase 2: Structure (30 min)
- [ ] Create lesson-specific component files in `src/components/`
  - `Lesson1UnderstandingCheck.tsx`
  - `Lesson1Simulation.tsx` (or custom simulation component)
  - Create files for each lesson
- [ ] Map all lessons in `src/App.tsx` (update slide count, render functions)
- [ ] Add all Do Now Quiz data to `src/App.tsx` constants

### Phase 3: Content Creation (6-8 hours per lesson)
For **each lesson**, in order:

1. **Slides 2-3 (Concept Teaching)**
   - Write 2 major concepts grounded in textbook
   - Create visuals/diagrams (use CSS/React if complex)
   - Include 2-3 key research studies
   - Link concepts to later evidence grid

2. **Slide 4 (Understanding Check)** ⭐ CRITICAL
   - Write 5 questions testing ONLY slides 2-3 concepts
   - 3 scenario-based questions (realistic situations)
   - 2 matching questions (concept-definition pairs)
   - Randomize all answers using `useMemo` + `shuffleArray()`
   - Write 2-3 sentence feedback for each answer
   - Link feedback to research/concepts taught in slides 2-3

3. **Slides 5-6 (Simulation)**
   - Choose interaction type (see SIMULATION_FRAMEWORK.md)
   - Build component(s) that apply slide 2-3 concepts
   - Include realistic data/scenarios
   - Make it engaging but educational

4. **Slide 7 (Evidence Grid)**
   - 3-4 research studies (can include those from concept slides)
   - Format: Author (Year) | Finding | Evaluation
   - All studies support main concepts
   - Include proper citations (Journal, Year)

5. **Slide 8 (Evaluation)**
   - Strengths and limitations of key research
   - Alternative explanations or perspectives
   - Link to essay evaluation criteria (AO3)

6. **Slide 9 (Essay Plan)**
   - AO1 points (knowledge)
   - AO3 points (evaluation)
   - Exam guidance (timing, structure)

### Phase 4: Polish & Test (2 hours)
- [ ] Run `npm run dev` and test every slide
- [ ] Test sidebar navigation (all lessons, active states)
- [ ] Test presentation mode (fonts scale correctly)
- [ ] Test Understanding Check randomization (reload page 5 times, check answer positions change)
- [ ] Verify all Do Now questions link to previous lessons
- [ ] Check color theme consistency
- [ ] Verify feedback text is educational
- [ ] Test all interactive components for bugs

### Phase 5: Verification (30 min)
- [ ] Run through QUICK_CHECKLIST.md
- [ ] Ensure all files follow TypeScript conventions
- [ ] Run `npm run build` (should complete without errors)
- [ ] Final review of all components

---

## 🗂️ FILE STRUCTURE

Every module follows this structure:

```
[TopicName]/
├── package.json                    ← Update topic name & version
├── metadata.json                   ← Topic metadata
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── index.html
├── README.md                       ← Topic overview
├── src/
│   ├── main.tsx
│   ├── App.tsx                     ← MAIN APPLICATION (lesson structure + routing)
│   ├── index.css                   ← Tailwind styles
│   └── components/
│       ├── Slide.tsx               ← Base slide wrapper
│       ├── PhaseHeader.tsx          ← Phase headers (Phase 1: Activation, etc.)
│       ├── DoNowQuiz.tsx            ← Do Now component (reusable)
│       ├── UnderstandingCheck.tsx   ← Understanding Check (reusable)
│       ├── Lesson1UnderstandingCheck.tsx    ← Lesson 1 specific
│       ├── Lesson1Simulation.tsx            ← Lesson 1 interaction
│       ├── Lesson2UnderstandingCheck.tsx    ← Lesson 2 specific
│       ├── Lesson2Simulation.tsx            ← Lesson 2 interaction
│       └── ... (more lesson-specific components)
```

---

## ✅ FINAL CHECKLIST (Use QUICK_CHECKLIST.md)

Before submitting your module:

- [ ] All 10 slides render correctly for every lesson
- [ ] Sidebar navigation works (all lessons selectable)
- [ ] Do Now Quiz has 5 questions from prior lessons
- [ ] Understanding Check has randomized answers (test by reloading)
- [ ] Understanding Check has 5 questions (3 scenario + 2 matching)
- [ ] All feedback is 2-3 sentences and educational
- [ ] Simulations are interactive and apply slide 2-3 concepts
- [ ] Evidence Grid has 3-4 studies with proper citations
- [ ] Essay Plan has AO1/AO3 breakdown
- [ ] Color theme applied consistently throughout
- [ ] Presentation mode works (fonts scale, spacing adjusted)
- [ ] No TypeScript errors (`npm run build` succeeds)
- [ ] All components accept and use `isPresentation` prop correctly
- [ ] No hardcoded answer positions in Understanding Check
- [ ] All lesson-specific questions actually test that lesson's content

---

## 📚 REFERENCE IMPLEMENTATIONS

Study these for patterns and examples:

1. **ReferenceModule** (this repo)
   - Clean, minimal implementation
   - Standard patterns for all components
   - TypeScript best practices

2. **Schizophrenia** (in this repo)
   - Complex lesson management (7 lessons)
   - Advanced simulation patterns
   - Real-world complexity examples

3. **ExampleModule (Aggression)** (in this repo)
   - Rich pedagogical content
   - Multiple simulation types
   - Deep understanding check examples

---

## 🚀 STARTING YOUR MODULE

### Step 1: Understand the standards
```bash
cd /path/to/Lesson-Builder
# Read all 8 documents above (in order)
```

### Step 2: Copy and customize
```bash
cp -r ReferenceModule [MyNewModule]
cd [MyNewModule]
npm install
npm run dev
```

### Step 3: Build your lessons
Follow Phase 2-4 workflow above for each lesson.

### Step 4: Test and verify
Follow Phase 5 checklist above.

---

## ❓ FAQ

**Q: Can I make lessons fewer than 10 slides?**
A: No. The 10-slide structure is fixed and represents the optimal learning progression. All lessons follow this.

**Q: Can I skip the Understanding Check?**
A: Absolutely not. Understanding Check (Slide 4) is MANDATORY. It's the only formative assessment for the core concepts.

**Q: Do I need to randomize answers in Understanding Check?**
A: YES, ALWAYS. Without randomization, students game the system. Use `useMemo` + `shuffleArray()` on EVERY mount.

**Q: Can I test new content in Do Now?**
A: No. Do Now MUST retrieve from prior lessons. If it's your first lesson, adapt to test general psychology knowledge.

**Q: How do I choose which interaction type to use?**
A: Read SIMULATION_FRAMEWORK.md. Use variety across lessons (not all simulations, mix with games/visualizations).

**Q: Can I change the sidebar color?**
A: No. All modules use the same sidebar styling (`bg-gray-800`, `border-gray-700`) for consistency.

**Q: Where do I get research citations?**
A: From the textbook for your topic. Evidence Grid must cite actual studies, not generic claims.

---

## 💾 DELIVERY

Your completed module should:
1. Have no build errors (`npm run build` succeeds)
2. Pass QUICK_CHECKLIST.md
3. Be ready to deploy to production
4. Follow all standards in this prompt
5. Be identical in structure/quality to ReferenceModule examples

---

**Last Updated**: January 2026
**Version**: 1.0 (Master Prompt - Production Ready)
