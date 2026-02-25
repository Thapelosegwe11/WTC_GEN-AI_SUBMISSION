# Prompt 1: Comprehensive Documentation

## Function Name

`parse_task_from_text`

---

## Description

Parses a natural language task description string and extracts structured task data such as:

- Title  
- Due date  
- Priority  
- Status  

---

## Parameters

- `text` (*str*):  
  The raw user input describing the task.

---

## Returns

- `dict`: A dictionary containing:
  - `title` (*str*)
  - `due_date` (*datetime | None*)
  - `priority` (*str*)
  - `status` (*str*)

---

## Raises

- `ValueError`:  
  If input text is empty or invalid.

---

## Example

```python
task = parse_task_from_text("Submit assignment tomorrow high priority")