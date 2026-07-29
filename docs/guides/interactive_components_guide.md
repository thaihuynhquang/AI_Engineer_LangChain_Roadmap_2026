# PRODUCT REQUIREMENT DOCUMENT (PRD): INTERACTIVE UI COMPONENTS & USER FLOW SPECIFICATIONS

This document serves as the **Product Requirement Document (PRD)** and User Interaction Specification for all interactive features within the **AI Engineer Roadmap & Focus Tracker** application.

It is designed to provide AI Agents and developers with explicit functional requirements, state contracts, user interaction flows, and acceptance criteria necessary for implementing or extending these features.

> [!NOTE]
> This document focuses on Functional Requirements & User Interaction (PRD & UX Specs). For architecture details, directory structures, and code patterns, refer to [architecture_guide.md](./architecture_guide.md) and [project_structure.md](./project_structure.md). For UI design standards, design tokens, and SVG icon guidelines, refer to [ui_system_design_guide.md](./ui_system_design_guide.md).

---

## 1. Purpose & Interactive Design Principles

1. **Instant Reactive Feedback**: All user interactions (Checking tasks, switching tabs, starting timers, bookmarking resources, toggling themes) must immediately reflect on the UI with zero latency and zero page reloads.
2. **State-Driven Persistence**: Every interactive state change must instantly update the global state store and automatically persist to client-side `localStorage`.
3. **Weighted Progress Model**: Overall progress percentage is computed from 2 primary interaction sources:
   - **60% Weight**: Completing practical tasks (Deliverable Tasks).
   - **40% Weight**: Accumulating completed Pomodoro focus sessions (Pomodoro Sessions).

---

## 2. Global Features & Navigation Bar Specifications (PRD-01)

### 2.1. Theme Switcher (Dark/Light Mode)
- **User Story**: As a learner, I want to toggle between Dark and Light themes so I can study comfortably under different lighting conditions.
- **UI Component**: `Theme Toggle Component` located on the Header bar.
- **Trigger**: User clicks the Theme Toggle Button.
- **Functional Requirements & Flow**:
  1. Retrieve current `theme` from `State Store` (`'dark'` or `'light'`).
  2. Toggle theme value to the opposite state.
  3. Apply `data-theme` attribute to the root `<html>` element.
  4. Swap SVG icon (Sun SVG icon for Dark mode, Moon SVG icon for Light mode).
  5. Persist new theme preference in `localStorage`.
- **Acceptance Criteria (AC)**:
  - [ ] Theme state persists accurately across browser reloads (F5).
  - [ ] CSS Custom Properties transition smoothly between Dark and Light themes.

### 2.2. Export Backup
- **User Story**: As a learner, I want to export my progress data and Pomodoro history into a backup file to keep it safe.
- **UI Component**: `Export Action Component` on the Header bar.
- **Trigger**: User clicks the Export button.
- **Functional Requirements & Flow**:
  1. Read current `AppState` from `State Store` and format into a JSON string.
  2. Create a downloadable Blob object with filename format: `ai-engineer-roadmap-backup-YYYY-MM-DD.json`.
  3. Automatically trigger browser download.
  4. Display success toast notification.
- **Acceptance Criteria (AC)**:
  - [ ] Downloaded `.json` file contains valid state fields (`checked`, `resourceFlags`, `activeTab`, `theme`, `pomodoroSettings`, `pomodoroSessions`).

### 2.3. Import Backup
- **User Story**: As a learner, I want to import a JSON backup file to restore my study progress when changing devices or browsers.
- **UI Component**: `Import Action Component` on the Header bar.
- **Trigger**: User clicks the Import button.
- **Functional Requirements & Flow**:
  1. Display OS file picker (accepting `.json` only).
  2. Read file content and validate JSON schema structure.
  3. **If valid**: Restore data into `State Store`, update theme attribute, write to `localStorage`, trigger full UI re-render, and show success toast.
  4. **If invalid/corrupted**: Catch error, display error toast, and keep current state intact without crashing the application.
- **Acceptance Criteria (AC)**:
  - [ ] Corrupted or invalid JSON files are rejected cleanly without breaking application execution.

