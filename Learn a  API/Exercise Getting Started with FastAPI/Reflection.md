# FastAPI Learning Exercise  

## Overview  

This project demonstrates my understanding of FastAPI fundamentals, API structure, request validation, and CRUD operations.  
I progressed from a simple Hello World API to a structured To-Do List management API using proper project architecture.

---

# Part 1: FastAPI Fundamentals  

## What is FastAPI?

FastAPI is a modern Python web framework used to build APIs quickly and efficiently.  
It is based on standard Python type hints and automatically generates interactive API documentation.

## How it compares to Flask and Django

- **Flask** – Lightweight and flexible, but requires more manual setup.
- **Django** – Full-featured framework with many built-in tools.
- **FastAPI** – High performance, automatic documentation, and strong validation using Pydantic.

## Key Advantages

- Automatic interactive documentation (`/docs`)
- Built-in validation using Pydantic
- High performance (built on Starlette and Pydantic)
- Clean, modern structure

---

# Part 2: Basic FastAPI Application  

## main.py (Hello World)

```python
from fastapi import FastAPI

app = FastAPI(
    title="My First FastAPI App",
    description="A simple API built with FastAPI",
    version="0.1.0"
)

@app.get("/")
async def root():
    return {"message": "Hello World from FastAPI!"}


    pip install fastapi uvicorn
uvicorn main:app --reload


## Installation #

pip install fastapi uvicorn


## Run the App ##
uvicorn app.main:app --reload


## Open Documentation ##

Visit:

http://127.0.0.1:8000/docs