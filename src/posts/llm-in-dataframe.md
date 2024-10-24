---
title: LLM in DataFrame
description: In this blog post, we will explore how to interact with a Large Language Model (LLM) to generate responses based on prompts stored in a Pandas DataFrame.
date: '2024-10-05'
categories:
  - langchain
  - ollama
published: true
---

# Populate DataFrame with LLM Responses

In this blog post, we will explore how to interact with a Large Language Model
(LLM) to generate responses based on prompts stored in a Pandas DataFrame.

## Prerequisites

- Python (3.7 or higher)
- Pandas
- langchain_community package for accessing the LLM (e.g., Ollama)
- colab-xterm for terminal access

## Installing the dependencies

```python
!pip install pandas
!pip install langchain_community
!pip install colab-xterm
```

## Setting up xterm for terminal access

```python
%load_ext colabxterm
%xterm
```

## Installing Ollama

```cmd
curl -fsSL https://ollama.com/install.sh | sh
ollama serve & ollama pull llama3.2:3b
```

## Initialize the Ollama model and create a DataFrame

```python
import pandas as pd
from langchain_community.llms import Ollama

# Initialize the Ollama model
llm = Ollama(model="llama3.2:3b")

# DataFrame with prompts
data = {'Prompt': [ "What is the capital of France?",
                    "What element has the chemical symbol 'O'?",
                    "What planet is known as the Red Planet?",
                    "1+1="]}
df = pd.DataFrame(data)
print(df)
```

|   | Prompt                                    |
| - | ----------------------------------------- |
| 0 | What is the capital of France?            |
| 1 | What element has the chemical symbol 'O'? |
| 2 | What planet is known as the Red Planet?   |
| 3 | 1+1=                                      |

### Function to generate responses using LLM

```python
def generate_response(prompt):
    query = f"Answer in one word: '{prompt}'" 
    response = llm.invoke(query)  # Invoke the LLM with the prompt
    return response

# Apply the function to each prompt and create a new "Response" column
df['Response'] = df['Prompt'].apply(generate_response)

print(df)
```

|   | Prompt                                    | Response |
| - | ----------------------------------------- | -------- |
| 0 | What is the capital of France?            | Paris.   |
| 1 | What element has the chemical symbol 'O'? | Oxygen.  |
| 2 | What planet is known as the Red Planet?   | Mars.    |
| 3 | 1+1=                                      | 2        |
