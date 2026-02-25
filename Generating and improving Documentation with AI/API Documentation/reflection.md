# Product API Documentation Reflection

## 1. Hardest Parts to Document

The trickiest parts were explaining all the different ways users could filter and sort products.  
There were many optional query parameters, and I had to make sure each one was clearly explained.

It was also a bit challenging to describe the different error responses properly — especially the difference between:
- When a product ID format is invalid (400 error)
- When the product does not exist (404 error)

Understanding and documenting those differences clearly took extra attention.

---

## 2. How I Improved the Prompts

I realized that being specific in my prompts gave better results.

For example:
- I clearly asked for status codes and error messages.
- I requested example requests and responses.
- I specified the exact documentation format I wanted (like OpenAPI).

When something was missing, I adjusted the prompt to be more detailed.  
The clearer the instruction, the better the output.

---

## 3. Most Effective Documentation Format

For presentation purposes, PDF format was easy to read and share.

However, the OpenAPI (Swagger) format was the most useful for development because:
- It can be used with tools like Swagger UI.
- It provides a structured and standardized format.
- It helps both frontend and backend developers stay aligned.

Markdown is useful for GitHub repositories, but OpenAPI felt more powerful for actual API integration.

---

## 4. How I Would Use This in My Development Workflow

Going forward, I would:

1. Write endpoint code.
2. Immediately generate clear documentation for it.
3. Convert it into a structured format like OpenAPI.
4. Create a developer-friendly guide for easier usage.

This approach:
- Saves time
- Improves clarity
- Reduces miscommunication between team members
- Makes APIs easier to maintain and scale

Overall, this exercise helped me understand the importance of documenting APIs clearly and consistently.