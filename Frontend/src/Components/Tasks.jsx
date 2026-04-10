import React, { useEffect } from 'react'
import { useState } from 'react'
import useTaskStore from '../Store/taskStore.js'

const Tasks = () => {
    const { tasks, loading, error, fetchTasks, addTask, completeTask, removeTask } = useTaskStore();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [filter, setFilter] = useState("all");

    useEffect(() => {
        fetchTasks();
    }, []);

    const addtask = async () => {
        if (title.trim() === "") return console.log("Title cannot be empty");
        await addTask({ title, description });
        setTitle("");
        setDescription("");
    }



    const filterTask = tasks.filter((t) => {
        if (filter === "completed") return t.completed;
        if (filter === "pending") return !t.completed;
        return true;
    })

    return (
        <div>
            <div className="taskforms max-w-md mx-auto mt-10 p-8 bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-800 flex flex-col gap-5">
                <div className="space-y-1">
                    <h2 className="text-2xl font-bold text-white tracking-tight">Create Task</h2>
                    <p className="text-zinc-500 text-sm">Add a new objective to your list.</p>
                </div>

                <div className="space-y-4">
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Task Title"
                        className="w-full bg-zinc-800 border border-zinc-700 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all placeholder:text-zinc-600"
                    />

                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Task Description"
                        rows="3"
                        className="w-full bg-zinc-800 border border-zinc-700 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all placeholder:text-zinc-600 resize-none"
                    />
                </div>

                <button
                    onClick={addtask}
                    className="w-full py-3 px-4 bg-red-600 hover:bg-red-500 disabled:bg-zinc-700 disabled:text-zinc-500 text-white font-bold rounded-xl transition-all duration-200 active:scale-95 shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:shadow-[0_0_20px_rgba(220,38,38,0.5)]"
                >
                    Add Task
                </button>

                <div className="filter_butoon flex gap-2">
                    {["all", "completed", "pending"].map((f) => (
                        <button key={f}
                            onClick={() => setFilter(f)}
                            className={`px-4 py-1.5 rounded-lg text-xs font-medium capitalize transition-all ${filter === f
                                ? "bg-red-600 text-white"
                                : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
                                }`}>
                            {f}
                        </button>
                    ))}
                </div>

            </div>


            <div className="max-w-md mx-auto mt-8 text-center">

                {/* LOADING STATE */}
                {loading && (
                    <div className="py-8">
                        <p className="text-red-500 font-medium animate-pulse text-lg">
                            Loading tasks...
                        </p>
                    </div>
                )}

            </div>
            <div className="main2 space-y-2 max-w-md mx-auto">
                {filterTask.map((task) => (

                    <div
                        key={task.id}
                        className={`flex items-center justify-between gap-4 px-4 py-3 rounded-lg border transition-all duration-300
                    ${task.completed ? "opacity-40 border-green-700" : "border-l-4 border-red-400"}`}
                    >

                        <div className="flex-1 min-w-0">
                            <p className={`text-sm font-medium ${task.completed ? "line-through text-zinc-500" : "text-white"}`}>
                                {task.title}
                            </p>
                            {task.description && (
                                <p className="text-xs text-zinc-500 mt-0.5">{task.description}</p>
                            )}
                        </div>

                        <div className="flex gap-2 shrink-0">
                            <button
                                onClick={() => completeTask(task.id)}
                                className="text-xs px-3 py-1.5 rounded border border-zinc-700 text-zinc-300 hover:border-zinc-500 transition-colors"
                            >
                                {task.completed ? "Undo" : "Mark as Done"}
                            </button>


                            <button
                                onClick={() => removeTask(task.id)}
                                className="text-xs px-3 py-1.5 rounded border border-zinc-700 text-red-500 hover:border-red-500 transition-colors"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Tasks

