# Final Combined Documentation

## Function: `parse_task_from_text`

---

## Overview

Converts free-form task descriptions into structured task objects.

---

## Intent

Bridge user-friendly input and structured application data.

---

## Detailed Behavior

- Validates input  
- Extracts due dates  
- Detects priority  
- Cleans task title  
- Returns structured dictionary  

---

## Edge Cases

- Missing due date → `None`  
- Missing priority → `'normal'`  

---

## Improvements

- Enhanced NLP support  
- Better ambiguity handling  
- Structured logging  