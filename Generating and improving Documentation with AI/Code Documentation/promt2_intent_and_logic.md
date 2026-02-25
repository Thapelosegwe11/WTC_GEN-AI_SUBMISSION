
---

# 📄 3️⃣ Prompt_2_Intent_and_Logic_Analysis.md

```markdown
# Prompt 2: Intent and Logic Explanation

## High-Level Intent

Transform unstructured natural language task descriptions into structured task data.

---

## Step-by-Step Logic

1. Validate input is not empty.
2. Scan for recognized keywords.
3. Extract and convert date phrases.
4. Detect priority indicators.
5. Assign default values.
6. Return structured dictionary.

---

## Assumptions & Edge Cases

- Assumes English language.
- Ambiguous dates may fail parsing.
- Defaults applied when optional data is missing.

---

## Suggested Improvements

- Use stronger NLP library.
- Improve validation.
- Support multiple languages.