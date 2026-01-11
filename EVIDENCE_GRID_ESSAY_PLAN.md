# EVIDENCE GRID & ESSAY PLAN STANDARD

This document defines the **IDENTICAL format** for Slides 7 (Evidence Grid) and Slide 9 (Essay Plan) across all modules.

---

## 📊 SLIDE 7: EVIDENCE GRID (Phase 4: Evidence)

### Purpose
Display the **research evidence** supporting the core concepts from Slides 2-3.

**Pedagogical Goal**: Students see "here's the research that proves what we taught you."

---

### Structure

**3-4 research studies** displayed in grid format:

```
┌─────────────────────────────────────────────────────────────┐
│ Study 1 (Author, Year)                                       │
├─────────────────────────────────────────────────────────────┤
│ Key Finding: Specific result from the study                  │
│ Methodology: Sample size, design (brief)                     │
│ Evaluation: Strength, limitation, or implication             │
│ Source: Journal Name (Year)                                  │
└─────────────────────────────────────────────────────────────┘
```

### Visual Format

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  {studies.map((study, idx) => (
    <div key={idx} className="p-6 bg-gray-800 border-l-4 border-{themeColor}-500 rounded-lg">
      <p className="font-bold text-white mb-3">{study.authors} ({study.year})</p>
      
      <div className="space-y-3 text-sm text-gray-300">
        <div>
          <span className="text-{themeColor}-400 font-semibold">Finding:</span>
          <p>{study.finding}</p>
        </div>
        
        <div>
          <span className="text-{themeColor}-400 font-semibold">Method:</span>
          <p>{study.method}</p>
        </div>
        
        <div>
          <span className="text-{themeColor}-400 font-semibold">Evaluation:</span>
          <p>{study.evaluation}</p>
        </div>
        
        <div className="text-xs text-gray-400 border-t border-gray-700 pt-2">
          {study.source}
        </div>
      </div>
    </div>
  ))}
</div>
```

---

### Study Data Structure

```typescript
const studies = [
  {
    authors: "Schneider, G.D.",
    year: 1959,
    finding: "First-rank symptoms (hallucinations, delusions, thought insertion) are highly specific to schizophrenia diagnosis",
    method: "Clinical analysis of 107 patients with schizophrenia",
    evaluation: "Highly influential in shaping diagnostic criteria, though later research showed first-rank symptoms are not pathognomonic (some non-schizophrenia patients also experience them). Remains useful as a diagnostic tool.",
    source: "Archiv für Psychiatrie und Nervenkrankheiten, 1959"
  },
  {
    authors: "Torrey, E.F.",
    year: 1992,
    finding: "Twin concordance for schizophrenia is 45% for monozygotic twins and 15% for dizygotic twins, suggesting significant genetic component",
    method: "Meta-analysis of twin studies (N=4000+ twin pairs)",
    evaluation: "Demonstrates genetic component (MZ > DZ), but 55% discordance in identical twins suggests environmental factors crucial. Doesn't prove genes are sufficient cause alone.",
    source: "Schizophrenia Bulletin, 1992"
  },
  {
    authors: "Brown, G.W. & Birley, J.L.T.",
    year: 1968,
    finding: "Life events and stress in the 3 weeks prior to symptom onset were significantly more common in first-episode schizophrenia patients than controls",
    method: "Prospective study of 60 first-episode patients; interviews about life events before onset",
    evaluation: "Strong support for diathesis-stress model. However, cross-sectional design and recall bias mean we can't conclude causation. Other studies show this effect is smaller than initially reported.",
    source: "Journal of Health and Social Behavior, 1968"
  },
  {
    authors: "Carlsson, A.",
    year: 1978,
    finding: "The dopamine hypothesis: schizophrenia involves excess dopamine in mesolimbic pathways (positive symptoms) and dopamine deficit in mesocortical pathways (negative symptoms)",
    method: "Theoretical synthesis of neurochemical evidence and antipsychotic drug mechanisms",
    evaluation: "Dominant neurochemical model, explains antipsychotic action. But some schizophrenia patients don't respond to dopamine antagonists, and dopamine theory doesn't fully explain cognitive symptoms. Refinements needed.",
    source: "Psychopharmacologia, 1978"
  }
];
```

### Guidelines

**DO**:
- ✅ Include real, citable studies (verifiable author names, years, journals)
- ✅ Real findings from actual research
- ✅ Evaluation that's honest (strengths AND limitations)
- ✅ Studies support the concepts from Slides 2-3
- ✅ Mix old (foundational) and recent studies
- ✅ Include methodology briefly (sample, design)

**DON'T**:
- ❌ Make up authors or studies (must be real)
- ❌ Generic "research shows..." (cite specific studies)
- ❌ Only list strengths (include realistic limitations)
- ❌ Unrelated studies (should connect to Slides 2-3)
- ❌ Verbose descriptions (keep concise)

---

### Color Theming

```tsx
<div className={`border-l-4 border-${themeColor}-500 ...`}>
  <span className={`text-${themeColor}-400 font-semibold`}>Finding:</span>
