# Visual Quality Standards & Examples

This guide ensures all lessons match the visual polish and quality of reference materials.

---

## 🎨 Visual Hierarchy & Design Principles

### Principle 1: Meaningful Color

**Bad** ❌
```tsx
<div className="text-gray-400 bg-gray-900">
  <p className="text-gray-300">Concept explanation</p>
</div>
```
Everything is flat gray. No visual emphasis.

**Good** ✅
```tsx
const lessonTheme = lessonThemes[currentLesson]; // e.g., { color: 'cyan' }

<div className={`bg-${lessonTheme.color}-900/20 border border-${lessonTheme.color}-500/30`}>
  <p className={`text-${lessonTheme.color}-300`}>Important concept</p>
</div>
```
Uses lesson-specific color to create visual hierarchy.

---

## 🌈 Color Theme Application

### Lesson Theme Colors (Choose ONE per lesson)

```
Lesson 1: cyan      → Cyan borders, cyan buttons, cyan accents
Lesson 2: amber     → Amber borders, amber buttons, amber accents
Lesson 3: orange    → Orange borders, orange buttons, orange accents
Lesson 4: red       → Red borders, red buttons, red accents
Lesson 5: yellow    → Yellow borders, yellow buttons, yellow accents
Lesson 6: teal      → Teal borders, teal buttons, teal accents
Lesson 7: purple    → Purple borders, purple buttons, purple accents
Lesson 8: slate     → Slate borders, slate buttons, slate accents
```

### Where to Apply Theme Color

| Element | Style |
|---------|-------|
| Title slide border | `border-${color}-500` (medium) |
| Title slide text | `text-${color}-400` (light) |
| Buttons (normal) | `bg-${color}-700 text-white` |
| Buttons (hover) | `bg-${color}-600` |
| Correct answers | `border-green-500 bg-green-900/30` |
| Wrong answers | `border-red-500 bg-red-900/30` |
| Section headers | `bg-${color}-900/20 border-${color}-500/30` |
| Icons | `text-${color}-400` |
| Highlights | `text-${color}-300` (bright) |

### Example: Complete Slide with Theme Color

```tsx
// In constants.ts:
export const lessonThemes = {
  1: { color: 'cyan', name: 'Cyan' },
  2: { color: 'amber', name: 'Amber' },
  // ...
};

// In App.tsx:
const lessonTheme = lessonThemes[currentLesson];

// In component:
<div className={`
  bg-gradient-to-r from-slate-900 to-black
  border-2 border-${lessonTheme.color}-500
  rounded-xl p-8
`}>
  <h2 className={`text-${lessonTheme.color}-400 text-4xl font-bold mb-4`}>
    Concept Title
  </h2>
  
  <div className={`flex gap-4`}>
    <button className={`bg-${lessonTheme.color}-700 hover:bg-${lessonTheme.color}-600 text-white px-8 py-3 rounded-lg font-bold`}>
      Submit
    </button>
  </div>
</div>
```

---

## ✨ Visual Effects & Animations

### Effect 1: Glowing Icon (Animated)

**Usage**: Title slides, important concepts

**Code**:
```tsx
<div className="relative mb-8">
  <div className={`
    absolute inset-0 bg-${lessonTheme.color}-500 
    blur-[100px] opacity-20 rounded-full animate-pulse
  `}></div>
  <Brain className={`text-${lessonTheme.color}-400 relative z-10`} size={120} />
</div>
```

**Visual result**: Icon appears to glow with a soft, pulsing background light

**Where to use**:
- ✅ Title slide main icon
- ✅ Phase headers (important concept introduction)
- ❌ Not on every icon (saves impact for emphasis)

---

### Effect 2: Gradient Backgrounds

**Usage**: Card backgrounds, section headers

**Code**:
```tsx
<div className={`
  bg-gradient-to-br from-${lessonTheme.color}-900/20 
  to-slate-900 
  rounded-xl border border-${lessonTheme.color}-500/30
`}>
```

**Visual result**: Subtle gradient adds depth without being distracting

**Where to use**:
- ✅ Card backgrounds
- ✅ Section headers
- ✅ Quiz instruction boxes
- ❌ Everywhere (too busy)

---

### Effect 3: Fade-In Animation

**Usage**: Feedback, results, revealed answers

**Code**:
```tsx
<div className="animate-fadeIn">
  {showResults && <CorrectAnswer />}
</div>
```

**In Tailwind config (tailwind.config.js)**:
```js
module.exports = {
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
};
```

**Where to use**:
- ✅ Quiz feedback appearing
- ✅ Score displaying
- ✅ Correct answers revealing
- ✅ Success messages

---

### Effect 4: Blur & Soft Shadows

**Usage**: Content boxes, cards

**Code**:
```tsx
<div className="bg-black/30 backdrop-blur-sm rounded-xl shadow-xl">
  Content
</div>
```

