# Understanding What to Change with AI

## Final Submission Document

------------------------------------------------------------------------

# Overview

In this exercise, I practiced using AI to analyze and improve different
types of code. The goal was not to run the code, but to understand what
could be improved and reflect on what I learned.

I worked with three examples:

1.  Java -- Code Readability Improvement\
2.  Python -- Function Refactoring\
3.  JavaScript -- Code Duplication Detection

For each example, I used a specific prompting strategy and compared the
AI's suggestions with my own thoughts.

------------------------------------------------------------------------

# Exercise 1: Code Readability Improvement (Java)

## What I Did

I used the "Code Readability Improvement" prompt template and specified
that the code was Java with standard naming conventions.

The AI helped identify:

-   Unclear variable names like `U`, `a`, `f`, `un`, `pw`, and `em`
-   Poor method naming
-   Lack of meaningful structure
-   Inconsistent readability

## What the AI Suggested

-   Renaming classes and variables to meaningful names (e.g.,
    `UserManager` instead of `UserMgr`)
-   Renaming methods to clearly describe their purpose
-   Improving formatting for clarity
-   Separating validation logic from database logic

## What I Learned

I realized how much naming affects readability. At first, I understood
what the code was doing, but it took effort. After renaming things
properly, the code became much easier to follow.

The AI pointed out how unclear short names can be for team members. I
also learned that mixing validation and database logic makes code harder
to maintain.

------------------------------------------------------------------------

# Exercise 2: Function Refactoring (Python)

## What I Did

I used the "Function Refactoring" prompt template. The function was
processing orders, updating inventory, applying discounts, calculating
shipping, and tracking revenue --- all in one place.

## What the AI Identified

The AI pointed out that the function had too many responsibilities:

-   Validating orders
-   Checking inventory
-   Checking customers
-   Calculating pricing
-   Applying discounts
-   Calculating shipping and tax
-   Updating inventory
-   Tracking revenue

## Suggested Improvements

The AI suggested breaking the function into smaller functions such as:

-   validate_order()
-   calculate_price()
-   apply_discount()
-   calculate_shipping()
-   calculate_tax()

This would make the code easier to read and maintain.

## What I Learned

I learned that even if code works, it can still be improved. Large
functions are harder to understand and test. Breaking code into smaller
pieces makes it cleaner and easier to manage.

I also realized that I usually focus on "does it work?" instead of "is
it well organized?"

------------------------------------------------------------------------

# Exercise 3: Code Duplication Detection (JavaScript)

## What I Did

I used the "Code Duplication Detection" prompt template to analyze
repeated patterns in the JavaScript code.

The function calculated averages and highest values for age, income, and
score using very similar loops.

## What the AI Identified

The AI pointed out repeated patterns:

-   Three loops calculating averages
-   Three loops finding highest values
-   Very similar logic repeated for different properties

## Suggested Improvements

The AI suggested:

-   Creating helper functions for calculating averages
-   Creating helper functions for finding highest values
-   Using reusable logic instead of copying and pasting loops

## What I Learned

I learned that repeated code increases the risk of mistakes. If I needed
to change the logic, I would have to change it in multiple places.

By consolidating repeated patterns, the code becomes shorter and easier
to maintain.

------------------------------------------------------------------------

# Reflection Questions

## Which prompting strategy was most useful? Why?

The Function Refactoring strategy was the most useful to me. It helped
me see how much responsibility one function can hold and how breaking it
down makes everything clearer.

## What improvements did the AI suggest that I might not have thought of?

The AI highlighted structural improvements that I would normally
overlook, such as separating responsibilities and creating helper
functions. It also pointed out naming problems that I had ignored
because I understood the code myself.

## Were there any suggestions you disagreed with?

Some suggestions felt slightly over-structured for small examples. In
very small projects, too many small functions might feel unnecessary.
However, I understand that in real production systems, structure matters
more.

## How would you adapt these prompts for your own codebase?

I would include more context about the system and team standards. For
example, I would mention the company's naming rules, architecture style,
and whether performance is important.

## What safeguards would you use before applying AI refactoring in production?

-   Review all suggested changes carefully
-   Run automated tests
-   Get code review from teammates
-   Apply changes gradually instead of all at once

I learned that AI is helpful for analysis and ideas, but final decisions
should still be reviewed by humans.

------------------------------------------------------------------------

# Final Thoughts

This exercise helped me understand how AI can assist in improving code
quality. Instead of just generating code, AI can act as a thinking
partner.

I now pay more attention to:

-   Naming clarity
-   Function responsibilities
-   Code duplication
-   Overall structure

This experience showed me that writing code is not just about making it
work, but also about making it understandable for others.
