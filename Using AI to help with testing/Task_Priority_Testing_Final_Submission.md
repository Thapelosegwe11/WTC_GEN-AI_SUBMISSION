# Using AI to Improve My Testing Skills

## Task Priority Algorithm -- Final Submission

------------------------------------------------------------------------

# Part 1: Understanding What to Test

## Exercise 1.1 -- Behavior Analysis

I started by looking at the `calculate_task_score` function and trying
to understand what it actually does before writing any tests.

From my understanding, the function calculates a score for a task based
on:

-   The task's priority (Low, Medium, High, Urgent)
-   The due date (overdue, due today, soon, etc.)
-   The task status (Done or Review lowers the score)
-   Special tags like "blocker" or "critical"
-   Whether the task was updated recently

### Behaviors I Identified

Here are the main behaviors I decided should be tested:

1.  Base score changes depending on priority level.
2.  Overdue tasks get a large score increase.
3.  Tasks due today or soon get extra points.
4.  Completed tasks lose points.
5.  Tasks with important tags gain extra points.
6.  Recently updated tasks gain a small bonus.

### Edge Cases I Identified

-   Task without a due date.
-   Task with no tags.
-   Task with unknown priority.
-   Task updated today vs several days ago.
-   Task that is both overdue and marked as DONE.

------------------------------------------------------------------------

## Exercise 1.2 -- Test Plan

### Test Types

-   Unit tests for:
    -   `calculate_task_score`
    -   `sort_tasks_by_importance`
    -   `get_top_priority_tasks`
-   One integration test for the full workflow.

### Priority of Tests

1.  Basic priority scoring (core behavior).
2.  Due date scoring (time-based logic).
3.  Status impact (DONE and REVIEW).
4.  Tag boosts.
5.  Recently updated boost.
6.  Sorting order correctness.
7.  Top N task limit behavior.

### Expected Outcomes

-   Higher priority tasks should always score higher than lower priority
    tasks (if other factors are equal).
-   Overdue tasks should have a noticeable score boost.
-   DONE tasks should have significantly lower scores.
-   Sorting should return tasks from highest score to lowest.
-   Top N should only return the requested number of tasks.

------------------------------------------------------------------------

# Part 2: Improving a Single Test

## Exercise 2.1 -- First Test (Simple Version)

My first test only checked that a HIGH priority task returned a higher
score than a LOW priority task.

It worked, but it was very basic.

### Improved Version

In the improved test, I:

-   Clearly stated what behavior I was testing.
-   Compared two tasks with controlled values.
-   Made sure I was testing behavior, not internal implementation.
-   Used clear assertions.

This helped me understand that good tests should explain *why* something
is expected, not just check numbers.

------------------------------------------------------------------------

## Exercise 2.2 -- Testing Due Date Logic

For due dates, I focused on:

-   Overdue task
-   Task due today
-   Task due in a few days

I made sure to control the dates so the test would not randomly fail.

I learned that testing time-based logic requires careful setup and
precise expectations.

------------------------------------------------------------------------

# Part 3: Test-Driven Development (TDD)

## Exercise 3.1 -- New Feature

### Feature Added:

Tasks assigned to the current user should receive +12 score boost.

### TDD Process I Followed:

1.  I wrote a failing test first.
2.  I implemented the smallest amount of code needed to pass the test.
3.  I ran tests to confirm they passed.
4.  I reviewed the code for possible cleanup.

This helped me understand that TDD is about writing tests first and
letting tests guide development.

------------------------------------------------------------------------

## Exercise 3.2 -- Fixing a Bug with TDD

There was a bug in how days since update was calculated.

### My Steps:

1.  I wrote a test that exposed the incorrect calculation.
2.  I confirmed the test failed.
3.  I fixed the calculation.
4.  I ran the test again to confirm it passed.
5.  I added a small regression test to prevent it from happening again.

This showed me how TDD can also be used to safely fix bugs.

------------------------------------------------------------------------

# Part 4: Integration Testing

For integration testing, I tested:

-   Multiple tasks with different priorities.
-   Sorting behavior.
-   Getting top 3 tasks from a list.

The integration test confirmed that:

-   Scores are calculated correctly.
-   Tasks are sorted correctly.
-   Only the top N tasks are returned.

This made sure all three functions work properly together.

------------------------------------------------------------------------

# Reflection

Through this exercise, I learned that testing is not just about checking
if code runs. It is about understanding behavior and thinking about edge
cases.

The most challenging part for me was testing time-based logic because it
requires careful setup.

I also learned the difference between testing behavior versus testing
internal details. Good tests focus on what the function should do, not
how it does it.

Practicing TDD changed how I think about coding. Instead of writing
everything at once, I now think in small steps and verify each step with
a test.

Using AI as a guide helped me think more deeply instead of just copying
answers. It pushed me to explain my reasoning and identify things I
missed.

Overall, this exercise helped me understand testing in a more practical
and structured way.
