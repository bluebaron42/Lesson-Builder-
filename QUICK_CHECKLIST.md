# QUICK CHECKLIST: Module Verification

This is the **final verification checklist** before submitting a completed module. Use this to ensure your module meets all standards.

---

## ✅ PRE-SUBMISSION CHECKLIST

### Phase 1: File Structure & Setup

- [ ] Module directory structure matches template
- [ ] `package.json` updated with correct module name
- [ ] `metadata.json` updated with topic and description
- [ ] `tsconfig.json` in place
- [ ] `vite.config.ts` in place
- [ ] `tailwind.config.js` in place
- [ ] `postcss.config.js` in place
- [ ] `index.html` in place
- [ ] `README.md` in place with topic overview
- [ ] `/src/main.tsx` in place
- [ ] `/src/App.tsx` completed with all lessons
- [ ] `/src/index.css` includes Tailwind imports
- [ ] `/src/components/` has all required components

---

### Phase 2: Lesson Structure (Each Lesson)

For **each lesson**, verify all 10 slides:

#### Slide 0: Title Slide
- [ ] Displays lesson title correctly
- [ ] Shows lesson icon (from Lucide icons)
- [ ] Has "Start Lesson" button
- [ ] Uses lesson theme color (icon glow, button border)
- [ ] Works in presentation mode (fonts scale)

#### Slide 1: Do Now Quiz
- [ ] Title: "Phase 1: Activation - Do Now Quiz"
- [ ] Displays 5 questions
- [ ] All 5 questions from **PREVIOUS lessons only** (not current lesson)
- [ ] Questions mix topics and types
- [ ] Each question has 3 options
- [ ] Only 1 correct answer per question
- [ ] Feedback provided for each answer
- [ ] User can navigate between questions

#### Slides 2-3: Concept Slides
- [ ] Slide 2: "Phase 2: Concept - [Title 1]" with PhaseHeader
- [ ] Slide 3: "Phase 2: Concept - [Title 2]" with PhaseHeader
- [ ] Both slides use lesson theme color
- [ ] Content grounded in textbook (not generic)
- [ ] Includes visuals/diagrams or clear explanations
- [ ] Each introduces a major concept
- [ ] Together they form the core teaching for this lesson
- [ ] Work in presentation mode (text scales appropriately)

