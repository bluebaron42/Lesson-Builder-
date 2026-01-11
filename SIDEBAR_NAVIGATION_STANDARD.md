# SIDEBAR NAVIGATION STANDARD

This document defines the **IDENTICAL sidebar navigation pattern** used across all modules.

---

## 🎯 PRINCIPLE

The sidebar is the **ONLY persistent UI element** beyond the slide content. It must be:
- ✅ Identical in all modules
- ✅ Functional and intuitive
- ✅ Responsive and accessible
- ✅ Color-consistent (dark theme)

---

## 📐 LAYOUT SPECIFICATION

### Dimensions
- **Open width**: `w-64` (256px)
- **Collapsed width**: `w-20` (80px)
- **Height**: Full viewport (`h-screen`)
- **Overflow**: `overflow-y-auto` (vertical scroll if needed)

### Colors
- **Background**: `bg-gray-800`
- **Border**: `border-r border-gray-700`
- **Text**: `text-gray-400` (normal), `text-white` (active)
- **Hover**: `hover:bg-gray-700`
- **Active**: `bg-blue-600` (bright blue highlight)

### Positioning
- **Position**: Flex container on the left side
- **Visibility**: Hidden when `isPresentation={true}`
- **Transition**: Smooth width animation `transition-all duration-300`

---

## 🧩 COMPONENTS

### Toggle Button (Top of sidebar)

```tsx
<div className="p-4">
  <button
    onClick={() => setSidebarOpen(!isSidebarOpen)}
    className="p-2 hover:bg-gray-700 rounded-lg w-full text-left text-gray-400"
  >
    {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
  </button>
</div>
```

**Behavior**:
- Icon toggles between Menu (collapsed) and X (open)
- Click toggles `isSidebarOpen` state
- Always visible (not hidden when sidebar collapsed)
- Padding: `p-4` to keep button accessible

### Lesson List

```tsx
{isSidebarOpen && (
  <div className="p-4 space-y-2">
    {lessons.map(lesson => (
      <button
        key={lesson.id}
        onClick={() => { 
          setCurrentLesson(lesson.id); 
          setCurrentSlide(0); 
        }}
        className={`w-full text-left p-3 rounded-lg transition-all ${
          currentLesson === lesson.id 
            ? 'bg-blue-600 text-white' 
            : 'text-gray-400 hover:bg-gray-700'
        }`}
      >
        {lesson.title}
      </button>
    ))}
  </div>
)}
```

**Behavior**:
- Only visible when sidebar is open
- Each lesson is a clickable button
- Clicking resets to slide 0 of that lesson
- Active lesson has blue background + white text
- Inactive lessons have gray text + hover effect
- Smooth transitions between states

---

## 📊 LESSON DATA STRUCTURE

Lessons are defined in `App.tsx`:

```typescript
const lessons = [
  { id: 1, title: "Lesson 1: Title" },
  { id: 2, title: "Lesson 2: Title" },
  { id: 3, title: "Lesson 3: Title" },
  // ... more lessons
];
```

**Format**:
- `id`: Numeric identifier (1, 2, 3, ...)
- `title`: Display text showing lesson number + topic

**Example**:
```typescript
const lessons = [
  { id: 1, title: "Lesson 1: Classification & Diagnosis" },
  { id: 2, title: "Lesson 2: Positive Symptoms" },
  { id: 3, title: "Lesson 3: Negative Symptoms" },
  { id: 4, title: "Lesson 4: Biological Explanations" },
  { id: 5, title: "Lesson 5: Psychological Explanations" },
  { id: 6, title: "Lesson 6: Drug Therapies" },
  { id: 7, title: "Lesson 7: Psychological Therapies" },
];
```

---

## 🎬 STATE MANAGEMENT

The app maintains three key pieces of state:

```typescript
const [currentSlide, setCurrentSlide] = useState(0);
const [currentLesson, setCurrentLesson] = useState(1);
const [isSidebarOpen, setSidebarOpen] = useState(true);
```

### currentLesson
- Which lesson is being displayed (1, 2, 3, ...)
- Persists across slide navigation
- Reset to 1 on first app load
- Changed by clicking sidebar lesson button

### currentSlide
- Current slide within the lesson (0-9)
- Reset to 0 when switching lessons
- Incremented/decremented by next/prev buttons
- Reset to 0 when clicking a sidebar lesson

### isSidebarOpen
- Whether sidebar is expanded or collapsed
- Toggled by the menu button
- Set to `false` when entering presentation mode
- Collapsed state shows menu icon, expanded shows X icon

---

## 🔄 NAVIGATION FLOW

### Scenario 1: User clicks a sidebar lesson button

```
onClick={() => { 
  setCurrentLesson(lesson.id);        // Switch lesson
  setCurrentSlide(0);                 // Jump to slide 0
}}
```

**Result**: Sidebar lesson highlights blue, main content updates to lesson's first slide.

### Scenario 2: User clicks next slide button

```
nextSlide = () => {
  if (currentSlide < slideCount - 1) 
    setCurrentSlide(prev => prev + 1);
}
```

**Result**: Slide advances. Lesson stays the same. Sidebar lesson stays highlighted.

### Scenario 3: User clicks toggle button

```
onClick={() => setSidebarOpen(!isSidebarOpen)}
```

