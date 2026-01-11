# STANDARDIZATION FRAMEWORK: Module Quality & Formatting

This document defines the **IDENTICAL QUALITY AND FORMATTING** standard that all AQA GCSE/A Level Psychology modules must follow.

---

## 🎯 CORE PRINCIPLE

**Every module is indistinguishable from every other module in structure, navigation, component patterns, and pedagogical approach.**

This means agents can create modules for any psychology topic that are guaranteed to:
- ✅ Have identical UI/UX
- ✅ Follow the same learning progression
- ✅ Use the same component patterns
- ✅ Maintain the same code quality
- ✅ Apply the same pedagogical standards

---

## 📐 STANDARDIZED MODULE STRUCTURE

### File Organization (IDENTICAL across all modules)

```
[TopicName]/
├── package.json                  ← Standard React + Vite + TypeScript
├── metadata.json                 ← Topic metadata
├── tsconfig.json                 ← Standard TypeScript config
├── vite.config.ts                ← Standard Vite config
├── tailwind.config.js            ← Standard Tailwind config
├── postcss.config.js             ← Standard PostCSS config
├── index.html                    ← Standard HTML entry
├── README.md                     ← Topic overview (same structure)
├── src/
│   ├── main.tsx                  ← Standard entry point
│   ├── App.tsx                   ← MAIN APPLICATION (only customized content is lesson data)
│   ├── index.css                 ← Standard Tailwind imports
│   └── components/
│       ├── Slide.tsx             ← REUSABLE (identical across all modules)
│       ├── PhaseHeader.tsx        ← REUSABLE (identical across all modules)
│       ├── DoNowQuiz.tsx          ← REUSABLE (identical across all modules)
│       ├── UnderstandingCheck.tsx ← REUSABLE (identical across all modules)
│       ├── Lesson1UnderstandingCheck.tsx    ← LESSON-SPECIFIC
│       ├── Lesson1Simulation.tsx            ← LESSON-SPECIFIC
│       ├── Lesson1EvidenceGrid.tsx          ← OPTIONAL (can be in App.tsx)
│       ├── Lesson2UnderstandingCheck.tsx    ← LESSON-SPECIFIC
│       ├── Lesson2Simulation.tsx            ← LESSON-SPECIFIC
│       └── ... (one file per complex component)
```

**Key Point**: Base components (`Slide`, `PhaseHeader`, `DoNowQuiz`, `UnderstandingCheck`) are **COPIED FROM ReferenceModule** without modification.

---

## 🎨 VISUAL CONSISTENCY (Identical across all modules)

### Color Scheme
- **Background**: Dark theme (`bg-gray-900`, `bg-gray-800`)
- **Borders**: `border-gray-700`
- **Text**: `text-gray-300` (body), `text-gray-400` (secondary), `text-white` (headings)
- **Accent**: One lesson-specific color (red/orange/amber/yellow/green/cyan/purple/slate)

### Lesson Theme Colors
Assign **ONE color per lesson** (or per 2-3 lessons if module is small):

| Lesson | Color | Tailwind Classes |
|--------|-------|------------------|
| 1 | Red | `text-red-400`, `bg-red-500/10`, `border-red-500` |
| 2 | Orange | `text-orange-400`, `bg-orange-500/10`, `border-orange-500` |
| 3 | Amber | `text-amber-400`, `bg-amber-500/10`, `border-amber-500` |
| 4 | Yellow | `text-yellow-400`, `bg-yellow-500/10`, `border-yellow-500` |
| 5 | Green | `text-green-400`, `bg-green-500/10`, `border-green-500` |
| 6 | Cyan | `text-cyan-400`, `bg-cyan-500/10`, `border-cyan-500` |
| 7+ | Purple | `text-purple-400`, `bg-purple-500/10`, `border-purple-500` |

**Apply theme color to**:
- Title slide icon and border
- Understanding Check question backgrounds
- Understanding Check feedback boxes
- Evidence Grid study card left borders
- All interactive element highlights

### Typography (Identical across all modules)
- **Headings**: `font-bold`, `tracking-tight` or `tracking-widest`
- **Body**: `font-normal`, `text-gray-300`
- **Small**: `text-xs`, `text-gray-400`

### Spacing (Identical across all modules)
- **Page padding**: `p-8` (normal mode), `p-12` (presentation mode)
- **Component gap**: `gap-4` (normal), `gap-6` (presentation)
- **Card padding**: `p-6` (normal), `p-8` (presentation)

