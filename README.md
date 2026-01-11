# Lesson-Builder: Production-Quality Psychology Module Generator

A comprehensive system for creating **IDENTICAL QUALITY AND FORMATTING** AQA GCSE/A Level Psychology lesson modules. Every module created with this system will be indistinguishable in structure, navigation, pedagogy, and code quality.

---

## 🎯 WHAT THIS SYSTEM DOES

This Lesson-Builder enables **AI agents** to create complete, production-ready psychology lesson modules for ANY GCSE/A Level psychology topic using:

1. ✅ **Standardized prompts** (this repo)
2. ✅ **Textbook content** for the specific topic
3. ✅ **Reference implementations** (ReferenceModule, ExampleModule, Schizophrenia)

**Result**: Modules that are identical in structure, navigation, component patterns, and pedagogical quality—only the content differs by topic.

---

## 📚 STANDARDIZATION DOCUMENTS (READ IN ORDER)

These 8 documents define **exactly** what every module must contain:

### 1. **[MASTER_AGENT_PROMPT.md](MASTER_AGENT_PROMPT.md)** ← START HERE
   - Complete mission brief for agents
   - References all 8 standards
   - Implementation workflow
   - File structure and patterns

### 2. **[STANDARDIZATION_FRAMEWORK.md](STANDARDIZATION_FRAMEWORK.md)**
   - Core principle: "Every module is indistinguishable"
   - File organization (identical across all modules)
   - Visual consistency (color, typography, spacing)
   - 10-slide lesson structure (non-negotiable)
   - Component patterns (reusable vs. lesson-specific)
   - Quality metrics and verification checklist

### 3. **[SIDEBAR_NAVIGATION_STANDARD.md](SIDEBAR_NAVIGATION_STANDARD.md)**
   - Sidebar layout and styling (identical in all modules)
   - Lesson selection and highlighting
   - Navigation flow and state management
   - Responsive behavior
   - Integration with App.tsx

### 4. **[DO_NOW_QUIZ_STANDARD.md](DO_NOW_QUIZ_STANDARD.md)**
   - Do Now Quiz (Slide 1, Phase 1: Activation)
   - Exactly 5 questions from **PREVIOUS lessons only**
   - Spaced retrieval principles
   - Question design guidelines
   - Data structure and examples

### 5. **[UNDERSTANDING_CHECK_STANDARD.md](UNDERSTANDING_CHECK_STANDARD.md)** ⭐ CRITICAL
   - Understanding Check (Slide 4, Phase 2: Check)
   - **MANDATORY** component (non-negotiable)
   - 5 questions: 3 scenario-based + 2 matching
   - **Answer randomization** (useMemo + shuffleArray) - CRITICAL
   - Feedback structure (2-3 sentences, educational)
   - Complete implementation example

### 6. **[SIMULATION_FRAMEWORK.md](SIMULATION_FRAMEWORK.md)**
   - Slides 5-6: Interactive applications
   - 5 interaction types: Simulation, Game, Visualization, Lab, Debate
   - Variety requirements (2-3 different types per module)
   - Design patterns and examples
   - Quality checklist

### 7. **[EVIDENCE_GRID_ESSAY_PLAN.md](EVIDENCE_GRID_ESSAY_PLAN.md)**
   - Slide 7: Evidence Grid (Phase 4: Evidence)
   - 3-4 real research studies with citations
   - Slide 9: Essay Plan (Phase 6: Assessment)
   - AO1 (Knowledge) and AO3 (Evaluation) structure
   - Exam guidance for 12-mark questions

### 8. **[QUICK_CHECKLIST.md](QUICK_CHECKLIST.md)**
   - Final verification before submission
   - 150+ checklist items
   - Build and deployment readiness
   - Sign-off criteria

---

## 📁 REFERENCE MODULES

### 1. **ReferenceModule** - Minimal Gold Standard
Clean, minimal reference template showing ideal patterns.

**When to use:**
- Copy this for your new module
- Reference for component patterns
- Baseline for file structure

**Key files:**
- `src/App.tsx` - Standard lesson structure
- `src/components/Slide.tsx` - Base slide wrapper
- `src/components/PhaseHeader.tsx` - Phase headers
- `src/components/DoNowQuiz.tsx` - Reusable Do Now
- `src/components/UnderstandingCheck.tsx` - Base component

### 2. **ExampleModule (Aggression)** - Rich Implementation
Full, complex reference showing depth and variety.

**When to use:**
- See implementation complexity
- Understand simulation variety
- Learn rich pedagogical content

**Key files:**
- `COMPREHENSIVE_MODULE_CREATION_PROMPT.md` - Detailed requirements
- `LESSON_CREATION_STANDARD.md` - Official standards
- `src/components/` - 50+ specialized components

### 3. **Schizophrenia** - Production Example
Real, deployable module showing all standards in practice.

**When to use:**
- Reference for multi-lesson module
- Understand TypeScript patterns
- See navigation in action

**Key files:**
- `App.tsx` - Complex lesson management
- `components/` - Specialized interactions
- `constants.ts` - Lesson data structure

---

## 🚀 QUICK START FOR AGENTS