**Result**: Sidebar width animates between `w-64` and `w-20`. Lesson list shows/hides.

### Scenario 4: User enters presentation mode

```
togglePresentation = () => {
  if (!isPresentation) { 
    setSidebarOpen(false);  // Hide sidebar before entering presentation
  }
  setIsPresentation(!isPresentation);
}
```

**Result**: Sidebar disappears, main content expands to full width, fonts enlarge.

---

## 📱 RESPONSIVE BEHAVIOR

### Desktop (1024px+)
- Sidebar always visible
- Full width: 256px (open) or 80px (collapsed)
- Toggle button available

### Tablet (768px-1023px)
- Sidebar toggleable
- Same widths as desktop
- Lesson list scrollable if too many lessons

### Mobile (< 768px)
- Sidebar can be toggled
- Full width implementation
- Lesson list takes full width when open

**Implementation**: Use Tailwind responsive classes as needed, but sidebar behavior remains the same.

---

## 🎨 VISUAL HIERARCHY

### Sidebar Appearance

**OPEN STATE**:
```
┌─────────────────────────────┐
│ ✕ (close button)            │  ← p-4
├─────────────────────────────┤
│ Lesson 1: Title       bg-gray-700  │ ← p-3, space-y-2
│ Lesson 2: Title       (hover)      │
│ Lesson 3: Title (active) bg-blue-600 │ ← Active state
│ Lesson 4: Title       text-gray-400  │
│ Lesson 5: Title       text-gray-400  │
└─────────────────────────────┘
 256px (w-64)
```

**COLLAPSED STATE**:
```
┌───┐
│ ≡ │  ← Menu icon
├───┤
│   │  ← Empty space for icons
│   │  ← (lesson list hidden)
│   │
└───┘
 80px (w-20)
```

---

## 💡 KEY PATTERNS

### Active Lesson Highlighting
The active lesson (one being viewed) has:
- `bg-blue-600` background
- `text-white` text color
- No hover effect (already highlighted)

```tsx
className={`
  w-full text-left p-3 rounded-lg transition-all
  ${currentLesson === lesson.id 
    ? 'bg-blue-600 text-white' 
    : 'text-gray-400 hover:bg-gray-700'
  }`}
```

### Smooth Transitions
Sidebar width animates on toggle:
```tsx
className={`${isSidebarOpen ? 'w-64' : 'w-20'} ... transition-all duration-300`}
```

### Text Truncation
If lesson title is long, it truncates:
```tsx
className="truncate text-gray-400"
```

### Click Prevention
Ensure lesson clicks don't bubble:
```tsx
onClick={(e) => {
  e.stopPropagation();
  setCurrentLesson(lesson.id);
  setCurrentSlide(0);
}}
```

---

## ✅ IMPLEMENTATION CHECKLIST

- [ ] Toggle button at top (Menu/X icon)
- [ ] Lesson list shows only when sidebar open
- [ ] Click lesson: set currentLesson, reset currentSlide to 0
- [ ] Active lesson highlighted (blue background, white text)
- [ ] Sidebar width: 256px open, 80px closed
- [ ] Smooth 300ms transition on width change
- [ ] Colors: bg-gray-800, border-gray-700, text-gray-400
- [ ] Hover state on inactive lessons (bg-gray-700)
- [ ] Sidebar hidden in presentation mode
- [ ] No navigation buttons in presentation mode
- [ ] Keyboard arrow keys still work in presentation mode
- [ ] Sidebar scrollable if too many lessons

---

## 🔗 INTEGRATION WITH APP.tsx

The sidebar lives in the main App component:

```tsx
export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentLesson, setCurrentLesson] = useState(1);
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isPresentation, setIsPresentation] = useState(false);

  return (
    <div className="flex h-screen bg-gray-900">
      {/* Sidebar - hidden in presentation mode */}
      {!isPresentation && (
        <div className={`${isSidebarOpen ? 'w-64' : 'w-20'} 
                        bg-gray-800 border-r border-gray-700 
                        transition-all duration-300 overflow-y-auto`}>
          {/* Toggle button + lesson list goes here */}
        </div>
      )}

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Toolbar, slide area, navigation - all controlled by isPresentation */}
      </div>
    </div>
  );
}
```

---

## 📝 EXAMPLE: Schizophrenia Module Sidebar

```typescript
const lessons = [
  { id: 1, title: "Lesson 1: Classification & Diagnosis" },
  { id: 2, title: "Lesson 2: Positive Symptoms" },
  { id: 3, title: "Lesson 3: Negative Symptoms" },
  { id: 4, title: "Lesson 4: Biological Explanations" },
  { id: 5, title: "Lesson 5: Psychological Explanations" },
  { id: 6, title: "Lesson 6: Drug Therapies" },
  { id: 7, title: "Lesson 7: Psychological Therapies" },
];
```

When viewing Lesson 3, the sidebar shows:
- Lesson 1: Classification & Diagnosis (gray)
- Lesson 2: Positive Symptoms (gray)
- **Lesson 3: Negative Symptoms** (blue, white text) ← Current
- Lesson 4: Biological Explanations (gray)
- ... etc

---

**Version**: 1.0 (Navigation Standard - Finalized)
**Last Updated**: January 2026
