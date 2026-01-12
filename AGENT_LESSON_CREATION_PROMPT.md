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

## 🔴 Non-Negotiable Requirements

1. **All content from textbook** - Every concept, study, and evaluation point must trace to `Textbooks/AQA Year 1 textbook work.txt`
2. **Answer randomization** - Understanding Check MUST randomize answers using `useMemo` + `shuffleArray()` (prevents gaming)
3. **10-slide structure** - Every lesson is exactly 10 slides (non-negotiable)
4. **Do Now Quiz** - 5 questions from PREVIOUS lessons ONLY (spaced retrieval)
5. **Detailed feedback** - 2-3 sentences per answer linking to research

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
