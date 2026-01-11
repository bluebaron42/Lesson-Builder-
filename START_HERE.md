# 🚀 START HERE: Lesson-Builder System Overview

Welcome to the **Lesson-Builder Standardization System**. This document tells you everything you need to know to get started.

---

## ✨ WHAT THIS IS

A **production-grade system** for creating psychology lesson modules that are **IDENTICAL IN QUALITY AND FORMATTING**.

- ✅ Any agent can create modules for any psychology topic
- ✅ Every module will be the same quality (structure, code, pedagogy)
- ✅ Only the content differs—the framework stays constant
- ✅ All modules are production-ready for classroom use

---

## 📋 THE CORE CONCEPT

**Problem**: Different modules had different quality, structure, and formatting.

**Solution**: This system defines EXACTLY what every module must have:
- 10 slides (fixed structure)
- Identical navigation (sidebar)
- Identical components (reusable patterns)
- Identical pedagogy (6 learning phases)
- Identical quality standards (TypeScript, research, feedback)

---

## 🎯 FOR AGENTS: How to Create a Module

### If you're an AI agent asked to "create a psychology module":

**1. Read these documents IN ORDER** (2-3 hours)
   1. [MASTER_AGENT_PROMPT.md](MASTER_AGENT_PROMPT.md) ← Start with this
   2. [STANDARDIZATION_FRAMEWORK.md](STANDARDIZATION_FRAMEWORK.md)
   3. [SIDEBAR_NAVIGATION_STANDARD.md](SIDEBAR_NAVIGATION_STANDARD.md)
   4. [DO_NOW_QUIZ_STANDARD.md](DO_NOW_QUIZ_STANDARD.md)
   5. [UNDERSTANDING_CHECK_STANDARD.md](UNDERSTANDING_CHECK_STANDARD.md) ⭐ CRITICAL
   6. [SIMULATION_FRAMEWORK.md](SIMULATION_FRAMEWORK.md)
   7. [EVIDENCE_GRID_ESSAY_PLAN.md](EVIDENCE_GRID_ESSAY_PLAN.md)
   8. [QUICK_CHECKLIST.md](QUICK_CHECKLIST.md)

**2. Study the references** (1 hour)
   - Look at [ReferenceModule/](ReferenceModule/) (minimal template)
   - Look at [Schizophrenia/](Schizophrenia/) (working example)

**3. Follow the implementation guide** (40-56 hours per module)
   - [AGENT_IMPLEMENTATION_GUIDE.md](AGENT_IMPLEMENTATION_GUIDE.md) for step-by-step

**4. Verify your work** (2-3 hours)
   - Use [QUICK_CHECKLIST.md](QUICK_CHECKLIST.md) (150+ items)

---

## 🎓 FOR TEACHERS/CURRICULUM DESIGNERS: How to Request a Module

If you want to commission a psychology lesson module:

```
"Use the Lesson-Builder repo (/path/to/Lesson-Builder) to create 
a psychology lesson module on [TOPIC]:

- Topic: [e.g., Relationships, Aggression, Schizophrenia]
- Lessons: [e.g., 7 lessons]
- Textbook: [e.g., AQA A Level Psychology chapter X]
- Use ALL standards in Lesson-Builder
- Module must pass QUICK_CHECKLIST.md
- Result should be identical in quality to the Schizophrenia example"
```

The agent will deliver a production-ready module in 1-2 weeks.

---

## 📚 DOCUMENT NAVIGATION

### Quick Reference
- **For agents**: Start with [MASTER_AGENT_PROMPT.md](MASTER_AGENT_PROMPT.md)
- **For understanding**: Read [STANDARDIZATION_FRAMEWORK.md](STANDARDIZATION_FRAMEWORK.md)
- **For implementation**: Use [AGENT_IMPLEMENTATION_GUIDE.md](AGENT_IMPLEMENTATION_GUIDE.md)
- **For verification**: Check [QUICK_CHECKLIST.md](QUICK_CHECKLIST.md)
- **System overview**: See [SYSTEM_SUMMARY.md](SYSTEM_SUMMARY.md)