### Step 1: Understand the Standards (30 minutes)
```bash
# Read these 8 documents IN ORDER:
1. MASTER_AGENT_PROMPT.md (overview)
2. STANDARDIZATION_FRAMEWORK.md (principles)
3. SIDEBAR_NAVIGATION_STANDARD.md (UI consistency)
4. DO_NOW_QUIZ_STANDARD.md (Slide 1)
5. UNDERSTANDING_CHECK_STANDARD.md (Slide 4 - CRITICAL)
6. SIMULATION_FRAMEWORK.md (Slides 5-6)
7. EVIDENCE_GRID_ESSAY_PLAN.md (Slides 7, 9)
8. QUICK_CHECKLIST.md (verification)
```

### Step 2: Copy ReferenceModule
```bash
cp -r ReferenceModule [MyNewTopic]
cd [MyNewTopic]
npm install
npm run dev
```

### Step 3: Customize (6-8 hours per lesson)
For each lesson:
- Update `App.tsx` with lesson data
- Create lesson-specific understanding check (`Lesson[X]UnderstandingCheck.tsx`)
- Create lesson-specific interaction (`Lesson[X]Simulation.tsx` or similar)
- Fill in concepts, research, feedback

### Step 4: Verify
```bash
npm run build  # Should succeed with zero errors
# Run through QUICK_CHECKLIST.md (~30 min)
# Reload page 5 times to verify Understanding Check randomization
```

---

## 🎓 HUMAN USAGE: Create a Module for Topic X

### If you're a teacher/curriculum developer:

```bash
# 1. Find the agent/system that created this
# 2. Give it a prompt like:

"Use the Lesson-Builder repo (in /path/to/Lesson-Builder) 
to create a complete psychology lesson module on [TOPIC].

Instructions:
- Read MASTER_AGENT_PROMPT.md first
- Use all 8 standardization documents
- Use [TEXTBOOK] as content source
- Output should be production-ready
- Module must pass QUICK_CHECKLIST.md
- Result should be identical in quality to ReferenceModule and Schizophrenia examples"

# 3. The agent will generate a complete module
```

### If you're an AI agent creator:

```bash
# 1. Access this Lesson-Builder repo
# 2. Follow MASTER_AGENT_PROMPT.md exactly
# 3. Create a module that passes QUICK_CHECKLIST.md
# 4. Output must be indistinguishable from ReferenceModule examples
```

---

## ✅ QUALITY ASSURANCE

### Every module MUST have:

| Component | Location | Status |
|-----------|----------|--------|
| 10 slides per lesson | `App.tsx` | MANDATORY |
| Do Now Quiz (5 questions) | Slide 1 | MANDATORY |
| Concept slides (2) | Slides 2-3 | MANDATORY |
| **Understanding Check** | Slide 4 | **MANDATORY** ⭐ |
| Randomized answers | UC component | **MANDATORY** ⭐ |
| Simulation/interaction | Slides 5-6 | MANDATORY |
| Evidence Grid | Slide 7 | MANDATORY |
| Critical Evaluation | Slide 8 | MANDATORY |
| Essay Plan | Slide 9 | MANDATORY |
| Sidebar navigation | `App.tsx` | MANDATORY |
| Presentation mode | All components | MANDATORY |
| TypeScript no errors | Build | MANDATORY |
| Pass QUICK_CHECKLIST | All items | MANDATORY |

---

## 📊 CONSISTENCY VERIFICATION

After creating a module, verify against standards:

```bash
# 1. Structure
- 10 slides per lesson? ✓
- Sidebar navigation working? ✓
- All reusable components copied from ReferenceModule? ✓

# 2. Pedagogy
- Do Now from prior lessons? ✓
- UC tests Slides 2-3 only? ✓
- Simulation applies Slides 2-3? ✓
- Evidence Grid has real research? ✓

# 3. Code Quality
- npm run build succeeds? ✓
- No TypeScript errors? ✓
- Understanding Check randomizes (test 5 reloads)? ✓
- Presentation mode works? ✓

# 4. Final Check
- Run through QUICK_CHECKLIST.md ✓
```

---

## 🔗 DOCUMENT MAP

```
Lesson-Builder/
├── README.md (YOU ARE HERE)
├── MASTER_AGENT_PROMPT.md ← Read this first
├── STANDARDIZATION_FRAMEWORK.md ← Core principles
├── SIDEBAR_NAVIGATION_STANDARD.md ← Navigation UI
├── DO_NOW_QUIZ_STANDARD.md ← Slide 1
├── UNDERSTANDING_CHECK_STANDARD.md ← Slide 4 (CRITICAL)
├── SIMULATION_FRAMEWORK.md ← Slides 5-6
├── EVIDENCE_GRID_ESSAY_PLAN.md ← Slides 7, 9
├── QUICK_CHECKLIST.md ← Final verification
│
├── ReferenceModule/ ← Copy this to start
│   ├── README.md
│   ├── package.json
│   ├── src/
│   │   ├── App.tsx ← Main application
│   │   ├── index.css
│   │   └── components/
│   │       ├── Slide.tsx (reusable)
│   │       ├── PhaseHeader.tsx (reusable)
│   │       ├── DoNowQuiz.tsx (reusable)
│   │       └── UnderstandingCheck.tsx (reusable)
│
├── ExampleModule/ ← See rich implementation
├── Schizophrenia/ ← See production example
└── lesson-template/ ← Scaffolding tools
```

