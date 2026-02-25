# Contextual Learning with FastAPI  

## Overview  

This exercise helped me learn FastAPI by comparing it with web frameworks I am already familiar with, such as Flask and Django. Instead of learning FastAPI in isolation, I used contextual comparison to better understand its design, philosophy, and structure.

---

# Part 1: Framework Comparison  

## FastAPI vs Flask  

| Concept | Flask | FastAPI |
|----------|--------|----------|
| Routing | @app.route() | @app.get(), @app.post() |
| Validation | Manual or Flask-WTF | Automatic with Pydantic |
| Documentation | Manual setup | Automatic `/docs` |
| Structure | Flexible, minimal | Structured, type-driven |
| Async Support | Optional | Async-first |

### Key Differences  

- FastAPI uses Python type hints for validation.  
- Flask requires more manual validation and documentation.  
- FastAPI automatically generates interactive API documentation.  
- FastAPI encourages modular structure using routers.  

---

## FastAPI vs Django  

| Concept | Django | FastAPI |
|----------|---------|----------|
| Models | Django ORM Models | Pydantic Models |
| Validation | Forms & Model validation | Automatic via Pydantic |
| Middleware | Built-in middleware system | Dependency Injection |
| Authentication | Built-in auth system | Flexible, dependency-based |

### Translation Table  

- Django Middleware → FastAPI Dependencies  
- Django Views → FastAPI Route Functions  
- Django Forms → Pydantic Models  
- Flask Blueprints → FastAPI Routers  

---

# Part 2: Understanding FastAPI’s Design Choices  

## Why Pydantic?  

FastAPI uses Pydantic for data validation because it works directly with Python type hints. This allows automatic validation and serialization without writing extra code.

## Why Automatic Documentation?  

In many frameworks, documenting APIs requires additional tools. FastAPI automatically generates interactive API documentation at `/docs`, which improves testing and development speed.

## Why Type Hints?  

Type hints improve:
- Code clarity  
- Validation  
- Error detection  
- Developer experience  

They make the API structure explicit and easier to understand.

## Why Async-First?  

FastAPI is built on Starlette, which supports asynchronous programming. This improves performance when handling many concurrent requests.

### Design Philosophy Summary  

FastAPI is designed to be:
- Fast  
- Explicit  
- Type-safe  
- Automatically documented  
- Performance-oriented  

This influences how applications should be structured — clean models, modular routes, and clear dependency usage.

---

# Part 3: Applied Contextual Learning – JWT Authentication  

## JWT Authentication Implementation  

```python
from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from jose import jwt, JWTError
from datetime import datetime, timedelta

SECRET_KEY = "secret"
ALGORITHM = "HS256"

app = FastAPI()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

def create_token(data: dict):
    to_encode = data.copy()
    to_encode.update({"exp": datetime.utcnow() + timedelta(minutes=30)})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

async def get_current_user(token: str = Depends(oauth2_scheme)):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username = payload.get("sub")
        if username is None:
            raise HTTPException(status_code=401)
        return username
    except JWTError:
        raise HTTPException(status_code=401)

@app.get("/protected")
async def protected_route(user: str = Depends(get_current_user)):
    return {"message": f"Hello {user}"}