### By Component
- **Navigation**: [SIDEBAR_NAVIGATION_STANDARD.md](SIDEBAR_NAVIGATION_STANDARD.md)
- **Slide 1 (Do Now)**: [DO_NOW_QUIZ_STANDARD.md](DO_NOW_QUIZ_STANDARD.md)
- **Slide 4 (UC)**: [UNDERSTANDING_CHECK_STANDARD.md](UNDERSTANDING_CHECK_STANDARD.md) ⭐
- **Slides 5-6 (Interaction)**: [SIMULATION_FRAMEWORK.md](SIMULATION_FRAMEWORK.md)
- **Slides 7 & 9**: [EVIDENCE_GRID_ESSAY_PLAN.md](EVIDENCE_GRID_ESSAY_PLAN.md)

### By Audience
- **AI Agents**: [MASTER_AGENT_PROMPT.md](MASTER_AGENT_PROMPT.md) → [AGENT_IMPLEMENTATION_GUIDE.md](AGENT_IMPLEMENTATION_GUIDE.md)
- **Teachers**: This document (START_HERE.md)
- **Developers**: [STANDARDIZATION_FRAMEWORK.md](STANDARDIZATION_FRAMEWORK.md) + code examples
- **Verifiers**: [QUICK_CHECKLIST.md](QUICK_CHECKLIST.md)

---

## ⭐ CRITICAL STANDARDS

These are **NON-NEGOTIABLE**:

### 1. Understanding Check (Slide 4)
- **MANDATORY** on every lesson
- **5 questions exactly**: 3 scenario-based + 2 matching
- **ALL answers randomized** (useMemo + shuffleArray)
- Tests **ONLY Slides 2-3 concepts**
- Feedback: 2-3 sentences, educational

### 2. Lesson Structure
- **Exactly 10 slides** (no variation)
- Same structure across all modules
- Same phases (Activation → Concept → Check → Application → Evidence → Evaluation → Assessment)

### 3. Real Research
- All research studies in Evidence Grid must be **real and citable**
- Not made-up examples
- Verifiable authors, years, journals

### 4. Textbook Alignment
- All content grounded in actual psychology textbook
- Concepts verified against source material
- Not generic psychology facts

### 5. Code Quality
- **TypeScript, zero errors** (npm run build must succeed)
- Reusable components (copied from ReferenceModule)
- Presentation mode support (all components scale)

---

## 🏗️ QUICK WORKFLOW

### For Agents (1-2 weeks per module)

```
Day 1: Read standards (8 hours)
Days 2-9: Implement each lesson (7 × 6-8 hours)
Day 10: Test & verify (4 hours)
Result: Production-ready module
```

### For Teachers Commissioning a Module

```
Week 1: Submit request + textbook
Weeks 2-3: Agent builds module
Week 4: Testing + delivery
Week 5: Ready for classroom
```

---

## 📖 EXAMPLE WORKFLOW: Creating "Relationships" Module

### Phase 1: Setup (Agent, 15 min)
```bash
cp -r ReferenceModule Relationships
npm install
# Update package.json, metadata.json
```

### Phase 2: Content (Agent, 40-56 hours)
For each lesson:
- Create understanding check (5 questions)
- Create interaction component
- Write concept slides (Slides 2-3)
- Add evidence grid (Slide 7)
- Add essay plan (Slide 9)
- Add do-now quiz data

### Phase 3: Testing (Agent, 4 hours)
- npm run build (must succeed)
- Test all slides
- Verify UC randomization
- Run QUICK_CHECKLIST.md

### Phase 4: Delivery (Agent)
- Complete module ready for classroom
- Can be deployed to production immediately

---

## ✅ SUCCESS CRITERIA

Your module is complete when:

- ✅ Reads all 9 documents
- ✅ Copies ReferenceModule
- ✅ Creates lesson-specific components
- ✅ Implements all 10 slides per lesson
- ✅ Understanding Check randomizes (test 5 reloads)
- ✅ npm run build succeeds
- ✅ Passes QUICK_CHECKLIST.md (150+ items)
- ✅ Visually identical to ReferenceModule
- ✅ Pedagogically sound
- ✅ Ready for classroom use

---

## 🎯 THE 8 STANDARDS (Overview)

