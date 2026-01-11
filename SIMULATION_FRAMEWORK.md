# SIMULATION & INTERACTION VARIETY FRAMEWORK

This document defines the **INTERACTION TYPE VARIETY** standard for Slides 5-6 across all modules.

---

## 🎯 PRINCIPLE

Slides 5-6 are **Phase 3: Application** where students actively apply the concepts from Slides 2-3.

Each module should include **2-3 different interaction types** across all lessons to maintain variety and engagement while ensuring all interactions:
- ✅ Apply concepts from Slides 2-3
- ✅ Are interactive (not passive reading)
- ✅ Provide realistic/authentic scenarios
- ✅ Support learning objectives
- ✅ Fit within 15-minute window (Slides 5-6)

---

## 🎭 INTERACTION TYPES

### Type 1: SIMULATION (System/Model Interaction)

**What it is**: Students interact with a simplified model of a real system to understand how components relate.

**Psychology Examples**:
- Neurotransmitter mechanism simulator
- Neural pathway visualization
- CBT thought-analysis model
- Stress response system
- Memory encoding model

**Pattern**:
```
User adjusts parameters → System responds with outputs → Student observes relationship
```

**Example (Schizophrenia)**:
```
Slide 5: Dopamine Hypothesis Simulator
- Student adjusts dopamine levels (low/normal/high)
- Brain diagram shows corresponding neural activity changes
- Symptoms appear/disappear based on dopamine levels
- Student draws conclusions about dopamine's role
```

**Implementation**:
- React component with interactive controls (sliders, buttons, dropdowns)
- Visual feedback (animations, color changes, data displays)
- Real-time updates as user interacts
- Links displayed changes to teaching concepts

**Duration**: 8 minutes (Slides 5-6 can both use simulation, or 5 uses simulation, 6 uses different type)

---

### Type 2: GAME (Strategic Decision-Making)

**What it is**: Students make repeated decisions in a game context, learning through consequences.

**Psychology Examples**:
- Diagnosis game (symptoms → diagnosis)
- Treatment planning game (condition → therapy selection)
- Prison Dilemma game (cooperation vs. defection)
- Ultimatum game (fairness decisions)
- Patient-clinician negotiation game

**Pattern**:
```
Scenario presented → Student makes choice → Consequence shown → Learning feedback
(Repeat 3-5 times with varying scenarios)
```

**Example (Schizophrenia)**:
```
Slide 5: Diagnosis Challenge
- 5 patient case scenarios presented one at a time
- Each shows symptoms + timeline
- Student diagnoses using DSM-5 or ICD-10
- System provides feedback: "Correct! Here's why..."
- Student sees patterns in diagnostic criteria
```

**Implementation**:
- State machine tracking game progress
- Conditional rendering based on choices
- Score/feedback after each round
- Summary of learning at end

**Duration**: 8 minutes (best for single-slide interaction, Slide 5)

---

### Type 3: VISUALIZATION & DATA EXPLORATION

**What it is**: Students explore data or visual relationships to understand patterns and mechanisms.

**Psychology Examples**:
- Twin study concordance visualization
- Gene-environment interaction graphs
- Brain scan (fMRI) heatmaps
- Neurotransmitter reuptake animation
- Research results comparison (bar charts, distributions)

**Pattern**:
```
Data displayed → Student explores/filters → Patterns revealed → Interpretation guided
```

**Example (Schizophrenia)**:
```
Slide 6: Research Evidence Explorer
- Graph showing correlations: genetic + environmental factors
- Student filters by: gender, age, family history
- Graph updates dynamically
- Student identifies which factors have strongest correlation
- Conclusion drawn about multifactorial etiology
```

**Implementation**:
- SVG or Canvas graphics (or Recharts/D3 libraries)
- Interactive filters/sliders
- Real data or realistic data representations
- Annotations explaining what to notice

**Duration**: 8 minutes (best for Slide 6, after Slide 5 interaction)

---

### Type 4: LAB/TASK (Problem-Solving Activity)

**What it is**: Students complete a structured task similar to actual research or clinical processes.

**Psychology Examples**:
- Experimental design task (setup/controls)
- Data analysis (calculate stats, interpret results)
- Clinical assessment interview (decide questions to ask)
- Protocol design challenge (order of interventions)
- Case formulation task (symptom → mechanism → treatment)