**Visual result**: Semi-transparent background with blur effect creates layering effect

**Where to use**:
- ✅ Overlays
- ✅ Modal backgrounds
- ✅ Floating content boxes
- ❌ Primary content (too hard to read)

---

## 📐 Typography & Readability

### Font Sizing Rules

| Context | Edit Mode | Presentation Mode |
|---------|-----------|-------------------|
| H1 (Title) | `text-6xl` | `text-8xl` |
| H2 (Heading) | `text-3xl` | `text-5xl` |
| H3 (Section) | `text-2xl` | `text-4xl` |
| Body text | `text-base` | `text-2xl` |
| Small text | `text-sm` | `text-lg` |
| Label text | `text-xs` | `text-base` |

### Font Weight Distribution

```
Regular text:     font-normal (400)
Emphasis:         font-semibold (600)
Important:        font-bold (700)
Headers:          font-bold (700) or font-extrabold (800)
```

### Readability Checklist

- [ ] Body text has sufficient color contrast (light text on dark background)
- [ ] Headers are noticeably larger than body text
- [ ] Important words are bold or colored
- [ ] Line length is not too long (max ~80 characters)
- [ ] Adequate spacing between lines (default is fine)
- [ ] Presentation mode text is readable from 20+ feet away

**Test for presentation mode**: Stand 8 feet from screen. Can you read without squinting?

---

## 🎯 Button & Interactive Element Styling

### Button States

**Default** (not clicked yet):
```tsx
className="bg-slate-700 text-gray-300 border border-slate-600"
```

**Hover**:
```tsx
className="bg-slate-600 text-gray-200 border border-slate-500"
```

**Active/Selected**:
```tsx
className={`bg-${lessonTheme.color}-700 text-white border border-${lessonTheme.color}-600`}
```

**Disabled**:
```tsx
className="opacity-50 cursor-not-allowed grayscale"
```

**Success** (feedback):
```tsx
className="bg-green-700 text-white border border-green-600"
```

---

### Button Sizing

| Context | Size |
|---------|------|
| Edit mode standard | `px-8 py-3` (padding) |
| Edit mode small | `px-4 py-2` |
| Presentation mode | `px-12 py-6` (1.5x) |
| Presentation large | `px-16 py-8` (2x) |

**Rule**: Buttons should be easily clickable (touch target ~48-60px tall)

---

## 📊 Quiz & Answer Display

### Do Now Quiz Card Layout

**Bad** ❌
```
Question and options cramped together
All gray
No visual feedback
```

**Good** ✅
```tsx
<div className={`
  grid grid-cols-1 lg:grid-cols-2 gap-8 h-full
  ${isPresentation ? 'gap-16' : 'gap-8'}
