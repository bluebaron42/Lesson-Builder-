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

### Deployment to Psych-hub

A GitHub Actions workflow (`.github/workflows/build-and-deploy.yml`) is included for automated deployment.

**Prerequisites**:
1. Add `displayName` field to `package.json` (controls module name in Psych-hub)
2. Repository must have `PSYCH_HUB_DEPLOY_TOKEN` secret configured
3. No ASCII arrows (`->`) in JSX text—use Unicode `→` instead

**To deploy**:
```bash
git tag v1.0.0
git push origin v1.0.0
```

The workflow will:
- Build the module
- Create `module-dist.zip`
- Create GitHub release
- Sync to Psych-hub using your `displayName`

## Adapting This Module

To create a new module based on this reference:

1. **Copy the entire ReferenceModule folder**
2. **Update package.json**: Change `name`, **`displayName`** (CRITICAL for Psych-hub), and `description`
3. **Update metadata.json**: Change name and description
4. **Update App.tsx**: Implement lesson-specific content
5. **Update constants.tsx**: Add lesson data (colors, quizzes, slides)
6. **Create/modify components** for your lesson topics
7. **Replace ASCII arrows**: Use → (Unicode) not -> in JSX text
8. **Test** presentation mode and answer randomization
9. **Deploy**: Tag with version (e.g., `v1.0.0`) to trigger workflow

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
