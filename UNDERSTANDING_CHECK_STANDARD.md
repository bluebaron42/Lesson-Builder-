# UNDERSTANDING CHECK STANDARD ⭐ CRITICAL

This document defines the **IDENTICAL and MANDATORY Understanding Check component** used across all modules.

---

## 🎯 PRINCIPLE

The Understanding Check is:
- ✅ **MANDATORY** on Slide 4 of every lesson
- ✅ The **ONLY assessment** of the core concepts (Slides 2-3)
- ✅ The **ONLY formative feedback** before application/evidence
- ✅ **IDENTICAL in structure** across all modules
- ✅ **ALL answers randomized** (non-negotiable)
- ✅ **5 questions exactly**: 3 scenario-based + 2 matching

**Failure to implement this correctly invalidates the entire lesson's pedagogical design.**

---

## ⚠️ WHY RANDOMIZATION IS CRITICAL

### The Problem Without Randomization
Without randomizing answer positions:
- Students memorize: "For question about X, always pick position 2"
- Assessment validity is compromised
- You can't tell if students understand or just recognize positions
- Cheating is trivial (share "answer key" by position)

### The Solution: `useMemo` + `shuffleArray()`
```typescript
const shuffleArray = (array: any[]) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const questions = useMemo(() => {
  const baseQuestions = [
    {
      id: 1,
      type: 'scenario',
      question: 'Scenario testing concept...',
      options: [
        { text: 'Option A', correct: false },
        { text: 'Option B', correct: true },  ← Original position
        { text: 'Option C', correct: false }
      ],
      feedback: '...'
    },
    // ... 4 more questions
  ];
  
  // Randomize answer positions for scenario questions ONLY
  return baseQuestions.map(q => ({
    ...q,
    options: q.type === 'scenario' ? shuffleArray(q.options) : q.options
  }));
}, []); // Empty dependency means shuffles on every mount
```

**Result**: Every time the component mounts (page reload), answers are in different positions. Assessment is valid.

---

## 📋 STRUCTURE (10-SLIDE LESSON)

### Location
- **Slide**: 4 (after Slides 2-3 concept teaching)
- **Phase**: Phase 2: Check
- **Duration**: 10 minutes
- **Data**: Defined as props passed to UnderstandingCheck component
- **Component**: `Lesson[X]UnderstandingCheck.tsx` (lesson-specific file)

### 5 Questions Total
```
Question 1: Scenario-based
Question 2: Scenario-based
Question 3: Scenario-based
Question 4: Matching question
Question 5: Matching question
```

---

## 🎯 QUESTION TYPES

### Type 1: Scenario-Based Questions (3 questions)

**Purpose**: Test understanding through realistic application, not just recall.

**Format**:
```typescript
{
  id: 1,
  type: 'scenario',
  question: 'Brief scenario or situation...',
  options: [
    { text: 'Option A', correct: false },
    { text: 'Option B', correct: true },
    { text: 'Option C', correct: false }
  ],
  feedback: '2-3 sentence explanation linking to research/concepts from slides 2-3'
}
```

**Example (Schizophrenia Lesson 2: Positive Symptoms)**:
```typescript
{
  id: 1,
  type: 'scenario',
  question: "A patient reports hearing a voice that comments on everything they're doing throughout the day, e.g., 'He is now making tea, now walking to the door.' This best represents:",
  options: [
    { text: 'A delusion of reference', correct: false },
    { text: 'An auditory hallucination - commentary', correct: true },
    { text: 'A delusion of persecution', correct: false }
  ],
  feedback: "Correct. Commentary hallucinations are auditory hallucinations where voices describe the person's actions in the third person. This is a first-rank symptom distinguished from delusions (false beliefs) and delusions of reference (false beliefs about external events)."
}
```

**Guidelines**:
- ✅ Grounded in real clinical or research scenarios
- ✅ Requires application of concepts (not just recall)
- ✅ 3 plausible options (each sounds reasonable)
- ✅ Only 1 is clearly correct
- ✅ Tests understanding of core concepts from Slides 2-3

### Type 2: Matching Questions (2 questions)

**Purpose**: Test concept-definition or mechanism-effect relationships.

