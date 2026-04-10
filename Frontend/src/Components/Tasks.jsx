    import React, { useEffect } from 'react'
    import { useState } from 'react'
    import useTaskStore from '../Store/taskStore.js'

    const Tasks = () => {
        const { tasks, loading, error, fetchTasks, addTask, completeTask, removeTask } = useTaskStore();

        const [title, setTitle] = useState("");
        const [description, setDescription] = useState("");

        useEffect(() => {
            fetchTasks();
        }, []);

        const addtask = async () => {
            if (title.trim() === "") return console.log("Title cannot be empty");
            await addTask({ title, description });
            setTitle("");
            setDescription("");
        }
        return (
            <div>
                <div className="taskforms">
                    <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Enter task title' />

                    <input type='text' value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Enter task description' />

                    <button onClick={addtask}>Add Task</button>
                </div>

                {loading && <p>Loading tasks...</p>}

                {!loading && tasks.length === 0 && (
                    <p className="empty">No tasks yet. Add one above!</p>
                )}

                {
                    tasks.map((task) => (
                        <div key={task.id} className={`task.completed ? "Completed": ""`} >
                            <h3 className=''>{task.title} </h3>
                            <h4 className=''>{task.description}</h4>

                            <button onClick={() => completeTask(task.id)}>{task.completed ? "Undo" : "Done"}</button>

                            <button onClick={() => removeTask(task.id)}>Delete</button>
                        </div>
                    ))
                }
            </div>
        )
    }

    export default Tasks