`}>
  {/* Left column: Instructions + buttons */}
  <div className="space-y-6">
    <div className={`
      bg-gradient-to-br from-${lessonTheme.color}-900/20 to-slate-900
      rounded-2xl border border-${lessonTheme.color}-500/20 p-8
    `}>
      <h3 className={`font-bold text-white ${isPresentation ? 'text-4xl' : 'text-xl'}`}>
        Task Instructions
      </h3>
      <p className={`text-slate-300 ${isPresentation ? 'text-2xl' : 'text-sm'}`}>
        Detailed instructions here
      </p>
    </div>
    
    {/* Buttons */}
    <button className={`
      bg-${lessonTheme.color}-700 hover:bg-${lessonTheme.color}-600
      text-white font-bold rounded-xl w-full
      transition-all shadow-lg
      ${isPresentation ? 'px-12 py-8 text-3xl' : 'px-8 py-4'}
    `}>
      Submit Answers
    </button>
  </div>
  
  {/* Right column: Questions */}
  <div className="space-y-3 overflow-y-auto">
    {questions.map(q => (
      <div key={q.id} className={`
        bg-slate-900 rounded-xl border border-slate-800
        hover:border-${lessonTheme.color}-700 transition-colors
        ${isPresentation ? 'p-6 mb-4' : 'p-4'}
      `}>
        <h4 className={`
          font-semibold text-gray-200 mb-3
          ${isPresentation ? 'text-2xl' : 'text-xs'}
        `}>
          <span className={`text-${lessonTheme.color}-600 mr-2`}>Q{q.id}</span>
          {q.question}
        </h4>
        
        {/* Answer options */}
        <div className="grid grid-cols-1 gap-2">
          {q.options.map((opt, idx) => (
            <button key={idx} className={`
              text-left rounded-lg transition-all px-4 py-2 text-xs
              border font-mono
              ${
                showResults
                  ? idx === q.correct 
                    ? 'bg-green-900/30 border-green-500 text-green-300'
                    : answers[q.id] === idx
                      ? 'bg-red-900/30 border-red-500 text-red-300'
                      : 'bg-slate-800/50 border-transparent text-slate-500 opacity-50'
                  : answers[q.id] === idx
                    ? `bg-${lessonTheme.color}-700 border-${lessonTheme.color}-600 text-white`
                    : 'bg-slate-800 border-transparent hover:bg-slate-700 text-slate-400'
            `}>
              {opt}
            </button>
          ))}
        </div>
      </div>
    ))}
  </div>
</div>
```

**Visual result**: 
- Left side: clear instructions and action buttons
- Right side: scrollable question list
- Color-coded feedback (green = correct, red = wrong)
- Responsive (single column on mobile, 2 columns on desktop)

---

## 🎮 Simulation Quality Standards

### Simulation Visual Feedback Hierarchy

**Level 1 - Visual Indication** (User knows something happened)
```tsx
// Color change on click
<button className={clicked ? 'bg-green-600' : 'bg-slate-700'}>
  Click me
</button>
```

**Level 2 - Animated Feedback** (Visual emphasis)
```tsx
// Bouncing animation on correct answer
<div className={correct ? 'animate-bounce' : ''}>
  ✓ Correct!
</div>
```

**Level 3 - Rich Feedback** (Teaching value)
```tsx
// Feedback explains why
<div className="bg-green-900/30 border border-green-500 rounded-lg p-4">
  <h4 className="text-green-300 font-bold">Correct!</h4>
  <p className="text-green-200 text-sm">
    You correctly identified that dopamine is involved in reward processing.
    This is why stimulant drugs increase dopamine to create pleasure.
  </p>
</div>
```

---

## ✅ Quality Checklist (Visual)

Before marking a lesson complete, verify:

**Color & Theme**
- [ ] Lesson has a consistent theme color applied throughout
- [ ] No random gray-only designs
- [ ] Color used meaningfully (not just for decoration)

**Typography**
- [ ] Headers are noticeably larger than body text
- [ ] Text has good contrast (light on dark or dark on light)
- [ ] No walls of dense text (broken into paragraphs)

**Interactive Elements**
- [ ] Buttons have clear states (default, hover, active, disabled)
- [ ] Buttons are large enough to click (48px+ height)
- [ ] Feedback appears immediately after interaction

**Visual Effects**
- [ ] Glowing icons used for emphasis (title, important concepts)
- [ ] Gradients add depth without being distracting
- [ ] Animations are smooth and not jarring
- [ ] No excessive animations (might distract from content)

**Presentation Mode**
- [ ] Fonts are 1.5-2x larger in presentation mode
- [ ] All text readable from 20+ feet away
- [ ] Buttons remain clickable (touch targets large)
- [ ] Colors maintain contrast in large size

**Consistency**
- [ ] All lessons use the same color theme system
- [ ] Similar elements styled similarly
- [ ] No jarring transitions between lessons

---

## 🚀 Before & After Examples

### Example 1: Title Slide

**Before (Flat & Lifeless)** ❌
```tsx
<div className="bg-gray-900 text-gray-400 p-8">
  <h1 className="text-6xl">Lesson Title</h1>
  <p className="text-sm">Subtitle</p>
</div>
```
- All gray, no visual interest
- No icon or visual element
- Hard to read
- No indication this is the start of a lesson

**After (Polished & Engaging)** ✅
```tsx
<Slide isPresentation={isPresentation}>
  <div className="flex flex-col items-center justify-center h-full text-center">
    {/* Glowing animated icon */}
    <div className="relative mb-8">
      <div className={`
        absolute inset-0 bg-${lessonTheme.color}-500 
        blur-[100px] opacity-20 rounded-full animate-pulse
      `}></div>
      <Brain size={isPresentation ? 120 : 80} 
        className={`text-${lessonTheme.color}-400 relative z-10`} />
    </div>
    
    {/* Large title */}
    <h1 className={`
      font-bold text-white mb-4 tracking-widest uppercase
      ${isPresentation ? 'text-8xl' : 'text-6xl'}
    `}>
      Classification & Diagnosis
    </h1>
    
    {/* Theme-colored divider */}
    <div className={`h-1 w-64 bg-${lessonTheme.color}-900 my-6`}></div>
    
    {/* Subtitle */}
    <h2 className={`
      text-${lessonTheme.color}-600 text-xs tracking-[0.5em] uppercase
      mb-12 font-bold
    `}>
      Psychology A-Level Lesson 01
    </h2>
    
    {/* Start button */}
    <button onClick={nextSlide} className={`
      bg-slate-900 border border-${lessonTheme.color}-500
      text-${lessonTheme.color}-400 font-bold rounded-xl
      hover:bg-slate-800 transition-all shadow-lg uppercase
      ${isPresentation ? 'text-2xl px-12 py-6' : 'text-lg px-12 py-4'}
    `}>
      Start Lesson
    </button>
  </div>
</Slide>
```

**Visual improvements**:
- ✅ Glowing animated icon draws attention
- ✅ Large, clear title with good contrast
- ✅ Colored divider adds visual structure
- ✅ Themed colors (not generic gray)
- ✅ Button clearly indicates action
- ✅ Scales for presentation mode

---

### Example 2: Quiz Answer Display

**Before (Confusing)** ❌
```tsx
<div>
  {questions.map(q => (
    <div>
      <p>{q.question}</p>
      {q.options.map(opt => (
        <button>{opt}</button>
      ))}
    </div>
  ))}
</div>
```
- All in one scrolling column
- No visual hierarchy
- Can't see instructions and questions at same time
- No feedback styling

**After (Clear & Professional)** ✅
```tsx
<div className={`grid grid-cols-1 lg:grid-cols-2 h-full gap-8 ${isPresentation ? 'gap-16' : ''}`}>
  {/* Instructions */}
  <div className="space-y-6">
    <div className={`
      bg-gradient-to-br from-${lessonTheme.color}-900/20 to-slate-900
      rounded-2xl border border-${lessonTheme.color}-500/20 p-8
    `}>
      <h3 className={`
        font-bold text-white mb-4 uppercase
        ${isPresentation ? 'text-4xl' : 'text-xl'}
      `}>
        Task: Retrieval Practice
      </h3>
      <p className={`text-slate-300 ${isPresentation ? 'text-2xl' : 'text-sm'}`}>
        Answer questions to retrieve prior learning...
      </p>
    </div>
    
    {/* Buttons */}
    <button onClick={() => setShowResults(true)} className={`
      bg-${lessonTheme.color}-700 hover:bg-${lessonTheme.color}-600
      disabled:opacity-50 text-white font-bold rounded-xl w-full
      ${isPresentation ? 'px-12 py-8 text-3xl' : 'px-8 py-4'}
    `}>
      Submit Answers
    </button>
  </div>
  
  {/* Questions */}
  <div className={`space-y-3 overflow-y-auto ${isPresentation ? 'pr-4' : 'pr-2'}`}>
    {questions.map((q) => (
      <div key={q.id} className={`
        bg-slate-900 rounded-xl border border-slate-800
        hover:border-${lessonTheme.color}-700 transition-colors
        ${isPresentation ? 'p-6 mb-4' : 'p-4'}
      `}>
        <h4 className={`
          font-semibold text-gray-200 mb-3
          ${isPresentation ? 'text-2xl' : 'text-sm'}
        `}>
          <span className={`text-${lessonTheme.color}-500 mr-2 font-mono`}>Q{q.id}</span>
          {q.question}
        </h4>
        
        <div className="space-y-2">
          {q.options.map((opt, idx) => (
            <button key={idx} className={`
              text-left rounded-lg transition-all px-4 py-2 text-xs
              border font-mono w-full
              ${
                showResults
                  ? idx === q.correct
                    ? 'bg-green-900/30 border-green-500 text-green-300'
                    : answers[q.id] === idx
                      ? 'bg-red-900/30 border-red-500 text-red-300'
                      : 'bg-slate-800/50 border-transparent text-slate-500 opacity-50'
                  : answers[q.id] === idx
                    ? `bg-${lessonTheme.color}-700 border-${lessonTheme.color}-600 text-white`
                    : 'bg-slate-800 border-transparent hover:bg-slate-700 text-slate-400 hover:text-white'
              }
            `}>
              {opt}
            </button>
          ))}
        </div>
      </div>
    ))}
  </div>
</div>
```

**Visual improvements**:
- ✅ 2-column layout: instructions left, questions right
- ✅ Students can see instructions while answering
- ✅ Theme colors applied to buttons
- ✅ Clear feedback: green (correct), red (wrong), gray (hidden)
- ✅ Smooth transitions and hover effects
- ✅ Responsive on mobile (single column)
- ✅ Scales in presentation mode

---

## 📚 Reference Materials to Study

Study these components for visual quality examples:

| Component | What to Study |
|-----------|---|
| `Schizophrenia/App.tsx` | Title slide with glowing icon, overall structure |
| `Schizophrenia/components/Slide.tsx` | Slide wrapper with gradients |
| `Schizophrenia/components/PhaseHeader.tsx` | Section headers with theme colors |
| `Schizophrenia/components/DoNowQuiz.tsx` | 2-column layout, button styles, feedback |
| `Schizophrenia/components/SynapseBuilder.tsx` | Interactive simulation with feedback |
| `Schizophrenia/components/StroopSim.tsx` | Timed challenge with scoring |
| `ExampleModule/src/components/DoNowQuiz.jsx` | Alternative quiz layout |

---

**Last Updated**: January 12, 2026