### 2.4. Progress Reset
- **User Story**: As a learner, I want to clear all progress to restart the roadmap from scratch.
- **UI Component**: `Reset Action Component` on the Header bar.
- **Trigger**: User clicks the Reset button.
- **Functional Requirements & Flow**:
  1. Display confirmation dialog to prevent accidental triggers.
  2. If user selects **Confirm**: Clear checked tasks, reset resource bookmarks, wipe Pomodoro session history, restore default timer settings (`25/5`), save to `localStorage`, and reset UI progress to 0%.
- **Acceptance Criteria (AC)**:
  - [ ] Progress percentage badges on Navigation Bar and Dashboard instantly return to 0%.

### 2.5. Hash Router & Dynamic Navigation Badge
- **User Story**: As a learner, I want to quickly navigate between views and view my overall progress percentage on the navigation bar.
- **UI Component**: `Navigation Bar Component`.
- **Trigger**: User clicks tab links or uses browser Back/Forward navigation buttons.
- **Functional Requirements & Flow**:
  1. Update URL Hash using format `#/view-name` (`dashboard`, `roadmap`, `schedule`, `resources`, `techstack`, `quitcriteria`).
  2. Toggle active class on selected tab link and toggle visibility of matching view containers.
  3. **Navigation Badge (`#badge-overall-pct`)**: Displayed on Dashboard tab, automatically computes and renders overall weighted progress (`Deliverables 60% + Pomodoros 40%`) whenever state changes.
- **Acceptance Criteria (AC)**:
  - [ ] Accessing a direct URL Hash (e.g. `#/quitcriteria`) activates and displays the correct view tab.

---

## 3. Dashboard View Specifications (PRD-02)

### 3.1. Quick Finish Next Task
- **User Story**: As a learner, I want to quickly complete my next task directly from the Dashboard home without searching through the roadmap.
- **UI Component**: `Dashboard View Component` ("Next Recommended Task" card).
- **Trigger**: User clicks **"Mark Task Complete"** button (containing check SVG icon).
- **Functional Requirements & Flow**:
  1. Progress calculation module (`Progress Engine Module`) scans 11 Master Modules for the first incomplete deliverable task.
  2. Render task title and module details alongside a action button bound with `data-task-id`.
  3. Upon click, invoke `toggleChecked(taskId)` in `State Store`.
  4. Dashboard automatically updates to recommend the subsequent task or displays a 100% completion state.
- **Acceptance Criteria (AC)**:
  - [ ] Clicking the button immediately updates task completion state and recalculates overall progress %.

---

## 4. Roadmap Sprints View Specifications (PRD-03)

### 4.1. Deliverables Checklist
- **User Story**: As a learner, I want to check off practical deliverables when finishing code exercises to record my progress.
- **UI Component**: `Roadmap View Component` (Task list within 11 Master Modules).
- **Trigger**: User clicks a task checkbox.
- **Functional Requirements & Flow**:
  1. Each checkbox is assigned a unique static `data-task-id`.
  2. On `change` event: Toggle boolean state in `checked[taskId]` within `State Store`.
  3. Apply visual feedback: Add strikethrough styling and background dimming to finished task cards.
  4. Update completed task counter (`completed/total`) on the sprint header.
- **Acceptance Criteria (AC)**:
  - [ ] Checked states persist reliably in `localStorage`.
  - [ ] Deliverable task completion contributes 60% weight to overall progress.

---

## 5. Pomodoro Timer & Schedule Specifications (PRD-04)

### 5.1. Timer Mode Switch
- **UI Component**: `Schedule View Component` (Timer Mode Button Group).
- **Requirements**: Switch between 3 timer modes: **Focus**, **Short Break**, and **Long Break** (with Target and Clock SVG icons).
- **Behavior**: Pause timer if running, load duration corresponding to selected mode settings, update SVG progress ring and browser title.

### 5.2. Preset Selector & Custom Timer Inputs
- **UI Component**: `Schedule View Component` (Preset Buttons & Custom Inputs).
- **Preset Options**:
  - `25/5`: 25 min Focus / 5 min Break.
  - `50/5`: 50 min Deep Focus / 5 min Break.
  - `Custom`: User-defined duration.
- **Custom Input Block**: Visible when `Custom` preset is selected. Enter Focus duration (1-120 min) and Break duration (1-60 min), then click **"Apply"** to save to `pomodoroSettings`.