### Responsive Design
- **Mobile**: Single column, 100% width
- **Tablet**: Two columns where appropriate
- **Desktop**: Multi-column layouts with max-width constraints

---

## 📊 LESSON STRUCTURE (Identical across all modules)

### 10-Slide Standard (NON-NEGOTIABLE)

Every lesson has exactly 10 slides:

| Slide | Phase | Component | Duration | Key Points |
|-------|-------|-----------|----------|-----------|
| 0 | Intro | Title Slide | - | Icon + title + "Start Lesson" button. Uses lesson theme color. |
| 1 | Phase 1: Activation | Do Now Quiz | 5 min | 5 questions from PREVIOUS lessons. No new content. |
| 2 | Phase 2: Concept | Concept Slide 1 | 10 min | First major concept grounded in textbook. With visuals. |
| 3 | Phase 2: Concept | Concept Slide 2 | 10 min | Second major concept grounded in textbook. With visuals. |
| 4 | Phase 2: Check | **Understanding Check** ⭐ | 10 min | 5 questions (3 scenario + 2 matching). Randomized answers. |
| 5 | Phase 3: Application | Simulation (Part 1) | 8 min | Interactive application of concepts. Variety of types. |
| 6 | Phase 3: Application | Simulation (Part 2) | 8 min | Continuation or alternative interaction. |
| 7 | Phase 4: Evidence | Evidence Grid | 10 min | 3-4 research studies with citations. |
| 8 | Phase 5: Critique | Critical Evaluation | 10 min | Strengths, limitations, alternatives. Links to AO3. |
| 9 | Phase 6: Assessment | Essay Plan | 5 min | AO1/AO3 breakdown. Exam guidance. |

**Total Duration**: 90 minutes (one lesson per 90-minute class)

### Phase Headers (Identical format)
Every content slide (except title) has a `PhaseHeader` component displaying:
- Phase name (Phase 1: Activation, Phase 2: Concept, etc.)
- Slide title
- Icon (Activity, Brain, CheckCircle, etc. from Lucide)
- Time allocation
- Used for visual hierarchy and pacing

**Color**: Phase headers use lesson theme color for the phase indicator.

---

## 🧩 COMPONENT PATTERNS (Identical across all modules)

### All Components Accept `isPresentation` Prop
```typescript
export default function ComponentName({ isPresentation }: { isPresentation: boolean }) {
  const textClass = isPresentation ? 'text-xl' : 'text-base';
  const paddingClass = isPresentation ? 'p-12' : 'p-6';
  
  return (
    <div className={paddingClass}>
      <h2 className={`${textClass} font-bold`}>Content</h2>
    </div>
  );
}
```

**Why**: Enables presentation mode for classroom projection without code duplication.

### Standard Component Export Pattern
```typescript
export default function ComponentName({ 
  isPresentation, 
  themeColor 
}: { 
  isPresentation: boolean;
  themeColor?: string;
}) {
  // Component logic
}
```

### Reusable Components (NEVER modified)
These components are copied from ReferenceModule and **NEVER MODIFIED**:
- `Slide.tsx` - Base wrapper for all slides
- `PhaseHeader.tsx` - Phase label + title + icon + time
- `DoNowQuiz.tsx` - Generic quiz renderer
- `UnderstandingCheck.tsx` - Base understanding check component (with randomization)

Lesson-specific understanding checks **EXTEND** the base component pattern but are separate files:
- `Lesson1UnderstandingCheck.tsx` - Lesson 1 content
- `Lesson2UnderstandingCheck.tsx` - Lesson 2 content
- etc.

### Lesson-Specific Components (Created per lesson)
For complex interactions, create lesson-specific components:
- `Lesson1Simulation.tsx` - Lesson 1 simulation
- `Lesson2Simulation.tsx` - Lesson 2 simulation
- `Lesson3EvidenceGrid.tsx` - Optional if evidence grid needs custom logic
- etc.

**Pattern**: Simple content stays in `App.tsx`, complex interactions get their own file.

---

## ✅ CONSISTENCY VERIFICATION CHECKLIST

