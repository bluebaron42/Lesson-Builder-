# Lesson-Builder: The Psychology Module Gold Standard

A comprehensive workspace for creating production-quality AQA GCSE/A Level Psychology lesson modules. This repo contains templates, standards, and reference implementations for scaling lesson creation.

---

## � Authoritative Content Sources

**CRITICAL**: All lesson modules MUST use content from these official AQA Psychology textbooks located in `Textbooks/`:

- **Year 1 & AS Level**: `AQA Year 1 textbook work.txt`
- **Year 2 (A Level)**: `AQA Psychology for A Level Year 2 Student Book- 2nd Edition -- Cara Flanagan, Matt Jarvis and Rob Liddle -- ( WeLib.org ).pdf`

These textbooks are the **ONLY approved sources** for:
- ✅ Psychological concepts, theories, and definitions
- ✅ Research studies, methodologies, and findings
- ✅ Evaluation criteria (strengths, limitations, alternatives)
- ✅ Exam-style questions and marking guidance
- ✅ Terminology aligned with AQA specifications

**Agents must NOT generate content from general knowledge or external sources without first verifying against these textbooks.**

---

## �📁 Workspace Structure

### 1. **ReferenceModule** - ⭐ START HERE
The gold-standard template combining pedagogical depth with clean architecture.

**What it is:**
- Minimal, focused documentation (no verbosity)
- TypeScript + React with Tailwind CSS
- Reusable component patterns
- 9–10 slide lesson structure
- Theme system for any psychology unit
- Presentation mode support

**Files to review:**
- `README.md` - Overview and quick start
- `LESSON_CREATION_GUIDE.md` - All critical patterns and requirements
- `src/App.tsx` - Main application shell
- `src/components/` - Reusable components

**Use this as your reference template for creating new modules.**

---

### 2. **ExampleModule** - Reference Implementation (Aggression)
A complete, production-ready lesson module demonstrating all standards.

**What it is:**
- Full implementation of 9 lessons on aggression psychology
- Rich pedagogical documentation
- All required components and patterns
- Evidence-based learning progression

**What to review:**
- `DOCUMENTATION_INDEX.md` - Complete navigation guide
- `COMPREHENSIVE_MODULE_CREATION_PROMPT.md` - Detailed requirements
- `LESSON_CREATION_STANDARD.md` - Official standards checklist
- `LESSON_1_TEMPLATE_SHELL.md` - Full code examples

**Use this to understand depth and see real implementation examples.**

---

### 3. **Schizophrenia** - Alternative Reference
A complete module showing clean architecture and minimalist structure.

**What it is:**
- 7 lessons on schizophrenia psychology
- TypeScript implementation
- Compact documentation
- Real-world complexity examples

**What to review:**
- `App.tsx` - Complex application structure
- `components/` - Advanced component patterns
- `AGENT_SETUP_PROMPT.md` - Automation setup

**Use this to see alternative architectural patterns.**

---

## 🎯 Quick Start for Creating a New Module

### Step 1: Understand the Standard
1. Read `ReferenceModule/README.md`
2. Review `ReferenceModule/LESSON_CREATION_GUIDE.md`

### Step 2: Copy ReferenceModule
```bash
cp -r ReferenceModule MyNewModule
cd MyNewModule
```

### Step 3: Customize
Update `package.json`, `metadata.json`, `src/App.tsx`, and `src/constants.ts` for your topic.

### Step 4: Create Lesson Components
For each lesson, create 8 components (see LESSON_CREATION_GUIDE.md).

### Step 5: Test & Deploy
```bash
npm install
npm run dev      # Test locally
npm run build    # Create production build
```

---

## 🔴 Critical Requirements (All Modules)

### ⭐ Understanding Check (Slide 4)
- **5 questions** testing only slides 2–3 content
- **3 scenario + 2 matching** question types
- **Randomized answers** using `useMemo` + `shuffleArray()` (CRITICAL)
- **2–3 sentence feedback** per question
- **Theme color** consistent throughout
- **Presentation mode support** for classroom use

### Do Now Quiz (Slide 1)
- **5 questions** from **previous lessons only**
- Mix of topics and question types
- No new content from current lesson

---

## 📚 Documentation Index

| Document | Location | Purpose |
|----------|----------|---------|
| Gold Standard | `ReferenceModule/README.md` | Start here |
| Lesson Guide | `ReferenceModule/LESSON_CREATION_GUIDE.md` | All patterns & requirements |
| Depth Reference | `ExampleModule/COMPREHENSIVE_MODULE_CREATION_PROMPT.md` | Detailed foundation |
| Standards Check | `ExampleModule/LESSON_CREATION_STANDARD.md` | Verification checklist |
| Code Examples | `ExampleModule/LESSON_1_TEMPLATE_SHELL.md` | Real code patterns |

---

## 📊 Module Status

| Module | Status | Type |
|--------|--------|------|
| ReferenceModule | ⭐ Gold Standard | Template |
| ExampleModule (Aggression) | ✅ Complete | Full Impl. |
| Schizophrenia | ✅ Complete | Alternative Arch. |

---

## 🏆 Gold-Standard Principles

✅ **Learning Science**: Evidence-based progression  
✅ **Assessment Validity**: Randomized answers  
✅ **Consistency**: Same structure across units  
✅ **Quality**: Reusable, clean code  
✅ **Accessibility**: Presentation mode  
✅ **Documentation**: Clear, minimal guidance  
✅ **Scalability**: Rapid module creation  

---

## 🚀 Deployment to Psych-hub

### GitHub Actions Workflow
Each module includes a workflow file for automated deployment:
- **Located**: `.github/workflows/build-and-deploy.yml`
- **Triggers**: Git tags (v1.0.0) or manual dispatch
- **Output**: `module-dist.zip` attached to GitHub release
- **Syncs to Psych-hub** using `displayName` from package.json

### Setup Steps
1. **Add `displayName` to package.json** (CRITICAL—controls module name in Psych-hub)
   ```json
   {
     "name": "my-module",
     "displayName": "My Psychology Topic",
     ...
   }
   ```
2. Ensure no ASCII arrows (`->`) in JSX text—use Unicode `→` instead
3. Verify build completes: `npm run build`
4. Tag and push:
   ```bash
   git tag v1.0.0
   git push origin v1.0.0
   ```

### Prerequisites
- Repository must have `PSYCH_HUB_DEPLOY_TOKEN` secret configured
- `displayName` field in package.json (exact capitalization)
- Build completes without errors
- No JSX syntax errors (use Unicode arrows: →)

See `ReferenceModule/AGENT_SETUP_PROMPT.md` for complete deployment guide.

---

## 🚀 Next Steps

1. **To create a new module**: `cp -r ReferenceModule MyModule` and follow the guide
2. **To understand patterns**: Review `ReferenceModule/src/components/`
3. **To see depth examples**: Study `ExampleModule/LESSON_1_TEMPLATE_SHELL.md`
4. **To test**: `cd ReferenceModule && npm install && npm run dev`
5. **To deploy**: Follow deployment steps above

**Ready to build world-class psychology modules!**