### 5.3. Task Selector Dropdown
- **UI Component**: `Schedule View Component` (Task Selection Dropdown).
- **Requirements**: Allow linking a specific roadmap task to an upcoming Pomodoro session. When the session finishes, the task info is saved to session history logs.

### 5.4. Countdown Timer & SVG Progress Ring Engine
- **UI Component**: `Schedule View Component` (Digital Countdown & SVG Progress Ring).
- **Control Buttons**:
  - **Start / Pause**: Run or pause 1000ms countdown loop. Swap Play/Pause SVG icons.
  - **Reset**: Reset countdown to initial duration.
  - **Skip**: Advance to next mode (Focus -> Break or Break -> Focus).
- **Display Optimization**:
  - Directly update digital text (`MM:SS`) and SVG ring `strokeDashoffset` every second **without full page re-renders**.
  - Browser tab title updates continuously: `(MM:SS) Focus` or `(MM:SS) Break`.
- **Focus Session Completion Logic**:
  - Play audio chime (if enabled).
  - Trigger Web Notification alert (if permission granted).
  - Automatically append session log to `pomodoroSessions` (Each session contributes towards **40% weight** of overall progress).
  - Auto-switch to long break after every 4 consecutive focus sessions.

### 5.5. Audio, Notifications & Auto-Break Configuration
- **UI Component**: `Schedule View Component` (Settings Checkboxes).
- **Audio Chime**: Utilizes Web Audio API sound synthesis (no static mp3 files required).
- **Browser Notifications**: Requests permission via `Notification.requestPermission()`. If denied, automatically uncheck box and display warning toast.
- **Auto-Break**: Automatically starts break timer as soon as focus countdown finishes.

### 5.6. Session History Log & Delete Actions
- **UI Component**: `Schedule View Component` (Session History List).
- **Requirements**: Display list of recently completed Pomodoro sessions. Allow clicking Delete button (Trash SVG icon) to remove session from history (automatically recalculates Pomodoro score on Dashboard).

---

## 6. Free Resources View Specifications (PRD-05)

### 6.1. Resource Module Filter
- **UI Component**: `Resources View Component` (Filter Button Group).
- **Requirements**: "All Modules" button plus filter buttons for "Module 1" through "Module 11". Clicking a filter limits resource cards to those belonging to the selected module.

### 6.2. Resource Bookmark Star
- **UI Component**: `Resources View Component` (Star SVG button on resource cards).
- **Requirements**: Toggle bookmark state stored in `resourceFlags[resourceId]`. Swap icon between SVG Star Outline (`starOutline`) and SVG Solid Star (`starFilled`).

### 6.3. External Link Opener
- **UI Component**: `Resources View Component` (Open Link button with External Link SVG icon).
- **Requirements**: Open resource link safely in a new browser tab with `target="_blank" rel="noopener noreferrer"`.

---

## 7. Quit Criteria & Decision Matrix Specifications (PRD-06)

### 7.1. 4-Step Daily Protocol Ribbon
- **User Story**: As a learner, I want to follow a daily 4-step protocol so I can recognize sunk cost traps early and execute timely pivots.
- **UI Component**: `Quit Criteria View Component` (`.stepper-ribbon-card`).
- **Functional Flow**:
  1. Render 4 step blocks (`.ribbon-step` 1 to 4): (1) Nhận Diện, (2) Đánh Giá Định Mức, (3) Kiểm Tra Trigger, (4) Thực Thi Pivot.
  2. Connect steps with arrow indicators (`.ribbon-arrow`).
  3. Support horizontal scrolling (`overflow-x: auto`) for compact viewport responsiveness.

### 7.2. Decision Matrix Module Cards
- **User Story**: As a learner, I want to review explicit warning triggers and pivot actions for each module so I don't waste time on roadblock issues.
- **UI Component**: `Quit Criteria View Component` (`.quit-matrix-grid`, `.quit-module-card`).
- **Functional Flow**:
  1. Iterate over 11 module decision objects in `QUIT_CRITERIA_DATA.decisionMatrix`.
  2. Display Module Name, Quota Pomodoros badge, and Optional Tag (`.badge-optional-tag` for optional modules like Module 11).
  3. Render Warning Trigger Box (`.quit-box--trigger`) with Amber warning icon and Pivot Action Box (`.quit-box--pivot`) with Corner-up-right action icon.

