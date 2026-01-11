import React, { useState, useEffect } from 'react';
import {
  ChevronRight,
  ChevronLeft,
  Menu,
  X,
  Maximize2,
  Minimize2
} from 'lucide-react';
import Slide from './components/Slide';
import PhaseHeader from './components/PhaseHeader';
import DoNowQuiz from './components/DoNowQuiz';
import UnderstandingCheck from './components/UnderstandingCheck';
import { lessons, lesson1DoNow, lesson2DoNow, lessonThemes } from './constants';
import { Activity, Brain, Clock } from 'lucide-react';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentLesson, setCurrentLesson] = useState(1);
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isPresentation, setIsPresentation] = useState(false);

  const getSlideCount = (lessonId: number) => {
    return 10; // Standard 10-slide lesson
  };

  const slideCount = getSlideCount(currentLesson);
  const lessonTheme = lessonThemes[currentLesson];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
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
    switch (currentSlide) {
      case 0:
        return (
          <Slide isPresentation={isPresentation}>
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="relative mb-8">
                <div className={`absolute inset-0 bg-${lessonTheme.color}-500 blur-[100px] opacity-20 rounded-full animate-pulse`}></div>
                <Brain size={isPresentation ? 120 : 80} className={`text-${lessonTheme.color}-400 relative z-10`} />
              </div>
              <h1 className={`font-bold text-white mb-4 tracking-widest uppercase ${isPresentation ? 'text-8xl' : 'text-6xl'}`}>
                Lesson Title
              </h1>
              <div className={`h-1 w-64 bg-${lessonTheme.color}-900 my-6`}></div>
              <h2 className={`text-${lessonTheme.color}-600 text-xs tracking-[0.5em] uppercase mb-12 font-bold`}>
                Reference Module Lesson 01
              </h2>
              <button
                onClick={nextSlide}
                className={`bg-slate-900 border border-${lessonTheme.color}-500 text-${lessonTheme.color}-400 font-bold px-12 py-4 rounded-xl hover:bg-slate-800 transition-all ${isPresentation ? 'text-2xl' : 'text-lg'} uppercase shadow-lg`}
              >
                Start Lesson
              </button>
            </div>
          </Slide>
        );

      case 1:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader
              phase="Phase 1: Activation"
              title="Do Now Quiz"
              icon={Activity}
              time="5 MINS"
              isPresentation={isPresentation}
            />
            <DoNowQuiz
              questions={lesson1DoNow}
              isPresentation={isPresentation}
            />
          </Slide>
        );

      case 2:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader
              phase="Phase 2: Concept"
              title="Concept 1"
              icon={Brain}
              time="10 MINS"
              isPresentation={isPresentation}
            />
            <div className={`p-8 bg-gray-800 rounded-xl border border-gray-700 max-w-2xl ${isPresentation ? 'p-12' : ''}`}>
              <p className={`text-gray-300 ${isPresentation ? 'text-xl' : 'text-base'}`}>
                Replace with Lesson 1 Concept 1 visualization and explanation.
              </p>
            </div>
          </Slide>
        );

      case 3:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader
              phase="Phase 2: Concept"
              title="Concept 2"
              icon={Brain}
              time="10 MINS"
              isPresentation={isPresentation}
            />
            <div className={`p-8 bg-gray-800 rounded-xl border border-gray-700 max-w-2xl ${isPresentation ? 'p-12' : ''}`}>
              <p className={`text-gray-300 ${isPresentation ? 'text-xl' : 'text-base'}`}>
                Replace with Lesson 1 Concept 2 visualization and explanation.
              </p>
            </div>
          </Slide>
        );

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
            <UnderstandingCheck
              questions={[
                {
                  id: 1,
                  type: 'scenario',
                  question: 'Replace with Lesson 1 scenario question 1',
                  options: [
                    { text: 'Option A', correct: false },
                    { text: 'Option B', correct: true },
                    { text: 'Option C', correct: false }
                  ],
                  feedback: 'Replace with 2–3 sentence feedback explaining the correct answer and linking to lesson research.'
                },
                {
                  id: 2,
                  type: 'scenario',
                  question: 'Replace with Lesson 1 scenario question 2',
                  options: [
                    { text: 'Option A', correct: true },
                    { text: 'Option B', correct: false },
                    { text: 'Option C', correct: false }
                  ],
                  feedback: 'Replace with 2–3 sentence feedback explaining the correct answer and linking to lesson research.'
                },
                {
                  id: 3,
                  type: 'scenario',
                  question: 'Replace with Lesson 1 scenario question 3',
                  options: [
                    { text: 'Option A', correct: false },
                    { text: 'Option B', correct: false },
                    { text: 'Option C', correct: true }
                  ],
                  feedback: 'Replace with 2–3 sentence feedback explaining the correct answer and linking to lesson research.'
                },
                {
                  id: 4,
                  type: 'matching',
                  question: 'Match the concept to its definition',
                  items: [
                    { label: 'Concept 1', options: ['Definition A', 'Correct Definition', 'Definition B'], correct: 1 },
                    { label: 'Concept 2', options: ['Correct Definition', 'Definition A', 'Definition B'], correct: 0 }
                  ],
                  feedback: 'Replace with explanation of how these concepts relate to the lesson.'
                },
                {
                  id: 5,
                  type: 'matching',
                  question: 'Match the mechanism to its effect',
                  items: [
                    { label: 'Mechanism 1', options: ['Effect A', 'Effect B', 'Correct Effect'], correct: 2 },
                    { label: 'Mechanism 2', options: ['Effect A', 'Correct Effect', 'Effect B'], correct: 1 }
                  ],
                  feedback: 'Replace with explanation of how these mechanisms produce their effects.'
                }
              ]}
              themeColor={lessonTheme.color}
              isPresentation={isPresentation}
            />
          </Slide>
        );

      case 5:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader
              phase="Phase 3: Application"
              title="Simulation (Part 1)"
              icon={Activity}
              time="8 MINS"
              isPresentation={isPresentation}
            />
            <div className={`p-8 bg-gray-800 rounded-xl border border-gray-700 max-w-2xl ${isPresentation ? 'p-12' : ''}`}>
              <p className={`text-gray-300 ${isPresentation ? 'text-xl' : 'text-base'}`}>
                Replace with interactive simulation component for Lesson 1.
              </p>
            </div>
          </Slide>
        );

      case 6:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader
              phase="Phase 3: Application"
              title="Simulation (Part 2)"
              icon={Activity}
              time="8 MINS"
              isPresentation={isPresentation}
            />
            <div className={`p-8 bg-gray-800 rounded-xl border border-gray-700 max-w-2xl ${isPresentation ? 'p-12' : ''}`}>
              <p className={`text-gray-300 ${isPresentation ? 'text-xl' : 'text-base'}`}>
                Continue with simulation or task conclusion.
              </p>
            </div>
          </Slide>
        );

      case 7:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader
              phase="Phase 4: Evidence"
              title="Research Studies"
              icon={Brain}
              time="10 MINS"
              isPresentation={isPresentation}
            />
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl ${isPresentation ? 'gap-6' : ''}`}>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`p-6 bg-gray-800 border-l-4 border-gray-700 rounded-lg ${isPresentation ? 'p-8' : ''}`}>
                  <p className={`font-semibold text-white mb-2 ${isPresentation ? 'text-lg' : 'text-sm'}`}>
                    Study {i} (Author, Year)
                  </p>
                  <p className={`text-gray-400 text-xs ${isPresentation ? 'text-sm' : ''}`}>
                    Replace with study details, sample size, design, findings.
                  </p>
                </div>
              ))}
            </div>
          </Slide>
        );

      case 8:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader
              phase="Phase 5: Evaluation"
              title="Critical Analysis"
              icon={Brain}
              time="10 MINS"
              isPresentation={isPresentation}
            />
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl ${isPresentation ? 'gap-6' : ''}`}>
              <div className={`p-6 bg-green-900/20 border-l-4 border-green-500 rounded-lg ${isPresentation ? 'p-8' : ''}`}>
                <p className={`font-semibold text-green-400 mb-2 ${isPresentation ? 'text-lg' : 'text-sm'}`}>Strength</p>
                <p className={`text-gray-400 text-xs ${isPresentation ? 'text-sm' : ''}`}>Replace with strength.</p>
              </div>
              <div className={`p-6 bg-red-900/20 border-l-4 border-red-500 rounded-lg ${isPresentation ? 'p-8' : ''}`}>
                <p className={`font-semibold text-red-400 mb-2 ${isPresentation ? 'text-lg' : 'text-sm'}`}>Limitation</p>
                <p className={`text-gray-400 text-xs ${isPresentation ? 'text-sm' : ''}`}>Replace with limitation.</p>
              </div>
              <div className={`p-6 bg-yellow-900/20 border-l-4 border-yellow-500 rounded-lg ${isPresentation ? 'p-8' : ''}`}>
                <p className={`font-semibold text-yellow-400 mb-2 ${isPresentation ? 'text-lg' : 'text-sm'}`}>Alternative</p>
                <p className={`text-gray-400 text-xs ${isPresentation ? 'text-sm' : ''}`}>Replace with alternative explanation.</p>
              </div>
            </div>
          </Slide>
        );

      case 9:
        return (
          <Slide isPresentation={isPresentation}>
            <PhaseHeader
              phase="Phase 6: Assessment"
              title="Essay Plan & Exam Prep"
              icon={Clock}
              time="5 MINS"
              isPresentation={isPresentation}
            />
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl ${isPresentation ? 'gap-8' : ''}`}>
              <div className={`p-6 bg-gray-800 rounded-xl border border-gray-700 ${isPresentation ? 'p-8' : ''}`}>
                <p className={`font-semibold text-cyan-400 mb-4 ${isPresentation ? 'text-lg' : 'text-sm'}`}>AO1 (Knowledge)</p>
                <ul className={`text-gray-300 space-y-2 text-xs ${isPresentation ? 'text-sm' : ''}`}>
                  <li>✓ Define key concept</li>
                  <li>✓ Explain mechanism</li>
                  <li>✓ Link to question</li>
                </ul>
              </div>
              <div className={`p-6 bg-gray-800 rounded-xl border border-gray-700 ${isPresentation ? 'p-8' : ''}`}>
                <p className={`font-semibold text-amber-400 mb-4 ${isPresentation ? 'text-lg' : 'text-sm'}`}>AO3 (Evaluation)</p>
                <ul className={`text-gray-300 space-y-2 text-xs ${isPresentation ? 'text-sm' : ''}`}>
                  <li>✓ Reference research</li>
                  <li>✓ Consider limitations</li>
                  <li>✓ Suggest alternatives</li>
                </ul>
              </div>
            </div>
          </Slide>
        );

      default:
        return <Slide isPresentation={isPresentation}><div>Slide not found</div></Slide>;
    }
  };

  return (
    <div className="flex h-screen bg-gray-900">
      {/* Sidebar */}
      {!isPresentation && (
        <div className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-gray-800 border-r border-gray-700 transition-all duration-300 overflow-y-auto`}>
          <div className="p-4">
            <button
              onClick={() => setSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-gray-700 rounded-lg w-full text-left text-gray-400"
            >
              {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          {isSidebarOpen && (
            <div className="p-4 space-y-2">
              {lessons.map(lesson => (
                <button
                  key={lesson.id}
                  onClick={() => { setCurrentLesson(lesson.id); setCurrentSlide(0); }}
                  className={`w-full text-left p-3 rounded-lg transition-all ${
                    currentLesson === lesson.id ? 'bg-blue-600 text-white' : 'text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  {lesson.title}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Toolbar */}
        {!isPresentation && (
          <div className="bg-gray-800 border-b border-gray-700 p-4 flex justify-between items-center">
            <div className="text-gray-400 text-sm">
              Slide {currentSlide + 1} of {slideCount}
            </div>
            <button
              onClick={() => setIsPresentation(!isPresentation)}
              className="p-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-white transition-all"
            >
              {isPresentation ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
            </button>
          </div>
        )}

        {/* Slide Area */}
        <div className="flex-1 overflow-hidden">
          {renderLesson()}
        </div>

        {/* Navigation */}
        {!isPresentation && (
          <div className="bg-gray-800 border-t border-gray-700 p-4 flex justify-between items-center">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="p-2 hover:bg-gray-700 rounded-lg text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentSlide === slideCount - 1}
              className="p-2 hover:bg-gray-700 rounded-lg text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
