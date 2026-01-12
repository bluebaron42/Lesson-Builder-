# Code Examples: Reference Implementation Patterns

This guide shows exact code patterns from working reference materials that agents should copy and adapt.

---

## Pattern 1: Do Now Quiz with Buttons (CRITICAL)

**Source**: `Schizophrenia/components/DoNowQuiz.tsx`

**What Makes It Work**:
- 2-column layout (instructions + scrollable questions)
- "Submit Answers" button (disabled until all 5 answered)
- "Reveal All Answers" button (shows all correct answers)
- Score display (shows after submission)
- Theme-colored elements
- Presentation mode support

**Copy This Exact Pattern**:

```tsx
import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { Question } from '../types';

interface DoNowQuizProps {
    questions: Question[];
    isPresentation: boolean;
}

const DoNowQuiz: React.FC<DoNowQuizProps> = ({ questions, isPresentation }) => {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  
  const handleSelect = (qId: number, optionIdx: number) => 
    setAnswers(prev => ({...prev, [qId]: optionIdx}));
  
  const score = Object.keys(answers).reduce(
    (acc, qId) => acc + (answers[parseInt(qId)] === questions[parseInt(qId)-1].correct ? 1 : 0), 
    0
  );

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 h-full content-start transition-all ${isPresentation ? 'gap-12' : 'gap-6'}`}>
      {/* LEFT COLUMN: Instructions & Buttons */}
      <div className="space-y-4">
        {/* Task Description Box */}
        <div className={`bg-purple-900/20 rounded-xl border border-purple-500/30 ${isPresentation ? 'p-10' : 'p-5'}`}>
          <h3 className={`font-bold text-white mb-2 ${isPresentation ? 'text-4xl' : 'text-lg'}`}>
            Task: Activation & Retrieval
          </h3>
          <p className={`text-gray-300 ${isPresentation ? 'text-2xl' : 'text-sm'}`}>
            Answer the following questions based on your prior knowledge to activate relevant schemas for this lesson.
          </p>
        </div>
        
        {/* Action Buttons */}
        <div className={`flex flex-col ${isPresentation ? 'gap-6' : 'gap-3'}`}>
           {!showResults ? (
             // BUTTONS MODE: Submit & Reveal
             <>
              <button 
                onClick={() => setShowResults(true)} 
                disabled={Object.keys(answers).length < 5} 
                className={`bg-purple-600 hover:bg-purple-500 disabled:opacity-50 text-white rounded-lg font-bold w-full transition-all shadow-lg ${isPresentation ? 'px-12 py-8 text-3xl' : 'px-8 py-3'}`}
              >
                Submit Answers
              </button>
              <button 
                onClick={() => setShowResults(true)} 
                className={`bg-gray-800 hover:bg-gray-700 text-gray-300 border border-gray-600 rounded-lg font-semibold w-full transition-all ${isPresentation ? 'px-12 py-6 text-2xl' : 'px-8 py-2 text-sm'}`}
              >
                Reveal All Answers
              </button>
             </>
           ) : (
            // RESULTS MODE: Show Score
            <div className={`bg-green-900/20 border border-green-500/50 rounded-lg w-full text-center animate-fadeIn ${isPresentation ? 'p-10' : 'p-4'}`}>
              <span className={`font-bold text-green-400 block mb-1 ${isPresentation ? 'text-6xl mb-4' : 'text-2xl'}`}>
                Score: {score} / 5
              </span>
              <span className={`text-gray-400 ${isPresentation ? 'text-2xl' : 'text-xs'}`}>
                Check corrections on the right.
              </span>
            </div>
           )}
        </div>
      </div>
      
      {/* RIGHT COLUMN: Scrollable Questions */}
      <div className="space-y-2 overflow-y-auto pr-2 custom-scrollbar">
        {questions.map((q) => (
          <div key={q.id} className={`bg-gray-800 rounded-lg border border-gray-700 ${isPresentation ? 'p-6 mb-4' : 'p-3'}`}>
            <h4 className={`font-semibold text-gray-200 mb-1.5 ${isPresentation ? 'text-2xl mb-4' : 'text-xs'}`}>
              {q.id}. {q.question}
            </h4>
            
            {isPresentation ? (
              // PRESENTATION: Show correct answer when revealed
              <div className="min-h-[40px]">
                {showResults && (
                   <div className="text-green-400 font-bold text-3xl animate-fadeIn mt-2 flex items-center gap-2">
                     <CheckCircle size={32}/> {q.options[q.correct]}
                   </div>
                )}
              </div>
            ) : (
              // EDIT MODE: Show clickable options
              <div className="grid grid-cols-1 gap-1.5">
                {q.options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => !showResults && handleSelect(q.id, idx)}
                    className={`rounded text-left transition-all px-3 py-1.5 text-xs ${
                      showResults 
                        ? idx === q.correct ? "bg-green-900/40 border border-green-500 text-green-100" : answers[q.id] === idx ? "bg-red-900/40 border border-red-500 text-red-100" : "bg-gray-900/50 text-gray-600 opacity-50"
                        : answers[q.id] === idx ? "bg-purple-600 text-white" : "bg-gray-900 hover:bg-gray-700 text-gray-400"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoNowQuiz;
```

**How to Adapt**:
1. Change `purple-600` to your lesson's theme color
2. Change title "Task: Activation & Retrieval" to your lesson's Do Now title
3. Change description text
4. Pass in your `questions` array (5 questions from previous lessons)
5. The structure stays the same

---

## Pattern 2: Understanding Check with Randomization

**Source**: `Schizophrenia/components/Lesson3UnderstandingCheck.tsx` (simplified)

**What Makes It Work**:
- 5 questions (exactly, not more)
- `useMemo` + `shuffleArray` for randomization
- Detailed feedback for each answer
- Tests only Slides 2-3 content
- Presentation mode support

**Copy This Pattern**:

```tsx
import React, { useState, useMemo } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correct: number;
  feedback: string;
}

interface Props {
  isPresentation: boolean;
}

export default function Lesson3UnderstandingCheck({ isPresentation }: Props) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number | null>>({});
  const [showFeedback, setShowFeedback] = useState(false);

  // CRITICAL: Shuffle answers using useMemo
  const shuffleArray = (array: string[]): string[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Base questions (unshuffled)
  const baseQuestions: QuizQuestion[] = [
    {
      id: 1,
      question: "John refuses to look at or touch contaminated objects, spending 3 hours daily washing. Which type of symptom is this?",
      options: ["Compulsion (behavioral)", "Obsession (intrusive thought)", "Generalized anxiety"],
      correct: 0,
      feedback: "Correct. Compulsions are repetitive behaviors performed to reduce anxiety (e.g., washing hands). John's hand-washing ritual is a behavioral compulsion linked to contamination obsessions."
    },
    {
      id: 2,
      question: "According to the biological explanation, which neurotransmitter dysfunction is implicated in OCD?",
      options: ["Acetylcholine imbalance", "Serotonin dysfunction", "Dopamine excess"],
      correct: 1,
      feedback: "Correct. Low serotonin levels are associated with OCD. SSRIs (selective serotonin reuptake inhibitors) like fluoxetine increase serotonin availability and reduce symptoms."
    },
    {
      id: 3,
      question: "Sarah has intrusive thoughts about harming her child. She knows these thoughts are irrational but cannot stop them. Which cognitive feature is this?",
      options: ["Lack of insight", "Ego-syntonic thinking", "Ego-dystonic thinking"],
      correct: 2,
      feedback: "Correct. Ego-dystonic thoughts are unwanted and distressing to the person (unlike ego-syntonic thoughts which feel consistent with identity). Sarah's distress about her unwanted thoughts shows ego-dystonic OCD."
    },
    {
      id: 4,
      question: "Match: A person develops OCD after a stressful life event. This best supports the _____ explanation.",
      options: ["Psychological/cognitive", "Purely biological (genetics)", "Behavioral conditioning"],
      correct: 0,
      feedback: "Correct. Psychological explanations (e.g., cognitive theory by Salkovskis) suggest OCD develops when stressful events trigger catastrophic thinking patterns. The stress itself may trigger the disorder."
    },
    {
      id: 5,
      question: "A strength of the biological explanation is that SSRIs reduce symptoms. However, a limitation is that...",
      options: ["SSRIs work too quickly", "Symptoms may return when medication stops (no cure)", "SSRIs only work for men"],
      correct: 1,
      feedback: "Correct. While SSRIs are effective, they manage symptoms rather than cure OCD. When patients stop medication, symptoms often return, suggesting the biological cause persists. This limitation supports an interactionist view."
    }
  ];

  // SHUFFLE answers using useMemo (prevents reshuffling on every render)
  const questions: QuizQuestion[] = useMemo(() => {
    return baseQuestions.map(q => ({
      ...q,
      // Shuffle the options but track which index is correct
      options: shuffleArray(q.options)
    }));
  }, []);

  // WAIT: Need to track which shuffled index is correct
  // Improved approach below:
  
  const questionsWithShuffledAnswers = useMemo(() => {
    return baseQuestions.map(q => {
      const shuffledOptions = shuffleArray(q.options);
      const newCorrect = shuffledOptions.indexOf(q.options[q.correct]);
      return {
        ...q,
        options: shuffledOptions,
        correct: newCorrect
      };
    });
  }, []);

  const q = questionsWithShuffledAnswers[currentQuestion];
  const userAnswer = answers[q.id];
  const isCorrect = userAnswer === q.correct;
  const progress = ((currentQuestion + 1) / questionsWithShuffledAnswers.length) * 100;

  const handleAnswer = (index: number) => {
    setAnswers({ ...answers, [q.id]: index });
    setShowFeedback(true);
  };

  const handleNext = () => {
    if (currentQuestion < questionsWithShuffledAnswers.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowFeedback(false);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setShowFeedback(false);
    }
  };

  return (
    <div className={`w-full max-w-2xl ${isPresentation ? 'px-12' : 'px-6'}`}>
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className={`text-gray-400 mt-2 text-center ${isPresentation ? 'text-xl' : 'text-sm'}`}>
          Question {currentQuestion + 1} of {questionsWithShuffledAnswers.length}
        </p>
      </div>

      {/* Question Card */}
      <div className={`bg-gray-800 rounded-xl border border-gray-700 shadow-lg ${isPresentation ? 'p-12' : 'p-8'}`}>
        <h3 className={`text-white font-bold mb-6 ${isPresentation ? 'text-3xl' : 'text-xl'}`}>
          {q.question}
        </h3>

        {/* Answer Options */}
        <div className="space-y-3 mb-6">
          {q.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className={`w-full p-4 rounded-lg border-2 transition-all text-left font-semibold ${
                userAnswer === index
                  ? isCorrect
                    ? 'border-green-500 bg-green-900/30 text-green-300'
                    : 'border-red-500 bg-red-900/30 text-red-300'
                  : 'border-gray-600 bg-gray-900/50 text-gray-300 hover:border-gray-500'
              } ${isPresentation ? 'text-xl p-6' : 'text-base'}`}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Feedback */}
        {showFeedback && (
          <div className={`flex items-start gap-3 p-4 rounded-lg mb-6 ${
            isCorrect ? 'bg-green-900/30 border border-green-500' : 'bg-red-900/30 border border-red-500'
          }`}>
            {isCorrect ? (
              <CheckCircle className="text-green-400 flex-shrink-0 mt-1" />
            ) : (
              <AlertCircle className="text-red-400 flex-shrink-0 mt-1" />
            )}
            <p className={`${isCorrect ? 'text-green-300' : 'text-red-300'} ${isPresentation ? 'text-lg' : 'text-sm'}`}>
              {isCorrect ? '✓ ' : '✗ '}
              {q.feedback}
            </p>
          </div>
        )}

        {/* Navigation */}
        <div className="flex gap-4 mt-8 justify-between">
          <button
            onClick={handlePrev}
            disabled={currentQuestion === 0}
            className={`px-6 py-3 rounded-lg border border-gray-600 text-gray-300 font-semibold transition-all ${
              currentQuestion === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:border-gray-500'
            } ${isPresentation ? 'text-lg px-8 py-4' : ''}`}
          >
            ← Previous
          </button>
          {currentQuestion < questionsWithShuffledAnswers.length - 1 ? (
            <button
              onClick={handleNext}
              className={`px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-all ${isPresentation ? 'text-lg px-8 py-4' : ''}`}
            >
              Next →
            </button>
          ) : (
            <div className="px-6 py-3 rounded-lg bg-green-600/30 border border-green-500 text-green-300 font-semibold">
              ✓ Quiz Complete
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
```

**Key Points**:
- `useMemo` ensures questions shuffle once and stay shuffled across renders
- Correct answer index is recalculated after shuffle
- 5 questions total (no more, no less)
- Feedback is detailed (2-3 sentences)
- All questions test only Slides 2-3 content

---

## Pattern 3: Presentation Mode in App.tsx

**Source**: `Schizophrenia/App.tsx` (key sections)

**What Makes It Work**:
- `isPresentation` state
- Keyboard navigation (arrow keys)
- Projector button toggle
- Full-screen when presenting

**Copy This Pattern**:

```tsx
import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Menu, X, Maximize2, Minimize2, Projector } from 'lucide-react';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentLesson, setCurrentLesson] = useState(1);
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isPresentation, setIsPresentation] = useState(false); // ← ADD THIS

  const getSlideCount = (lessonId: number) => 10; // Standard 10 slides
  const slideCount = getSlideCount(currentLesson);

  // ← ADD KEYBOARD NAVIGATION
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'Escape') setIsPresentation(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, slideCount]);

  const nextSlide = () => {
    if (currentSlide < slideCount - 1) setCurrentSlide(prev => prev + 1);
  };

  const prevSlide = () => {
    if (currentSlide > 0) setCurrentSlide(prev => prev - 1);
  };

  const renderLesson = () => {
    // Each case renders a Slide with isPresentation prop
    switch (currentSlide) {
      case 0:
        return (
          <Slide isPresentation={isPresentation}>
            {/* Title slide content */}
          </Slide>
        );
      case 1:
        return (
          <Slide isPresentation={isPresentation}>
            <DoNowQuiz questions={lesson1DoNow} isPresentation={isPresentation} />
          </Slide>
        );
      // ... more slides
    }
  };

  return (
    <div className="flex h-screen bg-black text-white">
      {/* Sidebar - Hidden in presentation mode */}
      {!isPresentation && (
        <div className={`${isSidebarOpen ? 'w-64' : 'w-20'} transition-all border-r border-gray-700 overflow-y-auto`}>
          {/* Sidebar content */}
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar - Hidden in presentation mode */}
        {!isPresentation && (
          <div className="h-16 border-b border-gray-700 flex items-center justify-between px-6">
            <div className="flex gap-2">
              <button
                onClick={() => setSidebarOpen(!isSidebarOpen)}
                className="p-2 hover:bg-gray-700 rounded"
              >
                <Menu size={24} />
              </button>
              {/* Other controls */}
            </div>
            
            {/* Presentation Toggle */}
            <button
              onClick={() => setIsPresentation(true)}
              className="p-3 rounded-lg bg-slate-700 hover:bg-slate-600 transition-all"
              title="Start Presentation Mode (Esc to exit)"
            >
              <Projector size={24} />
            </button>
          </div>
        )}

        {/* Presentation Mode Exit Button */}
        {isPresentation && (
          <button
            onClick={() => setIsPresentation(false)}
            className="absolute top-4 right-4 z-50 p-3 bg-red-600 hover:bg-red-500 rounded-lg transition-all"
          >
            <X size={24} />
          </button>
        )}

        {/* Slide Content */}
        <div className="flex-1 overflow-auto">
          {renderLesson()}
        </div>

        {/* Slide Navigation - Hidden in full presentation, visible in edit */}
        {!isPresentation && (
          <div className="h-16 border-t border-gray-700 flex items-center justify-between px-6">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="p-2 hover:bg-gray-700 rounded disabled:opacity-50"
            >
              <ChevronLeft size={24} />
            </button>
            <span className="text-gray-400">Slide {currentSlide + 1} / {slideCount}</span>
            <button
              onClick={nextSlide}
              disabled={currentSlide === slideCount - 1}
              className="p-2 hover:bg-gray-700 rounded disabled:opacity-50"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
```

**How to Adapt**:
1. Add `[isPresentation, setIsPresentation]` state
2. Pass `isPresentation` prop to all components
3. Add keyboard event listener
4. Add Projector button in toolbar
5. Hide sidebar/toolbar when `isPresentation={true}`

---

## Pattern 4: Interactive Simulation with Feedback

**Source**: `Schizophrenia/components/StroopSim.tsx` (simplified)

**What Makes It Work**:
- Multiple interactive states
- Visual feedback on interaction
- Score tracking
- Reset functionality
- Presentation mode support

**Copy This Pattern**:

```tsx
import React, { useState, useEffect } from 'react';

interface Props {
  isPresentation: boolean;
}

export default function StroopSim({ isPresentation }: Props) {
  const [started, setStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [score, setScore] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [feedback, setFeedback] = useState('');

  const stimuli = [
    { word: 'RED', color: 'text-blue-600', correct: 'blue' },
    { word: 'BLUE', color: 'text-red-600', correct: 'red' },
    { word: 'GREEN', color: 'text-yellow-600', correct: 'yellow' },
    // ... more stimuli
  ];

  // Timer effect
  useEffect(() => {
    if (!started || timeLeft <= 0) return;
    const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000);
    return () => clearTimeout(timer);
  }, [started, timeLeft]);

  const handleColorClick = (clickedColor: string) => {
    if (clickedColor === stimuli[currentIndex].correct) {
      setScore(s => s + 1);
      setFeedback('✓ Correct!');
    } else {
      setFeedback('✗ Try again!');
    }

    setTimeout(() => {
      if (currentIndex < stimuli.length - 1) {
        setCurrentIndex(i => i + 1);
        setFeedback('');
      } else {
        setStarted(false);
      }
    }, 500);
  };

  const handleReset = () => {
    setStarted(false);
    setTimeLeft(30);
    setScore(0);
    setCurrentIndex(0);
    setFeedback('');
  };

  if (!started) {
    return (
      <div className={`flex flex-col items-center justify-center gap-6 ${isPresentation ? 'gap-12' : ''}`}>
        <div className={`text-center ${isPresentation ? 'mb-8' : ''}`}>
          <h2 className={`font-bold text-white mb-4 ${isPresentation ? 'text-5xl' : 'text-3xl'}`}>
            Stroop Effect Simulator
          </h2>
          <p className={`text-gray-300 ${isPresentation ? 'text-2xl' : 'text-sm'}`}>
            Click the COLOR of the word, not the word itself.
          </p>
        </div>

        <div className={`flex flex-col gap-4 ${isPresentation ? 'gap-6 w-96' : 'gap-3 w-48'}`}>
          <button
            onClick={() => setStarted(true)}
            className={`bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all ${
              isPresentation ? 'px-12 py-6 text-2xl' : 'px-8 py-3'
            }`}
          >
            Start Challenge
          </button>
          <button
            onClick={handleReset}
            className={`bg-gray-700 hover:bg-gray-600 text-gray-300 font-bold rounded-lg transition-all ${
              isPresentation ? 'px-12 py-4 text-lg' : 'px-8 py-2 text-sm'
            }`}
          >
            Reset Score
          </button>
        </div>

        {score > 0 && (
          <div className={`text-center ${isPresentation ? 'mt-8' : ''}`}>
            <p className={`text-green-400 font-bold ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>
              Best Score: {score}
            </p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center justify-center gap-8 ${isPresentation ? 'gap-16' : ''}`}>
      {/* Timer & Score */}
      <div className={`flex gap-12 ${isPresentation ? 'gap-20' : ''}`}>
        <div className="text-center">
          <p className={`text-gray-400 ${isPresentation ? 'text-xl' : 'text-sm'}`}>Time</p>
          <p className={`font-bold text-white ${isPresentation ? 'text-5xl' : 'text-3xl'}`}>
            {timeLeft}s
          </p>
        </div>
        <div className="text-center">
          <p className={`text-gray-400 ${isPresentation ? 'text-xl' : 'text-sm'}`}>Score</p>
          <p className={`font-bold text-green-400 ${isPresentation ? 'text-5xl' : 'text-3xl'}`}>
            {score}
          </p>
        </div>
      </div>

      {/* Stimulus Word */}
      {timeLeft > 0 && (
        <div className={`${stimuli[currentIndex].color} font-extrabold text-center animate-fadeIn ${
          isPresentation ? 'text-8xl mb-8' : 'text-6xl mb-4'
        }`}>
          {stimuli[currentIndex].word}
        </div>
      )}

      {/* Color Buttons */}
      {timeLeft > 0 && (
        <div className={`flex gap-4 justify-center ${isPresentation ? 'gap-12' : ''}`}>
          <button
            onClick={() => handleColorClick('red')}
            className={`bg-red-600 hover:bg-red-500 rounded-lg font-bold text-white transition-all ${
              isPresentation ? 'px-8 py-6 text-2xl' : 'px-6 py-3'
            }`}
          >
            Red
          </button>
          <button
            onClick={() => handleColorClick('blue')}
            className={`bg-blue-600 hover:bg-blue-500 rounded-lg font-bold text-white transition-all ${
              isPresentation ? 'px-8 py-6 text-2xl' : 'px-6 py-3'
            }`}
          >
            Blue
          </button>
          <button
            onClick={() => handleColorClick('yellow')}
            className={`bg-yellow-600 hover:bg-yellow-500 rounded-lg font-bold text-white transition-all ${
              isPresentation ? 'px-8 py-6 text-2xl' : 'px-6 py-3'
            }`}
          >
            Yellow
          </button>
        </div>
      )}

      {/* Feedback */}
      {feedback && (
        <p className={`font-bold animate-fadeIn ${
          feedback.includes('✓') ? 'text-green-400' : 'text-red-400'
        } ${isPresentation ? 'text-4xl' : 'text-2xl'}`}>
          {feedback}
        </p>
      )}

      {/* End Screen */}
      {timeLeft === 0 && (
        <div className="text-center animate-fadeIn">
          <h3 className={`font-bold text-white mb-4 ${isPresentation ? 'text-5xl' : 'text-3xl'}`}>
            Time's Up!
          </h3>
          <p className={`text-green-400 font-bold ${isPresentation ? 'text-5xl' : 'text-3xl'}`}>
            Final Score: {score}
          </p>
          <button
            onClick={handleReset}
            className={`mt-6 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all ${
              isPresentation ? 'px-12 py-6 text-2xl' : 'px-8 py-3'
            }`}
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
}
```

---

## Pattern 5: Do Now Quiz Data in Constants

**Source**: `Schizophrenia/constants.tsx`

**Structure**:

```tsx
export const lesson2DoNow: Question[] = [
  { 
    id: 1, 
    question: "Recap: Which researcher found poor inter-rater reliability (DSM vs ICD)?", 
    options: ["Gottesman", "Cheniaux et al.", "Buckley et al."], 
    correct: 1 
  },
  { 
    id: 2, 
    question: "Biopsych: What is a genotype?", 
    options: ["The physical expression of genes", "The particular set of genes a person possesses", "The environment's effect on genes"], 
    correct: 1 
  },
  // ... 3 more questions
];
```

**Requirements**:
- 5 questions exactly
- ALL from PREVIOUS lessons (Lesson 2 Do Now tests Lesson 1 content)
- Mix of question types
- Correct answer indexed as 0, 1, or 2
- Clear, unambiguous questions

---

## Summary: The 5 Patterns

| Pattern | File | Key Features | Lesson Context |
|---------|------|--------------|-----------------|
| Do Now Quiz | `DoNowQuiz.tsx` | 2-column layout, Submit/Reveal buttons, score display | Slide 1 |
| Understanding Check | `Lesson{{N}}UnderstandingCheck.tsx` | Randomized answers, 5 questions, feedback | Slide 4 |
| Presentation Mode | `App.tsx` | Keyboard nav, projector button, font scaling | Entire App |
| Simulation | `Lesson{{N}}Simulation.tsx` | 3+ interactive elements, visual feedback, score | Slides 5-6 |
| Data | `constants.tsx` | 5 questions per lesson, previous content only | Referenced by all components |

---

**Last Updated**: January 12, 2026
