# Task Manager Codebase Exploration

## Your Understanding

Through exploring the Node.js CLI Task Manager application, I developed a clear understanding of how the system is structured and how its core features operate.

The application:
- Is a command-line tool
- Allows users to create tasks
- Update their status
- Assign priorities
- Manage tags
- Persist data in a JSON file

---

## Architecture Overview

The system follows a layered structure:

- **CLI Layer** → Handles user interaction and command parsing
- **Business Logic Layer (TaskManager)** → Coordinates application behavior
- **Model Layer** → Defines domain entities such as:
  - `Task`
  - `TaskStatus`
  - `TaskPriority`
- **Storage Layer** → Reads from and writes to `tasks.json`

When a task is marked complete:
1. CLI triggers `updateTaskStatus`
2. The task is retrieved
3. `markAsDone` is called on the Task model
4. Changes are explicitly saved to disk

---

## What I Discovered

- Validation across the system is minimal
- Priority and status values are not strictly enforced at the model level
- The system largely trusts user input
- State mutation happens inside the model (`markAsDone`)
- Persistence does NOT happen automatically
- An explicit `storage.save()` call is required
- Numeric priorities make sorting and comparison easier

---

## Insights

- Responsibilities are clearly separated across layers
- CLI handles input
- TaskManager coordinates logic
- Model manages state
- Storage handles persistence

There is a trade-off between:
- Simplicity
- Defensive programming

The system favors readability over strict validation.

Tracing the data flow strengthened my understanding of how state moves from memory to disk.

---

## Misconceptions

Initially, I assumed:
- Priority and status were validated deeper in the system
- Modifying a task would automatically persist changes

After reviewing the code, I realized:
- Validation is not centralized
- Persistence only happens when `save()` is explicitly called

---

## Architecture Observations

- Clear separation of concerns
- State changes are encapsulated inside the `Task` class
- Persistence is handled separately
- UUIDs ensure unique task identification
- JSON storage keeps the system lightweight but limits scalability

---

## Failure Points

Possible risks include:
- Invalid status or priority values
- Limited error handling around file persistence
- Tasks not properly rehydrated as `Task` instances (which would break methods like `markAsDone`)

---

## Data Flow Diagram (Rough Sketch)
