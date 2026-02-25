# Performance Optimization Report -- Inventory Analysis

## Performance Issue Overview

This program is designed to find all pairs of products whose combined
price falls within a target range.

Typical input size: 5,000 products\
Current performance: Noticeably slow due to nested looping (processing
millions of comparisons)\
Environment: Python 3 (standard interpreter), tested on a standard
development machine

------------------------------------------------------------------------

## Why the Code Is Slow (Simple Explanation)

The program checks every product against every other product.

With 5,000 products, this results in 25,000,000 comparisons (5,000 ×
5,000). This large number of repeated comparisons makes the program
slow.

Additionally, the program checks for duplicate pairs inside the loop,
which adds even more repeated work.

------------------------------------------------------------------------

## Specific Bottlenecks Identified

1.  Nested loops creating O(n²) time complexity.
2.  Duplicate checking using `any()` inside the inner loop.
3.  Repeated comparisons of (A, B) and (B, A).
4.  Sorting results after processing a large dataset.

------------------------------------------------------------------------

## Suggested Optimizations

### 1. Avoid Duplicate Comparisons

Change the inner loop to start from `i + 1` instead of 0:

for i in range(len(products)): for j in range(i + 1, len(products)):

This prevents checking the same pair twice.

------------------------------------------------------------------------

### 2. Remove Expensive Duplicate Check

By structuring loops properly, we eliminate the need for the `any()`
duplicate check, reducing unnecessary list scanning.

------------------------------------------------------------------------

### 3. Consider Early Filtering or Better Data Structures

If the list is sorted by price first, we can stop checking once prices
exceed the target range. This reduces unnecessary comparisons.

------------------------------------------------------------------------

## Performance Concepts Learned

-   **Time Complexity (Big O notation)**\
    Nested loops often result in O(n²) performance.

-   **Quadratic Growth**\
    As input size grows, execution time increases dramatically.

-   **Avoiding Redundant Work**\
    Repeated comparisons and duplicate checks slow programs down.

-   **Algorithm Efficiency Matters More Than Small Code Tweaks**

------------------------------------------------------------------------

## Tools to Measure Performance

-   `time` module for basic timing.
-   `timeit` for more accurate benchmarking.
-   `cProfile` to identify bottlenecks.
-   `line_profiler` for detailed line-by-line analysis.

------------------------------------------------------------------------

## Performance Measurement

Before Optimization: - Large dataset (5,000 products) - Very high number
of comparisons (25 million) - Slow execution time

After Optimization: - Reduced comparisons significantly - Removed
duplicate scanning - Noticeably improved execution speed

------------------------------------------------------------------------

# Reflection Questions

## How did the optimization change your understanding?

It showed how algorithm design affects performance more than small
syntax changes. I better understand how nested loops increase time
complexity.

## What performance improvements did you achieve?

By reducing duplicate checks and unnecessary comparisons, execution time
improved significantly. The improvements justified the code changes.

## What did you learn about performance bottlenecks?

The biggest bottlenecks often come from repeated work inside loops.
Small inefficiencies become large problems with big datasets.

## How would you approach similar issues in the future?

I would first analyze time complexity, then measure performance using
profiling tools before making changes.

## What tools would you use proactively?

I would use `cProfile`, `timeit`, and test with large datasets early in
development to detect inefficiencies before they become major problems.