**Format**:
```typescript
{
  id: 4,
  type: 'matching',
  question: 'Match each concept to its definition:',
  items: [
    { 
      label: 'Concept 1', 
      options: ['Definition A', 'Correct Definition', 'Definition B'], 
      correct: 1 
    },
    { 
      label: 'Concept 2', 
      options: ['Correct Definition', 'Definition A', 'Definition B'], 
      correct: 0 
    }
  ],
  feedback: 'Brief explanation of how these concepts relate to the lesson.'
}
```

**Example (Schizophrenia Lesson 3: Negative Symptoms)**:
```typescript
{
  id: 4,
  type: 'matching',
  question: 'Match negative symptoms to their definitions:',
  items: [
    {
      label: 'Avolition',
      options: [
        'Lack of emotion or flat affect',  ← Wrong
        'Lack of motivation or drive',     ← Correct
        'Poverty of speech'                 ← Wrong
      ],
      correct: 1
    },
    {
      label: 'Affective Flattening',
      options: [
        'Lack of motivation or drive',     ← Wrong
        'Lack of emotion or flat affect',  ← Correct
        'Disorganized speech'              ← Wrong
      ],
      correct: 1
    }
  ],
  feedback: "Both are negative symptoms. Avolition is loss of motivation/drive (behavioral). Affective flattening is reduced emotional expression (emotional). Both indicate reduced capacity for initiating action or showing emotion."
}
```

**Guidelines**:
- ✅ 2 pairs to match (4 total items)
- ✅ Plausible distractors (real definitions, just wrong pair)
- ✅ Only 1 correct match per item
- ✅ Tests relational understanding (not just definitions)

---

## 🎨 VISUAL DESIGN

### Component Structure

```tsx
export default function Lesson[X]UnderstandingCheck({ 
  isPresentation, 
  themeColor = 'cyan' 
}: { 
  isPresentation: boolean;
  themeColor?: string;
}) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showFeedback, setShowFeedback] = useState(false);

  const shuffleArray = (array: any[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const questions = useMemo(() => {
    const baseQuestions = [
      { /* 5 questions */ },
    ];
    return baseQuestions.map(q => ({
      ...q,
      options: q.type === 'scenario' ? shuffleArray(q.options) : q.options
    }));
  }, []);

  return (
    <div className={`flex flex-col h-full ${isPresentation ? 'p-12 gap-8' : 'p-8 gap-6'}`}>
      {/* Question display */}
      {/* Answer options */}
      {/* Feedback display */}
      {/* Navigation buttons */}
    </div>
  );
}
```

### Color Theming

Apply lesson theme color to:
- Question background: `bg-{color}-500/5` (very light tint)
- Feedback background: `bg-{color}-500/10` (slightly darker tint)
- Correct answer highlight: `text-{color}-400`
- Selected option border: `border-{color}-500`

**Example for Cyan theme**:
```tsx
<div className="bg-cyan-500/5 border-l-4 border-cyan-500 p-6">
  <p className="text-white mb-4">{question.question}</p>
  <div className="space-y-3">
    {options.map((opt, idx) => (
      <button
        key={idx}
        onClick={() => handleSelectOption(opt)}
        className={`w-full text-left p-3 rounded-lg border-2 transition-all ${
          selectedOption === opt.text
            ? 'bg-cyan-500/20 border-cyan-500 text-cyan-400'
            : 'bg-gray-800 border-gray-700 text-gray-300 hover:border-cyan-500/50'
        }`}
      >
        {opt.text}
      </button>
    ))}
  </div>
</div>
```

### Feedback Display

**Correct Answer Feedback**:
```tsx
<div className="bg-green-500/10 border-l-4 border-green-500 p-4 mt-6">
  <div className="flex items-start gap-3">
    <CheckCircle className="text-green-400 mt-1" size={20} />
    <div>
      <p className="font-semibold text-green-400 mb-2">Correct!</p>
      <p className="text-gray-300 text-sm">{feedback}</p>
    </div>
  </div>
</div>
```

**Incorrect Answer Feedback**:
```tsx
<div className="bg-red-500/10 border-l-4 border-red-500 p-4 mt-6">
  <div className="flex items-start gap-3">
    <AlertCircle className="text-red-400 mt-1" size={20} />
    <div>
      <p className="font-semibold text-red-400 mb-2">Not quite right</p>
      <p className="text-gray-300 text-sm">{feedback}</p>
    </div>
  </div>
</div>
```

---

## 💭 FEEDBACK GUIDELINES