---

## 💾 EXAMPLE WORKFLOW

### Create a "Relationships" module:

```bash
# 1. Read MASTER_AGENT_PROMPT.md

# 2. Copy template
cp -r ReferenceModule Relationships
cd Relationships

# 3. Update metadata
# package.json: name "relationships"
# metadata.json: displayName "Relationships"
# README.md: Topic overview

# 4. For Lesson 1: Attachment Styles
# - Update App.tsx lesson structure
# - Create Lesson1UnderstandingCheck.tsx with 5 questions on attachment
# - Create Lesson1Simulation.tsx (e.g., attachment type game)
# - Add lesson1DoNow data
# - Fill in Concept slides (Slides 2-3)
# - Add Evidence Grid studies (Slide 7)
# - Add Essay Plan (Slide 9)

# 5. Repeat for Lessons 2-7

# 6. Verify
npm run build  # ← Must succeed
# Check QUICK_CHECKLIST.md
# Reload page 5 times to verify UC randomization

# 7. Deploy
npm run build
# Output is in dist/
```

---

## ❓ FAQ

**Q: Can I modify ReferenceModule components?**
A: No. Copy base components but never modify them. Create lesson-specific versions in separate files.

**Q: Is Understanding Check randomization really necessary?**
A: YES. Without it, students game the system by memorizing positions. It's non-negotiable.

**Q: Can I have 8 slides instead of 10?**
A: No. Every lesson is exactly 10 slides. This is the fixed structure.

**Q: Can I skip the Evidence Grid?**
A: No. All 9 slides are mandatory.

**Q: How do I choose interaction types?**
A: Read SIMULATION_FRAMEWORK.md. Use 2-3 different types across lessons for variety.

**Q: What if the textbook has different research than I put in the Evidence Grid?**
A: Use the textbook research. Verify all citations are real and accessible.

---

## 📞 SUPPORT

If you're creating a module:

1. **Read**: MASTER_AGENT_PROMPT.md (complete overview)
2. **Reference**: ReferenceModule (copy and customize)
3. **Verify**: QUICK_CHECKLIST.md (final check)
4. **Example**: Schizophrenia module (see working implementation)

---

**Version**: 2.0 (Comprehensive System - Production Ready)
**Last Updated**: January 2026
**Status**: Ready for agents to generate modules

### Step 4: Create Lesson Components
For each lesson, create 8 components (see LESSON_CREATION_GUIDE.md).

### Step 5: Test & Deploy
```bash
npm install
npm run dev      # Test locally
npm run build    # Create production build
```

---

## 🔴 Critical Requirements (All Modules)

### ⭐ Understanding Check (Slide 4)
- **5 questions** testing only slides 2–3 content
- **3 scenario + 2 matching** question types
- **Randomized answers** using `useMemo` + `shuffleArray()` (CRITICAL)
- **2–3 sentence feedback** per question
- **Theme color** consistent throughout
- **Presentation mode support** for classroom use

### Do Now Quiz (Slide 1)
- **5 questions** from **previous lessons only**
- Mix of topics and question types
- No new content from current lesson

---

## 📚 Documentation Index

| Document | Location | Purpose |
|----------|----------|---------|
| Gold Standard | `ReferenceModule/README.md` | Start here |
| Lesson Guide | `ReferenceModule/LESSON_CREATION_GUIDE.md` | All patterns & requirements |
| Depth Reference | `ExampleModule/COMPREHENSIVE_MODULE_CREATION_PROMPT.md` | Detailed foundation |
| Standards Check | `ExampleModule/LESSON_CREATION_STANDARD.md` | Verification checklist |
| Code Examples | `ExampleModule/LESSON_1_TEMPLATE_SHELL.md` | Real code patterns |

---

## 📊 Module Status

| Module | Status | Type |
|--------|--------|------|
| ReferenceModule | ⭐ Gold Standard | Template |
| ExampleModule (Aggression) | ✅ Complete | Full Impl. |
| Schizophrenia | ✅ Complete | Alternative Arch. |

---

## 🏆 Gold-Standard Principles

✅ **Learning Science**: Evidence-based progression  
✅ **Assessment Validity**: Randomized answers  
✅ **Consistency**: Same structure across units  
✅ **Quality**: Reusable, clean code  
✅ **Accessibility**: Presentation mode  
✅ **Documentation**: Clear, minimal guidance  
✅ **Scalability**: Rapid module creation  

---

## 🚀 Next Steps

1. **To create a new module**: `cp -r ReferenceModule MyModule` and follow the guide
2. **To understand patterns**: Review `ReferenceModule/src/components/`
3. **To see depth examples**: Study `ExampleModule/LESSON_1_TEMPLATE_SHELL.md`
4. **To test**: `cd ReferenceModule && npm install && npm run dev`

**Ready to build world-class psychology modules!**