**Pattern**:
```
Task presented → Student completes steps → Solution evaluated → Learning explained
```

**Example (Schizophrenia)**:
```
Slide 5-6: Treatment Protocol Design
- Given a patient case with symptoms + history
- Student selects: pharmacology type, dosage, monitoring frequency
- System evaluates choices against best practice guidelines
- Feedback: "Good choice because...", or "Consider X instead..."
- Student sees how clinical decisions connect to research
```

**Implementation**:
- Multi-step component (wizard/stepper)
- Validation of answers
- Detailed feedback for each step
- Summary of completed protocol

**Duration**: 15 minutes (best for Slides 5-6 combined)

---

### Type 5: DEBATE/DISCUSSION (Evidence Evaluation)

**What it is**: Students engage with conflicting evidence or viewpoints to think critically.

**Psychology Examples**:
- Causation debate (correlation vs. causation)
- Research methodology evaluation (strengths vs. limitations)
- Theory comparison (theory A vs. theory B arguments)
- Ethical dilemma discussion (competing principles)
- Evidence quality assessment (strong vs. weak studies)

**Pattern**:
```
Position presented → Student evaluates pros/cons → Alternative position revealed → Student weighs both
```

**Example (Schizophrenia)**:
```
Slide 5: Biological vs. Psychological Causation Debate
- "Argument for biological cause" (with supporting studies)
- Student votes: "Agree" / "Disagree" / "Unclear"
- "Counterargument" (with conflicting studies) is revealed
- Student re-evaluates their position
- Conclusion: "Both contribute (biopsychosocial model)"
```

**Implementation**:
- Toggle between viewpoints (buttons or cards)
- Display evidence for each side
- Student interaction (voting, selecting, weighing)
- Synthesis of perspectives at end

**Duration**: 8 minutes (Slide 5)

---

## 📊 INTERACTION TYPE DISTRIBUTION

### For a 7-Lesson Module

Recommended mix (to avoid repetition):

| Lesson | Slide 5-6 Type | Example |
|--------|-----------|---------|
| 1 | Simulation | Neurotransmitter/mechanism visualization |
| 2 | Game | Diagnosis challenge or decision-making |
| 3 | Visualization | Data exploration or brain imaging |
| 4 | Lab Task | Experimental design or case formulation |
| 5 | Simulation | Different system (e.g., therapy mechanism) |
| 6 | Debate | Evidence evaluation or theory comparison |
| 7 | Game | Synthesis/applied diagnosis challenge |

**Pattern**: Vary types across lessons. No more than 2 of the same type.

### For a 3-4 Lesson Module

Pick 2-3 types and alternate:

| Lesson | Type |
|--------|------|
| 1 | Simulation |
| 2 | Game |
| 3 | Visualization |
| 4 | Lab Task (if exists) |

---

## ✅ QUALITY CHECKLIST FOR ALL INTERACTIONS

Every interaction (regardless of type) must:

- [ ] **Apply Slides 2-3 concepts**: Interactive content tests/reinforces core teaching
- [ ] **Be interactive**: Student makes choices, not passive viewing
- [ ] **Provide feedback**: Student learns from interaction outcomes
- [ ] **Be authentic**: Realistic scenarios or valid representations
- [ ] **Fit in 15 min**: 8 min per slide, includes instructions
- [ ] **Be self-contained**: Works on its own, doesn't assume prior interaction
- [ ] **Support learning**: Clear connection between interaction and concept
- [ ] **Maintain theme**: Uses lesson color and styling conventions
- [ ] **Presentation mode**: Accept `isPresentation` prop, fonts scale

---

## 💡 DESIGN PATTERNS

### Pattern 1: Parameter Adjustment (Simulations)

```tsx
export default function DopamineSimulator({ isPresentation }) {
  const [dopamineLevel, setDopamineLevel] = useState('normal');

  return (
    <div>
      {/* Input: Slider or buttons */}
      <div className="flex gap-4">
        <button onClick={() => setDopamineLevel('low')}>Low Dopamine</button>
        <button onClick={() => setDopamineLevel('normal')}>Normal</button>
        <button onClick={() => setDopamineLevel('high')}>High Dopamine</button>
      </div>

      {/* Output: Visual representation */}
      {dopamineLevel === 'low' && <SymptomsDisplay symptoms={negativeSymptoms} />}
      {dopamineLevel === 'normal' && <SymptomsDisplay symptoms={normalSymptoms} />}
      {dopamineLevel === 'high' && <SymptomsDisplay symptoms={hyperactivitySymptoms} />}

      {/* Explanation */}
      <p>{getFeedback(dopamineLevel)}</p>
    </div>
  );
}
```