### What Makes Good Feedback

✅ **DO**:
- Link back to research or concepts from Slides 2-3
- Explain WHY the correct answer is right (not just "correct!")
- For wrong answers, explain why that distractor is wrong
- Be 2-3 sentences (educational, not verbose)
- Use technical psychology terminology
- Reference specific studies/researchers if applicable

❌ **DON'T**:
- Generic praise: "Good job!" (not educational)
- Vague explanations: "That's right because it is" (not helpful)
- One sentence only (lacks depth)
- Five+ sentences (too long, students skip it)
- Completely different content (confuses learners)

### Example: Good Feedback

```typescript
feedback: "Correct. Auditory hallucinations involving external commentary are a first-rank symptom of schizophrenia according to Schneider's classification. This differs from delusions (false beliefs) in that hallucinations are false perceptions with no basis in sensory input. The clinical significance is that first-rank symptoms have high diagnostic validity for schizophrenia."
```

**Why this is good**:
- Links to research (Schneider)
- Explains the concept (distinction between hallucination and delusion)
- Clinical relevance (diagnostic validity)
- 3 sentences, educational depth

### Example: Poor Feedback

```typescript
feedback: "Yes, that's right!"
```

**Why this is bad**:
- No explanation
- No link to research
- Not educational
- Student learns nothing from answering

---

## ✅ IMPLEMENTATION CHECKLIST

### Requirements
- [ ] Component file: `/src/components/Lesson[X]UnderstandingCheck.tsx`
- [ ] Exports default function accepting `isPresentation` and `themeColor` props
- [ ] 5 questions total: 3 scenario + 2 matching
- [ ] ALL scenario question answers randomized with `useMemo` + `shuffleArray()`
- [ ] Matching options NOT randomized (labels and definitions are fixed pairs)
- [ ] Feedback for every answer (correct and all incorrect options if possible)
- [ ] Feedback is 2-3 sentences, educational, links to slides 2-3
- [ ] Color theming applied consistently
- [ ] Presentation mode support (fonts scale, spacing increases)
- [ ] Questions test ONLY slides 2-3 concepts
- [ ] No hardcoded answer positions (all randomized)
- [ ] Progress tracking (Question X of 5)
- [ ] Next/Previous navigation between questions
- [ ] Submit button to confirm answers

### Testing Checklist
- [ ] Reload page 5 times, verify answer positions change each time
- [ ] Select each option, verify correct one shows success/feedback
- [ ] Select wrong options, verify feedback explains why
- [ ] Test in presentation mode (check fonts scale)
- [ ] Verify all 5 questions render correctly
- [ ] Check no TypeScript errors

---

## 🔄 COMPONENT INTEGRATION

### In App.tsx (Slide 4)

```tsx
const renderLesson = () => {
  switch (currentSlide) {
    case 4:
      return (
        <Slide isPresentation={isPresentation}>
          <PhaseHeader
            phase="Phase 2: Check"
            title="Understanding Check"
            icon={Brain}
            time="10 MINS"
            isPresentation={isPresentation}
          />
          <Lesson1UnderstandingCheck
            isPresentation={isPresentation}
            themeColor="cyan"  ← Apply lesson theme color
          />
        </Slide>
      );
    // ... other slides
  }
};
```

### Props
```typescript
interface UnderstandingCheckProps {
  isPresentation: boolean;
  themeColor?: string; // 'red' | 'orange' | 'amber' | 'yellow' | 'green' | 'cyan' | 'purple' | 'slate'
}
```

---

## 📚 EXAMPLE: Complete Lesson 1 Understanding Check

**Schizophrenia Lesson 1: Classification & Diagnosis**

