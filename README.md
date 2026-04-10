# Task Manager

A simple full-stack Task Manager app built with React, Zustand, Node.js, and Express.

## Tech Stack

- **Frontend:** React, Zustand, Axios, Tailwind CSS
- **Backend:** Node.js, Express
- **Storage:** In-memory (array)

## Project Structure
   task-manager/
├── frontend/         
└── backend/         

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Rohit-011205/Global_Todo.git
cd task-manager
```

### 2. Run the Backend
```bash
cd backend
npm install
node index.js
```
Server runs on `http://localhost:5000`

### 3. Run the Frontend
```bash
cd frontend
npm install
npm run dev
```
App runs on `http://localhost:5173`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /tasks | Get all tasks |
| POST | /tasks | Create a new task |
| PATCH | /tasks/:id | Toggle task completed |
| DELETE | /tasks/:id | Delete a task |

## Features

- Add tasks with title and description
- Mark tasks as complete / undo
- Delete tasks
- Completed tasks move to bottom automatically
- Loading and error states handled

## Bonus Features Implemented 

- Filter Tasks: Users can toggle between "All""Completed", and "Pending" views.
- Task Descriptions: Added a secondary field for task details beyond the title.

## Assumptions & Trade-offs

- Used in-memory storage instead of a database since the assignment allows it. Tasks reset on server restart.
- Kept the UI minimal and functional as instructed — focus was on clean code structure over visual complexity.
- Used Zustand for state management to keep frontend logic organized and avoid prop drilling.