### Pattern 2: Choice → Consequence (Games)

```tsx
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
    
    // Move to next scenario after feedback
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

### Pattern 3: Filter & Explore (Visualizations)

```tsx
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
        {/* More filters */}
      </div>

      {/* Visualization updates based on filters */}
      <DataVisualization data={filteredData} />

      {/* Interpretation guide */}
      <InterpretationGuide data={filteredData} />
    </div>
  );
}
```

---

## 🎨 VISUAL CONSISTENCY

All interactions should:

- **Use lesson theme color** for interactive elements (buttons, highlights)
- **Follow dark theme**: bg-gray-900/gray-800 backgrounds
- **Support presentation mode**: Enlarge fonts/spacing when `isPresentation={true}`
- **Use Tailwind CSS**: No custom CSS or external styles
- **Include clear instructions**: Text explaining what to do
- **Provide visual feedback**: User sees result of their action immediately

---

## 📚 EXAMPLES BY TOPIC

### Schizophrenia Module

**Lesson 1**: Dopamine Hypothesis Simulator
- Adjust dopamine levels → brain changes → symptoms appear/disappear

**Lesson 2**: Hallucination Type Game
- 5 case descriptions → student identifies hallucination type → feedback

**Lesson 3**: Negative Symptoms Explorer
- Filter symptoms → see prevalence/co-occurrence patterns → draw conclusions

**Lesson 4**: Brain Region Mechanism (Simulation)
- Brain regions light up → dopamine changes → resulting symptoms → links to negative symptoms

**Lesson 5**: Treatment Matching Game
- Given symptom profile → choose therapy → feedback on fit

**Lesson 6**: Drug Mechanism Explorer
- Adjust receptor blocking → dopamine levels → symptom changes

**Lesson 7**: Integrated Case Challenge (Lab)
- Full patient case → diagnostic decision → treatment plan → see outcome

---

## ⚠️ COMMON MISTAKES

❌ **Static "interaction"** (no real user input)
```
// WRONG: Just showing information, not interactive
<div>Press the button to see what dopamine does</div>
<button>Show</button>
<div>Dopamine causes this...</div>
```

❌ **Disconnected from teaching**
```
// WRONG: Interaction doesn't teach the concept
Game: Pick a random diagnosis game (no learning connection)
```

❌ **Too complex for time**
```
// WRONG: 15-minute task takes 30 minutes
Task: Design a full treatment protocol with 20 decision points
```

❌ **No feedback or learning**
```
// WRONG: Student interacts but doesn't learn
Simulator: Adjust dopamine, graph changes, no explanation of what it means
```

✅ **Good interaction**
```
Simulation: Adjust dopamine → visual changes in brain → symptoms appear/disappear → 
Feedback: "Low dopamine causes negative symptoms because..." (2-3 sentence explanation)
```

---

## 🔗 INTEGRATION WITH LESSON FLOW

```
Slide 2-3: Concept Teaching
         ↓
Slide 4: Understanding Check (assess understanding)
         ↓
Slide 5-6: APPLICATION via Interaction
         ↓
         Student applies concepts through:
         - Simulation (manipulate system)
         - Game (make decisions)
         - Visualization (explore data)
         - Lab (solve problem)
         - Debate (evaluate evidence)
         ↓
Slide 7: Evidence Grid (research support)
         ↓
Slide 8: Critical Evaluation (strengths/limitations)
```

The interaction is the **bridge** between understanding (Slide 4) and evidence (Slide 7).

---

## ✨ KEY TAKEAWAYS

1. **Variety**: Use different interaction types across lessons
2. **Application**: Every interaction applies Slides 2-3 concepts
3. **Authenticity**: Realistic scenarios and mechanisms
4. **Feedback**: Student learns from interaction outcomes
5. **Time**: Fits in 15-minute window (8 min per slide)
6. **Theme**: Consistent styling with lesson color
7. **Presentation**: Support classroom projection mode

---

**Version**: 1.0 (Interaction Framework - Finalized)
**Last Updated**: January 2026