### Visual Consistency
- [ ] All backgrounds are `bg-gray-900` or `bg-gray-800`
- [ ] All borders are `border-gray-700` unless theme-colored
- [ ] All text is `text-gray-300` or `text-white`
- [ ] Lesson theme color applied to: title slide, Understanding Check, Evidence Grid
- [ ] No custom colors outside the 8-color lesson theme system
- [ ] All components scale correctly with `isPresentation` prop

### Navigation Consistency
- [ ] Sidebar toggles correctly (Menu/X icon)
- [ ] All lessons listed in sidebar
- [ ] Active lesson highlighted (blue background)
- [ ] Clicking lesson resets to slide 0
- [ ] Slide counter shows "Slide X of 10"
- [ ] Navigation buttons (prev/next) disabled at slide boundaries

### Lesson Structure Consistency
- [ ] Every lesson has exactly 10 slides
- [ ] Slide 1 is always Do Now Quiz
- [ ] Slides 2-3 are always concept slides with PhaseHeader
- [ ] Slide 4 is always Understanding Check (with 5 questions: 3 scenario + 2 matching)
- [ ] Slide 4 has randomized answers (test by reloading 5 times)
- [ ] Slides 5-6 are always interactive (simulation/game/visualization)
- [ ] Slide 7 is always Evidence Grid (3-4 studies with citations)
- [ ] Slide 8 is always Critical Evaluation
- [ ] Slide 9 is always Essay Plan (AO1/AO3 breakdown)

### Content Consistency
- [ ] Do Now questions test ONLY prior lessons (no new content)
- [ ] Understanding Check questions test ONLY slides 2-3
- [ ] Evidence Grid studies support main concepts (slides 2-3)
- [ ] Essay Plan references concepts taught in slides 2-3
- [ ] All feedback is 2-3 sentences and educational

### Code Quality Consistency
- [ ] All components use TypeScript
- [ ] No hardcoded answer positions in Understanding Check
- [ ] No prop drilling beyond 2 levels
- [ ] All components are reusable (accept props for content)
- [ ] No custom CSS (all Tailwind)
- [ ] No global state mutations
- [ ] Build succeeds: `npm run build`

---

## 🎯 IDENTICAL QUALITY METRICS

For an agent to create production-ready modules, it must achieve:

| Metric | Target | How to Verify |
|--------|--------|---------------|
| Structure | 10 slides per lesson | Count slides in `App.tsx` |
| Do Now | 5 prior lesson questions | Read Do Now data in `App.tsx` |
| Understanding Check | 5 questions (3+2), randomized | Reload page 5 times, check answer positions change |
| Concept Coverage | Slides 2-3 grounded in textbook | Review concept content against textbook |
| Research | Evidence Grid has 3-4 cited studies | Verify citations are real and accessible |
| Interactivity | Slides 5-6 apply concepts | Test interaction and verify it uses slides 2-3 concepts |
| Feedback | 2-3 sentences per question | Count sentences in Understanding Check feedback |
| Consistency | All modules look/feel identical | Visual comparison across modules |
| Presentation Mode | Fonts scale 1.3-1.5x | Test with `isPresentation={true}` |
| Build Success | No errors | `npm run build` completes successfully |

---

## 📚 EXAMPLE: Schizophrenia Module vs. Relationships Module

Both should have:
- ✅ Identical sidebar styling
- ✅ Identical 10-slide structure per lesson
- ✅ Identical Understanding Check pattern (5 questions, randomized)
- ✅ Identical Do Now pattern (5 prior lesson questions)
- ✅ Identical Evidence Grid format
- ✅ Identical Essay Plan structure

The **ONLY differences** are:
- Content (psychology concepts specific to each topic)
- Theme color (maybe red for Schizophrenia, different for Relationships)
- Simulation types (psychology-appropriate interactions)
- Research studies (specific to each topic)

---

## 🚀 HOW AGENTS USE THIS FRAMEWORK

When an agent reads this document, they understand:

1. **What to copy**: Base components from ReferenceModule (never modify)
2. **What to create**: Lesson-specific content + components
3. **What NOT to change**: Navigation, sidebar, slide structure, component patterns
4. **How to verify quality**: Use the consistency checklist above
5. **What "identical quality" means**: Pass all metrics in the Quality Metrics table

This ensures any agent building a module produces output indistinguishable from any other agent's module—**same structure, same quality, only content differs.**

---

**Version**: 1.0 (Framework - Finalized)
**Last Updated**: January 2026
