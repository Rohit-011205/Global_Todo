import express from 'express';
const router = express.Router();

let tasks = [];
let nextid = 1;

router.get("/tasks", (req, res) => {
    res.json(tasks);
})

router.post("/tasks", (req, res) => {

    const title = req.body.title;

    if (!title || title.trim() === "") {
        return res.status(400).json({ message: "Title is required" });
    }
    
    const description = req.body.description;

    const newtask = {
        id: nextid++,
        title: title,
        description: description,
        completed: false,
        createdAt: new Date(),
    }

    tasks.push(newtask);
    res.json(newtask);

    console.log(tasks);
})

router.patch("/tasks/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const task = tasks.find(t => t.id === id);

    if (!task) {
        return res.status(404).json({ message: "Task not found" });
    }

    if (task.completed === false) {
        task.completed = true;
        return res.json(task);
    }
    if (task.completed === true) {
        task.completed = false;
        return res.json(task);
    }

    res.json(task);
})

router.delete("/tasks/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const task = tasks.findIndex(t => t.id === id);

    if (!task) {
        return res.status(404).json({ message: "Task not found" });
    }

    const index = tasks.find(t => t.id === id);

    tasks.splice(index, 1);
    res.json({ message: "Task deleted successfully" });
})


export default router;