#### Slide 4: Understanding Check ⭐ CRITICAL
- [ ] Component file exists: `Lesson[X]UnderstandingCheck.tsx`
- [ ] 5 questions total: **EXACTLY 5**
- [ ] Questions 1-3 are **scenario-based**
- [ ] Questions 4-5 are **matching-type**
- [ ] **ALL answers randomized** (test by reloading page 5 times)
  - [ ] Scenario answers change positions each reload
  - [ ] Matching definitions stay paired (don't randomize matching pairs)
- [ ] Tests **ONLY Slides 2-3 content** (no new material)
- [ ] Feedback for every answer (2-3 sentences each)
- [ ] Feedback links to research/concepts from Slides 2-3
- [ ] Color-themed matching lesson color
- [ ] Accepts `isPresentation` prop and scales correctly
- [ ] Progress indicator shows "Question X of 5"
- [ ] Navigation between questions works (prev/next buttons)
- [ ] No hardcoded answer positions (CRITICAL)

#### Slides 5-6: Simulation/Interaction
- [ ] Slide 5: "Phase 3: Application - [Interaction Type]" with PhaseHeader
- [ ] Slide 6: "Phase 3: Application - [Continuation or Alternative]" with PhaseHeader
- [ ] Both are **interactive** (user makes choices/adjusts parameters)
- [ ] Content **applies Slides 2-3 concepts** (not unrelated)
- [ ] Includes realistic/authentic scenario or valid representation
- [ ] Provides feedback or learning from interaction
- [ ] Fits within 8 minutes per slide (~15 min total)
- [ ] Self-contained (doesn't require prior interaction)
- [ ] Uses lesson theme color for interactive elements
- [ ] Accepts `isPresentation` prop and scales correctly
- [ ] Module uses **2-3 different interaction types** across all lessons (variety)

#### Slide 7: Evidence Grid
- [ ] Title: "Phase 4: Evidence - Research Studies"
- [ ] Displays **3-4 research studies**
- [ ] Format: Author (Year) | Finding | Methodology | Evaluation | Source
- [ ] All studies are **real** with verifiable citations
- [ ] Studies support Slides 2-3 concepts
- [ ] Evaluation includes both strengths AND limitations
- [ ] Color-themed with lesson color (left border, highlights)
- [ ] Responsive grid layout (2-column on desktop, 1-column on mobile)
- [ ] Works in presentation mode

#### Slide 8: Critical Evaluation
- [ ] Title: "Phase 5: Evaluation - Critical Analysis"
- [ ] Addresses strengths of main research/theory
- [ ] Addresses limitations of main research/theory
- [ ] Mentions alternative explanations or perspectives
- [ ] Links to essay evaluation criteria (AO3 - analysis & evaluation)
- [ ] Uses lesson theme color
- [ ] Clear, well-organized layout
- [ ] Works in presentation mode

#### Slide 9: Essay Plan
- [ ] Title: "Phase 6: Assessment - Essay Plan"
- [ ] **AO1 section** (Knowledge): 4-5 key points
  - [ ] Real concepts from Slides 2-3
  - [ ] Specific definitions or mechanisms
  - [ ] Research citations (author, year)
- [ ] **AO3 section** (Evaluation): 3-4 strengths + 2-3 limitations
  - [ ] Strengths are genuine and substantive
  - [ ] Limitations are realistic (not strawman arguments)
  - [ ] Explanations of why these matter
- [ ] **Exam tips**: 4-6 practical writing tips
  - [ ] 12-mark question structure guidance
  - [ ] Specific to this topic (not generic)
  - [ ] Help with AO1/AO3 balance
- [ ] Color-themed with lesson color
- [ ] Works in presentation mode
- [ ] No new content (only recap from prior slides)

---

### Phase 3: Navigation & UI

#### Sidebar Navigation
- [ ] Sidebar appears on left of screen
- [ ] Toggle button (Menu/X icon) at top
- [ ] All lesson titles listed when sidebar open
- [ ] Active lesson highlighted (blue background, white text)
- [ ] Clicking lesson jumps to slide 0 of that lesson
- [ ] Sidebar width: 256px (w-64) when open, 80px (w-20) when closed
- [ ] Smooth transition (300ms) on width change
- [ ] Colors: bg-gray-800, border-gray-700, text-gray-400
- [ ] Sidebar hidden in presentation mode
- [ ] No horizontal scrolling at any resolution

#### Slide Navigation
- [ ] Previous button disabled on slide 0
- [ ] Next button disabled on last slide (Slide 9)
- [ ] Buttons work correctly (advance/go back)
- [ ] Slide counter shows "Slide X of 10" (10 slides exactly)
- [ ] Keyboard arrows work (arrow left/right advance slides)
- [ ] Navigation hidden in presentation mode

#### Presentation Mode
- [ ] Toggle button in toolbar (Maximize icon)
- [ ] Clicking enters presentation mode (full screen, no sidebar)
- [ ] Fonts enlarge (1.3-1.5x scale)
- [ ] Spacing increases for readability
- [ ] Sidebar automatically hides
- [ ] Navigation buttons hidden
- [ ] Slide counter hidden
- [ ] Keyboard arrows still work to navigate
- [ ] Clicking Minimize icon exits presentation mode

---

### Phase 4: Visual Consistency

#### Color Theme
- [ ] Lesson 1 assigned color: [color]
- [ ] Lesson 2 assigned color: [color]
- [ ] Etc. (one color per lesson or per 2-3 lessons)
- [ ] Colors used: red, orange, amber, yellow, green, cyan, purple, or slate only
- [ ] Theme color applied to:
  - [ ] Title slide icon and button border
  - [ ] Understanding Check question background & feedback
  - [ ] Evidence Grid study card left borders
  - [ ] Essay Plan section titles and accents
  - [ ] Sidebar active lesson background (blue—exception)

#### Typography
- [ ] Headings: `font-bold`, `tracking-tight` or `tracking-widest`
- [ ] Body text: `font-normal`, `text-gray-300`
- [ ] Small text: `text-xs`, `text-gray-400`
- [ ] Consistent font sizes across similar elements
- [ ] No custom fonts (system fonts only)
- [ ] No custom CSS (Tailwind only)

#### Spacing & Layout
- [ ] Padding consistent: 24px (p-6) or 32px (p-8) or 48px (p-12)
- [ ] Gaps between elements: 16px (gap-4) or 24px (gap-6)
- [ ] Margins balanced and consistent
- [ ] No excessive whitespace or cramping
- [ ] Mobile responsive (single column on small screens)

#### Backgrounds & Borders
- [ ] Backgrounds: `bg-gray-900` or `bg-gray-800` only
- [ ] Borders: `border-gray-700` or `border-{color}-500` (theme)
- [ ] No custom colors outside defined palette
- [ ] High contrast for readability (dark/light)

---

### Phase 5: Content Quality

#### Textbook Alignment
- [ ] Concept slides grounded in actual textbook content
- [ ] All concepts verified against source material
- [ ] Research studies match textbook citations
- [ ] No invented "facts" or incorrect information

#### Question Design
- [ ] Do Now questions test understanding, not trivia
- [ ] Do Now questions are from prior lessons (verified lesson numbers)
- [ ] Understanding Check questions test understanding (not just recall)
- [ ] Understanding Check scenarios are realistic
- [ ] All answer options are plausible (not obviously wrong)
- [ ] Only 1 clear correct answer per question (not ambiguous)

#### Feedback Quality
- [ ] All feedback 2-3 sentences (not 1 sentence, not 5+)
- [ ] Feedback explains WHY the correct answer is right
- [ ] Feedback links to research, concepts, or mechanisms
- [ ] Feedback uses psychology terminology correctly
- [ ] Feedback for wrong answers explains why they're wrong
- [ ] Feedback is educational (student learns something)

#### Research Accuracy
- [ ] Evidence Grid studies are real (verifiable)
- [ ] Author names are correct
- [ ] Years are correct
- [ ] Findings match actual study results
- [ ] Evaluation points are honest (both strengths and limitations)
- [ ] No misrepresentation of research

---

### Phase 6: Code Quality

#### TypeScript Compliance
- [ ] No TypeScript errors (`npm run build` succeeds)
- [ ] All components properly typed
- [ ] Props interfaces defined correctly
- [ ] No `any` types (use proper typing)
- [ ] No console errors or warnings

#### Component Structure
- [ ] All components accept `isPresentation` prop
- [ ] All components accept `themeColor` prop (if applicable)
- [ ] No prop drilling beyond 2 levels
- [ ] Reusable components copied from ReferenceModule (not modified)
- [ ] Lesson-specific components in separate files
- [ ] No global state mutations
- [ ] useState used correctly (no unnecessary states)
- [ ] useMemo used for randomized answers (CRITICAL)

#### CSS & Styling
- [ ] All styling uses Tailwind CSS (no custom CSS)
- [ ] No inline styles (except computed classes)
- [ ] Responsive design (mobile, tablet, desktop)
- [ ] No !important declarations
- [ ] Consistent spacing/padding across components

#### Performance
- [ ] No console errors or warnings
- [ ] Page loads quickly (< 2 seconds)
- [ ] Smooth interactions (no lag when clicking)
- [ ] Animations smooth (no jank)
- [ ] Presentation mode responsive (no freezing)

---

### Phase 7: Testing & Verification

#### Functionality Testing
- [ ] [ ] Reload page, verify Understanding Check answers randomize
- [ ] [ ] Click each answer option in Understanding Check
- [ ] [ ] Verify correct answers show success state
- [ ] [ ] Verify wrong answers show feedback explaining why
- [ ] [ ] Navigate between questions (prev/next buttons)
- [ ] [ ] Navigate between lessons (sidebar)
- [ ] [ ] Navigate between slides (prev/next buttons)
- [ ] [ ] Keyboard arrow keys advance slides
- [ ] [ ] Toggle presentation mode (button works)
- [ ] [ ] Interact with simulation/game (all features work)

#### Accessibility Testing
- [ ] [ ] Text is readable (good contrast)
- [ ] [ ] Buttons are clickable (reasonable size)
- [ ] [ ] Form labels clear (for questions)
- [ ] [ ] No flashing/strobe effects
- [ ] [ ] Color not only way to convey information (use icons/text too)

#### Cross-Browser Testing
- [ ] [ ] Chrome (latest)
- [ ] [ ] Firefox (latest)
- [ ] [ ] Safari (latest)
- [ ] [ ] Edge (latest)
- [ ] [ ] Mobile browsers (iOS Safari, Chrome Mobile)

#### Presentation Mode Testing
- [ ] [ ] Font sizes appropriate for classroom projection
- [ ] [ ] No text cutoff at edges
- [ ] [ ] Spacing adequate for readability from distance
- [ ] [ ] Colors visible in bright room (sufficient contrast)
- [ ] [ ] All interactive elements work in presentation mode

---

### Phase 8: Build & Deployment

#### Build Process
- [ ] `npm install` completes without errors
- [ ] `npm run dev` starts development server successfully
- [ ] `npm run build` completes without errors
- [ ] `npm run preview` works (preview production build)
- [ ] No build warnings or errors
- [ ] dist/ folder generated successfully

#### Deployment Readiness
- [ ] All assets load correctly
- [ ] No 404 errors for images/fonts
- [ ] No mixed content warnings (http/https)
- [ ] Cache headers appropriate
- [ ] No console errors in production

---

## 🏁 FINAL SIGN-OFF

Before submitting, verify:

- [ ] All 10 slides per lesson render correctly
- [ ] No TypeScript errors (`npm run build` succeeds)
- [ ] Sidebar navigation works
- [ ] Understanding Check randomizes (test 5 page reloads)
- [ ] Presentation mode works
- [ ] All research citations verified
- [ ] All content grounded in textbook
- [ ] All feedback is 2-3 sentences and educational
- [ ] Module meets STANDARDIZATION_FRAMEWORK.md
- [ ] Module passes QUICK_CHECKLIST.md (this list)

---

## 🚀 SUBMISSION CRITERIA

Your module is ready to submit when:

✅ All checkboxes above are checked
✅ `npm run build` succeeds with zero errors
✅ Module is visually consistent with ReferenceModule
✅ Module structure identical to all other modules
✅ Content is educationally sound and verified
✅ All 10 slides per lesson work correctly
✅ Presentation mode fully functional
✅ Ready for classroom use immediately

---

**Version**: 1.0 (Quick Checklist - Final)
**Last Updated**: January 2026
**Usage**: Print, check off items, submit when complete