```typescript
import React, { useState, useMemo } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';

export default function Lesson1UnderstandingCheck({ 
  isPresentation, 
  themeColor = 'red' 
}: { 
  isPresentation: boolean;
  themeColor?: string;
}) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [showFeedback, setShowFeedback] = useState(false);

  const shuffleArray = (array: any[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const questions = useMemo(() => {
    const baseQuestions = [
      {
        id: 1,
        type: 'scenario',
        question: "A psychiatrist diagnoses a patient with schizophrenia using DSM-5. According to DSM-5, what minimum requirement must be met?",
        options: [
          { text: "At least one positive symptom", correct: true },
          { text: "At least two negative symptoms", correct: false },
          { text: "At least two positive and two negative symptoms", correct: false }
        ],
        feedback: "Correct. DSM-5 requires at least ONE positive symptom for schizophrenia diagnosis, along with social/occupational dysfunction. This differs significantly from ICD-10, which can diagnose schizophrenia based on two negative symptoms alone. The shift represents DSM-5's emphasis on positive symptoms as core diagnostic indicators."
      },
      {
        id: 2,
        type: 'scenario',
        question: "A clinician is choosing between DSM-5 and ICD-10 systems. Which system allows diagnosis based on negative symptoms alone?",
        options: [
          { text: "DSM-5", correct: false },
          { text: "ICD-10", correct: true },
          { text: "Both equally", correct: false }
        ],
        feedback: "Correct. ICD-10 recognizes schizophrenia subtypes and allows diagnosis with two negative symptoms present for at least two weeks, even without positive symptoms. DSM-5 eliminated subtypes and requires at least one positive symptom. This difference reflects different diagnostic philosophies between North American (DSM-5) and World Health Organization (ICD-10) approaches."
      },
      {
        id: 3,
        type: 'scenario',
        question: "A patient has only experienced flat affect and poverty of speech for three weeks, but no hallucinations or delusions. Under which system could this be diagnosed as schizophrenia?",
        options: [
          { text: "DSM-5 only", correct: false },
          { text: "ICD-10 only", correct: true },
          { text: "Neither system", correct: false }
        ],
        feedback: "Correct. These are negative symptoms. ICD-10 allows schizophrenia diagnosis with two or more negative symptoms for two weeks minimum, making this diagnosis possible under ICD-10. DSM-5 requires at least one positive symptom, so this presentation alone would not meet DSM-5 criteria. This illustrates why diagnostic system choice matters clinically."
      },
      {
        id: 4,
        type: 'matching',
        question: "Match each classification system to its key diagnostic characteristic:",
        items: [
          {
            label: "DSM-5",
            options: [
              "Requires only negative symptoms",
              "Requires at least one positive symptom",
              "Recognizes schizophrenia subtypes"
            ],
            correct: 1
          },
          {
            label: "ICD-10",
            options: [
              "Allows diagnosis with negative symptoms alone",
              "Requires positive symptoms only",
              "No subtypes recognized"
            ],
            correct: 0
          }
        ],
        feedback: "Correct. DSM-5's core requirement is at least one positive symptom (plus social dysfunction). ICD-10 is more inclusive, allowing diagnosis based on two negative symptoms alone and recognizing three subtypes (paranoid, hebephrenic, catatonic). These differences make diagnostic choices important in cross-cultural clinical contexts."
      },
      {
        id: 5,
        type: 'matching',
        question: "Match the symptom type to its description:",
        items: [
          {
            label: "Positive Symptoms",
            options: [
              "Absence of normal behaviors or emotions",
              "Addition of abnormal experiences or behaviors",
              "Disorganized thought patterns"
            ],
            correct: 1
          },
          {
            label: "Negative Symptoms",
            options: [
              "Presence of hallucinations",
              "Absence of normal motivation or emotion",
              "False beliefs about reality"
            ],
            correct: 1
          }
        ],
        feedback: "Correct. Positive symptoms involve ADDITION of abnormal experiences (hallucinations, delusions). Negative symptoms involve ABSENCE of normal functions (flat affect, avolition, alogia). This distinction helps clinicians understand the two-factor nature of schizophrenia symptomatology and guides treatment (e.g., antipsychotics for positive, psychosocial for negative)."
      }
    ];

    return baseQuestions.map(q => ({
      ...q,
      options: q.type === 'scenario' ? shuffleArray(q.options) : q.options
    }));
  }, []);

  const question = questions[currentQuestion];
  const userAnswer = answers[currentQuestion];
  const isCorrect = question.type === 'scenario' 
    ? userAnswer?.correct === true
    : userAnswer?.correct === true;

  const handleSelectOption = (option: any) => {
    setAnswers(prev => ({ ...prev, [currentQuestion]: option }));
    setShowFeedback(true);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setShowFeedback(false);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      setShowFeedback(false);
    }
  };

  return (
    <div className={`flex flex-col h-full ${isPresentation ? 'p-12 gap-8' : 'p-8 gap-6'}`}>
      {/* Progress */}
      <div className="text-gray-400 text-sm">
        Question {currentQuestion + 1} of {questions.length}
      </div>

      {/* Question */}
      <div className={`bg-red-500/5 border-l-4 border-red-500 p-6 ${isPresentation ? 'p-8' : ''}`}>
        <p className={`text-white font-semibold mb-6 ${isPresentation ? 'text-2xl' : 'text-lg'}`}>
          {question.question}
        </p>

        {/* Scenario options */}
        {question.type === 'scenario' && (
          <div className={`space-y-3 ${isPresentation ? 'space-y-4' : ''}`}>
            {question.options.map((option: any, idx: number) => (
              <button
                key={idx}
                onClick={() => handleSelectOption(option)}
                disabled={showFeedback}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                  userAnswer?.text === option.text
                    ? 'bg-red-500/20 border-red-500 text-red-400'
                    : 'bg-gray-800 border-gray-700 text-gray-300 hover:border-red-500/50 disabled:cursor-default'
                } ${isPresentation ? 'text-lg p-6' : ''}`}
              >
                {option.text}
              </button>
            ))}
          </div>
        )}

        {/* Matching pairs */}
        {question.type === 'matching' && (
          <div className={`space-y-6 ${isPresentation ? 'space-y-8' : ''}`}>
            {question.items.map((item: any, idx: number) => (
              <div key={idx}>
                <p className={`text-gray-400 font-semibold mb-3 ${isPresentation ? 'text-lg' : ''}`}>
                  {item.label}
                </p>
                <div className={`space-y-2 ${isPresentation ? 'space-y-3' : ''}`}>
                  {item.options.map((option: string, optIdx: number) => (
                    <button
                      key={optIdx}
                      onClick={() => handleSelectOption({ 
                        label: item.label, 
                        correct: item.correct === optIdx 
                      })}
                      disabled={showFeedback}
                      className={`w-full text-left p-3 rounded-lg border-2 transition-all text-sm ${
                        userAnswer?.label === item.label && userAnswer?.correct === (item.correct === optIdx)
                          ? 'bg-red-500/20 border-red-500 text-red-400'
                          : 'bg-gray-800 border-gray-700 text-gray-300 hover:border-red-500/50'
                      } ${isPresentation ? 'text-base p-4' : ''}`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Feedback */}
      {showFeedback && (
        <div className={`${
          isCorrect 
            ? 'bg-green-500/10 border-green-500' 
            : 'bg-red-500/10 border-red-500'
        } border-l-4 p-6 ${isPresentation ? 'p-8' : ''}`}>
          <div className="flex items-start gap-3">
            {isCorrect ? (
              <CheckCircle className="text-green-400 mt-1 flex-shrink-0" size={20} />
            ) : (
              <AlertCircle className="text-red-400 mt-1 flex-shrink-0" size={20} />
            )}
            <div>
              <p className={`font-semibold mb-2 ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                {isCorrect ? 'Correct!' : 'Not quite right'}
              </p>
              <p className={`text-gray-300 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                {question.feedback}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between items-center mt-auto">
        <button
          onClick={prevQuestion}
          disabled={currentQuestion === 0}
          className="px-6 py-2 bg-gray-700 hover:bg-gray-600 disabled:opacity-50 rounded-lg text-white transition-all"
        >
          Previous
        </button>
        <button
          onClick={nextQuestion}
          disabled={currentQuestion === questions.length - 1 || !showFeedback}
          className="px-6 py-2 bg-red-600 hover:bg-red-500 disabled:opacity-50 rounded-lg text-white transition-all"
        >
          Next
        </button>
      </div>
    </div>
  );
}
```

---

## ✨ KEY TAKEAWAYS

1. **Randomization is NON-NEGOTIABLE**: Every scenario question's answers must shuffle on mount
2. **Test Slides 2-3 ONLY**: No new content, no future slides
3. **5 Questions Total**: Exactly 5, no more, no fewer
4. **Mix Types**: 3 scenario + 2 matching, always
5. **Feedback is Educational**: 2-3 sentences linking to research/concepts
6. **Color-Themed**: Use lesson color throughout for consistency
7. **Presentation Mode**: Support `isPresentation` prop for classroom

---

**Version**: 1.0 (Understanding Check Standard - FINAL)
**Last Updated**: January 2026
**Status**: MANDATORY - Non-negotiable for all modules