</div>
```

Replace `{themeColor}` with lesson color: `red`, `orange`, `amber`, `yellow`, `green`, `cyan`, `purple`, or `slate`.

---

## 📝 SLIDE 9: ESSAY PLAN (Phase 6: Assessment)

### Purpose
Give students a **framework for writing exam essays** on this topic.

**Pedagogical Goal**: Students understand how to structure answers for AQA GCSE/A Level exams.

---

### Structure

Display **AO1 (Knowledge)** and **AO3 (Evaluation)** components:

```
┌─────────────────────────────────────────────────────────────┐
│ Essay Plan: Topic                                            │
├─────────────────────────────────────────────────────────────┤
│ AO1 (Knowledge - Approximately 60%)                          │
│ • Key concept 1 with definition                              │
│ • Key concept 2 with mechanism                               │
│ • Research study 1 (author, year, finding)                   │
│ • Research study 2 (author, year, finding)                   │
│ • Application to scenario (if 12-mark question)              │
│                                                              │
│ AO3 (Evaluation - Approximately 40%)                         │
│ • Strength 1: Study/theory quality (explain why)            │
│ • Strength 2: Alternative explanation                       │
│ • Limitation 1: Sample bias or methodology issue             │
│ • Limitation 2: Reductionist or lacks generalizability      │
│ • Counterpoint: Evidence against the approach                │
│                                                              │
│ Exam Tips                                                    │
│ • Link concepts to the scenario (for applied questions)      │
│ • Use evidence - don't just describe, evaluate               │
│ • Address alternative viewpoints                             │
│ • For 12-mark: Aim for 3+ PEEL paragraphs (AO1)            │
│ • For 12-mark: 2-3 substantive evaluations (AO3)            │
└─────────────────────────────────────────────────────────────┘
```

### Visual Format

```tsx
<div className={`space-y-6 ${isPresentation ? 'space-y-8' : ''}`}>
  {/* AO1 Section */}
  <div className={`p-6 bg-gray-800 rounded-xl border-t-4 border-${themeColor}-500 ${isPresentation ? 'p-8' : ''}`}>
    <p className={`font-bold text-${themeColor}-400 mb-4 ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
      AO1: Knowledge & Understanding (60%)
    </p>
    <ul className={`space-y-2 text-gray-300 ${isPresentation ? 'text-lg space-y-3' : 'text-sm'}`}>
      <li>✓ Define key concept: <strong>Definition here</strong></li>
      <li>✓ Explain mechanism: <strong>How it works</strong></li>
      <li>✓ Research evidence: <strong>Author (Year)</strong> - Found that...</li>
      <li>✓ Link to scenario: <strong>Apply concept to the given situation</strong></li>
    </ul>
  </div>

  {/* AO3 Section */}
  <div className={`p-6 bg-gray-800 rounded-xl border-t-4 border-${themeColor}-500 ${isPresentation ? 'p-8' : ''}`}>
    <p className={`font-bold text-${themeColor}-400 mb-4 ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
      AO3: Analysis & Evaluation (40%)
    </p>
    <ul className={`space-y-2 text-gray-300 ${isPresentation ? 'text-lg space-y-3' : 'text-sm'}`}>
      <li>✓ Strength: <strong>Research quality</strong> - This study was well-designed because...</li>
      <li>✓ Strength: <strong>Alternative explanation</strong> - However, X could also explain this...</li>
      <li>✓ Limitation: <strong>Sample issues</strong> - The study only tested..., so may not generalize</li>
      <li>✓ Limitation: <strong>Reductionist</strong> - This approach ignores... factors</li>
    </ul>
  </div>

  {/* Exam Tips Section */}
  <div className={`p-6 bg-amber-500/5 rounded-xl border-l-4 border-amber-500 ${isPresentation ? 'p-8' : ''}`}>
    <p className={`font-bold text-amber-400 mb-4 ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
      Exam Tips
    </p>
    <ul className={`space-y-2 text-gray-300 ${isPresentation ? 'text-lg space-y-3' : 'text-sm'}`}>
      <li>• <strong>12-mark question</strong>: Write 3-4 PEEL paragraphs (AO1), then 2-3 evaluation points (AO3)</li>
      <li>• <strong>Always link</strong> concepts and research to the scenario or question stem</li>
      <li>• <strong>Evaluation</strong> requires: Evidence, explanation, and impact on validity</li>
      <li>• <strong>Compare</strong> theories/approaches: "Unlike X, Y suggests..."</li>
    </ul>
  </div>
</div>
```

### Essay Plan Data Structure

```typescript
const essayPlan = {
  topic: "Schizophrenia: Biological Explanations",
  ao1: [
    {
      point: "Define schizophrenia",
      detail: "A severe mental disorder involving positive symptoms (hallucinations, delusions), negative symptoms (flat affect, avolition), and cognitive impairment."
    },
    {
      point: "Dopamine hypothesis",
      detail: "Excess dopamine in mesolimbic pathways causes positive symptoms; dopamine deficit in mesocortical pathways causes negative symptoms (Carlsson, 1978)."
    },
    {
      point: "Genetic contribution",
      detail: "Twin studies show 45% MZ concordance vs 15% DZ concordance (Torrey, 1992), suggesting genetic component, though not deterministic."
    },
    {
      point: "Neural abnormalities",
      detail: "Brain imaging shows enlarged ventricles and reduced gray matter in some schizophrenia patients, though these are not universal findings."
    },
    {
      point: "Application to scenario",
      detail: "If a patient's symptoms improved with dopamine antagonists (antipsychotics), this supports the dopamine hypothesis but doesn't prove causation."
    }
  ],
  ao3: [
    {
      type: "Strength",
      point: "Explains antipsychotic effectiveness",
      detail: "Dopamine antagonists reduce positive symptoms in most patients, supporting the dopamine hypothesis. This has real clinical value."
    },
    {
      type: "Strength",
      point: "Supported by neurotransmitter research",
      detail: "Multiple studies show dopamine dysregulation in schizophrenia. Specificity improves when considering pathway-specific effects (mesolimbic vs. mesocortical)."
    },
    {
      type: "Limitation",
      point: "Doesn't explain all symptoms",
      detail: "Some patients don't respond to dopamine antagonists. Dopamine hypothesis poorly explains cognitive symptoms, suggesting other neurotransmitters matter (serotonin, glutamate)."
    },
    {
      type: "Limitation",
      point: "Reductionist",
      detail: "Focuses only on neurochemistry, ignoring psychological (childhood trauma, coping) and social factors (urban living, stigma). Biopsychosocial approaches are more comprehensive."
    },
    {
      type: "Limitation",
      point: "Correlational, not causal",
      detail: "We observe dopamine abnormalities in schizophrenia, but can't conclude dopamine causes schizophrenia. Schizophrenia might cause dopamine changes, or both might result from a third factor."
    },
    {
      type: "Alternative",
      point: "Glutamate hypothesis",
      detail: "Some researchers propose reduced glutamate (excitatory neurotransmitter) causes schizophrenia, explaining cognitive symptoms better than dopamine alone. Suggests different treatment approaches."
    }
  ],
  examTips: [
    "For 12-mark questions: Structure as 3-4 PEEL paragraphs (Point, Evidence, Explanation, Link to question)",
    "Always include specific research citations (author, year) - vague 'studies show' gains limited credit",
    "AO3 requires: State the evaluation point, give evidence/reasoning, explain the impact on the theory's validity",
    "Compare approaches: 'Unlike the dopamine hypothesis, the glutamate model...', showing you understand multiple perspectives",
    "Link to scenario: If question provides a patient case, apply your knowledge to explain their specific symptoms",
    "Avoid pure description - examiners reward analysis and evaluation, not just knowledge"
  ]
};
```

---

### Guidelines

**DO**:
- ✅ Real research studies (cited in AO1)
- ✅ Genuine evaluation points (not strawman arguments)
- ✅ Balanced AO1/AO3 (60%/40% split)
- ✅ Link to exam assessment objectives
- ✅ Practical tips for writing 12-mark answers
- ✅ Include comparison of theories/approaches

**DON'T**:
- ❌ Generic essay tips unrelated to this topic
- ❌ Only strengths (balance with genuine limitations)
- ❌ Make up evaluation points that don't hold up
- ❌ Exceed 15 minutes reading time (keep concise)
- ❌ Test new content (only recap Slides 2-8)

---

## 🎨 COLOR THEMING

Both Evidence Grid and Essay Plan use **lesson theme color**:

```tsx
<div className={`border-${themeColor}-500 text-${themeColor}-400`}>
```

Examples:
- Schizophrenia: `border-purple-500`, `text-purple-400`
- Aggression: `border-red-500`, `text-red-400`
- Relationships: `border-cyan-500`, `text-cyan-400`

---

## 📱 RESPONSIVE DESIGN

### Evidence Grid
- **Desktop**: 2-column grid (2 studies per row)
- **Tablet**: 2-column grid (fits well)
- **Mobile**: 1-column (stacked studies)

```tsx
className="grid grid-cols-1 md:grid-cols-2 gap-4"
```

### Essay Plan
- **All devices**: Single column (full width)
- Sections stack vertically
- No complex layouts

---

## ✅ QUALITY CHECKLIST

### Evidence Grid
- [ ] 3-4 studies listed
- [ ] Real studies with real citations
- [ ] Authors and years accurate
- [ ] Findings are actual research results
- [ ] Methodology briefly described
- [ ] Evaluation includes both strengths and limitations
- [ ] All studies relate to Slides 2-3 concepts
- [ ] Theme color applied consistently
- [ ] Presentation mode fonts scale
- [ ] Grid layout works on mobile

### Essay Plan
- [ ] AO1 section has 4-5 key points
- [ ] AO3 section has 3-4 strengths + 2-3 limitations
- [ ] Points are specific to this lesson (not generic)
- [ ] Real research cited (not vague "studies show")
- [ ] Evaluation points are substantive (not obvious)
- [ ] Exam tips are practical and lesson-specific
- [ ] AO1/AO3 balance makes sense (roughly 60/40)
- [ ] Theme color applied consistently
- [ ] Presentation mode fonts scale
- [ ] No new content (only recap from Slides 2-8)

---

## 🔗 INTEGRATION WITH LESSON FLOW

```
Slide 2-3: Concept Teaching
         ↓
Slide 4: Understanding Check
         ↓
Slides 5-6: Interaction/Application
         ↓
Slide 7: Evidence Grid ← "Here's the research"
         ↓
Slide 8: Critical Evaluation
         ↓
Slide 9: Essay Plan ← "Here's how to answer exam Qs"
```

---

## 📝 EXAMPLE: Schizophrenia Lesson 1

### Evidence Grid: Classification & Diagnosis

```typescript
const studies = [
  {
    authors: "American Psychiatric Association",
    year: 2013,
    finding: "DSM-5 requires at least ONE positive symptom + social dysfunction + 1-month duration",
    method: "Diagnostic manual creation based on international consensus and research review",
    evaluation: "Influential criterion worldwide. Emphasizes positive symptoms, but criticized for excluding some cases that meet ICD-10 (negative symptom-only cases).",
    source: "DSM-5 Diagnostic Manual, 2013"
  },
  {
    authors: "World Health Organization",
    year: 1992,
    finding: "ICD-10 allows diagnosis with TWO negative symptoms alone, and recognizes paranoid, hebephrenic, and catatonic subtypes",
    method: "International consensus on mental disorder classification",
    evaluation: "More inclusive than DSM-5 (can diagnose on negative symptoms alone). Subtype system was valuable but later abandoned in DSM-5 due to low reliability.",
    source: "ICD-10: International Classification of Diseases, 1992"
  },
  {
    authors: "Andreasen, N.C.",
    year: 1982,
    finding: "Scale for the Assessment of Positive Symptoms (SAPS) and Scale for the Assessment of Negative Symptoms (SANS) developed to measure symptom severity quantitatively",
    method: "Development and validation of assessment tools with schizophrenia patients",
    evaluation: "Widely used in research and clinical practice. Allows objective measurement of symptoms. However, doesn't diagnose—still requires clinical judgment using DSM-5/ICD-10.",
    source: "Archives of General Psychiatry, 1982"
  }
];
```

### Essay Plan: Classification & Diagnosis

```typescript
const essayPlan = {
  ao1: [
    { point: "Positive vs. Negative symptoms", detail: "Positive = addition of abnormal experiences (hallucinations, delusions). Negative = loss of normal functions (flat affect, avolition)." },
    { point: "DSM-5 criterion", detail: "Requires at least ONE positive symptom + social dysfunction + 1+ month duration" },
    { point: "ICD-10 criterion", detail: "More inclusive: allows diagnosis on TWO negative symptoms alone. Recognizes subtypes (paranoid, hebephrenic, catatonic)" },
    { point: "Implications", detail: "Same patient may receive different diagnosis in North America (DSM-5) vs. Europe (ICD-10), affecting treatment and research" }
  ],
  ao3: [
    { type: "Strength", point: "DSM-5 focuses on positive symptoms which respond well to antipsychotics", detail: "High diagnostic reliability and matches antipsychotic efficacy" },
    { type: "Limitation", point: "DSM-5 misses ICD-10-diagnosable cases (negative symptoms alone)", detail: "Patients with only negative symptoms aren't recognized, potentially missing treatment-seekers" },
    { type: "Strength", point: "ICD-10 is more inclusive, recognizing negative symptom presentations", detail: "Ensures more patients receive diagnosis and treatment" },
    { type: "Limitation", point: "Inconsistency between systems reduces cross-cultural research validity", detail: "Same symptoms → different diagnosis depending on country → hard to compare studies globally" },
    { type: "Alternative", point: "Dimensional approach", detail: "Rather than categories, rate severity across multiple symptom dimensions. More nuanced but harder to use clinically" }
  ],
  examTips: [
    "12-mark question structure: Intro (define + DSM-5 example) → Paragraph on DSM-5 criteria (AO1) → Paragraph on ICD-10 criteria (AO1) → Compare + evaluate difference (AO3) → Conclusion",
    "Always reference specific criteria (number of symptoms, duration) to show you know the systems",
    "Evaluation must address clinical or research implications (not just 'different systems is bad')",
    "Use the provided scenario: If patient meets DSM-5 but not ICD-10 (or vice versa), explain the implications"
  ]
};
```

---

## ✨ KEY TAKEAWAYS

1. **Evidence Grid**: Real research supporting Slides 2-3 concepts
2. **Essay Plan**: Exam-relevant structure using AO1/AO3
3. **Consistency**: Same format across all modules
4. **Quality**: Substantive, specific, and educationally valuable
5. **Theming**: Lesson color applied throughout
6. **Presentation**: Support classroom projection mode

---

**Version**: 1.0 (Evidence & Essay Standard - Finalized)
**Last Updated**: January 2026
