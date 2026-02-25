# Algorithm Deconstruction Challenge

## Introduction

This document captures my understanding and reflection on the `parse_task_from_text` function.  
The goal of this exercise was to break down the algorithm, understand how it works step by step, and reflect on what I learned from analyzing it.

---

## Purpose of the Function

The main purpose of the function is to convert free-form text into a structured task object.

Instead of requiring the user to fill out separate fields, the system allows a task to be written in one sentence and automatically extracts:
- Title
- Priority
- Tags
- Due date

---

## How the Algorithm Works

### 1. Default Values
The function assumes:
- The full sentence is the title
- Priority is set to **Medium**
- No tags or due date exist unless specified

### 2. Priority Extraction (`!`)
- Searches for priority markers
- Removes them from the sentence
- Converts them into structured priority values

### 3. Tag Extraction (`@`)
- Detects tags
- Stores them in a list
- Removes them from the title

### 4. Date Extraction (`#`)
- Identifies date markers
- Converts them into actual date values
- Safely ignores invalid dates

### 5. Cleanup and Task Creation
- The remaining cleaned text becomes the final title
- A `Task` object is created using all extracted information

---

## Key Pattern Observed

The algorithm consistently follows this pattern:

**Detect → Remove → Convert → Store**

Recognizing this pattern made the logic much easier to understand.

---

## Reflection

Initially, the function looked complex, especially because of regular expressions and date handling.

After breaking it into sections, I realized:
- The logic itself is straightforward
- The complexity mainly comes from text processing details

---

## How I Would Explain This to a Junior Developer

I would explain that the function allows users to write tasks naturally in one sentence while using simple symbols to add extra meaning.

The algorithm scans the sentence three times:
1. First for priority (`!`)
2. Then for tags (`@`)
3. Finally for dates (`#`)

Each time it:
- Finds the symbol
- Saves the value
- Removes it from the sentence
- Continues scanning

Whatever remains becomes the clean task title.

The most important idea is not the regex itself, but the pattern of extracting and organizing information from text.

---

## Possible Improvements

- Reduce repeated conditional logic
- Split parsing into smaller helper functions
- Improve readability and comments
- Support more flexible natural language date formats

---

## Conclusion

This challenge demonstrated how free-form text can be structured into organized data.

Understanding the repeated pattern behind the algorithm made it much easier to follow and analyze confidently.