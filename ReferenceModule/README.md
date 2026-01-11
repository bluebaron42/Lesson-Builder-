# ReferenceModule: Gold-Standard Psychology Lesson Template

A production-ready reference module combining the pedagogical depth of ExampleModule (Aggression) with the clean architecture of Schizophrenia.

## Quick Start

```bash
npm install
npm run dev
```

## What This Is

ReferenceModule is the **gold-standard template** for creating AQA GCSE/A Level Psychology lessons. It demonstrates:

- **Architecture**: 9–10 slide lesson structure with consistent learning phases
- **Code Quality**: TypeScript + React, organized components, reusable patterns
- **Pedagogical Design**: Research-backed learning progression (Activation → Assessment)
- **Critical Patterns**: Randomized answer options, spaced retrieval, interactive simulations
- **Theme System**: Context-dependent color themes for any psychology unit
- **Documentation**: Essential guides without verbosity

## Lesson Structure (9–10 Slides)

```
Slide 0: Title Slide
Slide 1: Do Now Quiz (Phase 1: Activation)
Slides 2–3: Concept Slides (Phase 2: Concept)
Slide 4: Understanding Check (Phase 2: Check) ⭐ CRITICAL
Slides 5–6: Simulation/Task (Phase 3: Application)
Slide 7: Evidence Grid (Phase 4: Evidence)
Slide 8: Critical Evaluation (Phase 5: Critique)
Slide 9: Essay Plan (Phase 6: Assessment)
```

## Key Files

- **App.tsx** - Main application shell with all lesson renders
- **constants.tsx** - Lesson data, quizzes, color themes
- **components/** - Reusable and lesson-specific components
- **metadata.json** - Module metadata (displayName, description)

## Critical Requirements

### 1. Understanding Check (Slide 4) ⭐
- **5 questions**: 3 scenario + 2 matching
- **Randomized answers**: Use `useMemo` + `shuffleArray()`
- **Feedback**: 2–3 sentences linking to lesson concepts
- **Color**: Lesson-specific theme throughout

### 2. Do Now Quiz (Slide 1)
- **5 questions** from **previous lessons only**
- Spaced retrieval, no new content
- Mix of topics and question types

### 3. Theme System
Each lesson has a color theme (e.g., cyan, amber, orange, red, yellow, teal, purple, slate).
Apply consistently to:
- Title slides
- Understanding Check backgrounds
- Evidence Grid borders
- All interactive elements

### 4. Component Patterns
All interactive components must:
- Accept `isPresentation` prop for enlarged fonts and spacing
- Export as default functions
- Use Tailwind CSS for styling

## TypeScript Structure

This module uses TypeScript (.tsx, .ts) for:
- Type safety
- Better IDE support
- Self-documenting code

## Building & Deploying

```bash
npm run build       # Create dist/ folder
npm run preview     # Test production build locally
```

A GitHub Actions workflow is included for automated deployment.

## Adapting This Module

To create a new module based on this reference:

1. **Copy the entire ReferenceModule folder**
2. **Update package.json**: Change `displayName` and `description`
3. **Update metadata.json**: Change name and description
4. **Update App.tsx**: Implement lesson-specific content
5. **Update constants.tsx**: Add lesson data (colors, quizzes, slides)
6. **Create/modify components** for your lesson topics
7. **Test** presentation mode and answer randomization

## Documentation Index

See [LESSON_CREATION_GUIDE.md](./LESSON_CREATION_GUIDE.md) for:
- Full architectural details
- All critical requirements
- Code examples and patterns
- Verification checklist

## Gold-Standard Principles

This module enforces:

✅ **Learning Science**: Evidence-based progression (activation → assessment)
✅ **Assessment Validity**: Randomized answers prevent gaming
✅ **Accessibility**: Presentation mode for classrooms
✅ **Consistency**: Same structure across all units
✅ **Quality**: Reusable components and clean code
✅ **Documentation**: Everything needed to adapt for new topics

---

**Status**: Production Ready  
**Last Updated**: January 8, 2026  
**Use This As Your Reference Standard**