### 7.3. Real-Time Module Search & Filtering
- **User Story**: As a learner, I want to search across decision cards by module name or issue keyword to quickly locate relevant pivot instructions.
- **UI Component**: `Quit Criteria View Component` (`#quit-search-input`).
- **Trigger**: User types text into the search input field.
- **Functional Requirements & Flow**:
  1. Capture input string, trim whitespace, and convert to lowercase.
  2. Filter `QUIT_CRITERIA_DATA.decisionMatrix` array by checking if `moduleName`, `trigger`, or `pivotAction` contains the query string.
  3. Re-render filtered decision cards inside `#matrix-cards-grid`.
  4. If zero matches found: Display an informative empty state banner (`.quit-empty-state`) prompting the user to adjust search keywords.
- **Acceptance Criteria (AC)**:
  - [ ] Search filtering responds instantaneously on input events without full page reloads.

---

## 8. Acceptance Criteria & Component Interaction Matrix

| PRD Code | Feature | Managing Component / Module | Event | State Contract | Acceptance Criteria (AC) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **PRD-01.1** | Theme Switcher | Theme Toggle Component | `click` | `setThemeState()` | Toggles `data-theme`, updates SVG icon, persists theme. |
| **PRD-01.2** | Export Backup | Export Action Component | `click` | `exportStateJSON()` | Downloads `.json` file containing exact current state. |
| **PRD-01.3** | Import Backup | Import Action Component | `click` | `importState()` | Validates JSON, restores state cleanly, shows toast notification. |
| **PRD-01.4** | Progress Reset | Reset Action Component | `click` | `resetProgress()` | Prompts confirmation, resets progress % and history to 0. |
| **PRD-01.5** | Hash Router | Navigation Bar Component | `hashchange` | `setActiveTabState()` | Syncs URL Hash `#/routeId`, toggles active tab UI, updates badge %. |
| **PRD-02.1** | Quick Finish Task | Dashboard View Component | `click` | `toggleChecked()` | Checks off next recommended task directly on Dashboard. |
| **PRD-03.1** | Task Checkbox | Roadmap View Component | `change` | `toggleChecked()` | Persists completion state (60% weight), applies strikethrough style. |
| **PRD-04.1** | Timer Mode Switch | Schedule View Component | `click` | `switchMode()` | Switches between Focus / Short Break / Long Break modes. |
| **PRD-04.2** | Preset & Custom | Schedule View Component | `click` | `setProfile()` | Saves timer duration configurations to `pomodoroSettings`. |
| **PRD-04.3** | Task Selector | Schedule View Component | `click` / `change` | `selectedTaskId` | Links Task ID to Pomodoro session history log. |
| **PRD-04.4** | Focus Timer Engine | Schedule View Component | `click` / `interval` | `addPomodoroSession()` | Runs 1s countdown, updates SVG ring, adds Pomodoro points (40% weight). |
| **PRD-04.5** | Audio & Notif | Schedule View Component | `click` / `change` | `updatePomodoroSettings()` | Synthesizes chime via Web Audio API & dispatches Web Notification. |
| **PRD-04.6** | Delete Session Log | Schedule View Component | `click` | `removePomodoroSession()` | Removes session from history log, recalculates Dashboard progress %. |
| **PRD-05.1** | Resource Filter | Resources View Component | `click` | `selectedModuleId` | Filters visible resource cards by selected Module (Modules 1–11). |
| **PRD-05.2** | Resource Bookmark | Resources View Component | `click` | `toggleResourceFlag()` | Toggles solid yellow SVG star bookmark on resource card. |
| **PRD-06.1** | 4-Step Protocol | Quit Criteria View Component | render | None (Static UX) | Displays 4-step daily process ribbon connected by arrow steps. |
| **PRD-06.2** | Decision Cards | Quit Criteria View Component | render | None (View render) | Renders 11 module decision cards with quota poms, triggers, and pivot actions. |
| **PRD-06.3** | Real-Time Search | Quit Criteria View Component | `input` | `searchQuery` | Real-time query search filtering across 11 module cards with empty state fallback. |