| # | Document | What It Defines |
|---|----------|-----------------|
| 1 | [MASTER_AGENT_PROMPT.md](MASTER_AGENT_PROMPT.md) | Complete mission brief for agents |
| 2 | [STANDARDIZATION_FRAMEWORK.md](STANDARDIZATION_FRAMEWORK.md) | Core principles + consistency metrics |
| 3 | [SIDEBAR_NAVIGATION_STANDARD.md](SIDEBAR_NAVIGATION_STANDARD.md) | Navigation UI (identical across modules) |
| 4 | [DO_NOW_QUIZ_STANDARD.md](DO_NOW_QUIZ_STANDARD.md) | Slide 1: 5 prior-lesson questions |
| 5 | [UNDERSTANDING_CHECK_STANDARD.md](UNDERSTANDING_CHECK_STANDARD.md) | Slide 4: MANDATORY, randomized (CRITICAL) |
| 6 | [SIMULATION_FRAMEWORK.md](SIMULATION_FRAMEWORK.md) | Slides 5-6: Interaction variety |
| 7 | [EVIDENCE_GRID_ESSAY_PLAN.md](EVIDENCE_GRID_ESSAY_PLAN.md) | Slides 7 & 9: Research + exam plan |
| 8 | [QUICK_CHECKLIST.md](QUICK_CHECKLIST.md) | Final verification (150+ items) |

---

## 🔗 REFERENCE MODULES

### ReferenceModule (Minimal)
**Use this to copy and customize.**
- Clean, minimal template
- Shows ideal patterns
- Base components reusable

**View**: [ReferenceModule/README.md](ReferenceModule/README.md)

### ExampleModule - Aggression (Rich)
**Study this to see depth and variety.**
- 9 complete lessons
- Rich pedagogical content
- Multiple interaction types

**View**: [ExampleModule/README.md](ExampleModule/README.md)

### Schizophrenia (Production)
**Reference this for working implementation.**
- 7 complete lessons
- TypeScript patterns
- Navigation complexity

**View**: [Schizophrenia/README.md](Schizophrenia/README.md)

---

## ❓ FAQ

**Q: Do I need to read all 9 documents?**
A: Yes. Each one is essential. Read in order.

**Q: Can I skip the Understanding Check?**
A: No. It's MANDATORY on every lesson. Non-negotiable.

**Q: Do answers need to be randomized?**
A: YES. Without randomization, assessment validity is compromised. It's non-negotiable.

**Q: Can I have 8 slides instead of 10?**
A: No. Every lesson is exactly 10 slides. Fixed structure.

**Q: Can I make up research studies?**
A: No. All studies must be real and verifiable.

**Q: How do I know my module is ready?**
A: Pass QUICK_CHECKLIST.md (150+ items).

---

## 🚀 NEXT STEPS

### If you're an agent:
1. Read [MASTER_AGENT_PROMPT.md](MASTER_AGENT_PROMPT.md) right now
2. Follow it to completion
3. Use [QUICK_CHECKLIST.md](QUICK_CHECKLIST.md) to verify

### If you're a teacher:
1. Contact whoever manages agents in your organization
2. Provide a request: "Create psychology module on [TOPIC]"
3. Module will be delivered in 1-2 weeks, production-ready

### If you're a developer:
1. Read [STANDARDIZATION_FRAMEWORK.md](STANDARDIZATION_FRAMEWORK.md)
2. Review [ReferenceModule/](ReferenceModule/) code
3. Understand the 6 phases of pedagogy

---

## 📞 SUPPORT

**"What should I do now?"**

→ If you're an **agent**: Read [MASTER_AGENT_PROMPT.md](MASTER_AGENT_PROMPT.md)
→ If you're a **teacher**: Provide textbook + topic to your agent team
→ If you're a **developer**: Read [STANDARDIZATION_FRAMEWORK.md](STANDARDIZATION_FRAMEWORK.md)

---

## 🎓 SYSTEM OVERVIEW

This system transforms lesson creation from:

**Before**: 
- Each module different (inconsistent quality)
- No standards (each developer decides)
- Hard to maintain (no documentation)
- Slow to create (starting from scratch)

**After**:
- Each module identical (consistent quality)
- Clear standards (9 detailed documents)
- Easy to maintain (standardized patterns)
- Fast to create (template + standards)

---

**Welcome to the Lesson-Builder System. You're ready to create production-quality psychology modules.**

---

*Last Updated: January 2026*
*Version: 1.0 (Complete System)*
*Status: Ready for Production*
