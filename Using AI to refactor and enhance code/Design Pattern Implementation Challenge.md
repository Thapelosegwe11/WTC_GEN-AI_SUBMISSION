# Design Pattern Implementation Challenge 

## 1. Overview

In this exercise, I improved a shipping cost calculator that had many `if/else` statements for different shipping methods (standard, express, overnight).

The code worked, but it was hard to maintain and extend because all pricing logic was inside one large function.

---

## 2. Pattern Chosen: Strategy Pattern

I chose the **Strategy Pattern** because:

- The shipping cost changes based on the shipping method
- Each method has its own pricing rules
- The original code had many conditional statements
- Adding new shipping methods would require modifying the same function

The Strategy Pattern allows each shipping method to have its own class with its own pricing logic.

---

## 3. What I Changed

- Created separate classes for:
  - StandardShipping
  - ExpressShipping
  - OvernightShipping
- Each class contains its own `calculate()` method
- Created a `ShippingCostCalculator` class that uses one strategy at a time
- Removed large `if/else` blocks from the main logic

Now the system selects a shipping strategy instead of checking many conditions.

---

## 4. Benefits of This Pattern

- Code is easier to read
- Shipping methods are separated clearly
- New shipping methods can be added without changing existing code
- Follows good design principles (Open/Closed Principle)

---

## 5. How I Verified It Works

I tested the refactored version using the same examples as the original code:

- Standard shipping to USA
- Express shipping to Canada
- Overnight shipping rules
- Dimensional surcharges

The results matched the original output, which means the behavior was preserved.

---

## 6. Conclusion

Using the Strategy Pattern improved the structure of the code. 

Instead of having one big function with many conditions, the logic is now separated into smaller, focused classes. This makes the system easier to maintain and extend in the future.